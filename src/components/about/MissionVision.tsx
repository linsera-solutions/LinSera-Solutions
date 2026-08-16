import Container from "@/components/ui/Container";

const cards = [
  {
    label: "Mission",
    copy:
      "To build practical technology solutions that help businesses and emerging ventures solve real problems, improve efficiency, and create meaningful digital experiences.",
  },
  {
    label: "Vision",
    copy:
      "To become a trusted technology partner for organizations building the next generation of digital products and AI-powered solutions.",
  },
];

export default function MissionVision() {
  return (
    <section className="border-b border-border bg-soft py-20">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-border bg-white p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{card.label}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{card.copy}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
