/**
 * ALL PORTFOLIO CONTENT LIVES HERE yooo if u are reading this then a hi from jiya.
 * Edit this file to update links / text — no UI code changes required.
 */

export const LINKS = {
  cv: "https://docs.google.com/document/d/CV_GOOGLE_DOC_LINK/edit",
  email: "jiya17batra@gmail.com",
  linkedin: "https://www.linkedin.com/in/jiya17batra",
  github: "https://github.com/jiya17batra",
  behance: "https://www.behance.net/jiya17batra",
  instagram: "https://www.instagram.com/sunsets2suitcases",
  
};

export type Category = "All" | "Projects" | "Case Study" | "Edu";

export type ChatId =
  | "cv"
  | "about"
  | "projects"
  | "portfolio"
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
    id: "portfolio",
    name: "Portfolio So Far ✨",
    preview: "A little collection of things I've designed & built →",
    categories: ["All"],
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
        "Started as the most average school kid possible — never the topper, never the backbencher, just permanently spawned in the middle row 😭. Then I watched Cyberpunk + Psycho-Pass and thought, yep, I'm gonna be an engineer and build futuristic sci-fi gadgets. Cut to engineering... I discovered UI/UX and accidentally fell in love with making screens pretty AND useful. So yeah, I came to build the future and ended up designing the buttons.",
    },
   {
      label: "Fun Facts",
      question: "Any fun facts?",
      answer:
        "I love photography 📸 and my ADHD has basically turned my career into a side-quest collection 😭. Coding? Tried it. UI/UX? Fell in love. Photography? Obviously. Events, anchoring, content, random creative experiments? Yep. Apparently having a main quest was never part of the plan.",
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
    title: "Banking Transaction Analysis",
    description:
      "An end-to-end banking analytics project for customer behavior analysis, fraud detection, and business insights.",
    tech: ["Python", "SQL", "MySQL"],
    github:
      "https://jiya17batra.github.io/Banking-Transaction-Analysis/",
  },
  {
    title: "AI Company Research",
    description:
      "An AI-powered research tool that analyzes companies, finds competitors, and generates downloadable reports.",
    tech: ["TypeScript", "AI", "Serper.dev", "OpenRouter"],
    github:
      "https://ai-company-research-aame3ra1t-jiya17batra-2918s-projects.vercel.app/",
  },
  {
    title: "Good Morning, India",
    description:
      "An interactive experience inspired by the sounds, colours and atmosphere of Indian mornings.",
    tech: ["TypeScript", "Interactive Web", "Creative Design"],
    github:
      "https://good-morning-india-psi.vercel.app/",
  },
  {
    title: "Event Nexus",
    description:
      "A personalized event discovery platform with event search, filters, calendar, RSVP and notifications.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://jiya17batra.github.io/Tracker/",
  },
  {
    title: "Pancha Mahabhuta",
    description:
      "An interactive web experience where ancient Indian elements meet modern web design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/jiya17batra/Pancha-Mahabhuta",
  },
  {
    title: "Ved Aura",
    description:
      "A creative interactive web experience blending Indian-inspired visuals, animation and smooth interactions.",
    tech: ["HTML", "CSS", "GSAP"],
    github:
      "https://jiya17batra.github.io/Ved-Aura----HTML-CSS-GSAP-drippin-in-smooth-vibes/",
  },
  {
    title: "Ice Cream Palette",
    description:
      "An interactive ice cream-themed UI experience with animated 3D elements, flavour selection and a playful receipt-style contact page.",
    tech: ["HTML", "CSS", "JavaScript", "3D"],
    github:
      "https://jiya17batra.github.io/Ice-Cream-Palette/",
  },
  {
    title: "Under Construction 🚧",
    description:
      "Something new is cooking. Come back soon — the pixels are still being assembled.",
    tech: ["Coming Soon"],
    github: "#",
  },
];
/* ---------------- Portfolio Collection ---------------- */

export type Portfolio = {
  title: string;
  description: string;
  url: string;
};

