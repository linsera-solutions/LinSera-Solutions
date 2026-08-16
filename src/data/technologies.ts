export interface TechGroup {
  group: string;
  items: string[];
}

export const technologies: TechGroup[] = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django"] },
  { group: "Data", items: ["PostgreSQL", "Supabase"] },
  { group: "Engineering", items: ["Git", "Docker"] },
  { group: "AI / ML", items: ["Python", "AI / ML technologies"] },
];
