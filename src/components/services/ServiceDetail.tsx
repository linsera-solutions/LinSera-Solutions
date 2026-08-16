import { Service } from "@/types/service";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServiceDetail({ service, index }: { service: Service; index: number }) {
  return (
    <section
      id={service.id}
      className="scroll-mt-20 border-b border-border py-20 md:py-24 odd:bg-white even:bg-softBlue/25"
    >
      <Container>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase bg-softBlue px-3 py-1 rounded">
            0{index + 1} • {service.id.toUpperCase()}
          </span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          {service.name}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{service.whatItIs}</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-white p-6 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4 pb-2 border-b border-border">
              Problems It Solves
            </h3>
            <ul className="space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4 pb-2 border-b border-border">
              What We Build
            </h3>
            <ul className="space-y-3">
              {service.whatWeBuild.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4 pb-2 border-b border-border">
              Our Approach
            </h3>
            <ul className="space-y-3">
              {service.approach.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted uppercase mr-2">Technologies:</span>
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded border border-border bg-white px-2.5 py-1 text-xs font-mono text-ink">
                {tech}
              </span>
            ))}
          </div>

          <Button href="/contact" variant="primary" className="shadow-xs">
            Start a Project Inquiry →
          </Button>
        </div>
      </Container>
    </section>
  );
}
