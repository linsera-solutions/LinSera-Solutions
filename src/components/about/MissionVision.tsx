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
    <section className="border-b border-border bg-softBlue/30 py-20">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl border border-border bg-white p-8 md:p-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 h-2 w-24 bg-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-accent bg-softBlue px-3 py-1 rounded">
              {card.label}
            </span>
            <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-ink">
              {card.copy}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
