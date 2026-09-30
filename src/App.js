import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";

function Shell() {
  const { t } = useLang();

  return (
    <Router>
      <a className="skip-link" href="#main">
        {t.ui.skipToContent}
      </a>

      <Navbar />
      <ScrollManager />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Navigate to="/projects" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  );
}

export default App;
