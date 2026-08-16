import Link from "next/link";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-lg font-semibold tracking-tight">LinSera Solutions</p>
            <p className="text-sm text-white/60 mt-2 max-w-xs">Technology that solves real problems.</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} LinSera Solutions. All rights reserved.</p>
          <p className="text-xs text-white/40">Built by LinSera Solutions</p>
        </div>
      </div>
    </footer>
  );
}