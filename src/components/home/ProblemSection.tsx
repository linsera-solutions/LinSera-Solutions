import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    title: "Build",
    description: "Turn ideas into functional digital products.",
  },
  {
    title: "Automate",
    description: "Reduce repetitive work through intelligent automation.",
  },
  {
    title: "Modernize",
    description: "Upgrade outdated digital experiences and systems.",
  },
  {
    title: "Scale",
    description: "Build technology that can grow with the business.",
  },
];

function Marker({ index }: { index: number }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="27" height="27" rx="6" stroke="#2563EB" strokeOpacity="0.35" />
      <circle cx="14" cy="14" r="3" fill="#2563EB" opacity={0.15 + index * 0.15} />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section className="border-b border-border bg-white py-24">
      <Container>
        <SectionHeading
          heading="Technology should solve a problem — not create another one."
          description="Businesses often struggle with outdated workflows, disconnected systems, inefficient processes, and the challenge of turning ideas into reliable digital products. LinSera helps transform these challenges into practical technology solutions."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80} className="bg-white p-8">
              <Marker index={i} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
