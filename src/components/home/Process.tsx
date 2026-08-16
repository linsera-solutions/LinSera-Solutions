import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  { number: "01", title: "Discover", description: "Understand the problem, goals and users." },
  { number: "02", title: "Research", description: "Validate requirements and identify the right approach." },
  { number: "03", title: "Strategize", description: "Define product scope, architecture and roadmap." },
  { number: "04", title: "Design", description: "Create intuitive experiences and interfaces." },
  { number: "05", title: "Build", description: "Develop the solution using modern technologies." },
  { number: "06", title: "Test & Launch", description: "Test, optimize and deploy." },
  { number: "07", title: "Evolve", description: "Improve, maintain and scale." },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-border bg-soft py-24 scroll-mt-20">
      <Container>
        <SectionHeading heading="From Problem to Product" />

        <ol className="mt-14 flex flex-col divide-y divide-border border-y border-border">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 60}>
              <li className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-14 shrink-0 text-sm font-semibold tabular-nums text-accent">
                  {step.number}
                </span>
                <span className="w-40 shrink-0 text-lg font-semibold text-ink">{step.title}</span>
                <span className="text-sm leading-relaxed text-muted">{step.description}</span>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </Container>
    </section>
  );
}
