/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Extra {
  title: string;
  link: string;
  shortDescription: string;
  longDescription?: string[];
}

interface Job {
  company: string;
  title: string;
  start: string;
  end?: string;
}

interface Project {
  hidden: boolean;
  featured?: boolean;
  title: string;
  shortDescription: string;
  longDescription?: string[];
  link?: string;
  github?: string;
  dribbble?: string;
}

interface TimeGroup {
  name: string;
  label: string;
  beginAt: number;
  color: string;
  salutation: string;
  sayings: string[];
}

interface VisitGroup {
  name: string;
  minVisits: number;
  sayings: string[];
}
