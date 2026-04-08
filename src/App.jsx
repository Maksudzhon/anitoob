import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import translations from "./data/translations";
import "./styles/global.css";

function App() {
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("about");

  const t = translations[lang];

  useEffect(() => {
    const sections = ["about", "links", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} active={active} />
      <Hero t={t} />
      <About t={t} />
      <Links t={t} />
      <Contact t={t} />
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <Footer t={t} />
      </footer>
    </>
  );
}

export default App;
