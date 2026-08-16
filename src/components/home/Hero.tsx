import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-coolGray/80 py-16 md:py-24">
      {/* Subtle blue accent background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-softBlue/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-softBlue border border-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            AI • Software • Digital Solutions
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Technology That Solves <span className="text-accent">Real Problems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            AI, software, and digital solutions built around real business problems.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" className="shadow-xs hover:shadow-md">
              Start a Project →
            </Button>
            <Button href="/work" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <LinseraTechnologyVisual />
        </div>
      </Container>
    </section>
  );
}

function LinseraTechnologyVisual() {
  const STAGES = [
    { id: "01", name: "Problem", x: 70, y: 70, status: "INPUT" },
    { id: "02", name: "Research", x: 230, y: 140, status: "ANALYSIS" },
    { id: "03", name: "Strategy", x: 390, y: 70, status: "ARCHITECTURE" },
    { id: "04", name: "Engineering", x: 150, y: 310, status: "BUILD & TEST" },
    { id: "05", name: "Solution", x: 330, y: 380, status: "DEPLOYED" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-navy p-6 shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">linsera_system_v2.0</span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-accentLight uppercase bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
          SYSTEM PIPELINE
        </span>
      </div>

      <svg
        viewBox="0 0 460 440"
        role="img"
        aria-label="LinSera Technology Process: Problem to Research to Strategy to Engineering to Solution"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Grid backdrop */}
        <g stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3">
          {[60, 140, 220, 300, 380].map((y) => (
            <line key={`h-${y}`} x1="20" y1={y} x2="440" y2={y} />
          ))}
          {[70, 150, 230, 310, 390].map((x) => (
            <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="420" />
          ))}
        </g>

        {/* Connecting Data Paths */}
        <g stroke="url(#lineGlow)" strokeWidth="2" fill="none">
          {/* Problem -> Research */}
          <path d="M70 70 L230 140" strokeDasharray="4 2" />
          {/* Research -> Strategy */}
          <path d="M230 140 L390 70" strokeDasharray="4 2" />
          {/* Strategy -> Engineering */}
          <path d="M390 70 L150 310" strokeDasharray="4 2" />
          {/* Engineering -> Solution */}
          <path d="M150 310 L330 380" strokeWidth="3" filter="url(#glow)" />
          {/* Loop / Feedback back to Research */}
          <path d="M330 380 Q420 250 230 140" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
        </g>

        {/* Flow indicator nodes */}
        <circle cx="150" cy="105" r="4" fill="#3B82F6" filter="url(#glow)" />
        <circle cx="310" cy="105" r="4" fill="#3B82F6" filter="url(#glow)" />
        <circle cx="270" cy="190" r="4" fill="#3B82F6" filter="url(#glow)" />
        <circle cx="240" cy="345" r="5" fill="#60A5FA" filter="url(#glow)" />

        {/* Stage Nodes & Cards */}
        {STAGES.map((s) => (
          <g key={s.id} transform={`translate(${s.x}, ${s.y})`}>
            {/* Outer ring */}
            <circle r="22" fill="#0B1630" stroke="#3B82F6" strokeWidth="1.5" opacity="0.9" />
            <circle r="14" fill="#1E293B" stroke="#2563EB" strokeWidth="1" />
            <circle r="5" fill="#3B82F6" filter="url(#glow)" />

            {/* Label box */}
            <rect
              x="-45"
              y="28"
              width="90"
              height="36"
              rx="6"
              fill="#0B1630"
              stroke="#334155"
              strokeWidth="1"
            />
            <text
              x="0"
              y="43"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="11"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              {s.name}
            </text>
            <text
              x="0"
              y="56"
              textAnchor="middle"
              fill="#64748B"
              fontSize="8"
              fontWeight="600"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              {s.status}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
