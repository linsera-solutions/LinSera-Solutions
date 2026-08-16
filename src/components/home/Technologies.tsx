import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="border-b border-border bg-coolGray py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          heading="Built With Modern Technology"
          description="Proven engineering tools, frameworks, and data platforms chosen for reliability, speed, and long-term maintainability."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((group, i) => (
            <AnimatedSection key={group.group} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-white p-6 shadow-2xs hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/60">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    {group.group}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center justify-between text-sm font-medium text-ink">
                      <span>{item}</span>
                      <span className="text-[10px] font-mono text-muted/70 bg-coolGray px-1.5 py-0.5 rounded">
                        PROD
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
