/**
 * ALL PORTFOLIO CONTENT LIVES HERE.
 * Edit this file to update links / text — no UI code changes required.
 */

export const LINKS = {
  cv: "https://docs.google.com/document/d/CV_GOOGLE_DOC_LINK/edit",
  email: "jiya17batra@gmail.com",
  linkedin: "https://www.linkedin.com/in/jiya17batra",
  github: "https://github.com/jiya17batra",
  behance: "https://www.behance.net/jiya17batra",
  pinterest: "https://www.pinterest.com/PINTEREST_BOARD_URL",
  workDoc: "https://docs.google.com/document/d/WORK_GOOGLE_DOC_LINK/edit",
};

export type Category = "All" | "Projects" | "Case Study" | "Edu";

export type ChatId =
  | "cv"
  | "about"
  | "projects"
  | "case-studies"
  | "publication"
  | "education"
  | "enrichment"
  | "doodles";

export type ChatMeta = {
  id: ChatId;
  name: string;
  preview: string;
  categories: Category[];
  pinned?: boolean;
  /** external action instead of opening a thread */
  externalUrl?: string;
};

export const CHATS: ChatMeta[] = [
  {
    id: "cv",
    name: "Jiya Batra's CV",
    preview: "Click here to download",
    categories: ["All"],
    pinned: true,
    externalUrl: LINKS.cv,
  },
  {
    id: "about",
    name: "About me",
    preview: "A little about the person behind the pixels ✨",
    categories: ["All"],
  },
  {
    id: "projects",
    name: "Projects",
    preview: "Things I've built, broken & rebuilt 🚀",
    categories: ["All", "Projects"],
  },
  {
    id: "case-studies",
    name: "Case Studies",
    preview: "How I turn problems into experiences →",
    categories: ["All", "Case Study"],
  },
  {
    id: "publication",
    name: "Publication",
    preview: "Ideas worth putting into words.",
    categories: ["All"],
  },
  {
    id: "education",
    name: "Education",
    preview: "Where the journey started →",
    categories: ["All", "Edu"],
  },
  {
    id: "enrichment",
    name: "Enrichment Activities",
    preview: "More than just code & design.",
    categories: ["All", "Edu"],
  },
  {
    id: "doodles",
    name: "Doodles",
    preview: "Because not everything needs to be serious :)",
    categories: ["All"],
  },
];

/* ---------------- About ---------------- */

export const ABOUT = {
  intro:
    "Hi! I'm Jiya Batra — a Computer Science student who designs and builds things for the web. I like turning messy problems into clean, human experiences.",
  quickReplies: [
    {
      label: "My Skills",
      question: "What are your skills?",
      answer:
        "Design: Figma, UI/UX, prototyping, design systems.\nCode: HTML, CSS, JavaScript, React, Python.\nExtras: research, writing, and way too much attention to spacing.",
    },
    {
      label: "My Journey",
      question: "Tell me about your journey.",
      answer:
        "Started with curiosity in school, moved into CSE, led a DRDO-backed drone simulation project, interned as a web developer, and kept designing along the way.",
    },
    {
      label: "Fun Facts",
      question: "Any fun facts?",
      answer:
        "I doodle when I think, I name my Figma layers properly (really), and I believe a good empty state can save a product.",
    },
  ],
};

/* ---------------- Projects ---------------- */

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const PROJECTS: Project[] = [
  {
    title: "[PROJECT 1 TITLE]",
    description: "[PROJECT 1 DESCRIPTION]",
    tech: ["React", "TypeScript"],
    github: "[PROJECT 1 GITHUB URL]",
  },
  {
    title: "[PROJECT 2 TITLE]",
    description: "[PROJECT 2 DESCRIPTION]",
    tech: ["Figma", "UI/UX"],
    github: "[PROJECT 2 GITHUB URL]",
  },
  {
    title: "[PROJECT 3 TITLE]",
    description: "[PROJECT 3 DESCRIPTION]",
    tech: ["Python"],
    github: "[PROJECT 3 GITHUB URL]",
  },
  {
    title: "[PROJECT 4 TITLE]",
    description: "[PROJECT 4 DESCRIPTION]",
    tech: ["HTML", "CSS", "JS"],
    github: "[PROJECT 4 GITHUB URL]",
  },
  {
    title: "[PROJECT 5 TITLE]",
    description: "[PROJECT 5 DESCRIPTION]",
    tech: ["React", "Tailwind"],
    github: "[PROJECT 5 GITHUB URL]",
  },
];

/* ---------------- Case studies ---------------- */

export type CaseStudy = {
  title: string;
  problem: string;
  approach: string;
  process: string;
  solution: string;
  outcome: string;
  url: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "[CASE STUDY 1]",
    problem: "[Problem statement]",
    approach: "[Approach]",
    process: "[Design / process]",
    solution: "[Solution]",
    outcome: "[Outcome]",
    url: "[CASE STUDY 1 LINK]",
  },
  {
    title: "[CASE STUDY 2]",
    problem: "[Problem statement]",
    approach: "[Approach]",
    process: "[Design / process]",
    solution: "[Solution]",
    outcome: "[Outcome]",
    url: "[CASE STUDY 2 LINK]",
  },
  {
    title: "[CASE STUDY 3]",
    problem: "[Problem statement]",
    approach: "[Approach]",
    process: "[Design / process]",
    solution: "[Solution]",
    outcome: "[Outcome]",
    url: "[CASE STUDY 3 LINK]",
  },
];

/* ---------------- Publications ---------------- */

