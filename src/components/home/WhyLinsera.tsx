import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PHILOSOPHY = [
  {
    title: "Research-driven",
    description: "We study the problem, users, and constraints thoroughly before writing a single line of code.",
  },
  {
    title: "Purpose-built",
    description: "Every solution is engineered for a specific business need — never forced into generic templates.",
  },
  {
    title: "Modern engineering",
    description: "Clean architecture, scalable data infrastructure, and maintainable production standards.",
  },
  {
    title: "Built to evolve",
    description: "Systems designed modularly so they adapt as your team, market, and business requirements grow.",
  },
];

export default function WhyLinsera() {
  return (
    <section className="border-b border-border bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Why LinSera
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              We don&apos;t just build. <br className="hidden sm:inline" />
              <span className="text-accent">We understand first.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted max-w-lg">
              Many technical partners jump straight into execution. At LinSera Solutions, engineering excellence starts with clarity. We align technology directly with your business realities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {PHILOSOPHY.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 90} className="relative pl-6">
                <div className="absolute left-0 top-1 bottom-1 w-1 bg-accent rounded-full opacity-80" />
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
