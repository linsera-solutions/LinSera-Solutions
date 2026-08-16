import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="border-b border-border bg-white py-24">
      <Container>
        <SectionHeading heading="Built With Modern Technology" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((group) => (
            <div key={group.group} className="bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{group.group}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
