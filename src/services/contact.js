const ENDPOINT = "https://formspree.io/f";

/**
 * The Formspree form ID is a public identifier, not a secret: it is meant to be
 * embedded in a static front-end, exactly like a <form action>. Nothing
 * sensitive is shipped to the browser, and the destination address is decided
 * in the Formspree dashboard, so a visitor cannot redirect the mail elsewhere.
 *
 * Set it in `.env` (see `.env.example`) as REACT_APP_FORMSPREE_FORM_ID.
 */
export const FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID || "";

export const isFormConfigured = Boolean(FORM_ID);

const TIMEOUT_MS = 15000;

export class ContactError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "ContactError";
    this.code = code;
  }
}

/**
 * Posts one message. Resolves with the Formspree reference on success and
 * throws a ContactError with a `code` the UI can map to a translated message.
 */
export async function submitContactMessage({ name, email, subject, message }) {
  if (!isFormConfigured) {
    throw new ContactError("form-not-configured", "not-configured");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${ENDPOINT}/${FORM_ID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
      signal: controller.signal,
    });

    if (!response.ok) {
      let detail = "";
      try {
        const data = await response.json();
        detail = Array.isArray(data?.errors) ? data.errors[0]?.message : "";
      } catch {
        // Non-JSON error body: keep the generic message.
      }
      throw new ContactError(detail, response.status);
    }

    const data = await response.json().catch(() => ({}));
    return { id: data?.id || null };
  } catch (error) {
    if (error instanceof ContactError) throw error;
    if (error.name === "AbortError") {
      throw new ContactError("timeout", "timeout");
    }
    throw new ContactError("network", "network");
  } finally {
    clearTimeout(timer);
  }
}
