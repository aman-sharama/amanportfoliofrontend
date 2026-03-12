
import Image from "next/image";
import aman from "../../../public/assets/images/amanportfolioimage.jpeg";
import AnimationLine from "../AnimationLine";

export const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row align-items-center gy-4 gy-lg-0">
          <div
            className="col-lg-7"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="section-heading mb-3 mb-lg-4">
              <span className="section-kicker">About</span>
              <AnimationLine/>
            </div>
            <p className="section-description mb-3">
              I&apos;m a front-end engineer focused on building interfaces that feel
              as good as they look. Over the last 4.5+ years I&apos;ve worked across
              dashboards, travel platforms, marketplaces, ERP systems, and corporate
              sites—always with attention to detail, accessibility, and performance.
            </p>
            <p className="about-lead mb-0">
              I specialize in React.js and Next.js, using design systems like
              Material UI and Bootstrap to ship interfaces that are fast, polished,
              and easy to maintain.
            </p>
          </div>

          <div
            className="col-lg-5 d-flex justify-content-center justify-content-lg-end"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            <div className="hero-photo-wrapper about-photo-wrapper">
              <Image
                src={aman}
                alt="Aman Sharma"
                className="hero-photo about-photo"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="glass-panel about-detail-grid mt-4 mt-lg-5"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="about-detail-text">
            <p>
              At Barcosys Software India and FictiveBox Digital, I&apos;ve
              contributed to and led projects from admin dashboards and travel
              platforms to ERP and HR systems—integrating REST APIs, handling
              authentication, and improving performance with SSR, lazy loading, and
              dynamic imports.
            </p>
            <p>
              I enjoy collaborating with designers and backend teams, and I bring a
              UX-first mindset to every feature: clear hierarchy, accessible
              interactions, and motion that guides—not distracts—the user.
            </p>
          </div>

          <div className="about-detail-meta">
            <div className="about-meta-row">
              <div>
                <div className="about-meta-label">Based in</div>
                <div className="about-meta-value">New Delhi, India</div>
              </div>
              <div>
                <div className="about-meta-label">Experience</div>
                <div className="about-meta-value">4.5+ years</div>
              </div>
            </div>

            <div>
              <div className="about-meta-label mb-1">Focus areas</div>
              <div className="chip-row">
                <span className="chip">Dashboard UX</span>
<<<<<<< HEAD
                <span className="chip">E-commerce Websites Platforms</span>
                <span className="chip">Travel platforms</span>
                <span className="chip">Marketplaces</span>
                <span className="chip">Admin portals</span>
                <span className="chip">WebSite Design</span>
=======
                <span className="chip">Travel platforms</span>
                <span className="chip">Marketplaces</span>
                <span className="chip">Admin portals</span>
>>>>>>> fb8e3b65ebc313ff2696265db9fe362f457fabd2
              </div>
            </div>

            <div>
              <div className="about-meta-label mb-1">Education</div>
              <div className="about-meta-education">
                <span>MCA · IGNOU</span>
                <span>BCA · IGNOU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
