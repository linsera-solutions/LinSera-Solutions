"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="text-lg font-semibold text-ink tracking-tight">
          LinSera Solutions
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
            Start a Project →
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-ink" aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-sm font-medium bg-accent text-white px-4 py-2 rounded-lg text-center">
            Start a Project →
          </Link>
        </div>
      )}
    </nav>
  );
}