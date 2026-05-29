import type { PortfolioData } from "@/types"

export const portfolioData: PortfolioData = {
  name: "Brian Sangermano",
  title: "Software Engineer | Frontend & Fullstack Developer",
  email: "Briansangermano@gmail.com",
  linkedin: "linkedin.com/in/brian-sangermano",
  summary:
    "Software Engineer with 6+ years of experience building high-performance web applications with React, JavaScript, TypeScript, Vue.js, and Next.js. Focused on performance optimization and maintainable code built to last. Experienced working in frontend teams within Agile/Scrum environments, with a strong emphasis on clear communication and continuous improvement.",

  experience: [
    {
      company: "Clorian",
      role: "Frontend Developer",
      period: "Apr 2024 – Present",
      description: [
        "Developed and maintained React + TypeScript applications in production, ensuring code stability and long-term maintainability.",
        "Integrated APIs and backend services to deliver dynamic, high-performance interfaces for high-traffic ticketing platforms.",
        "Built custom UI components and checkout/payment modules, directly contributing to improved conversion rates.",
        "Collaborated with UX/UI designers to create responsive, accessible interfaces aligned with modern web standards.",
        "Optimized and refactored existing frontend codebases, reducing technical debt and improving rendering performance.",
      ],
    },
    {
      company: "PinApp",
      role: "Frontend Developer",
      period: "May 2023 – Dec 2023",
      description: [
        "Built an e-commerce frontend with React and VtexIO, enabling a reusable module architecture across client platforms.",
        "Designed and implemented responsive interfaces using React, CSS Flexbox, and GraphQL data layers.",
        "Delivered custom checkout modules, improving purchase flow reliability and UX consistency.",
        "Documented and refactored the frontend codebase, increasing team velocity and onboarding efficiency.",
      ],
    },
    {
      company: "Radium Rocket",
      role: "Software Engineer (Frontend Focus)",
      period: "May 2018 – May 2023",
      description: [
        "Contributed to the frontend team across multiple client projects, building stable and maintainable React codebases with Redux.",
        "Drove performance optimization initiatives by applying responsive image best practices and CSS Flexbox techniques.",
        "Designed RESTful APIs and performed code analysis for system testing, bridging frontend-backend integration.",
        "Developed interactive UIs based on client goals and behavior patterns to optimize the user experience.",
        "Presented progress and new features in SCRUM ceremonies to team leads and the broader team.",
      ],
    },
    {
      company: "Dodwing",
      role: "Frontend Developer",
      period: "May 2017 – Apr 2018",
      description: [
        "Participated in the full SDLC: design, coding, testing, debugging, and production support for web applications.",
        "Designed and developed client-side JavaScript solutions including web forms and process simulation tools.",
        "Built a proof-of-concept web application for occupational health and safety needs.",
        "Delivered product manuals and client training, maintaining close relationships with stakeholders.",
      ],
    },
    {
      company: "Interamerican Open University",
      role: "Frontend Developer",
      period: "Mar 2016 – May 2017",
      description: [
        "Built and maintained frontend websites using JavaScript and React for internal university platforms.",
        "Developed and maintained API endpoints for an external service enabling customer data access.",
        "Responsible for code reviews, releases, and selecting new tools and libraries to modernize the stack.",
        "Added features using React, Redux, and Lodash; enforced ES6 standards and version control with Git.",
      ],
    },
  ],

  projects: [
    {
      name: "QIRA",
      description:
        "E-commerce platform for countryside-oriented products, enabling the company to sell agricultural supplies and equipment online. Built with a modern React + TypeScript stack.",
      technologies: [
        "JavaScript", "React", "Redux", "TypeScript", "CSS", "Flexbox", "HTML",
        "Node.js", "GraphQL", "MongoDB", "Git", "JIRA", "SCRUM",
      ],
      image: "/images/project-quira.png",
      url: "https://www.qiraglobal.com/",
    },
    {
      name: "SimpleQ",
      description:
        "Mobile app for organizing small and casual events with friends or family. Developed with React Native for Android and iOS devices, working with Scrum in a 6-member team.",
      technologies: [
        "JavaScript", "React", "Redux", "TypeScript", "CSS", "Flexbox", "HTML",
        "Node.js", "GraphQL", "MongoDB", "Git", "JIRA", "SCRUM",
      ],
      image: "/images/project-simpleq.png",
    },
    {
      name: "Inmediata",
      description:
        "Web and mobile application enabling large companies to conduct government surveys, market research, and data analysis for informed decision-making.",
      technologies: [
        "React.js", "Redux", "Axios", "CSS", "Flexbox", "Date-fns", "Styled Components",
        "React Native", "React Navigation", "Redux-Saga", "React Hooks", "React Hook Forms",
        "Flow", "Immutable.js", "HTML", "Node.js", "Express", "MongoDB", "Jest",
        "Git", "JIRA", "SCRUM",
      ],
      image: "/images/project-inmediata.png",
    },
    {
      name: "Promart",
      description:
        "E-commerce platform for Promart Homecenter, the leading home improvement retailer in Ecuador and Peru, part of the Intercorp Retail group. Built with VtexIO and React.",
      technologies: [
        "VtexIO", "JavaScript", "React", "Redux", "TypeScript", "CSS", "Flexbox", "HTML",
        "Node.js", "GraphQL", "MongoDB", "Git", "JIRA", "SCRUM",
      ],
      image: "/images/project-promart.png",
      url: "https://www.promart.ec/",
    },
    {
      name: "Wastplace",
      description:
        "Full-stack web application built with React, TypeScript, and Node.js, leveraging GraphQL and MongoDB for efficient data management.",
      technologies: [
        "JavaScript", "React", "Redux", "TypeScript", "CSS", "Flexbox", "HTML",
        "Node.js", "GraphQL", "MongoDB", "Git", "JIRA", "SCRUM",
      ],
      image: "/images/project-wastplace.png",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React", "React Hooks", "Redux", "Zustand", "React Query", "Vue.js",
        "Next.js", "Material-UI", "Styled Components", "Tailwind CSS",
        "Framer Motion", "React Router", "React Navigation",
      ],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Vite", "Webpack", "Vercel", "Storybook", "Figma", "Firebase", "JIRA", "Azure", "VtexIO"],
    },
    {
      category: "Testing",
      items: ["Jest", "React Testing Library", "Playwright"],
    },
    {
      category: "APIs & Databases",
      items: ["REST API", "Node", "Express", "GraphQL", "MongoDB", "Mongoose"],
    },
    {
      category: "AI Development Tools",
      items: ["GitHub Copilot", "Cursor", "Claude", "SDD", "OpenCode"],
    },
    {
      category: "Practices",
      items: ["SOLID", "SCRUM", "Responsive Design", "Flexbox", "SDLC", "CI/CD", "Performance Optimization", "Refactoring"],
    },
  ],

  education: {
    degree: "Software Engineering",
    institution: "Interamerican Open University",
    period: "2015 – 2020",
  },

  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Intermediate (B1–B2)" },
  ],

  certificates: [
    {
      name: "Diplomatura en Inteligencia Artificial",
      issuer: "Nuclio",
      date: "2025",
      file: "/images/certificates/Nuclio-IA.png",
      type: "image",
    },
    {
      name: "Curso IA: De 0 a Agentes",
      issuer: "Big School",
      date: "2025",
      file: "/images/certificates/BigSchool-IA.png",
      type: "image",
    },
  ],
}
