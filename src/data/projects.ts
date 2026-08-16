import { Project } from "@/types/project";

// No fabricated clients, testimonials, statistics or outcomes.
// Entries marked isPlaceholder are shown with an elegant "coming soon"
// treatment until verified project details are provided.
export const projects: Project[] = [
  {
    slug: "skill-gap-platform",
    name: "Skill-Gap Analysis Platform",
    category: "AI & Education",
    type: "Research Project",
    shortDescription:
      "An AI-powered approach to bridging the gap between academic learning and industry-ready skills.",
    technologies: ["Python", "FastAPI", "AI/ML technologies", "PostgreSQL"],
    challenge:
      "Students and fresh graduates often struggle to translate academic knowledge into practical, industry-ready capabilities.",
    approach:
      "Researching how skill-gap analysis, practical learning paths and industry alignment can be combined into a single, personalized tool.",
    solution:
      "An early-stage exploration into career-readiness tooling — details will be published as the research matures.",
    isPlaceholder: true,
  },
  {
    slug: "internal-product-01",
    name: "Internal Product — In Progress",
    category: "Software",
    type: "Internal Product",
    shortDescription: "Project details will be added once the work is ready to share.",
    technologies: [],
    isPlaceholder: true,
  },
  {
    slug: "client-project-01",
    name: "Client Project — Coming Soon",
    category: "Web / Software",
    type: "Client Project",
    shortDescription: "Case study details will be published with client approval.",
    technologies: [],
    isPlaceholder: true,
  },
];
