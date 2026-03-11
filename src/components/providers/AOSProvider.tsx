"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
}

export const AOSProvider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 80
    });
  }, []);

  return <>{children}</>;
};

