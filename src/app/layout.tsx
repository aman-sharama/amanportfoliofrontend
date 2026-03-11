import type { Metadata } from "next";
import "./globals.css";
import { AOSProvider } from "@/components/providers/AOSProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: "Aman Sharma | Front-End Developer Portfolio",
  description:
    "Portfolio of Aman Sharma, Front-End Developer specializing in React.js, Next.js, and modern, high-performance web interfaces.",
  openGraph: {
    title: "Aman Sharma | Front-End Developer",
    description:
      "Front-End Developer with 4.5+ years of experience building responsive, scalable, and SEO-friendly web applications.",
    type: "website",
    url: "https://your-portfolio-domain.com",
    siteName: "Aman Sharma Portfolio"
  },
  metadataBase: new URL("https://your-portfolio-domain.com"),
  keywords: [
    "Aman Sharma",
    "Front-End Developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "UI Engineer",
    "Frontend Engineer",
    "Web Developer Portfolio"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}

