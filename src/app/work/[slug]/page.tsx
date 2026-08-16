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
    title: `${project.name} | LinSera Solutions`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | LinSera Solutions`,
      description: project.shortDescription,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="py-16 md:py-24 bg-white min-h-[calc(100vh-80px)]">
      <Container className="max-w-4xl">
        <Link href="/work" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors">
          ← Back to All Work
        </Link>

        <div className="mt-8">
          <CaseStudy project={project} />
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.14em] text-muted">
            Next Project
          </span>
          <Link href={`/work/${next.slug}`} className="text-sm font-bold text-accent hover:underline">
            {next.name} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
