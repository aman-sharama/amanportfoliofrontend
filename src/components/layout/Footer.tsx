export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontWeight: 500 }}>Aman Sharma</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>
              Front-End Developer
            </span>
          </div>
          <p style={{ marginTop: "0.35rem" }}>
            Crafting responsive, accessible, and performant interfaces with React &amp;
            Next.js.
          </p>
        </div>

        <div className="social-links">
          <a
            href="mailto:amansh262@gmail.com"
            aria-label="Email Aman Sharma"
            className="social-link-pill"
          >
            @
          </a>
          <a
            href="https://www.linkedin.com/in/aman-sharma-163a79202/"
            target="_blank"
            rel="noreferrer"
            aria-label="Aman Sharma on LinkedIn"
            className="social-link-pill"
          >
            in
          </a>
          <a
            href="https://github.com/aman-sharama"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="social-link-pill"
          >
            GH
          </a>
        </div>
      </div>
    </footer>
  );
};

