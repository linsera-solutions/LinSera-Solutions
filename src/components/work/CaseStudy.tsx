import { Project } from "@/types/project";
import Badge from "@/components/ui/Badge";

const stages: { key: keyof Project; label: string }[] = [
  { key: "challenge", label: "The Challenge" },
  { key: "approach", label: "Our Approach" },
  { key: "solution", label: "Solution" },
];

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{project.category}</Badge>
        <span className="text-xs font-medium text-muted">{project.type}</span>
      </div>

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{project.name}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{project.shortDescription}</p>

      {project.isPlaceholder ? (
        <div className="mt-12 rounded-lg border border-dashed border-border bg-soft p-10 text-center">
          <p className="text-sm text-muted">
            Full case-study details for this project haven&apos;t been published yet. Verified project
            information will replace this placeholder once it&apos;s available.
          </p>
        </div>
      ) : (
        <div className="mt-12 space-y-10 border-t border-border pt-10">
          {stages.map(
            (stage) =>
              project[stage.key] && (
                <div key={stage.label}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{stage.label}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {project[stage.key] as string}
                  </p>
                </div>
              )
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Key Features</h2>
              <ul className="mt-3 space-y-2">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="text-sm leading-relaxed text-muted">
                    — {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcome && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Outcome</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{project.outcome}</p>
            </div>
          )}
        </div>
      )}

      {project.technologies.length > 0 && (
        <div className="mt-10 border-t border-border pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Technology</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded border border-border px-2 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
