import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { team } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamPreview() {
  return (
    <section className="border-b border-border bg-softBlue/30 py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Leadership & Engineering"
            heading="The People Behind LinSera"
            description="Engineers and problem solvers dedicated to research-driven software development."
          />
          <Button href="/about#team" variant="secondary" className="shrink-0 bg-white">
            Meet the Team →
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, i) => {
            const isFounder = member.role.includes("Founder");

            return (
              <AnimatedSection key={member.name} delay={i * 80}>
                <div
                  className={`h-full rounded-xl border p-7 transition-all bg-white ${
                    isFounder
                      ? "border-accent/40 shadow-xs relative"
                      : "border-border hover:border-slate-300"
                  }`}
                >
                  {isFounder && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono font-bold tracking-widest uppercase bg-softBlue text-accent px-2 py-0.5 rounded">
                      LEADERSHIP
                    </span>
                  )}

                  <div className="flex items-center gap-4">
                    {member.photo ? (
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border">
                        <Image src={member.photo} alt={member.name} fill className="object-cover" />
                      </div>
                    ) : (
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-base font-bold ${
                          isFounder
                            ? "bg-navy text-white shadow-xs"
                            : "bg-midnight/80 text-white"
                        }`}
                      >
                        {initials(member.name)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-bold text-ink">{member.name}</h3>
                      <p className="text-xs font-semibold text-accent mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted pt-3 border-t border-border/50">
                    {member.focus}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
