import { useState } from "react";
import AnimSection from "./AnimSection";

function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xbdzlgjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setSending(false);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title" style={{ marginBottom: 10 }}>
            {t.contact.title}<span className="dot" />
          </h2>
          <p style={{ color: "var(--fg2)", marginBottom: 52, fontSize: "0.97rem" }}>
            {t.contact.sub}
          </p>
        </AnimSection>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40 }}
        >
          {/* Info panel */}
          <AnimSection delay={0}>
            <div className="card" style={{ height: "100%" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  marginBottom: 24,
                }}
              >
                AnitoobChat
              </h3>

              {[
                { icon: "✈️", label: "Telegram", val: "@anitoobchat", href: "https://t.me/ANITOOBuzRASMIY" },
                { icon: "📸", label: "Instagram", val: "@anitoobchat", href: "https://instagram.com/ashiro_tt" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--fg)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      {item.val}
                    </a>
                  </div>
                </div>
              ))}

              {/* Accent box */}
              <div
                style={{
                  marginTop: 22,
                  padding: "16px",
                  background: "var(--accent-soft)",
                  borderRadius: 12,
                }}
              >
                <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600, lineHeight: 1.5 }}>
                  🎌 Join our Telegram for the fastest response!
                </p>
              </div>
            </div>
          </AnimSection>

          {/* Form */}
          <AnimSection delay={100}>
            <div className="card">
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input
                  className="input-field"
                  name="name"
                  placeholder={t.contact.name}
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  className="input-field"
                  name="email"
                  type="email"
                  placeholder={t.contact.email}
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  className="input-field"
                  name="message"
                  rows={5}
                  placeholder={t.contact.message}
                  value={form.message}
                  onChange={handleChange}
                />

                {status === "success" && (
                  <p style={{ color: "#16a34a", fontSize: "0.88rem", fontWeight: 600 }}>
                    ✓ {t.contact.success}
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "#dc2626", fontSize: "0.88rem", fontWeight: 600 }}>
                    ✕ {t.contact.error}
                  </p>
                )}

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={sending}
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </div>
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;
