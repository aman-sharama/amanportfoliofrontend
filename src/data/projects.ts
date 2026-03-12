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
    title: "ACME INDIA INDUSTRIES LTD.",
    role: "HTML · CSS · JS · PHP",
    description:
      "Acme India is a leading Railway Interior Coach Furnishing company, specializing in designing, producing, and installing high-quality, ergonomic, and aesthetically pleasing interiors for railway coaches.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    url: "https://acmeindia.co/",
    highlight: "Role-based dashboards, exportable data tables, performance-optimized UI."
  },

   {
    title: "Vaikunth Online Pandit/Puja Bokking System",
    role: "HTML · CSS · JS · PHP",
    description:
      "Book Pandit Online : Vaikunth is India’s leading online platform to book all the Puja ceremonies, services and rituals from certified Pandits of the Sanatan Dharm.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    url: "https://vaikunth.co/",
    highlight: "Role-based dashboards, exportable data tables, performance-optimized UI."
  },

  
  {
    title: "Kayna Healthcare",
    role: "HTML · CSS · JS · PHP",
    description:
      "Developed a responsive healthcare e-commerce website for Kayna Healthcare, enabling users to explore medical products, search solutions, and purchase healthcare supplements. Implemented interactive UI components, product listings, and promotional banners to enhance user experience and engagement. The platform includes dynamic product pages, category navigation, and optimized layouts for all devices.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    url: "https://www.kaynahealthcare.shop/",
    highlight: "Role-based dashboards, exportable data tables, performance-optimized UI."
  },


 
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

