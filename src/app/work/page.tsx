import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/work/ProjectCard";
import CTA from "@/components/home/CTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and products from LinSera Solutions — developed through research, engineering and experimentation.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 md:py-28">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Work</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Ideas. Products. Solutions.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Explore selected projects and products developed through research, engineering and
            experimentation. Case studies without published details are marked clearly rather than
            filled with placeholder claims.
          </p>
        </Container>
      </section>

      <section className="border-b border-border bg-soft py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
