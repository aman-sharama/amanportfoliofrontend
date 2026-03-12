import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-description">
            A sample of dashboards, platforms, and experiences I&apos;ve helped ship
            using React, Next.js, and modern UI libraries.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="project-image">
                <div
                  style={{
                    position: "absolute",
                    inset: "14%",
                    borderRadius: "1rem",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,64,175,0.95))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "0.85rem 0.9rem",
                    boxShadow: "0 18px 45px rgba(15,23,42,0.95)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.6rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                         color:"white"
                      }}
                    >
                      {project.title}
                    </span>
                    {/* <span className="tag-pill">Case study</span> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.4rem",
                      fontSize: "0.7rem",
                      color: "rgba(226,232,240,0.85)"
                    }}
                  >
                    <span>{project.role}</span>
                    <span
                      style={{
                        width: "0.4rem",
                        height: "0.4rem",
                        borderRadius: "999px",
                        background:
                          "radial-gradient(circle at 30% 0%, #22c55e, #16a34a)",
                        boxShadow: "0 0 12px rgba(34,197,94,0.95)"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.75rem"
                  }}
                >
                  <div>
                    <h3 className="project-title" style={{ color:"white"}}>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(226,232,240,0.85)",
                        marginTop: "0.35rem"
                      }}
                    >
                      {project.highlight}
                    </p>
                  </div>
                </div>

                <div className="project-meta">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-meta-pill" style={{ color:"white"}}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0.85rem",
                    fontSize: "0.82rem"
                  }}
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link"
                      style={{
                        fontSize: "0.82rem",
                        color: "#e5e7eb"
                      }}
                    >
                      View live project →
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)" }}>
                      Internal project
                    </span>
                  )}
                  <span style={{ color: "var(--text-secondary)" }}>
                    Front-End Lead
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

