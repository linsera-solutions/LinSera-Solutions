import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProductHighlight() {
  return (
    <section className="border-b border-slate-800 bg-navy text-white py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accentLight mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accentLight animate-pulse" />
            Research Initiative
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Bridging education and industry-ready skills.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            Students and fresh graduates often struggle to translate academic knowledge into practical, industry-ready capabilities. LinSera is exploring an AI-powered platform approach to bridge this gap through intelligent skill-gap analysis, practical learning paths, and career readiness tools.
          </p>
          <div className="mt-4 p-3 rounded-lg bg-midnight/80 border border-slate-800 text-xs text-slate-400 font-mono">
            STATUS: Early-stage research project — in active development.
          </div>
          <div className="mt-8">
            <Button href="/work/skill-gap-platform" variant="primary" className="bg-accent text-white hover:bg-accent/90">
              Explore the Project →
            </Button>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-2xl border border-slate-800 bg-midnight p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
          
          <svg viewBox="0 0 400 300" role="img" aria-label="Diagram representing AI skill-gap analysis architecture" className="h-full w-full relative z-10">
            {/* Grid background */}
            <g stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3">
              {[50, 100, 150, 200, 250].map((y) => (
                <line key={`hy-${y}`} x1="30" y1={y} x2="370" y2={y} />
              ))}
              {[80, 160, 240, 320].map((x) => (
                <line key={`vx-${x}`} x1={x} y1="30" x2={x} y2="270" />
              ))}
            </g>

            {/* Path glow */}
            <path
              d="M 60 210 Q 140 160 200 130 T 340 70"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              opacity="0.8"
            />
            <path
              d="M 60 210 Q 140 160 200 130 T 340 70"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="6"
              opacity="0.2"
            />

            {/* Nodes */}
            {[
              { x: 60, y: 210, label: "Academics" },
              { x: 140, y: 165, label: "Gap Analysis" },
              { x: 230, y: 120, label: "AI Learning" },
              { x: 340, y: 70, label: "Industry Ready" },
            ].map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r="10" fill="#07111F" stroke="#3B82F6" strokeWidth="2" />
                <circle cx={node.x} cy={node.y} r="4" fill="#60A5FA" />
                <rect x={node.x - 40} y={node.y + 14} width="80" height="20" rx="4" fill="#0B1630" stroke="#334155" />
                <text x={node.x} y={node.y + 28} textAnchor="middle" fill="#E2E8F0" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </Container>
    </section>
  );
}
