export const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let&apos;s talk about your next UI</h2>
          <p className="section-description">
            Whether it&apos;s a dashboard, a travel platform, or a marketing site,
            I&apos;m always happy to discuss front-end challenges and how I can help.
          </p>
        </div>

        <div className="grid contact-grid">
          <form
            className="glass-panel"
            data-aos="fade-up"
            action="mailto:amansh262@gmail.com"
            method="post"
            encType="text/plain"
            style={{ padding: "1.7rem 1.6rem", display: "grid", gap: "1rem" }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: "0.35rem",
                  color:"white"
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                className="input"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: "0.35rem",
                    color:"white"
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: "0.35rem",
                    color:"white"
                }}
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                placeholder="Share a brief about your project, timelines, and expectations."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>

          <aside
            className="glass-panel"
            data-aos="fade-up"
            data-aos-delay="80"
            style={{
              padding: "1.6rem 1.5rem",
              display: "grid",
              gap: "0.9rem",
              fontSize: "0.9rem"
            }}
          >
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem",  color:"white" }}>
                Direct contact
              </div>
              <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                Email:{" "}
                <a href="mailto:amansh262@gmail.com" className="nav-link">
                  amansh262@gmail.com
                </a>
              </p>
              <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                Phone:{" "}
                <a href="tel:+919911763241" className="nav-link">
                  +91 9911763241
                </a>
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem",  color:"white" }}>
                Preferred roles
              </div>
              <div className="chip-row">
                <span className="chip">Front-End Developer</span>
                <span className="chip">React / Next.js Engineer</span>
                <span className="chip">UI Engineer</span>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" ,  color:"white"}}>
                Social
              </div>
              <div className="chip-row">
                 <a
                  href="mailto:amansh262@gmail.com"
                  target="_blank"
                  aria-label="Email Aman Sharma"
                  className="chip"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-sharma-163a79202/"
                  target="_blank"
                  rel="noreferrer"
                  className="chip"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/aman-sharama"
                  target="_blank"
                  rel="noreferrer"
                  className="chip"
                >
                  GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

