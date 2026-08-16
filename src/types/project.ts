export type ProjectType =
  | "Internal Product"
  | "Research Project"
  | "Prototype"
  | "Client Project";

export interface Project {
  slug: string;
  name: string;
  category: string;
  type: ProjectType;
  shortDescription: string;
  technologies: string[];
  challenge?: string;
  approach?: string;
  solution?: string;
  keyFeatures?: string[];
  outcome?: string;
  isPlaceholder?: boolean;
}
