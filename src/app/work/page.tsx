import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/work/ProjectCard";
import CTA from "@/components/home/CTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work | LinSera Solutions",
  description:
    "Selected projects and products from LinSera Solutions — developed through research, engineering and experimentation.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-coolGray/80 py-20 md:py-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-softBlue/60 blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-softBlue border border-accent/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
            Projects & Research
          </span>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Ideas. Products. Solutions.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Explore selected projects and internal products developed through research, engineering, and active experimentation.
          </p>
        </Container>
      </section>

      <section className="border-b border-border bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
