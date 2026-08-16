import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { title: "Substance Over Hype", description: "We focus on technology that works — not short-lived trends." },
  { title: "Research First", description: "Every project starts with thorough understanding, not assumptions." },
  { title: "Engineering Quality", description: "Clean code, scalable infrastructure, maintainable architecture." },
  { title: "Honest Communication", description: "We tell you what you need to hear — not just what sounds nice." },
];

export default function Values() {
  return (
    <section className="border-b border-border bg-white py-20 md:py-24">
      <Container>
        <SectionHeading eyebrow="Our Approach" heading="Values We Live By" />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="relative pl-5">
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-accent rounded-full opacity-80" />
              <h3 className="text-base font-bold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
