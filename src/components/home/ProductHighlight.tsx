import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProductHighlight() {
  return (
    <section className="border-b border-border bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Building Solutions Beyond Client Work
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Bridging education and industry-ready skills.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Students and fresh graduates often struggle to translate academic knowledge into
            practical, industry-ready capabilities. LinSera is exploring an AI-powered approach to
            bridge this gap through skill-gap analysis, practical learning, industry alignment and
            career readiness.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This is an early-stage research initiative — not yet a launched product.
          </p>
          <Button href="/work/skill-gap-platform" variant="secondary" className="mt-8">
            Explore the Product →
          </Button>
        </div>

        <div className="aspect-[4/3] rounded-lg border border-border bg-soft p-8">
          <svg viewBox="0 0 400 300" role="img" aria-label="Diagram representing skill-gap analysis" className="h-full w-full">
            <rect x="20" y="20" width="360" height="260" rx="10" fill="none" stroke="#E2E8F0" />
            <g stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.5">
              <path d="M60 220 L140 140 L220 180 L300 90" />
            </g>
            {[
              [60, 220],
              [140, 140],
              [220, 180],
              [300, 90],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={6} fill="#0F172A" />
            ))}
            <line x1="40" y1="250" x2="360" y2="250" stroke="#E2E8F0" />
            <line x1="40" y1="60" x2="40" y2="250" stroke="#E2E8F0" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
