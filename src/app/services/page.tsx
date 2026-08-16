import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AISection from "@/components/services/AISection";
import SoftwareSection from "@/components/services/SoftwareSection";
import WebSection from "@/components/services/WebSection";
import DigitalSection from "@/components/services/DigitalSection";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & intelligent solutions, software development, web solutions and digital growth — practical technology services from LinSera Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 md:py-28">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Services</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Solutions Built Around Your Goals
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Four ways we help businesses turn problems into working technology — each grounded in
            research, sound engineering and a clear approach.
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
