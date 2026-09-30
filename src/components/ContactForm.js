import React, { useRef, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import { useLang } from "../i18n/LanguageContext";
import { submitContactMessage } from "../services/contact";

const MESSAGE_MIN = 20;
const SUBJECT_MIN = 3;
const MAX_MESSAGE = 2000;

// A real visitor has to type into the fields, so "no interaction at all and
// submitted almost immediately" is a reliable bot signal without ever
// swallowing a genuine message.
const MIN_FILL_MS = 1200;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const empty = () => ({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function validate(values, t) {
  const errors = {};

  if (!values.name.trim()) errors.name = t.contactForm.nameRequired;
  if (!values.email.trim()) {
    errors.email = t.contactForm.emailRequired;
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = t.contactForm.emailInvalid;
  }
  if (!values.subject.trim()) {
    errors.subject = t.contactForm.subjectRequired;
  } else if (values.subject.trim().length < SUBJECT_MIN) {
    errors.subject = t.contactForm.subjectTooShort;
  }
  if (!values.message.trim()) {
    errors.message = t.contactForm.messageRequired;
  } else if (values.message.trim().length < MESSAGE_MIN) {
    errors.message = t.contactForm.messageTooShort;
  }

  return errors;
}

export default function ContactForm() {
  const { t } = useLang();

  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorKey, setErrorKey] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const mountedAt = useRef(Date.now());
  const firstFieldRef = useRef(null);

  const submitting = status === "submitting";
  const sent = status === "success";

  const setField = (name) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setInteracted(true);

    if (touched) {
      setErrors(validate({ ...values, [name]: value }, t));
    }
  };

  const blurField = () => {
    setTouched(true);
    setErrors(validate(values, t));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setTouched(true);
    const nextErrors = validate(values, t);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      firstFieldRef.current?.focus();
      return;
    }

    // Honeypot filled, or submitted without ever touching a field: look like
    // success so a bot gets no signal, but never send anything.
    if (honeypot || (!interacted && Date.now() - mountedAt.current < MIN_FILL_MS)) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorKey(null);

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      };
      await submitContactMessage(payload);
      setStatus("success");
      setValues(empty());
    } catch (error) {
      setErrorKey(error.code ?? "generic");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorKey(null);
    setValues(empty());
    setErrors({});
    setTouched(false);
    setInteracted(false);
    mountedAt.current = Date.now();
  };

  const notConfigured = errorKey === "not-configured";

  const errorMessage = notConfigured
    ? t.contactForm.errorNotConfigured
    : errorKey === "timeout"
      ? t.contactForm.errorTimeout
      : errorKey === "network"
        ? t.contactForm.errorNetwork
        : errorKey === 429
          ? t.contactForm.errorRateLimited
          : t.contactForm.errorGeneric;

  const remaining = MAX_MESSAGE - values.message.length;

  return (
    <Reveal className="cform">
      <div className="cform__head">
        <span className="eyebrow">{t.contactForm.eyebrow}</span>
        <h2 className="cform__title" id="contact-form-title">
          {t.contactForm.title}
        </h2>
        <p className="cform__sub">{t.contactForm.sub}</p>
      </div>

      {sent ? (
        <div className="cform__alert cform__alert--success" role="status">
          <FiCheckCircle className="cform__alert-icon" aria-hidden="true" />
          <div>
            <p className="cform__alert-title">{t.contactForm.successTitle}</p>
            <p className="cform__alert-text">{t.contactForm.successText}</p>
          </div>
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={reset}
          >
            {t.contactForm.successAnother}
          </button>
        </div>
      ) : (
        <form className="cform__form" onSubmit={handleSubmit} noValidate>
          {status === "error" ? (
            <div
              className={`cform__alert cform__alert--${
                notConfigured ? "notice" : "error"
              }`}
              role={notConfigured ? "status" : "alert"}
            >
              {notConfigured ? (
                <FiInfo className="cform__alert-icon" aria-hidden="true" />
              ) : (
                <FiAlertCircle className="cform__alert-icon" aria-hidden="true" />
              )}
              <div>
                <p className="cform__alert-title">
                  {notConfigured
                    ? t.contactForm.noticeNotConfiguredTitle
                    : t.contactForm.errorTitle}
                </p>
                <p className="cform__alert-text">{errorMessage}</p>
              </div>
            </div>
          ) : null}

          <div className="cform__row">
            <div className="cform__field">
              <label className="cform__label" htmlFor="cf-name">
                {t.contactForm.name}
              </label>
              <input
                ref={firstFieldRef}
                id="cf-name"
                name="name"
                className="cform__input"
                type="text"
                autoComplete="name"
                placeholder={t.contactForm.namePlaceholder}
                value={values.name}
                onChange={setField("name")}
                onBlur={blurField}
                disabled={submitting}
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "cf-name-err" : undefined}
              />
              {errors.name ? (
                <p className="cform__error" id="cf-name-err">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="cform__field">
              <label className="cform__label" htmlFor="cf-email">
                {t.contactForm.email}
              </label>
              <input
                id="cf-email"
                name="email"
                className="cform__input"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={t.contactForm.emailPlaceholder}
                value={values.email}
                onChange={setField("email")}
                onBlur={blurField}
                disabled={submitting}
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "cf-email-err" : undefined}
              />
              {errors.email ? (
                <p className="cform__error" id="cf-email-err">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="cform__field">
            <label className="cform__label" htmlFor="cf-subject">
              {t.contactForm.subject}
            </label>
            <input
              id="cf-subject"
              name="subject"
              className="cform__input"
              type="text"
              placeholder={t.contactForm.subjectPlaceholder}
              value={values.subject}
              onChange={setField("subject")}
              onBlur={blurField}
              disabled={submitting}
              aria-invalid={errors.subject ? "true" : undefined}
              aria-describedby={errors.subject ? "cf-subject-err" : undefined}
            />
            {errors.subject ? (
              <p className="cform__error" id="cf-subject-err">
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div className="cform__field">
            <div className="cform__label-row">
              <label className="cform__label" htmlFor="cf-message">
                {t.contactForm.message}
              </label>
              <span className="cform__counter">{t.contactForm.chars(remaining)}</span>
            </div>
            <textarea
              id="cf-message"
              name="message"
              className="cform__input cform__input--area"
              rows={6}
              maxLength={MAX_MESSAGE}
              placeholder={t.contactForm.messagePlaceholder}
              value={values.message}
              onChange={setField("message")}
              onBlur={blurField}
              disabled={submitting}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "cf-message-err" : undefined}
            />
            {errors.message ? (
              <p className="cform__error" id="cf-message-err">
                {errors.message}
              </p>
            ) : null}
          </div>

          {/* Honeypot: hidden from people, irresistible to bots. */}
          <div className="cform__hp" aria-hidden="true">
            <label htmlFor="cf-company">Company</label>
            <input
              id="cf-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>

          <div className="cform__actions">
            <button
              type="submit"
              className="btn btn--primary cform__submit"
              disabled={submitting}
            >
              {submitting ? (
                <span className="cform__spinner" aria-hidden="true" />
              ) : (
                <FiSend aria-hidden="true" />
              )}
              <span>
                {submitting ? t.contactForm.sending : t.contactForm.submit}
              </span>
            </button>
          </div>
        </form>
      )}
    </Reveal>
  );
}
