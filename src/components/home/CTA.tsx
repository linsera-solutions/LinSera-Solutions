import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-navy py-20 md:py-28 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center relative z-10">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-accentLight uppercase bg-accent/15 px-3 py-1 rounded-full mb-4">
          START A PROJECT
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl max-w-2xl mx-auto">
          Have a problem worth solving?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
          Let&apos;s explore how technology can turn your idea or business challenge into a practical, scalable solution.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="primary" className="shadow-lg hover:shadow-xl">
            Start a Conversation →
          </Button>
        </div>
      </Container>
    </section>
  );
}
