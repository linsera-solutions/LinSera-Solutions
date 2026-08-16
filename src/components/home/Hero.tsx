import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <Container className="grid grid-cols-1 items-center gap-16 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            AI • Software • Digital Solutions
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
            Technology That Solves Real Problems.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            LinSera Solutions builds practical software, AI-powered products, and digital
            solutions that help businesses and emerging ventures turn complex challenges into
            scalable opportunities.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary">
              Start a Project →
            </Button>
            <Button href="/work" variant="ghost">
              Explore Our Work
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
          <SystemVisual />
        </div>
      </Container>
    </section>
  );
}

function SystemVisual() {
  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="Abstract visualization of connected software systems"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="480" fill="#F8FAFC" rx="24" />

      {/* connective lines */}
      <g stroke="url(#edgeGrad)" strokeWidth="1.5" fill="none">
        <path d="M100 130 L240 200 L380 110" />
        <path d="M100 130 L120 320" />
        <path d="M240 200 L240 340" />
        <path d="M380 110 L360 300" />
        <path d="M120 320 L240 340 L360 300" />
        <path d="M240 200 L360 300" />
        <path d="M100 130 L240 340" />
      </g>

      {/* nodes */}
      {[
        [100, 130, 8],
        [240, 200, 10],
        [380, 110, 7],
        [120, 320, 9],
        [240, 340, 11],
        [360, 300, 8],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={i % 2 === 0 ? "#2563EB" : "#0F172A"} opacity={0.9} />
      ))}

      {/* subtle grid backdrop */}
      <g stroke="#E2E8F0" strokeWidth="1">
        <line x1="40" y1="60" x2="40" y2="420" />
        <line x1="440" y1="60" x2="440" y2="420" />
      </g>
    </svg>
  );
}
