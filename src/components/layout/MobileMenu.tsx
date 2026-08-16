"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span
          className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-white pt-24"
        >
          <nav className="flex flex-col gap-1 px-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 px-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
