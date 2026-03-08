export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  bio: string[];
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;    website?: string;
  };
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  keyFeatures?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string[];
}