export const PORTFOLIOS: Portfolio[] = [
  {
    title: "Portfolio 1",
    description: "My first portfolio — where the journey started.",
    url: "[https://jiya17batra.github.io/CODSOFT/Task1/index.html]",
  },
  {
    title: "Portfolio 2",
    description: "A redesigned interactive portfolio focused on storytelling..",
    url: "[https://jiya17batra.github.io/Interactive-Portfolio/]",
  },
  {
    title: "Portfolio 3",
    description: "Press Release: A redesigned portfolio showcasing a new editorial direction",
    url: "[https://jiya17batra.github.io/The-Portfolio-Times/]",
  },
  {
    title: "Portfolio 4",
    description: "A creative experiment combining design and development.",
    url: "[PORTFOLIO 4 LINK]",
  },
  {
    title: "Portfolio 5",
    description: "My current portfolio — the one you're exploring now.",
    url: "[PORTFOLIO 5 LI]",
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
    title: "[MALICIOUS USER PREDICTION IN MULTI-TENANT CLOUDS USING FEDERATED LEARNING
]",
    description: "[A federated learning-based system that collaboratively predicts and detects malicious user activities in multi-tenant cloud environments while preserving data privacy.]",
    year: "2026",
    url: "[https://ijerst.org/index.php/ijerst/article/view/2741]",
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
    place: "[VIGNAN'S INSTITUTE OF MANAGEMENT AND TECHNOLOGY FOR WOMEN]",
    year: "[2022-2026]",
    
  },
  {
    level: "Intermediate",
    title: "Intermediate",
    place: "[NARAYANA JR college COLLEGE]",
    year: "[2020-2022]",
  },
  {
    level: "School",
    title: "School",
    place: "[DEEKSHA MODEL HIGH SCHOOL]",
    year: "[2020]",
  },
];

/* ---------------- Enrichment ---------------- */
/* ---------------- Enrichment Activities ---------------- */

