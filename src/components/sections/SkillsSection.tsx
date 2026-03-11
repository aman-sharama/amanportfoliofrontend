type Skill = {
  name: string;
  level: number;
  category: "Core" | "Frameworks" | "Ecosystem";
};

const skills: Skill[] = [
  { name: "HTML", level: 95, category: "Core" },
  { name: "CSS / SCSS", level: 92, category: "Core" },
  { name: "JavaScript (ES6+)", level: 90, category: "Core" },
  { name: "React.js", level: 92, category: "Frameworks" },
  { name: "Next.js", level: 90, category: "Frameworks" },
  { name: "Material UI", level: 88, category: "Frameworks" },
  { name: "Bootstrap", level: 90, category: "Frameworks" },
  { name: "Redux Toolkit", level: 88, category: "Ecosystem" },
  { name: "AOS / GSAP", level: 85, category: "Ecosystem" }
];

export const SkillsSection = () => {
  const grouped = skills.reduce<Record<Skill["category"], Skill[]>>(
    (acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    },
    { Core: [], Frameworks: [], Ecosystem: [] }
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Frontend stack I work with</h2>
          <p className="section-description">
            A modern React and Next.js toolkit for building performant web
            applications with clean, maintainable UI layers.
          </p>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
          }}
        >
          {Object.entries(grouped).map(([category, list], index) => (
            <article
              key={category}
              className="glass-panel"
              data-aos="fade-up"
              data-aos-delay={index * 60}
              style={{ padding: "1.6rem 1.5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.1rem"
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    letterSpacing: "-0.03em",
                     color:"white"
                  }}
                >
                  {category}
                </h3>
                <span className="tag-pill">
                  {list.length} {list.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              <div style={{ display: "grid", gap: "0.9rem" }}>
                {list.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.35rem",
                        fontSize: "0.83rem",
                        color:"white"
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ transform: `scaleX(${skill.level / 100})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

