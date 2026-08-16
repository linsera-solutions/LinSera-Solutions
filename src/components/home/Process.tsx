import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STEPS = [
  { number: "01", title: "Discover", description: "Understand the problem, goals, and stakeholders." },
  { number: "02", title: "Research", description: "Validate technical constraints and optimal approach." },
  { number: "03", title: "Strategize", description: "Define product scope, system architecture & roadmap." },
  { number: "04", title: "Design", description: "Create intuitive user flows, interfaces & APIs." },
  { number: "05", title: "Build", description: "Develop clean, scalable code with modern frameworks." },
  { number: "06", title: "Test & Launch", description: "Rigorous QA, performance tuning, and seamless deploy." },
  { number: "07", title: "Evolve", description: "Monitor, optimize, and scale alongside your business." },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-slate-800 bg-navy text-white py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          heading="How We Work"
          description="A disciplined, step-by-step engineering roadmap from initial discovery to long-term evolution."
          dark={true}
        />

        {/* Desktop Horizontal Connected Timeline */}
        <div className="hidden lg:block mt-16 relative">
          {/* Continuous line behind nodes */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-gradient-to-r from-accent via-accentLight to-slate-700 z-0" />

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 70} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-midnight border-2 border-accent text-accentLight flex items-center justify-center font-mono font-bold text-xs shadow-md group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                  {step.number}
                </div>
                <h3 className="mt-4 text-sm font-bold text-white group-hover:text-accentLight transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Connected Timeline */}
        <div className="lg:hidden mt-12 relative pl-6 border-l-2 border-slate-700/80 space-y-8">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 60} className="relative group">
              {/* Node dot on the left line */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-navy border-2 border-accent group-hover:bg-accent transition-colors" />

              <div className="bg-midnight/70 border border-slate-800 rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-accentLight bg-accent/15 px-2 py-0.5 rounded">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
