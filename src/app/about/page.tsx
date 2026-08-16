import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "LinSera Solutions is a technology partner helping businesses and emerging ventures turn real-world problems into practical software, AI and digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 md:py-28">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">About</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Building Technology With Purpose.
          </h1>
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
