import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { title: "Problem First", description: "Understand before building." },
  { title: "Quality Matters", description: "Build reliable, maintainable solutions." },
  { title: "Keep Learning", description: "Technology evolves. We evolve with it." },
  { title: "Build With Purpose", description: "Technology should create meaningful value." },
];

export default function Values() {
  return (
    <section className="border-b border-border bg-white py-20">
      <Container>
        <SectionHeading eyebrow="Our Approach" heading="Values" />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title}>
              <div className="h-px w-10 bg-accent" />
              <h3 className="mt-5 text-base font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
