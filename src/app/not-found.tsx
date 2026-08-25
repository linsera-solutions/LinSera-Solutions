import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-coolGray/60 py-24 md:py-36 min-h-[calc(100vh-160px)] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center relative z-10 max-w-xl">
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-accent uppercase bg-softBlue border border-accent/20 px-3.5 py-1 rounded-full mb-4">
          404 ERROR
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          The page or resource you are looking for does not exist, was removed, or had its URL updated.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-xs hover:bg-accent/90 transition-colors"
          >
            ← Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-6 py-3 text-sm font-medium text-ink hover:border-ink/40 transition-colors"
          >
            Contact LinSera →
          </Link>
        </div>
      </Container>
    </section>
  );
}
