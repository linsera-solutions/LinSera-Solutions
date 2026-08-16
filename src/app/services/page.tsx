import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AISection from "@/components/services/AISection";
import SoftwareSection from "@/components/services/SoftwareSection";
import WebSection from "@/components/services/WebSection";
import DigitalSection from "@/components/services/DigitalSection";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Technology & AI Solutions | LinSera Solutions",
  description:
    "AI & intelligent solutions, software development, web solutions and digital growth — practical technology services from LinSera Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-coolGray/80 py-20 md:py-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-softBlue/60 blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-softBlue border border-accent/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
            Services & Capabilities
          </span>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Solutions Built Around Your Goals
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Four ways we help businesses turn problems into working technology — grounded in research, sound engineering, and purposeful execution.
          </p>
        </Container>
      </section>

      <AISection />
      <SoftwareSection />
      <WebSection />
      <DigitalSection />
      <CTA />
    </>
  );
}
