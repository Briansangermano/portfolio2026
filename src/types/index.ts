export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  image: string
  url?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  file: string
  type: "image" | "pdf"
}

export interface PortfolioData {
  name: string
  title: string
  email: string
  linkedin: string
  cv: string
  summary: string
  experience: Experience[]
  projects: Project[]
  skills: SkillCategory[]
  education: {
    degree: string
    institution: string
    period: string
  }
  languages: { language: string; level: string }[]
  certificates: Certificate[]
}
