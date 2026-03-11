"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="nav-blur"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: isScrolled
          ? "1px solid rgba(51,65,85,0.9)"
          : "1px solid transparent",
        boxShadow: isScrolled
          ? "0 18px 45px rgba(15,23,42,0.9)"
          : "0 0 0 rgba(0,0,0,0)",
        transition: "border-color 160ms ease-out, box-shadow 160ms ease-out"
      }}
    >
      <nav className="container" style={{ padding: "0.8rem 1.25rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle at 30% 0%, #6366f1, #0f172a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#f9fafb",
                boxShadow: "0 0 20px rgba(79,70,229,0.8)"
              }}
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "#f9fafb"
                }}
              >
                Aman Sharma
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)"
                }}
              >
                Front-End Developer
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem"
            }}
          >
            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "1.2rem",
                color: "#f9fafb"

              }}
              className="nav-links-desktop"
            >
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="/pdf/amanfrontendcv.pdf"
              download="Aman_Sharma_Frontend_Developer_CV.pdf"
              className="btn btn-primary"
            >
              Download My CV
            </a>
          </div>
        </div>
      </nav>
      <style jsx>{`
        @media (min-width: 900px) {
          .nav-links-desktop {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

