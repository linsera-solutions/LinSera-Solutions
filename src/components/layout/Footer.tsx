import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Solutions", href: "/services#ai" },
      { label: "Software Development", href: "/services#software" },
      { label: "Web Solutions", href: "/services#web" },
      { label: "Digital Growth", href: "/services#digital" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Work", href: "/work" },
      { label: "Process", href: "/#process" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-slate-800/60">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden flex-shrink-0 bg-white/10 rounded-lg p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/images/brand/linsera-logo.png"
                  alt="LinSera Solutions Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              {SITE_TAGLINE}
            </p>
            <p className="text-xs text-slate-400">
              AI, software, and digital solutions built around real business problems.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>{SITE_TAGLINE}</p>
        </div>
      </Container>
    </footer>
  );
}