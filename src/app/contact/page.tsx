import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell LinSera Solutions what you're trying to build, improve or solve — start a project inquiry.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Contact</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Let&apos;s Build Something Useful.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
            Tell us what you are trying to build, improve or solve.
          </p>

          <div className="mt-10 space-y-3 border-t border-border pt-8">
            <p className="text-sm text-muted">
              Prefer email?{" "}
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-medium text-accent hover:underline">
                {SOCIAL_LINKS.email}
              </a>
            </p>
            <p className="text-sm text-muted">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
