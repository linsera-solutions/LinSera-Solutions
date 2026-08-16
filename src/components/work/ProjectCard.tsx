import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-white p-7 transition-colors duration-200 hover:border-accent/40"
    >
      <div className="flex items-center justify-between gap-3">
        <Badge>{project.category}</Badge>
        <span className="text-xs font-medium text-muted">{project.type}</span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

      {project.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded border border-border px-2 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
      )}

      <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
        View Case Study
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
