import AnimSection from "./AnimSection";

function Links({ t }) {
  return (
    <section id="links" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <AnimSection>
          <p className="section-label">{t.links.label}</p>
          <h2 className="section-title" style={{ marginBottom: 10 }}>
            {t.links.title}<span className="dot" />
          </h2>
          <p style={{ color: "var(--fg2)", marginBottom: 52, fontSize: "0.97rem" }}>
            {t.links.sub}
          </p>
        </AnimSection>

        <div
          className="links-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {t.links.items.map((item, i) => (
            <AnimSection key={item.name} delay={i * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
                style={{ textDecoration: "none" }}
              >
                {/* Left */}
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 14,
                      background: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--fg)",
                        marginBottom: 4,
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--fg2)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>

                {/* Right CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: item.accent,
                      background: item.color,
                      padding: "6px 14px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.cta}
                  </span>
                  <span className="link-card-arrow">↗</span>
                </div>
              </a>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Links;
