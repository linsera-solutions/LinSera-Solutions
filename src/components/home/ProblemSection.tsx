import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PRINCIPLES = [
  {
    num: "01",
    title: "Build",
    description: "Turn business ideas into practical, production-ready software.",
  },
  {
    num: "02",
    title: "Automate",
    description: "Streamline workflows and eliminate repetitive manual operational tasks.",
  },
  {
    num: "03",
    title: "Modernize",
    description: "Upgrade legacy infrastructure and outdated digital interfaces.",
  },
  {
    num: "04",
    title: "Scale",
    description: "Engineer resilient technology platforms built to handle long-term growth.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-border bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Left: Large Editorial Statement */}
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              The Problem
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Technology should solve a problem — <span className="text-muted font-normal">not create another one.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg max-w-xl">
              Most businesses don&apos;t need more technology. They need the right technology — applied with research, purpose, and modern engineering standards.
            </p>
            <div className="mt-8 border-l-2 border-accent pl-4 text-sm font-medium text-ink italic">
              &quot;We focus on understanding the root operational challenge before prescribing architecture or writing code.&quot;
            </div>
          </AnimatedSection>

          {/* Right: Compact Editorial Principles with subtle separators */}
          <div className="divide-y divide-border border-y border-border">
            {PRINCIPLES.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 80} className="py-6 first:pt-4 last:pb-4 group">
                <div className="flex items-start gap-5">
                  <span className="text-xs font-mono font-bold text-accent bg-softBlue px-2 py-1 rounded">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
