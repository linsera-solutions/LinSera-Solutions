import { Service } from "@/types/service";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServiceDetail({ service, index }: { service: Service; index: number }) {
  return (
    <section
      id={service.id}
      className="scroll-mt-20 border-b border-border py-20 odd:bg-white even:bg-soft"
    >
      <Container>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          0{index + 1}
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {service.name}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{service.whatItIs}</p>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">
              Problems It Solves
            </h3>
            <ul className="mt-4 space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted">
                  — {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">
              What We Can Build
            </h3>
            <ul className="mt-4 space-y-3">
              {service.whatWeBuild.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted">
                  — {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">
              Our Approach
            </h3>
            <ul className="mt-4 space-y-3">
              {service.approach.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted">
                  — {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {service.technologies.map((tech) => (
            <span key={tech} className="rounded border border-border bg-white px-2 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>

        <Button href="/contact" variant="secondary" className="mt-10">
          Start a Project →
        </Button>
      </Container>
    </section>
  );
}
