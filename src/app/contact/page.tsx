import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact LinSera Solutions | Start a Project",
  description:
    "Tell LinSera Solutions what you're trying to build, improve or solve — start a project inquiry.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-coolGray/50 py-20 md:py-28 min-h-[calc(100vh-80px)]">
      {/* Subtle LinSera brand visual background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-softBlue/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] items-start relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-softBlue border border-accent/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-6">
            Contact LinSera
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Let&apos;s Build Something Useful.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Have a business problem, software concept, or AI initiative worth exploring? Tell us what you are trying to build, improve, or solve.
          </p>

          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="font-semibold text-ink">Direct Email:</span>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-medium text-accent hover:underline">
                {SOCIAL_LINKS.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="font-semibold text-ink">Company Page:</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-xs">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
