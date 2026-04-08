function Hero({ t }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Background blobs */}
      <div className="blob" style={{ width: 480, height: 480, background: "rgba(249,115,22,0.08)", top: -120, right: -120 }} />
      <div className="blob" style={{ width: 360, height: 360, background: "rgba(139,92,246,0.07)", bottom: -60, left: -80 }} />
      <div className="blob" style={{ width: 200, height: 200, background: "rgba(249,115,22,0.06)", top: "40%", left: "45%" }} />

      <div
        className="hero-inner"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left — text */}
        <div style={{ maxWidth: 560 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent-soft)",
              border: "1px solid rgba(249,115,22,0.2)",
              padding: "6px 14px",
              borderRadius: 30,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8, height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                animation: "pulse-dot 2s infinite",
              }}
            />
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)" }}>
              {t.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}
          >
            Anitoob
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Chat</span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                fontFamily: "var(--font-body)",
                fontStyle: "normal",
                fontWeight: 500,
                color: "var(--fg2)",
                letterSpacing: "-0.01em",
                marginTop: 12,
              }}
            >
              {t.hero.tagline}
            </span>
          </h1>

          <p
            style={{
              color: "var(--fg2)",
              lineHeight: 1.75,
              fontSize: "1rem",
              marginBottom: 36,
              maxWidth: 460,
            }}
          >
            {t.hero.sub}
          </p>

          <div
            className="hero-btns"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a
              href="https://t.me/ANITOOBuzRASMIY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.hero.joinBtn} →
            </a>
            <button className="btn-outline" onClick={() => scrollTo("about")}>
              {t.hero.learnBtn}
            </button>
          </div>
        </div>

        {/* Right — floating orb */}
        <div style={{ flexShrink: 0, position: "relative", animation: "float 5s ease-in-out infinite" }}>
          {/* Outer ring */}
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "2px dashed rgba(249,115,22,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "spin-slow 18s linear infinite",
              position: "relative",
            }}
          >
            {/* Dot on ring */}
            <div
              style={{
                position: "absolute",
                top: -5, left: "50%",
                transform: "translateX(-50%)",
                width: 10, height: 10,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
          </div>

          {/* Inner circle */}
          <div
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fff7ed 0%, #fce7f3 50%, #ede9fe 100%)",
              border: "1px solid rgba(249,115,22,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(249,115,22,0.15)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "3.2rem",
                color: "var(--accent)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              AC
            </span>
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: 10, right: -20,
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "8px 14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "float 4s ease-in-out infinite 0.5s",
            }}
          >
            <span style={{ fontSize: "1rem" }}>✈️</span>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--fg)" }}>Telegram</span>
          </div>

          <div
            style={{
              position: "absolute",
              top: 20, right: -30,
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "8px 14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "float 3.5s ease-in-out infinite 1s",
            }}
          >
            <span style={{ fontSize: "1rem" }}>🎌</span>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--fg)" }}>Anime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
