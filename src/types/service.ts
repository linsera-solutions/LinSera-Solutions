export type ServiceCategory = "ai" | "software" | "web" | "digital";

export interface Service {
  id: ServiceCategory;
  name: string;
  shortDescription: string;
  whatItIs: string;
  problems: string[];
  whatWeBuild: string[];
  approach: string[];
  technologies: string[];
}
