// ============================================================================
// WEBSITE CONTENT CONFIG
// Edit this file to update all text on your website
// ============================================================================

// --- SITE METADATA ---
export const siteMetadata = {
  name: 'menooa',
  title: 'Vehicle Hardware and Dynamics Team Lead',
  description: 'I currently work as a Vehicle Hardware and Dynamics Team Lead at Cal Sol.',
};

// --- HERO SECTION ---
export const heroContent = {
  greeting: 'hey, i\'m menooa 👋',
  bio: 'I currently work as a Vehicle Hardware and Dynamics Team Lead at ',
  badges: [
    {
      name: 'Cal Sol',
      icon: '☀️',
      url: 'https://calsol.berkeley.edu',
    },
    {
      name: 'Ferrari',
      icon: '🏎️',
      url: 'https://www.ferrari.com',
    },
    {
      name: 'University of California, Berkeley',
      icon: '🔵',
      url: 'https://www.berkeley.edu',
    },
  ],
  bioMiddle: '. I previously worked at ',
  bioEnd: ' as a Mechanical Engineering Intern. I\'m currently studying Mechanical Engineering at ',
  links: [
    {
      label: 'linkedin',
      url: 'https://www.linkedin.com/in/danielmangasarian/',
    },
    {
      label: 'email',
      url: 'mailto:danielmangasarian@gmail.com',
    },
    {
      label: 'resume',
      url: '#',
    },
    {
      label: 'portfolio',
      url: '#',
    },
  ],
};

// --- EXPERIENCES ---
export const experiences = [
  {
    role: 'TBD',
    organization: 'TBD',
    period: 'TBD',
  },
  {
    role: 'TBD',
    organization: 'TBD',
    period: 'TBD',
  },
  {
    role: 'TBD',
    organization: 'TBD',
    period: 'TBD',
  },
  {
    role: 'TBD',
    organization: 'TBD',
    period: 'TBD',
  },
];

// --- EDUCATION ---
export const education = [
  {
    degree: 'Bachelor of Science in General Biology',
    institution: 'University of California, San Diego',
    period: '2023 - 2025',
    details: 'GPA: 3.8, Provost Honors',
  },
  {
    degree: 'General Biology',
    institution: 'Glendale Community College',
    period: '2021 - 2023',
    details: 'GPA: 3.8, Honors',
  },
];

// --- PUBLISHED PAPERS ---
export const publishedPapers = [
  {
    title: 'TBD',
    authors: 'TBD',
    journal: 'TBD',
    year: 'TBD',
    doi: 'https://example.com',
  },
  {
    title: 'TBD',
    authors: 'TBD',
    journal: 'TBD',
    year: 'TBD',
    doi: 'https://example.com',
  },
];

// --- ARTICLES ---
export const articles = {
  featured: {
    title: 'TBD',
    description: 'TBD',
    date: 'TBD',
    link: '#',
  },
  seeAllLink: '#',
};

// --- RESOURCES & CONNECT ---
export const resources = [
  {
    icon: '📄',
    label: 'Resume',
    href: '#',
  },
  {
    icon: '💼',
    label: 'Portfolio',
    href: '#',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danielmangasarian/',
  },
  {
    icon: '💻',
    label: 'GitHub',
    href: 'https://github.com/dannymango777',
  },
  {
    icon: '✉️',
    label: 'Email',
    href: 'mailto:danielmangasarian@gmail.com',
  },
];

// --- TOOLS ---
export const toolsIntro = {
  heading: 'Tools',
  description: 'Useful web apps and utilities I\'m building. More coming soon.',
};

export type ToolStatus = 'Planned' | 'In progress' | 'Live';

export interface Tool {
  name: string;
  description: string;
  status: ToolStatus;
  href?: string;
  category: string;
  subcategory?: string;
}

export interface Subcategory {
  name: string;
  tools: Tool[];
}

export interface Category {
  name: string;
  description?: string;
  subcategories?: Subcategory[];
  tools: Tool[];
}

export const toolsData: Tool[] = [
  // Biology Toolkit - Bioinformatics
  {
    name: 'E-Z ORA',
    description: 'Upload gene list, run enrichment, export plots.',
    status: 'Planned',
    category: 'Biology Toolkit',
    subcategory: 'Bioinformatics',
  },
  {
    name: 'FASTA Utilities',
    description: 'Validate headers, deduplicate, quick transforms.',
    status: 'Planned',
    category: 'Biology Toolkit',
    subcategory: 'Bioinformatics',
  },
  // Biology Toolkit - Lab Ops
  {
    name: 'Sample Sheet Builder',
    description: 'Generate consistent metadata sheets.',
    status: 'Planned',
    category: 'Biology Toolkit',
    subcategory: 'Lab Ops',
  },
  // Personal Toolkit
  {
    name: 'Expense Splitter',
    description: 'Split group expenses quickly, export balances.',
    status: 'Planned',
    category: 'Personal Toolkit',
  },
  {
    name: 'Habit / Routine Tracker',
    description: 'Simple tracking with weekly views.',
    status: 'Planned',
    category: 'Personal Toolkit',
  },
];

export function organizeTools(tools: Tool[]): Category[] {
  const categoryMap = new Map<string, Category>();

  tools.forEach((tool) => {
    if (!categoryMap.has(tool.category)) {
      categoryMap.set(tool.category, {
        name: tool.category,
        subcategories: [],
        tools: [],
      });
    }

    const category = categoryMap.get(tool.category)!;

    if (tool.subcategory) {
      let subcategory = category.subcategories?.find(
        (sub) => sub.name === tool.subcategory
      );
      if (!subcategory) {
        subcategory = { name: tool.subcategory, tools: [] };
        category.subcategories?.push(subcategory);
      }
      subcategory.tools.push(tool);
    } else {
      category.tools.push(tool);
    }
  });

  return Array.from(categoryMap.values());
}

// --- FOOTER ---
export const footerContent = {
  copyrightName: 'Daniel Mangasarian',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/danielmangasarian/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/dannymango777',
    },
    {
      label: 'Email',
      href: 'mailto:danielmangasarian@gmail.com',
    },
  ],
};
