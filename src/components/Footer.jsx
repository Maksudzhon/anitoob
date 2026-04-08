function Footer({ t }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        maxWidth: 1060,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "1.05rem",
          color: "var(--fg)",
        }}
      >
        Anitoob<span style={{ color: "var(--accent)" }}>Chat</span>
      </span>
      <p style={{ color: "var(--muted)", fontSize: "0.83rem" }}>{t.footer.copy}</p>
      <div style={{ display: "flex", gap: 12 }}>
        {[
          { icon: "✈️", href: "https://t.me/ANITOOBuzRASMIY" },
          { icon: "📸", href: "https://instagram.com/ashiro_tt" },
        ].map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 36, height: 36,
              borderRadius: 9,
              border: "1.5px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
