import Image from "next/image";
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
    <section id="team" className="border-b border-border bg-softBlue/30 py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          heading="The People Behind LinSera"
          description="Experienced software engineers, AI developers, and technical strategists."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => {
            const isFounder = member.role.includes("Founder");
            return (
              <div
                key={member.name}
                className={`rounded-xl border p-7 bg-white transition-all ${
                  isFounder
                    ? "border-accent/40 shadow-xs relative"
                    : "border-border"
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
                        isFounder ? "bg-navy text-white" : "bg-midnight/80 text-white"
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