export type Publication = {
  title: string;
  description: string;
  year: string;
  url: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "[PUBLICATION 1 TITLE]",
    description: "[Short description]",
    year: "2026",
    url: "[PUBLICATION LINK 1]",
  },
  {
    title: "[PUBLICATION 2 TITLE]",
    description: "[Short description]",
    year: "2025",
    url: "[PUBLICATION LINK 2]",
  },
  {
    title: "[PUBLICATION 3 TITLE]",
    description: "[Short description]",
    year: "2024",
    url: "[PUBLICATION LINK 3]",
  },
];

/* ---------------- Education ---------------- */

export type Education = {
  level: string;
  title: string;
  place: string;
  year: string;
  detail?: string;
};

export const EDUCATION: Education[] = [
  {
    level: "B.Tech",
    title: "B.Tech — Computer Science & Engineering",
    place: "[COLLEGE NAME]",
    year: "[YEAR]",
    detail: "[Relevant details]",
  },
  {
    level: "Intermediate",
    title: "Intermediate",
    place: "[INTERMEDIATE COLLEGE]",
    year: "[YEAR]",
  },
  {
    level: "School",
    title: "School",
    place: "[SCHOOL NAME]",
    year: "[YEAR]",
  },
];

/* ---------------- Enrichment ---------------- */

export type Activity = {
  title: string;
  role: string;
  description: string;
  linkedin: string;
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Bihar",
    role: "[MY ROLE]",
    description: "[Short description of the Bihar activity]",
    linkedin: "[BIHAR_LINKEDIN_POST_URL]",
  },
  {
    title: "KIYE Foundation",
    role: "Student Coordinator",
    description:
      "Connecting students, coordinating events & making things happen ✨",
    linkedin: "[KIYE_LINKEDIN_POST_URL]",
  },
];

/* ---------------- Work experience (Updates) ---------------- */

export type Experience = {
  id: string;
  org: string;
  role: string;
  year: string;
  preview: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  achievements: string[];
  proof: { label: string; url: string }[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "codsoft",
    org: "CodSoft",
    role: "Web Developer",
    year: "2k26",
    preview: "Built responsive web experiences",
    duration: "2026",
    responsibilities: [
      "Built responsive, accessible web interfaces",
      "Translated designs into production-ready components",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    achievements: ["Shipped multiple client-facing pages on schedule"],
    proof: [
      { label: "GitHub work", url: "[GITHUB_WORK_LINK_1]" },
      { label: "Read on Medium", url: "[MEDIUM_LINK_1]" },
    ],
  },
  {
    id: "drdl",
    org: "DRDL",
    role: "Team Lead",
    year: "2k25",
    preview: "Led a DRDO-backed drone simulation project",
    duration: "2025",
    responsibilities: [
      "Led a team on a DRDO-backed drone simulation project",
      "Owned planning, reviews and final presentation",
    ],
    skills: ["Python", "Simulation", "Team Leadership"],
    achievements: ["Delivered a working simulation demo to mentors"],
    proof: [
      { label: "GitHub work", url: "[GITHUB_WORK_LINK_2]" },
      { label: "Read on Medium", url: "[MEDIUM_LINK_2]" },
      { label: "Supporting document", url: LINKS.workDoc },
    ],
  },
  {
    id: "infosys",
    org: "Infosys Springboard",
    role: "Cohort 2 Participant",
    year: "2k24",
    preview: "Learning, building & growing",
    duration: "2024",
    responsibilities: ["Completed guided learning tracks and build tasks"],
    skills: ["UI/UX", "Web Development"],
    achievements: ["Certified across multiple Springboard tracks"],
    proof: [{ label: "Supporting document", url: LINKS.workDoc }],
  },
  {
    id: "kiye",
    org: "KIYE foundation",
    role: "Student Coordinator",
    year: "2k23",
    preview: "Coordinated student activities, events & engagement",
    duration: "2023",
    responsibilities: ["Coordinated student activities, events & engagement"],
    skills: ["Communication", "Event Management"],
    achievements: ["Grew participation across campus events"],
    proof: [{ label: "View LinkedIn Post", url: "[KIYE_LINKEDIN_POST_URL]" }],
  },
];

/* ---------------- Certificates (Communities) ---------------- */

export type Certificate = {
  title: string;
  org: string;
  url: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: "Complete Figma Course: Web & Mobile Projects from Scratch",
    org: "Udemy",
    url: "[GOOGLE_DOC_LINK]",
  },
  { title: "Mastering Figma", org: "Udemy", url: "[GOOGLE_DOC_LINK]" },
  { title: "Introduction to UI/UX", org: "Infosys", url: "[GOOGLE_DOC_LINK]" },
  { title: "Web Development", org: "[ORGANIZATION]", url: "[GOOGLE_DOC_LINK]" },
  { title: "HTML and CSS curse", org: "Infosys", url: "[GOOGLE_DOC_LINK]" },
  { title: "Generative AI", org: "[ORGANIZATION]", url: "[GOOGLE_DOC_LINK]" },
  {
    title: "Introduction to Generative AI with Google Cloud",
    org: "Google Cloud",
    url: "[GOOGLE_DOC_LINK]",
  },
  {
    title: "The Joy of Computing using Python",
    org: "NPTEL",
    url: "[GOOGLE_DOC_LINK]",
  },
  { title: "Gemini in Gmail", org: "Google Cloud", url: "[GOOGLE_DOC_LINK]" },
  { title: "Power BI", org: "Microsoft", url: "[GOOGLE_DOC_LINK]" },
];

/* ---------------- Contact (Calls) ---------------- */

export const CONTACTS = [
  { id: "email", label: LINKS.email, href: `mailto:${LINKS.email}` },
  { id: "linkedin", label: "in/jiya17batra", href: LINKS.linkedin },
  { id: "github", label: "github.com/jiya17batra", href: LINKS.github },
  { id: "behance", label: "behance.net/jiya17batra", href: LINKS.behance },
];
