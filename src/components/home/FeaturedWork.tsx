import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-b border-border bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Work & Research"
            heading="Ideas. Products. Solutions."
            description="Explore selected projects and products developed through research, engineering, and experimentation."
          />
          <Button href="/work" variant="secondary" className="shrink-0">
            View All Work →
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
