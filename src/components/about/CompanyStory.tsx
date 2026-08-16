import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CompanyStory() {
  return (
    <section className="border-b border-border bg-white py-20">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="Company Story" heading="Why We Exist" />
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            LinSera Solutions started from a simple observation: most businesses don&apos;t need
            more technology — they need the right technology, built around the problem they
            actually have.
          </p>
          <p>
            Too often, software gets built around a template, a trend, or a generic feature list,
            rather than the specific workflow, constraint, or opportunity in front of a team.
            LinSera was founded to close that gap — to understand a problem thoroughly before
            proposing a solution, and to build technology that holds up as a business grows and
            changes.
          </p>
          <p>
            We work as a technology partner across AI, software, web and digital growth —
            treating every engagement as an opportunity to build something that&apos;s genuinely
            useful, not just delivered.
          </p>
        </div>
      </Container>
    </section>
  );
}
