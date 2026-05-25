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

export interface PortfolioData {
  name: string
  title: string
  email: string
  linkedin: string
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
}
