export interface Project {
  hidden: boolean;
  featured?: boolean;
  title: string;
  shortDescription: string;
  longDescription?: string[];
  link?: string;
  github?: string;
  dribbble?: string;
}
