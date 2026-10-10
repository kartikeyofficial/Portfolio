import { SkillGroup, Project, Experience, Achievement, EducationItem } from '../models/portfolio.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Group Skills & Programming Languages',
    icon: 'fa-solid fa-code',
    skills: [
      {
        name: 'C++',
        category: 'languages',
        iconClass: 'devicon-cplusplus-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'DSA, STL, High Performance Algorithms'
      },
      {
        name: 'Python',
        category: 'languages',
        iconClass: 'devicon-python-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-advanced',
        description: 'Backends, Scripting, Automation'
      },
      {
        name: 'JavaScript (ES6+)',
        category: 'languages',
        iconClass: 'devicon-javascript-plain colored',
        proficiency: 'Expert',
        proficiencyClass: 'proficiency-expert',
        description: 'Asynchronous Programming, Event Loop, DOM'
      },
      {
        name: 'TypeScript',
        category: 'languages',
        iconClass: 'devicon-typescript-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Static Typing, Interfaces, Generics, OOP'
      },
      {
        name: 'Java',
        category: 'languages',
        iconClass: 'devicon-java-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Core Java, OOP Concepts, Collections'
      },
      {
        name: 'SQL',
        category: 'languages',
        iconClass: 'devicon-mysql-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'Complex Queries, Indexing, Joins, Triggers'
      },
      {
        name: 'HTML5 & CSS3',
        category: 'languages',
        iconClass: 'devicon-html5-plain colored',
        proficiency: 'Mastery',
        proficiencyClass: 'proficiency-expert',
        description: 'Semantic Markup, Responsive Layouts, Flex/Grid'
      }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: 'fa-solid fa-cubes',
    skills: [
      {
        name: 'Angular',
        category: 'frameworks',
        iconClass: 'devicon-angularjs-plain colored',
        proficiency: 'Expert',
        proficiencyClass: 'proficiency-expert',
        description: 'Components, Signals, RxJS, Dependency Injection'
      },
      {
        name: 'React.js',
        category: 'frameworks',
        iconClass: 'devicon-react-original colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'Hooks, Virtual DOM, Component Architecture'
      },
      {
        name: 'Next.js',
        category: 'frameworks',
        iconClass: 'devicon-nextjs-original',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'SSR, SSG, App Router, SEO Optimization'
      },
      {
        name: 'Node.js',
        category: 'frameworks',
        iconClass: 'devicon-nodejs-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'RESTful Servers, Streams, Fast I/O'
      },
      {
        name: 'Express.js',
        category: 'frameworks',
        iconClass: 'devicon-express-original',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'Middlewares, Route Handlers, JWT Auth'
      },
      {
        name: 'Redux Toolkit',
        category: 'frameworks',
        iconClass: 'devicon-redux-original colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Global State Management, Slices, Thunks'
      },
      {
        name: 'Tailwind CSS',
        category: 'frameworks',
        iconClass: 'devicon-tailwindcss-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'Utility-first Styling, Responsive Theming'
      }
    ]
  },
  {
    id: 'database-cloud',
    title: 'Database & Cloud Technologies',
    icon: 'fa-solid fa-database',
    skills: [
      {
        name: 'MongoDB',
        category: 'database-cloud',
        iconClass: 'devicon-mongodb-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'NoSQL Schemas, Aggregation Pipelines, Mongoose'
      },
      {
        name: 'PostgreSQL',
        category: 'database-cloud',
        iconClass: 'devicon-postgresql-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Relational Modeling, ACID Compliance, Foreign Keys'
      },
      {
        name: 'MySQL',
        category: 'database-cloud',
        iconClass: 'devicon-mysql-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Normalization, Stored Procedures, Transactions'
      },
      {
        name: 'Redis',
        category: 'database-cloud',
        iconClass: 'devicon-redis-plain colored',
        proficiency: 'Intermediate',
        proficiencyClass: 'proficiency-intermediate',
        description: 'In-Memory Caching, Key-Value Store, Rate Limiting'
      },
      {
        name: 'AWS Cloud',
        category: 'database-cloud',
        iconClass: 'devicon-amazonwebservices-original colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'EC2, S3, IAM, CloudFront, Lambda Serverless'
      },
      {
        name: 'Firebase',
        category: 'database-cloud',
        iconClass: 'devicon-firebase-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Authentication, Realtime Firestore, Cloud Hosting'
      },
      {
        name: 'Supabase',
        category: 'database-cloud',
        iconClass: 'fa-solid fa-bolt-lightning highlight-text',
        isFontAwesome: true,
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-intermediate',
        description: 'Managed Postgres, Row-Level Security, Auth'
      }
    ]
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools & DevOps',
    icon: 'fa-solid fa-screwdriver-wrench',
    skills: [
      {
        name: 'Git',
        category: 'dev-tools',
        iconClass: 'devicon-git-plain colored',
        proficiency: 'Expert',
        proficiencyClass: 'proficiency-expert',
        description: 'Branching Strategies, Merge Conflicts, Rebase'
      },
      {
        name: 'GitHub & Actions',
        category: 'dev-tools',
        iconClass: 'devicon-github-original',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'CI/CD Pipelines, Code Reviews, Release Tags'
      },
      {
        name: 'Docker',
        category: 'dev-tools',
        iconClass: 'devicon-docker-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-intermediate',
        description: 'Containerization, Dockerfile, Docker Compose'
      },
      {
        name: 'Postman',
        category: 'dev-tools',
        iconClass: 'devicon-postman-plain colored',
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'API Testing, Automated Collections, Environment Variables'
      },
      {
        name: 'VS Code',
        category: 'dev-tools',
        iconClass: 'devicon-vscode-plain colored',
        proficiency: 'Mastery',
        proficiencyClass: 'proficiency-expert',
        description: 'Profiling, Debugging, Custom Workspace Configs'
      },
      {
        name: 'Linux / Bash',
        category: 'dev-tools',
        iconClass: 'devicon-linux-plain',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Shell Scripting, Process Management, Remote SSH'
      },
      {
        name: 'Vite & npm',
        category: 'dev-tools',
        iconClass: 'devicon-vitejs-plain colored',
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Bundling, Hot Module Reloading, Dependency Auditing'
      }
    ]
  },
  {
    id: 'core-concepts',
    title: 'Core Computer Science Concepts',
    icon: 'fa-solid fa-graduation-cap',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-network-wired highlight-text',
        isFontAwesome: true,
        proficiency: 'Strong',
        proficiencyClass: 'proficiency-expert',
        description: 'Trees, Graphs, Dynamic Programming, Greedy, Heaps'
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-sitemap highlight-text',
        isFontAwesome: true,
        proficiency: 'Strong',
        proficiencyClass: 'proficiency-expert',
        description: 'Encapsulation, Polymorphism, Inheritance, SOLID'
      },
      {
        name: 'System Design',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-server highlight-text',
        isFontAwesome: true,
        proficiency: 'Intermediate',
        proficiencyClass: 'proficiency-intermediate',
        description: 'Scalability, Load Balancers, Microservices, Caching'
      },
      {
        name: 'RESTful API Architecture',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-arrow-right-arrow-left highlight-text',
        isFontAwesome: true,
        proficiency: 'Advanced',
        proficiencyClass: 'proficiency-expert',
        description: 'Statelessness, HTTP Verbs, Rate Limiting, JWT Tokens'
      },
      {
        name: 'DBMS & Query Optimization',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-table highlight-text',
        isFontAwesome: true,
        proficiency: 'Strong',
        proficiencyClass: 'proficiency-advanced',
        description: 'ACID Transactions, Indexes, B-Trees, Normalization'
      },
      {
        name: 'Operating Systems',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-microchip highlight-text',
        isFontAwesome: true,
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'Concurrency, Memory Paging, Deadlocks, Scheduling'
      },
      {
        name: 'Computer Networks',
        category: 'core-concepts',
        iconClass: 'fa-solid fa-wifi highlight-text',
        isFontAwesome: true,
        proficiency: 'Proficient',
        proficiencyClass: 'proficiency-advanced',
        description: 'TCP/IP Model, DNS, HTTP/HTTPS, WebSockets, SSL/TLS'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'DevSync - Real-Time Collaborative Workspace',
    category: 'fullstack',
    description: 'A modern real-time collaborative development platform featuring synchronized code editing, live chat rooms, project task boards, and automated role-based access control (RBAC). Built with low-latency WebSockets for instant state sync across clients.',
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/kartikey-rajput/devsync-workspace',
    liveUrl: 'https://devsync-preview.vercel.app',
    featured: true,
    gradientClass: 'project-gradient-1',
    previewIcon: 'fa-solid fa-diagram-project',
    tag: 'Full Stack Web App'
  },
  {
    id: 2,
    title: 'OmniMarket - Scalable E-Commerce & Admin Hub',
    category: 'fullstack',
    description: 'Full-featured e-commerce ecosystem with advanced product filtering, lightning-fast search, dynamic shopping cart, Stripe secure payment checkout, order tracking, and an analytical administrator dashboard for real-time inventory management.',
    techStack: ['Angular', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Tailwind'],
    githubUrl: 'https://github.com/kartikey-rajput/omnimarket-platform',
    liveUrl: 'https://omnimarket-store.vercel.app',
    featured: true,
    gradientClass: 'project-gradient-2',
    previewIcon: 'fa-solid fa-cart-shopping',
    tag: 'E-Commerce Platform'
  },
  {
    id: 3,
    title: 'SecureAuth & Rate-Limited Microservice API',
    category: 'backend',
    description: 'A hardened backend microservice engine featuring OAuth2, JWT authentication with token refresh rotators, Redis-backed sliding window rate limiting, and comprehensive OpenAPI / Swagger documentation. Fully dockerized for seamless deployment.',
    techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/kartikey-rajput/secureauth-api-engine',
    liveUrl: 'https://api-docs-preview.onrender.com',
    featured: false,
    gradientClass: 'project-gradient-3',
    previewIcon: 'fa-solid fa-server',
    tag: 'Backend Architecture'
  },
  {
    id: 4,
    title: 'AlgoScope - Graph & Sorting Visualizer',
    category: 'frontend',
    description: 'An interactive web-based algorithm visualizer that animates graph traversal (Dijkstra, BFS, DFS) and sorting algorithms (QuickSort, MergeSort) step-by-step with adjustable speed controls, custom input arrays, and detailed time-complexity breakdowns.',
    techStack: ['Angular', 'TypeScript', 'HTML5 Canvas', 'CSS3'],
    githubUrl: 'https://github.com/kartikey-rajput/algoscope-visualizer',
    liveUrl: 'https://algoscope.vercel.app',
    featured: false,
    gradientClass: 'project-gradient-4',
    previewIcon: 'fa-solid fa-network-wired',
    tag: 'Interactive Tool'
  },
  {
    id: 5,
    title: 'InsightAI - Document & Code Assistant',
    category: 'fullstack',
    description: 'An intelligent web application that parses developer markdown docs, code repositories, and technical articles to generate concise executive summaries, extract action items, and provide context-aware natural language question answering.',
    techStack: ['Angular', 'Python FastAPI', 'OpenAI API', 'Tailwind'],
    githubUrl: 'https://github.com/kartikey-rajput/insight-ai-assistant',
    liveUrl: 'https://insight-ai-demo.vercel.app',
    featured: true,
    gradientClass: 'project-gradient-5',
    previewIcon: 'fa-solid fa-robot',
    tag: 'AI Integration'
  },
  {
    id: 6,
    title: 'KanbanFlow - Agile Sprint & Task Tracker',
    category: 'fullstack',
    description: 'Drag-and-drop Kanban board application engineered for engineering teams. Supports sprint management, task prioritization, due date reminders, Markdown notes, and team collaboration with instant cloud sync.',
    techStack: ['Angular', 'Firebase', 'CSS3', 'DragDropModule'],
    githubUrl: 'https://github.com/kartikey-rajput/kanban-flow-tracker',
    liveUrl: 'https://kanbanflow-demo.web.app',
    featured: false,
    gradientClass: 'project-gradient-6',
    previewIcon: 'fa-solid fa-list-check',
    tag: 'Productivity SaaS'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'TechCorp Innovations',
    companyTag: 'Remote',
    companyLogoClass: 'logo-tech',
    companyLogoIcon: 'fa-solid fa-laptop-code',
    period: 'June 2024 – Nov 2024',
    intro: 'Contributed to the core product engineering team building customer-facing web portals and high-throughput backend services.',
    bulletPoints: [
      'Engineered RESTful Microservices: Architected 12+ reusable API endpoints using Node.js & Express, improving service response times by 32%.',
      'Frontend Optimization: Developed responsive, accessible UI modules using Angular and modern reactive states, decreasing page load times by 28%.',
      'Database Architecture: Optimized complex MongoDB aggregation pipelines and indexing, reducing slow query execution times.',
      'CI/CD & Collaboration: Integrated automated unit testing and participated in agile sprints, daily standups, and peer code reviews.'
    ],
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Git & GitHub'],
    statusBadge: 'Successfully Completed',
    certificate: {
      title: 'Software Developer Internship Completion Certificate',
      organization: 'TechCorp Innovations',
      issueDate: 'November 2024',
      credentialId: 'TC-INT-2024-8841',
      description: 'Successfully completed 6-month Software Developer Internship with distinction, demonstrating expertise in full-stack web engineering, API design, and agile teamwork.',
      badge: 'Verified Internship Credential'
    }
  },
  {
    id: 2,
    role: 'Full Stack Web Development Intern',
    company: 'Apex Digital Solutions',
    companyTag: 'Hybrid',
    companyLogoClass: 'logo-cloud',
    companyLogoIcon: 'fa-solid fa-cloud-arrow-up',
    period: 'Jan 2024 – May 2024',
    intro: 'Collaborated with senior engineers to implement enterprise dashboard interfaces and cloud integration workflows.',
    bulletPoints: [
      'Dashboard Development: Built real-time analytics data tables and interactive charts using Angular and Chart.js.',
      'API Integration: Connected frontend components with third-party payment gateways and cloud storage APIs (AWS S3).',
      'Bug Resolution: Diagnosed and resolved 35+ critical UI responsiveness issues and cross-browser discrepancies.',
      'Security Practices: Enforced client-side input validation and JWT token storage best practices to avoid XSS vulnerabilities.'
    ],
    techStack: ['JavaScript', 'Angular', 'REST APIs', 'AWS S3', 'CSS3 / Tailwind'],
    statusBadge: 'Successfully Completed',
    certificate: {
      title: 'Full Stack Web Development Internship Certificate',
      organization: 'Apex Digital Solutions',
      issueDate: 'May 2024',
      credentialId: 'ADS-WEB-2024-5219',
      description: 'Awarded for stellar performance in frontend engineering, cloud asset pipelines, and building scalable UI dashboards.',
      badge: 'Verified Internship Credential'
    }
  },
  {
    id: 3,
    role: 'Open Source Contributor & Dev Lead',
    company: 'Developer Student Community',
    companyTag: 'Campus & Online',
    companyLogoClass: 'logo-open-source',
    companyLogoIcon: 'fa-brands fa-git-alt',
    period: 'Aug 2023 – Present',
    intro: 'Mentoring aspiring developers and contributing to open-source developer toolkits, documentation, and web starter kits.',
    bulletPoints: [
      'Authored reusable UI component libraries and CLI scaffolds adopted by 150+ student developers.',
      'Conducted hands-on technical workshops on Data Structures in C++, Git version control, and Full-Stack fundamentals.'
    ],
    techStack: ['C++', 'TypeScript', 'Open Source', 'Mentorship', 'Git'],
    statusBadge: 'Ongoing Community Impact'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuerIcon: 'fa-brands fa-aws highlight-text',
    bannerClass: 'banner-aws',
    watermarkIcon: 'devicon-amazonwebservices-original',
    pillText: 'Certified',
    description: 'Demonstrated foundational knowledge of cloud concepts, AWS core services, security compliance, architecture principles, and cloud economics.',
    issueDate: '2024',
    credentialId: 'AWS-CP-98124',
    certificateDetails: {
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services (AWS)',
      issueDate: '2024',
      credentialId: 'AWS-CP-98124',
      description: 'Demonstrated in-depth proficiency across cloud computing fundamentals, compute, storage, VPC networking, IAM security, and architectural best practices.',
      badge: 'Official AWS Credential'
    }
  },
  {
    id: 2,
    title: 'Full Stack Developer Specialization',
    issuer: 'Coursera / Meta',
    issuerIcon: 'fa-solid fa-graduation-cap highlight-text',
    bannerClass: 'banner-meta',
    watermarkIcon: 'devicon-angularjs-plain',
    pillText: 'Certified',
    description: 'Comprehensive certification covering modern JavaScript, component hierarchies, RESTful backend APIs, database management, and version control workflows.',
    issueDate: '2024',
    credentialId: 'META-FS-3392',
    certificateDetails: {
      title: 'Meta Full Stack Developer Specialization',
      organization: 'Coursera / Meta',
      issueDate: '2024',
      credentialId: 'META-FS-3392',
      description: 'Rigorous specialization mastering end-to-end web engineering, reactive UI mechanics, Node/Python backends, and responsive design systems.',
      badge: 'Professional Specialization'
    }
  },
  {
    id: 3,
    title: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    issuerIcon: 'fa-solid fa-code highlight-text',
    bannerClass: 'banner-hackerrank',
    watermarkIcon: 'fa-solid fa-code',
    pillText: 'Gold Badge',
    description: 'Validated expertise in complex algorithmic problem solving, dynamic programming, graph theory, data structures, and optimal time-space complexity analysis.',
    issueDate: '2023',
    credentialId: 'HR-PS-77401',
    certificateDetails: {
      title: 'Problem Solving (Intermediate) Certificate',
      organization: 'HackerRank',
      issueDate: '2023',
      credentialId: 'HR-PS-77401',
      description: 'Demonstrated verified problem-solving capabilities by implementing advanced algorithms under strict timed constraints.',
      badge: 'Verified Skill Badge'
    }
  },
  {
    id: 4,
    title: '500+ DSA Problems Solved & Knight Badge',
    issuer: 'LeetCode',
    issuerIcon: 'fa-solid fa-fire highlight-text',
    bannerClass: 'banner-leetcode',
    watermarkIcon: 'fa-solid fa-trophy',
    pillText: 'Milestone',
    description: 'Consistent competitive programming track record with over 500 algorithmic challenges solved across Arrays, Trees, Graphs, Strings, and Dynamic Programming.',
    issueDate: 'Continuous',
    credentialId: 'Top 15% Rating',
    externalLink: 'https://leetcode.com/kartikey-rajput',
    certificateDetails: {
      title: 'LeetCode 500+ Problems Solved Milestone',
      organization: 'LeetCode',
      issueDate: 'Continuous',
      credentialId: 'Top 15% Rating',
      description: 'Consistently ranked in the top 15% globally across weekly contests with 500+ problems solved across data structures and algorithms.',
      badge: 'Competitive Milestone'
    }
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Science and Engineering (CSE)',
    institution: 'Reputed University / Institute of Technology, India',
    period: '2021 – 2025',
    summary: 'Rigorous 4-year curriculum focusing on core software engineering, computer architectures, algorithmic complexity, database systems, and networking protocols.',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Object Oriented Programming',
      'Software Engineering',
      'Cloud Computing',
      'Web Technologies'
    ],
    stats: [
      { num: '8.5+', label: 'CGPA / Aggregate' },
      { num: "Dean's List", label: 'Academic Excellence' },
      { num: 'Final Year', label: 'Capstone Project Lead' }
    ]
  },
  {
    degree: 'Senior Secondary (Class XII - PCM)',
    branch: 'Physics, Chemistry & Mathematics',
    institution: 'Central Board of Secondary Education (CBSE)',
    period: '2019 – 2021',
    summary: 'Graduated with distinction with a core focus on advanced mathematics, scientific logic, analytical calculus, and computer science basics.',
    coursework: [
      'Advanced Mathematics',
      'Physics',
      'Computer Science (Python & SQL)'
    ]
  }
];
