// All site content lives here. Edit this file to update the portfolio.
import portraitImg from "@/assets/portrait.jpg";

export const profile = {
  name: "Jeremia Obed",
  brand: "JEREMIA OBED",
  // Add your photo: upload it, then set photo to its URL (e.g. "/jeremia.jpg" in public/).
  photo: portraitImg as string,
  role: "Software Engineer & Full-Stack Developer",
  email: "\n",
  github: "https://github.com/jeremi563",
  linkedin: "https://www.linkedin.com/in/peter-clarkson-b6088a37b",
  whatsapp: "https://wa.me/254731242169?text=Hello%20Jeremia",
  // Place the real PDF at public/Jeremia-Obed-CV.pdf, then set this to true.
  cvAvailable: true,
  cvPath: "/Jeremia-Obed-CV.pdf",
};

export const heroStack = [
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Linux",
];

export const skills = [
  {
    id: "01",
    title: "Frontend",
    items: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Responsive design"],
  },
  {
    id: "02",
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PHP", "Payment API integration"],
  },
  {
    id: "03",
    title: "Data",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Redis", "Database design"],
  },
  { id: "04", title: "Tooling", items: ["Linux", "Docker", "Git & GitHub", "Vite"] },
  {
    id: "05",
    title: "Systems & Security",
    items: [
      "TCP/IP & networking",
      "Input validation",
      "API security basics",
      "Vulnerability assessment",
    ],
  },
  { id: "06", title: "Foundations", items: ["C", "Java", "Data structures", "Algorithms"] },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  detail: string;
  stack: string[];
  live?: string;
  repo: string;
  featured?: boolean;
};

/*
 * ADDING A NEW PROJECT
 * Copy this block into the array below. "featured: true" shows it as a big card,
 * otherwise it appears in the compact list. Index numbers are generated automatically.
 *
 * {
 *   slug: "my-project",
 *   name: "My Project",
 *   kind: "Short category",
 *   summary: "One-line summary.",
 *   detail: "Optional longer description.",
 *   stack: ["React", "Node.js"],
 *   live: "https://...",          // optional
 *   repo: "https://github.com/jeremi563/...",
 *   featured: false,
 * },
 */
export const projects: Project[] = [
  {
    slug: "peylora",
    name: "Peylora",
    kind: "Payments platform",
    summary: "An M-Pesa payment platform built on Safaricom's Daraja API.",
    detail:
      "Handles STK push requests, payment callbacks and transaction records, with a React dashboard on top of a Node.js and PostgreSQL backend and Redis for fast state.",
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "Daraja API"],
    live: "https://peylora-system.vercel.app",
    repo: "https://github.com/jeremi563/peylora-system",
    featured: true,
  },
  {
    slug: "codealpha-social",
    name: "CodeAlpha Social Media Platform",
    kind: "Full-stack social platform",
    summary:
      "A full-stack social media application with feeds, profiles, comments, likes, and a follow system.",
    detail:
      "Express REST API and vanilla JavaScript frontend over MongoDB and GridFS, featuring session authentication, real-time feed updates, notifications, follower networks, and moderation tools.",
    stack: ["Node.js", "Express", "MongoDB", "JavaScript"],
    repo: "https://github.com/jeremi563/CodeAlpha_SocialMediaPlatform",
    featured: true,
  },
  {
    slug: "codealpha",
    name: "CodeAlpha E-commerce",
    kind: "Full-stack store",
    summary: "A full-stack e-commerce platform with products, cart, auth and orders.",
    detail:
      "Express and Prisma over PostgreSQL, with a vanilla JavaScript frontend covering product management, shopping cart, user authentication and order processing.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "JavaScript"],
    live: "https://codealpha-ecommerce-id4j.onrender.com/",
    repo: "https://github.com/jeremi563/CodeAlpha_Ecommerce",
    featured: true,
  },
  {
    slug: "cypheron",
    name: "Cypheron",
    kind: "Automation bot",
    summary: "A WhatsApp automation bot with 60+ commands.",
    detail: "Auto bio, media downloader, group management and more — built with Node.js.",
    stack: ["Node.js", "WhatsApp"],
    live: "https://cypheron-session.onrender.com",
    repo: "https://github.com/jeremi563/cypheron-whatsapp-bot",
  },
  {
    slug: "syspulse",
    name: "SysPulse",
    kind: "System monitor",
    summary: "Displays live system information — CPU, memory and other vital metrics.",
    detail: "",
    stack: ["JavaScript", "Node.js"],
    repo: "https://github.com/jeremi563/system-pulse",
  },
  {
    slug: "pos",
    name: "Triple O Supermarket POS",
    kind: "Retail system",
    summary: "Supermarket management with barcode scanning, price display and admin tools.",
    detail: "",
    stack: ["JavaScript"],
    repo: "https://github.com/jeremi563/supermarket-pos",
  },
];

export const repos = [
  {
    name: "nexora-daraja-training",
    lang: "JavaScript",
    desc: "Training material for working with the Daraja (M-Pesa) API.",
  },
  { name: "weather-app", lang: "JavaScript", desc: "Checks current weather using a public API." },
  {
    name: "github-profile--finder",
    lang: "CSS",
    desc: "Search and view GitHub profiles with details.",
  },
  { name: "tcp-traffic", lang: "—", desc: "Networking experiments with TCP traffic." },
];

// Taken from the previous site. Marked for confirmation before publishing.
export const timeline = [
  {
    period: "2024 — Present",
    title: "Full-Stack Developer",
    kind: "Independent work",
    text: "Building web applications and backend systems from idea to deployment.",
  },
  {
    period: "2023 — 2026",
    title: "Security & Linux work",
    kind: "To confirm",
    text: "Vulnerability assessments, Linux environments and security practices.",
  },
  {
    period: "2024 — Present",
    title: "B.Sc. Software Engineering",
    kind: "Education",
    text: "Data structures, algorithms, networking, database design and software life cycles.",
  },
];
