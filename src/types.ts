export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  location: string;
  description: string;
  bullets?: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  tags: string[];
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export interface SkillItem {
  name: string;
  iconName: string;
  level: number; // percentage (e.g., 90)
}
