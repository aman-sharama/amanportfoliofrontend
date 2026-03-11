"use client";
import { useEffect, useState } from "react";

export default function AnimationLine() {
const textArray = [
  "Frontend Developer specializing in React.js & Next.js",
  "Building modern, responsive, and scalable web applications",
  "Creating user-friendly and high-performance interfaces",
  "Developing pixel-perfect UI with HTML, CSS, SCSS & Bootstrap",
  "Optimizing websites for performance, SEO, and accessibility",
  "Transforming ideas into interactive digital experiences",
  "Crafting responsive websites that work on all devices",
  "Passionate about clean code and modern frontend technologies"
];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textArray.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="section-title">Who I am as a developer</h2>

      <p className="developer-text">
        {textArray[textIndex]}
      </p>
    </section>
  );
}