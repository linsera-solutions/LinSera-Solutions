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
    <section className="border-b border-border bg-soft py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading heading="The People Behind LinSera" />
          <Button href="/about#team" variant="secondary" className="shrink-0">
            Meet the Team →
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <AnimatedSection
              key={member.name}
              delay={i * 80}
              className="rounded-lg border border-border bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {initials(member.name)}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.focus}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
