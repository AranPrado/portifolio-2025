interface Card {
  title: string;
  subtitle: string;
}

interface SkillDetail {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillDetail[];
}

interface Experience {
  company: string;
  description: string;
  period: string;
  role: string;
  current: boolean;
}

interface Education {
  course: string;
  institution: string;
  period: string;
  status: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  isUnderConstruction?: boolean;
}

interface AboutMe {
  text: string;
  cards: Card[];
}

export interface UserProfile {
  name: string;
  fullName: string;
  role: string;
  initialPhrase: string;
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  aboutMe: AboutMe;
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education;
  projects: Project[];
}
