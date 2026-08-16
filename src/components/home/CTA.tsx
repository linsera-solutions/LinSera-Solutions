import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-dark py-24">
      <Container className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Have a problem worth solving?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-300">
          Let&apos;s explore how technology can turn your idea or business challenge into a
          practical solution.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="primary">
            Start a Conversation →
          </Button>
        </div>
      </Container>
    </section>
  );
}
