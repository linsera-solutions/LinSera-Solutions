import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const differentiators = [
  {
    title: "Research-driven",
    description: "We start by understanding the problem, users and requirements.",
  },
  {
    title: "Purpose-built",
    description: "Solutions are designed around actual business needs rather than generic templates.",
  },
  {
    title: "Modern engineering",
    description: "We use modern development practices and technologies to build maintainable products.",
  },
  {
    title: "Built to evolve",
    description: "We design with future improvements, scalability and changing requirements in mind.",
  },
];

export default function WhyLinsera() {
  return (
    <section className="border-b border-border bg-white py-24">
      <Container>
        <SectionHeading heading="We don't just build. We understand first." />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80}>
              <div className="h-px w-10 bg-accent" />
              <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
