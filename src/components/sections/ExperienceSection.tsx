export const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Where I&apos;ve been working</h2>
          <p className="section-description">
            From travel and corporate websites to internal dashboards and ERPs, I
            bring a product mindset and UI craftsmanship to each engagement.
          </p>
        </div>

        <div className="grid experience-grid">
          <div className="glass-panel" data-aos="fade-up" style={{ padding: "1.6rem" }}>
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  marginBottom: "0.4rem"
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    letterSpacing: "-0.03em",
                    color:"white"
                    
                  }}
                >
                  Front-End Developer · Barcosys Software India Pvt. Ltd.
                </h3>
                <span className="tag-pill">2024 – Present</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Working on enterprise-level web applications with React and Next.js,
                building scalable admin portals, dashboards, and role-based interfaces.
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "0.55rem",
                fontSize: "0.9rem"
              }}
            >
              <li style={{color:"white"}}>
                • Developing and maintaining reusable UI components using Material UI
                and Bootstrap.
              </li>
              <li style={{color:"white"}}>
                • Integrating REST APIs, handling state with Redux Toolkit, and
                implementing performance optimizations (lazy loading, SSR).
              </li>
              <li style={{color:"white"}}>
                • Leading UI implementation for admin portal modules, data tables, and
                role-based access flows.
              </li>
            </ul>
          </div>

          <div className="glass-panel" data-aos="fade-up" data-aos-delay="80" style={{ padding: "1.6rem" }}>
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  marginBottom: "0.4rem"
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    letterSpacing: "-0.03em",
                    color:"white"
                  }}
                >
                  Front-End Developer · FictiveBox Digital Pvt. Ltd.
                </h3>
                <span className="tag-pill">2021 – 2024</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Led and delivered multiple client projects using HTML, CSS, JavaScript,
                jQuery, and React with a strong focus on responsiveness and
                cross-browser compatibility.
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "0.55rem",
                fontSize: "0.9rem"
              }}
            >
              <li style={{color:"white"}}>
                • Led a team of 3–4 developers, handling task breakdowns, code
                reviews, and delivery quality.
              </li>
              <li style={{color:"white"}}>
                • Built dynamic, API-driven experiences using React.js and Redux
                Toolkit.
              </li>
              <li style={{color:"white"}}>
                • Recognized for on-time deliveries, leadership, and strong UI/UX
                implementations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

