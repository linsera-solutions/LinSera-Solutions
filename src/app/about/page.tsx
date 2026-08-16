import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About LinSera Solutions | Building Technology With Purpose",
  description:
    "LinSera Solutions is a technology partner helping businesses and emerging ventures turn real-world problems into practical software, AI and digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-coolGray/80 py-20 md:py-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-softBlue/60 blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-softBlue border border-accent/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
            About LinSera
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Building Technology With Purpose.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We build AI, software, and digital solutions grounded in research, clarity, and modern engineering standards.
          </p>
        </Container>
      </section>

      <CompanyStory />
      <MissionVision />
      <Values />
      <Team />
      <CTA />
    </>
  );
}
