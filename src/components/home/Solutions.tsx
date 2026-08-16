import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

export default function Solutions() {
  return (
    <section className="border-b border-border bg-soft py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading heading="Solutions Built Around Your Goals" />
          <Button href="/services" variant="secondary" className="shrink-0">
            Explore Our Services →
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.id}
              delay={i * 80}
              className="group rounded-lg border border-border bg-white p-8 transition-colors duration-200 hover:border-accent/40"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
