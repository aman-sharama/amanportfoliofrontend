export type Project = {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  url?: string;
  highlight: string;
};

export const projects: Project[] = [
  {
    title: "Admin Dashboard CRM",
    role: "Next.js · PrimeReact · Redux Toolkit",
    description:
      "Secure internal CRM admin portal for booking management, analytics tracking, and service control modules with role-based dashboards.",
    techStack: ["Next.js", "PrimeReact", "Redux Toolkit", "REST APIs"],
    url: "https://crm.barcosys.in",
    highlight: "Role-based dashboards, exportable data tables, performance-optimized UI."
  },
  {
    title: "Laxmi Holidays – Travel Beyond Limits",
    role: "Next.js · Bootstrap 5",
    description:
      "SEO-friendly travel booking platform with dynamic packages, SSR-powered routing, and responsive layouts for high-intent traffic.",
    techStack: ["Next.js", "Bootstrap 5", "SSR"],
    url: "https://www.laxmiholidays.com/",
    highlight: "Server-side rendering for SEO, inquiry flows, and package details."
  },
  {
    title: "NITCON – Government Consultancy",
    role: "Next.js · Bootstrap",
    description:
      "Official website rebuild following government accessibility guidelines with hybrid rendering for dynamic reports and tenders.",
    techStack: ["Next.js", "Bootstrap", "Accessibility"],
    url: "https://nitcon.org",
    highlight: "Hybrid rendering, structured data, and mobile-first responsive design."
  },
  {
    title: "Travel Care – Travel Solutions Made Easy",
    role: "Next.js · SCSS · Bootstrap",
    description:
      "Feature-rich travel services platform showcasing hotels, flights, and packages with reusable UI components and scalable APIs.",
    techStack: ["Next.js", "SCSS", "Bootstrap", "REST APIs"],
    url: "https://traveljet.com.au",
    highlight: "SEO-friendly architecture with SSR and performance optimizations."
  },
  {
    title: "ERP & HR Management Dashboard",
    role: "React.js · Material UI · Redux Toolkit",
    description:
      "Modular ERP and HR dashboards featuring dynamic tables, reporting, and visualizations for internal teams.",
    techStack: ["React.js", "Material UI", "Redux Toolkit", "Chart.js"],
    highlight: "Advanced filtering, pagination, and performant state management."
  },
  {
    title: "Farmland Bazaar – Property Marketplace",
    role: "React.js · Material UI",
    description:
      "Property marketplace with API-driven listings, responsive property detail pages, and embedded map experiences.",
    techStack: ["React.js", "Material UI", "REST APIs"],
    url: "https://farmlandbazaar.com/",
    highlight: "Optimized with React.memo and robust form handling for uploads."
  }
];

