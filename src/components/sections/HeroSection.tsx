

export const HeroSection = () => {
  return (
    <section id="hero" className="section" data-aos="fade-up">
      <div className="container hero-grid">
        <div>
          <div className="badge-gradient" style={{ marginBottom: "1.2rem" }}>
            Front-End Developer &amp; Frontend Ui · All Devices Responsive React &amp; Next.js
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3rem)",
              letterSpacing: "-0.06em",
              marginBottom: "0.9rem",
              color: "var(--text-primary)"
            }}
          >
            Building{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #a855f7, #6366f1, #22c55e)",
                padding: "0.08em 0.18em",
                borderRadius: "0.5rem",
                boxShadow: "0 0 0 1px rgba(15,23,42,0.55)",
                color: "#f9fafb"
              }}
            >
              fast, elegant
            </span>{" "}
            interfaces for modern web products.
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "34rem",
              fontSize: "0.98rem",
              lineHeight: 1.7,
              marginBottom: "1.6rem"
            }}
          >
            I&apos;m Aman Sharma, a Front-End Developer with 4.5+ years of
            experience crafting responsive, accessible, and scalable interfaces
            for dashboards, travel platforms, marketplaces, ERP systems, and
            corporate websites.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.9rem",
              marginBottom: "1.5rem"
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View featured work
            </a>
            <a  href="/pdf/amanfrontendcv.pdf"
              download="Aman_Sharma_Frontend_Developer_CV.pdf" className="btn btn-outline">
              Download resume
            </a>
          </div>

          <div className="chip-row">
            <span className="chip">React.js &amp; Next.js</span>
            <span className="chip">Material UI &amp; Bootstrap</span>
            <span className="chip">Redux Toolkit</span>
            <span className="chip">Performance &amp; SEO</span>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="80">
          <div className="hero-orbit">
            <div className="hero-orbit-inner">
              {/* <div className="hero-photo-wrapper">
                <Image
                  src={aman}
                  alt="Aman Sharma"
                  className="hero-photo"
                />
              </div> */}

              <div className="hero-card-details">
                <div className="hero-card-header">
                  <div>
                    <div className="hero-card-name">Aman Sharma</div>
                    <div className="hero-card-title">Front-End Developer</div>
                  </div>
                  <div className="hero-stat-pill">
                    <span />
                    <span>Open to roles</span>
                  </div>
                </div>

                <div className="hero-card-meta">
                  <div>
                    <div className="hero-card-label">Location</div>
                    <div className="hero-card-value">New Delhi, India</div>
                  </div>
                  <div>
                    <div className="hero-card-label">Experience</div>
                    <div className="hero-card-value">4.5+ years</div>
                  </div>
                </div>

                <div className="hero-card-tags">
                  <span className="chip">Dashboards</span>
                  <span className="chip">Travel platforms</span>
                   <span className="chip">Bus platforms</span>
                    <span className="chip">Website Develop</span>
                     <span className="chip">Responsive All Devices</span>
                  <span className="chip">ERP &amp; HR</span>
                </div>

                <div className="hero-card-footer">
                  <span>HTML · CSS · React Bootstrap · Responsive Website · Admin Develop · React · Next.js · Material UI · Bootstrap · Redux Toolkit · AOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

