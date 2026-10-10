export type SkillCategory = 'all' | 'languages' | 'frameworks' | 'database-cloud' | 'dev-tools' | 'core-concepts';

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'database-cloud' | 'dev-tools' | 'core-concepts';
  iconClass: string;
  isFontAwesome?: boolean;
  proficiency: 'Advanced' | 'Expert' | 'Proficient' | 'Mastery' | 'Strong' | 'Intermediate';
  proficiencyClass: 'proficiency-expert' | 'proficiency-advanced' | 'proficiency-intermediate';
  description: string;
}

export interface SkillGroup {
  id: 'languages' | 'frameworks' | 'database-cloud' | 'dev-tools' | 'core-concepts';
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend';
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  gradientClass: string;
  previewIcon: string;
  tag: string;
}

export interface CompletionCertificate {
  title: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  description: string;
  badge: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyTag: string;
  companyLogoClass: string;
  companyLogoIcon: string;
  period: string;
  intro: string;
  bulletPoints: string[];
  techStack: string[];
  certificate?: CompletionCertificate;
  statusBadge: string;
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  issuerIcon: string;
  bannerClass: string;
  watermarkIcon: string;
  pillText: string;
  description: string;
  issueDate: string;
  credentialId: string;
  externalLink?: string;
  certificateDetails: CompletionCertificate;
}

export interface EducationItem {
  degree: string;
  branch: string;
  institution: string;
  period: string;
  summary: string;
  coursework: string[];
  stats?: { num: string; label: string }[];
}

export interface ToastMessage {
  id: number;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}
