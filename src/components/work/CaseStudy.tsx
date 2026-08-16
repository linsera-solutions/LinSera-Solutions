import { Project } from "@/types/project";
import Badge from "@/components/ui/Badge";

const stages: { key: keyof Project; label: string }[] = [
  { key: "challenge", label: "The Challenge" },
  { key: "approach", label: "Our Approach" },
  { key: "solution", label: "Solution" },
];

export default function CaseStudy({ project }: { project: Project }) {
  const isResearch = project.type.includes("Research");
  const isInternal = project.type.includes("Internal");

  return (
    <article className="space-y-10">
      {/* Category & Type Badges */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{project.category}</Badge>
        <span
          className={`text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border ${
            isResearch
              ? "bg-purple-50 text-purple-700 border-purple-200"
              : isInternal
              ? "bg-blue-50 text-blue-700 border-blue-200"
              : "bg-slate-100 text-slate-700 border-slate-200"
          }`}
        >
          {project.type}
        </span>
      </div>

      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted max-w-2xl">
          {project.shortDescription}
        </p>
      </div>

      {/* Large Project Visual Banner */}
      <div className="aspect-[21/9] w-full rounded-2xl bg-navy relative overflow-hidden flex items-center justify-center p-8 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-midnight border border-slate-700 flex items-center justify-center mx-auto shadow-xl">
            <span className="text-3xl font-bold font-mono text-accentLight">
              {project.name.charAt(0)}
            </span>
          </div>
          <span className="mt-4 block text-xs font-mono tracking-widest text-slate-400 uppercase">
            {project.category} • {project.type}
          </span>
        </div>
      </div>

      {project.isPlaceholder ? (
        <div className="rounded-xl border border-dashed border-border bg-coolGray/60 p-10 text-center">
          <p className="text-sm text-muted max-w-md mx-auto">
            Full case-study details for this project haven&apos;t been published yet. Verified project information will replace this placeholder once it&apos;s available.
          </p>
        </div>
      ) : (
        <div className="space-y-12 border-t border-border pt-10">
          {stages.map(
            (stage) =>
              project[stage.key] && (
                <div key={stage.label} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                    {stage.label}
                  </h2>
                  <p className="text-base leading-relaxed text-ink font-medium">
                    {project[stage.key] as string}
                  </p>
                </div>
              )
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                Key Features
              </h2>
              <ul className="space-y-2">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="text-sm leading-relaxed text-muted flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcome && (
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                Outcome
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {project.outcome}
              </p>
            </div>
          )}
        </div>
      )}

      {project.technologies.length > 0 && (
        <div className="border-t border-border pt-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-3">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-coolGray px-3 py-1 text-xs font-mono font-medium text-ink">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
