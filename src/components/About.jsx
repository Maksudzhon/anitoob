import AnimSection from "./AnimSection";

function About({ t }) {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title" style={{ marginBottom: 52 }}>
            {t.about.title}<span className="dot" />
          </h2>
        </AnimSection>

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "start" }}
        >
          {/* Text */}
          <AnimSection delay={0}>
            <p style={{ color: "var(--fg2)", lineHeight: 1.82, marginBottom: 16, fontSize: "0.97rem" }}>
              {t.about.p1}
            </p>
            <p style={{ color: "var(--fg2)", lineHeight: 1.82, marginBottom: 16, fontSize: "0.97rem" }}>
              {t.about.p2}
            </p>
            <p style={{ color: "var(--fg2)", lineHeight: 1.82, fontSize: "0.97rem" }}>
              {t.about.p3}
            </p>

            {/* Join CTA */}
            <a
              href="https://t.me/ANITOOBuzRASMIY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 28, display: "inline-flex" }}
            >
              Join Now →
            </a>
          </AnimSection>

          {/* Stats grid */}
          <AnimSection delay={100}>
            <div
              className="stats-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
            >
              {t.about.stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 5,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "var(--fg)",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div
              style={{
                marginTop: 18,
                padding: "18px 22px",
                background: "var(--accent-soft)",
                borderRadius: 14,
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <p style={{ fontSize: "0.88rem", color: "var(--accent)", fontWeight: 600, lineHeight: 1.6, fontStyle: "italic" }}>
                🎌 "Anime is not just a cartoon — it's a lifestyle."
              </p>
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

export default About;
