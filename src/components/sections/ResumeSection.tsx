export const ResumeSection = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Resume</span>
          <h2 className="section-title">A quick look at my CV</h2>
          <p className="section-description">
            Download a copy of my latest resume or preview the key details
            directly from this page.
          </p>
        </div>

        <div className="grid resume-grid">
          <article
            className="glass-panel"
            data-aos="fade-up"
            style={{ padding: "1.7rem 1.6rem" }}
          >
            <h3
              style={{
                fontSize: "1rem",
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
                color:"white"
                
              }}
            >
              Download my resume
            </h3>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                marginBottom: "1.2rem"
              }}
            >
              Get a PDF copy of my resume that highlights my recent experience,
              projects, and technical skills.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.9rem",
                alignItems: "center"
              }}
            >
              <a
                 href="/pdf/amanfrontendcv.pdf"
              download="Aman_Sharma_Frontend_Developer_CV.pdf"
                className="btn btn-primary"
              >
                Download CV (PDF)
              </a>
             
            </div>
          </article>

          <article
            className="glass-panel"
            data-aos="fade-up"
            data-aos-delay="80"
            style={{ padding: "1.5rem 1.4rem" }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--text-secondary)",
                marginBottom: "0.7rem",
              
                
              }}
            >
              Resume snapshot
            </div>
            <div
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(148,163,184,0.6)",
                padding: "1rem 1rem",
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  marginBottom: "0.75rem"
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" , color:"white"}}>
                    Aman Sharma
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)"
                    }}
                  >
                    Front-End Developer · New Delhi
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.25rem"
                    }}
                  >
                    +91 9911763241 · amansh262@gmail.com
                  </div>
                </div>
                <div className="tag-pill">4.5+ yrs exp.</div>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(51,65,85,0.9)",
                  paddingTop: "0.8rem",
                  display: "grid",
                  gap: "0.45rem",
                  fontSize: "0.8rem"
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, marginBottom: "0.25rem" ,color:"white"}}>
                    Summary
                  </div>
                  <p style={{ color: "var(--text-secondary)", margin: 0 }}>
                    Front-End Developer with 4.5+ years of experience building
                    scalable UIs, dashboards, and platforms with React.js,
                    Next.js, Material UI, Bootstrap, and Redux Toolkit.
                  </p>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: "0.25rem",color:"white" }}>
                    Key skills
                  </div>
                  <div className="chip-row">
                    <span className="chip">HTML</span>
                    <span className="chip">CSS</span>
                    <span className="chip">SCSS</span>
                    <span className="chip">Admin Develop</span>
                    <span className="chip">Responsive All Devices</span>
                    <span className="chip">React.js</span>
                    <span className="chip">Next.js</span>
                    <span className="chip">Material UI</span>
                    <span className="chip">Bootstrap</span>
                    <span className="chip">Redux Toolkit</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: "0.25rem",color:"white" }}>
                    Recent roles
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      color: "var(--text-secondary)"
                    }}
                  >
                    <li>• Front-End Developer · Barcosys Software India</li>
                    <li>• Front-End Developer · FictiveBox Digital</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

