import { useState } from "react";

function Navbar({ t, lang, setLang, active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <span className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Anitoob<span>Chat</span>
        </span>

        {/* Desktop links */}
        <div className="nav-links">
          {["about", "links", "contact"].map((id) => (
            <span
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {t.nav[id]}
            </span>
          ))}
        </div>

        {/* Lang + hamburger */}
        <div className="nav-right">
          {["en", "uz", "ru"].map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? "active" : ""}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </div>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {["about", "links", "contact"].map((id) => (
            <span
              key={id}
              className="nav-link"
              style={{ fontSize: "1rem" }}
              onClick={() => scrollTo(id)}
            >
              {t.nav[id]}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
