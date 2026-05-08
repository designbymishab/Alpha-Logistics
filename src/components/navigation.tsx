"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-color/20 bg-white/95 backdrop-blur-xl">
      <nav
        className="site-shell flex flex-wrap items-center justify-between gap-3 py-3 text-deep-blue md:flex-nowrap md:py-4"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid size-9 grid-cols-2 overflow-hidden rounded-br-[16px] rounded-tl-[16px]">
            <span className="bg-deep-blue" />
            <span className="bg-secondary" />
            <span className="bg-cyan-accent" />
            <span className="bg-gold-accent" />
          </span>
          <span className="sr-only">Alpha Apex Logistics</span>
          <span className="mono-accent hidden text-sm font-black tracking-normal sm:block">
            Alpha Logistics
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="order-3 hidden items-center gap-1 md:flex md:order-2 md:w-auto md:flex-1 md:justify-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-black transition hover:bg-surface-soft hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="order-3 flex w-full items-center gap-2 md:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-lg px-3 py-2.5 text-center text-xs font-black transition hover:bg-surface-soft hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="cta-gold order-2 inline-flex shrink-0 rounded-full px-4 py-2.5 text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-gold-accent/30 md:order-3 md:px-5 md:py-3"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
