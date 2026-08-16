import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

export default function Solutions() {
  return (
    <section className="border-b border-border bg-softBlue/30 py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Solutions"
            heading="Solutions Built Around Your Goals"
            description="Four core capabilities engineered to solve real business challenges."
          />
          <Button href="/services" variant="secondary" className="shrink-0 bg-white">
            Explore All Services →
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 80}>
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col justify-between h-full rounded-xl border border-border bg-white p-8 transition-all duration-200 hover:border-accent/40 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase bg-softBlue px-2.5 py-1 rounded">
                      0{i + 1} • {service.id.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted group-hover:text-accent transition-all transform group-hover:translate-x-0.5">
                      View details →
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-mono text-muted bg-coolGray px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
