export interface Case {
  id: number;
  title: string;
  subtitle: string;
  skills: string[];
  client: string;
  year: string;
  images: string[];
  projectDescription: string;
  project_url: string;
  slug: string;
}

const cases: Case[] = [
  {
    id: 1,
    title: "GiG Bezorgd",
    subtitle:
      "DTC E-commerce platform for GiG Hard Seltzer with automated order flow.",
    skills: ["WooCommerce", "Automation", "Cloudflare Workers", "Elementor"],
    client: "GiG Hard Seltzer",
    year: "2021",
    images: ["/mocks/gigMobile.webp"],
    projectDescription: "",
    project_url: "https://gigbezorgd.nl/",
    slug: "gig-bezorgd",
  },
  {
    id: 2,
    title: "IFCI Register Landingpage",
    subtitle: "Landingpage for the IFCI Register.",
    skills: ["Next.js", "Airtable", "Cloudflare Workers"],
    client: "IFCI Register",
    year: "2023",
    images: [
      "/mocks/ifciDesktop.webp",
      "/mocks/ifciSecondDesktop.webp",
      "/mocks/ifciMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://ifci-landingspage.vercel.app/",
    slug: "ifci-register",
  },
  {
    id: 3,
    title: "FitCert Inspection Dynamic Landingpage",
    subtitle:
      "Dynamic landingpages for all the fitness national associations in Europe.",
    skills: ["Next.js", "Airtable"],
    client: "Tüv, IFCI Register, FITCERT, Kiwa ISA Sport",
    year: "2024",
    images: ["/mocks/fitcertMobile.webp"],
    projectDescription: "",
    project_url: "https://www.fitcert-inspection.eu/",
    slug: "fitcert-inspection",
  },
  {
    id: 4,
    title: "Sunnery Sessions Website",
    subtitle: "Immersive Sunnery Sessions landingpage.",
    skills: ["Next.js"],
    client: "Sunnergy Sessions",
    year: "2023",
    images: [
      "/mocks/sunnergyDesktop.webp",
      "/mocks/sunnergySecondDesktop.webp",
      "/mocks/sunnergyMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.sunergysessions.com/",
    slug: "sunnery-sessions",
  },
  {
    id: 5,
    title: "De Bruiloft Website & Email",
    subtitle:
      "Easy landingpage for lead generation. Custom invite e-mail generated with ChatGPT for a unique experience.",
    skills: ["Next.js", "Brevo", "ChatGPT 3.5"],
    client: "GiG Hard Seltzer",
    year: "2023",
    images: [
      "/mocks/bruiloftDesktop.webp",
      "/mocks/bruiloftSecondDesktop.webp",
      "/mocks/bruiloftMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.debruiloft.amsterdam/",
    slug: "de-bruiloft",
  },
  {
    id: 6,
    title: "The Pet Show Website",
    subtitle:
      "E-commerce platform, automated AI image training/generation and order fulfillment.",
    skills: ["Shopify", "Next.js", "Express.JS"],
    client: "The Pet Show",
    year: "2024",
    images: [
      "/mocks/petshowDesktop.webp",
      "/mocks/petshowSecondDesktop.webp",
      "/mocks/petshowMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.thepetshow.co/",
    slug: "the-pet-show",
  },
  {
    id: 7,
    title: "Legends Leiden Website",
    subtitle: "Modern website for the Legends Leiden a gym in Leiden.",
    skills: ["Next.js"],
    client: "Legends Leiden",
    year: "2022",
    images: [
      "/mocks/legendsDesktop.webp",
      "/mocks/legendsDesktopSecond.webp",
      "/mocks/legendsLeidenMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.legendsleiden.nl/",
    slug: "legends-leiden",
  },
  {
    id: 8,
    title: "Corazon Retreat Website",
    subtitle:
      "Modern website for the Corazon Retreat. A unique retreat in Ibiza.",
    skills: ["Next.js"],
    client: "Corazon Retreat",
    year: "2023",
    images: ["/mocks/corazonMobile.webp"],
    projectDescription: "",
    project_url: "https://www.corazonretreat.com/",
    slug: "corazon-retreat",
  },
  {
    id: 9,
    title: "OntruimKiezer Platform",
    subtitle:
      "Platform for matching people with clearance services. Completely with user management and matching algorithm.",
    skills: ["Next.js", "Prisma", "Resend (E-mail)", "Next Auth"],
    client: "OntruimKiezer",
    year: "2024",
    images: [
      "/mocks/ontruimKiezerDesktop.webp",
      "/mocks/ontruimKiezerSecondDesktop.webp",
      "/mocks/ontruimMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.ontruimkiezer.nl/",
    slug: "ontruimkiezer",
  },
  {
    id: 10,
    title: "Gina van Os Attelier Website & Rental Platform",
    subtitle:
      "Custom rental platform for Gina van Os Attelier. With email automation. And on request rental module.",
    skills: ["Next.js", "Resend (E-mail)", "Sanity.io"],
    client: "Gina van Os Attelier",
    year: "2024",
    images: ["/mocks/ginaMobile.webp"],
    projectDescription: "",
    project_url: "https://www.ginavanos.com/",
    slug: "gina-van-os-attelier",
  },
  {
    id: 11,
    title: "EventStories Website & Event Management Platform",
    subtitle:
      "Image hosting and event management platform. Events can be created and managed in a custom dashboard.",
    skills: ["Next.js", "Prisma", "Resend (E-mail)", "Next Auth", "AWS"],
    client: "EventStories",
    year: "2023",
    images: [
      "/mocks/eventDesktop.webp",
      "/mocks/eventSecondDesktop.webp",
      "/mocks/eventMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://eventstories.io/",
    slug: "event-stories",
  },
  {
    id: 12,
    title: "Linden Vastgoed Website",
    subtitle: "Modern real estate website. Connected to Airtable.",
    skills: ["Next.js", "Airtable"],
    client: "GiG Hard Seltzer",
    year: "2023",
    images: [
      "/mocks/lindenDesktop.webp",
      "/mocks/lindenSecondDesktop.webp",
      "/mocks/lindenMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.lindenvastgoed.nl/",
    slug: "linden-vastgoed",
  },
  {
    id: 13,
    title: "ByHyre Website & Back Office",
    subtitle:
      "Modern website for ByHyre. Connected to Strapi for content management and page building.",
    skills: ["Next.js", "Strapi"],
    client: "GiG Hard Seltzer",
    year: "2023",
    images: [
      "/mocks/byHyreDesktop.webp",
      "/mocks/byHyreSecondDesktop.webp",
      "/mocks/byHyreMobile.webp",
    ],
    projectDescription: "",
    project_url: "https://www.byhyre.com/",
    slug: "by-hyre",
  },
  {
    id: 14,
    title: "Lokers Real Estate Website & WhatsApp Automation",
    subtitle:
      "Modern real estate website. Connected to Airtable and with Whatsapp automations. ",
    skills: ["Next.js", "Automation", "Cloudflare Workers"],
    client: "Lokers Real Estate",
    year: "2023",
    images: ["/mocks/lokersMobile.webp"],
    projectDescription: "",
    project_url: "https://www.lokersrealestate.nl/",
    slug: "lokers-real-estate",
  },
];

export default cases;
