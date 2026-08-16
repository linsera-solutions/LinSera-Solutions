import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CaseStudy from "@/components/work/CaseStudy";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <Link href="/work" className="text-sm font-medium text-muted hover:text-ink">
          ← All Work
        </Link>

        <div className="mt-8">
          <CaseStudy project={project} />
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Next Project
          </span>
          <Link href={`/work/${next.slug}`} className="text-sm font-medium text-accent hover:underline">
            {next.name} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
