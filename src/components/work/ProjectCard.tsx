import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const isResearch = project.type.includes("Research");
  const isInternal = project.type.includes("Internal");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col h-full rounded-xl border border-border bg-white overflow-hidden transition-all duration-200 hover:border-accent/40 hover:shadow-xs"
    >
      {/* Abstract Project Visual Preview Header */}
      <div className="aspect-video bg-navy relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        {/* Geometric Abstract Graphic */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-xl bg-midnight border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-xl font-bold font-mono text-accentLight">
              {project.name.charAt(0)}
            </span>
          </div>
          <span className="mt-3 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            {project.category}
          </span>
        </div>

        {/* Top Type Indicator Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded border ${
              isResearch
                ? "bg-purple-950/80 text-purple-300 border-purple-800"
                : isInternal
                ? "bg-blue-950/80 text-blue-300 border-blue-800"
                : "bg-slate-900/80 text-slate-300 border-slate-700"
            }`}
          >
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge>{project.category}</Badge>
          </div>

          <h3 className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border/60">
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[11px] font-mono bg-coolGray text-muted px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-0.5 transition-transform">
            View Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}
