import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Team() {
  return (
    <section id="team" className="border-b border-border bg-soft py-20 scroll-mt-20">
      <Container>
        <SectionHeading heading="The People Behind LinSera" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-lg border border-border bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-base font-semibold text-white">
                {initials(member.name)}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.focus}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