export type Activity = {
  title: string;
  role: string;
  description: string;
  linkedin: string;
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Inter-State Youth Exchange Program — Bihar",
    role: "Telangana Representative",
    description:
      "Represented Telangana at the national level during the Inter-State Youth Exchange Program in Gaya, Bihar. Took part in cultural exchange, interacted with participants from different states, and got to experience the whole 'represent your state' moment IRL 🇮🇳✨.",
    linkedin: "[https://www.instagram.com/p/DVyVHf8E4KJ/?igsi=ZmZkaGdxZjFyOXpo]",
  },
  {
    title: "Vigyan Vaibhav 2K25",
    role: "Coordinator & Organizer",
    description:
      "Coordinated a large-scale aerospace & defense event at Gachibowli Stadium, managing crowds, volunteers and event operations. Got to witness some serious science and meet Dr. G. Satheesh Reddy, Dr. Samir V. Kamat, Dr. Ummalaneni Raja Babu and other leaders from India's aerospace & defense ecosystem 🚀.",
    linkedin: "[https://www.linkedin.com/posts/jiya17batra_kiyefoundation-apjabdulkalam-vigyanvaibhav2k25-activity-7301867249789788160-mcH_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]",
  },
  {
    title: "INSPIRE-HYD 2024",
    role: "Coordinator — Best Coordinator Award",
    description:
      "Helped coordinate an event with 5,000+ students at Gachibowli Indoor Stadium. Managed people, pressure and approximately 5000 things happening at once — and somehow walked away with a Best Coordinator recognition. Also got the unforgettable chance to meet Dr. G. Satheesh Reddy, Glory Swarupa Ma'am, Dr. S. Somanath and Lieutenant General Karanbir Singh Barar 🚀.",
    linkedin: "[https://www.linkedin.com/posts/jiya17batra_kiye-inspirehyd2024-inspire2k24-activity-7313620818066862080-JYKL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]",
  },
  {
    title: "Flutter Workshop",
    role: "Anchor & Host",
    description:
      "Hosted a college Flutter workshop with my partner-in-crime Vaishnavi. From Flutter fundamentals and hot reload to colour psychology, hands-on practice and a chaotic quiz showdown — basically kept the session moving while learning along the way 🎤💻.",
    linkedin: "[https://www.linkedin.com/posts/jiya17batra_flutter-flutterdev-techtalk-activity-7271596129765507073-tcmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]",
  },
  {
    title: "IBM AI & Cloud Bootcamp",
    role: "Anchor & Host",
    description:
      "Hosted a 3-day IBM bootcamp covering AI, Machine Learning, Prompt Engineering, IBM Cloud and chatbot development. Kept the sessions alive, learned how to talk to AI without it judging my prompts, and watched a chatbot come to life 🤖☁️.",
    linkedin: "[https://www.linkedin.com/posts/jiya17batra_ai-machinelearning-cloudcomputing-activity-7272652681205211136-IlDn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]",
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
      { label: "GitHub work", url: "https://github.com/jiya17batra/CODSOFT" },
      { label: "Check out my proof of work", url: "https://drive.google.com/file/d/1Mae_3uMo1vOZe5-uYaAcWNQAPTgu9fqV/view?usp=sharing" },
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
      { label: "GitHub work", url: "https://github.com/jiya17batra/DYSL-Internship" },
      { label: "Read on Medium", url: "https://medium.com/@jiya17batra/dysl-internship-project-simulated-drone-swarm-controller-88691eb6ae5d?sharedUserId=jiya17batra" },
      { label: "Check out my proof of work", url: "https://drive.google.com/file/d/14L9xUS1TeLH04stMFk1mWH37kLG0cBWB/view?usp=drive_link" },
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
    proof: [{ label: "Supporting document", url: "https://medium.com/@jiya17batra/from-a-pragati-participant-to-a-leader-my-infosys-springboard-cohort-2-journey-c2385c3d29ca?sharedUserId=jiya17batra" }],
    [{ label: "Check out my proof of work", url: "https://drive.google.com/file/d/1X1QnC9eGibxgmoks2x3W2_opoyxfTCKs/view?usp=sharing" }],
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
    proof: [{ label: "View LinkedIn Post from 2025", url: "[https://www.linkedin.com/posts/jiya17batra_kiyefoundation-apjabdulkalam-vigyanvaibhav2k25-activity-7301867249789788160-mcH_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]" }],
     [{ label: "View LinkedIn Post from 2024", url: "[https://www.linkedin.com/posts/jiya17batra_kiye-inspirehyd2024-inspire2k24-activity-7313620818066862080-JYKL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6azgcBAjsNejSfaIhfA1jvxbZydo40TAA]" }],
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
  { title: "Mastering Figma", org: "Udemy", url: "https://drive.google.com/file/d/1dbdZbpLMJ3p18JtsKUt8mYp9283GCWe-/view?usp=drive_link" },
  { title: "Introduction to UI/UX", org: "Infosys", url: "https://drive.google.com/file/d/1hSbkKN0ldIaFERfOhCho-C1W0fCPvJ9d/view?usp=drive_link" },
  { title: "Web Development", org: "Codsoft", url: "https://drive.google.com/file/d/1Mae_3uMo1vOZe5-uYaAcWNQAPTgu9fqV/view?usp=drive_link" },
  { title: "HTML and CSS curse", org: "Infosys", url: "[GOOGLE_DOC_LINK]" },
  { title: "Generative AI", org: "IBM", url: "[GOOGLE_DOC_LINK]" },
  {
    title: "Introduction to Generative AI with Google Cloud",
    org: "Google Cloud",
    url: "https://drive.google.com/file/d/1veS9bb9qsXayT5kn1yKEKxt2LRlKag_L/view?usp=sharing",
  },
  {
    title: "The Joy of Computing using Python",
    org: "NPTEL",
    url: "[GOOGLE_DOC_LINK]",
  },
  { title: "Gemini in Gmail", org: "Google Cloud", url: "[GOOGLE_DOC_LINK]" },
  { title: "Power BI", org: "Microsoft", url: "https://drive.google.com/file/d/1VE5I6lsd5HzWazofocsRwPsOMICmeZ2E/view?usp=drive_link" },
];

/* ---------------- Contact (Calls) ---------------- */

export const CONTACTS = [
  { id: "email", label: LINKS.email, href: `mailto:${LINKS.email}` },
  { id: "linkedin", label: "in/jiya17batra", href: LINKS.linkedin },
  { id: "github", label: "github.com/jiya17batra", href: LINKS.github },
  { id: "behance", label: "behance.net/jiya17batra", href: LINKS.behance },
];
