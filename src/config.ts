export const siteConfig = {
  title: "Daniel Mangasarian",
  description:
    "Vehicle Hardware and Dynamics Team Lead at CalSol. Studying Mech Engr at the University of California, Berkeley.",
  author: "Daniel Mangasarian",
  url: "https://www.danielmangasarian.com",
  themeColor: "#1a2332", // navy blue
} as const;

export const personalConfig = {
  name: "menooa",
  emoji: "👋",
  // Use [text](url) syntax for inline badge links - EASY TO EDIT
  description: `
  I currently work as a Vehicle Hardware and Dynamics Team Lead at [Cal Sol](https://calsol.berkeley.edu/). I previously worked at [Ferrari](https://www.ferrari.com/en-US) as a Mechanical Engineering Intern.
  
  I'm currently studying Mechanical Engineering at [University of California, Berkeley](https://me.berkeley.edu/).`,
  
  // Bottom links - EASY TO REORDER/ADD/REMOVE
  // Order: resume, linkedin, github, email
  externalLinks: [
    { href: "/resume-access", text: "resume" },  // Protected resume
    { href: "https://www.linkedin.com/in/danielmangasarian/", text: "linkedin" },
    { href: "https://github.com/dannymango777", text: "github" },
    { href: "mailto:danielmangasarian@gmail.com", text: "email" },
  ],
} as const;

// TOOLS SECTION - Easy to add categories and tools
export type ToolStatus = 'Planned' | 'In Progress' | 'Live';

export interface Tool {
  name: string;
  description: string;
  status: ToolStatus;
}

export interface Subcategory {
  name: string;
  tools: Tool[];
}

export interface Category {
  name: string;
  description?: string;
  subcategories?: Subcategory[];
  tools?: Tool[];
}

export interface ToolsConfig {
  enabled: boolean;
  heading: string;
  description: string;
  categories: Category[];
}

export const toolsConfig: ToolsConfig = {
  enabled: true,  // Toggle entire section
  heading: "Tools",
  description: "Useful web apps and utilities I'm building.",
  categories: [
    {
      name: "Biology Toolkit",
      description: "Bioinformatics and lab tools",
      subcategories: [
        {
          name: "Bioinformatics",
          tools: [
            { name: "E-Z ORA", description: "Upload gene list, run enrichment", status: "Planned" },
            { name: "FASTA Utilities", description: "Validate headers, deduplicate", status: "Planned" },
          ]
        },
        {
          name: "Lab Ops",
          tools: [
            { name: "Sample Sheet Builder", description: "Generate metadata sheets", status: "Planned" },
          ]
        }
      ]
    },
    {
      name: "Personal Toolkit", 
      description: "Personal utilities",
      tools: [
        { name: "Expense Splitter", description: "Split group expenses", status: "Planned" },
        { name: "Habit / Routine Tracker", description: "Simple tracking with weekly views", status: "Planned" },
      ]
    }
  ]
};

// Resume access control configuration
export const resumeConfig = {
  enabled: true,  // Toggle protection on/off
  pdfPath: "/resume.pdf",
  notificationTopic: "dannymango777-resume-access-12345",  // ntfy.sh topic
  timeoutMinutes: 5,
  messages: {
    requesting: "Requesting access from owner...",
    approved: "Access granted! Loading resume...",
    denied: "Access was denied.",
    timeout: "Request timed out. Please try again.",
  }
} as const;
