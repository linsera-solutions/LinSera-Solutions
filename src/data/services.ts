import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "ai",
    name: "AI & Intelligent Solutions",
    shortDescription:
      "Build intelligent systems that automate processes and enhance decision-making.",
    whatItIs:
      "Software that uses machine learning and modern AI models to handle tasks that used to require manual judgment — classifying, predicting, generating, or recommending.",
    problems: [
      "Manual review or data-entry work that doesn't scale with the business",
      "Decisions that rely on gut feel because the underlying data isn't analyzed",
      "Repetitive processes that consume time better spent on higher-value work",
    ],
    whatWeBuild: [
      "AI-assisted internal tools and workflows",
      "Automation pipelines that connect existing systems",
      "Applied ML features inside existing products",
      "Prototypes to validate an AI approach before full investment",
    ],
    approach: [
      "Identify where intelligence actually adds value, and where it doesn't",
      "Prototype quickly against real data before committing to an architecture",
      "Build with monitoring and human oversight in mind from day one",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "AI/ML technologies"],
  },
  {
    id: "software",
    name: "Software Development",
    shortDescription:
      "Custom software, SaaS platforms, dashboards, APIs and business applications.",
    whatItIs:
      "End-to-end application development — from a single internal tool to a multi-tenant SaaS product — built to be maintained, not just shipped.",
    problems: [
      "Off-the-shelf tools that almost fit the workflow, but not quite",
      "Spreadsheets and disconnected tools standing in for real systems",
      "A product idea that needs to become a working application",
    ],
    whatWeBuild: [
      "SaaS platforms and multi-tenant applications",
      "Internal dashboards and admin tools",
      "REST and API integrations between existing systems",
      "MVPs built to validate and then extend",
    ],
    approach: [
      "Scope around the actual workflow, not a generic feature list",
      "Design a data model and architecture that can grow",
      "Ship in stages so the product is usable early, not only at the end",
    ],
    technologies: ["Python", "FastAPI", "Django", "PostgreSQL", "TypeScript"],
  },
  {
    id: "web",
    name: "Web Solutions",
    shortDescription:
      "Modern, responsive and performance-focused web experiences.",
    whatItIs:
      "Marketing sites, web applications and product interfaces built with modern frontend engineering — fast, accessible and easy to maintain.",
    problems: [
      "A website that doesn't reflect the business or convert visitors",
      "Pages that load slowly or break on mobile devices",
      "A frontend that's hard to update without a developer",
    ],
    whatWeBuild: [
      "Corporate and product websites",
      "Web applications and customer-facing portals",
      "Component systems that keep design and code consistent",
    ],
    approach: [
      "Start from the content and the user's task, not a template",
      "Build with performance and accessibility as requirements, not extras",
      "Use a component-based architecture that's easy to extend",
    ],
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    id: "digital",
    name: "Digital & Growth Solutions",
    shortDescription: "SEO and technology-driven digital optimization.",
    whatItIs:
      "Technical and content-level improvements that help a website or product get found, load faster, and perform better in search.",
    problems: [
      "A site that's invisible in search despite solid content",
      "Technical SEO issues that limit organic growth",
      "No clear picture of what's working and what isn't",
    ],
    whatWeBuild: [
      "Technical SEO audits and fixes",
      "Site structure and metadata improvements",
      "Performance optimization tied to search visibility",
    ],
    approach: [
      "Diagnose technical issues before recommending content changes",
      "Prioritize fixes by expected impact, not by what's easiest",
      "Measure results against a clear baseline",
    ],
    technologies: ["Next.js", "Technical SEO tooling"],
  },
];
