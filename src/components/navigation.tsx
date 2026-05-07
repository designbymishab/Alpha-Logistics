import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 px-3 py-4 sm:px-6">
      <nav
        className="site-shell flex flex-col gap-4 rounded-[24px] border border-white/15 bg-white/10 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5 lg:flex-row lg:items-center lg:justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-[14px] bg-accent text-sm font-black tracking-tight text-deep-blue shadow-lg shadow-accent/25">
            AL
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight text-white">
              Alpha Apex Logistics
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Alpha Logistics
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/78">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/12 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="orange-cta rounded-full px-4 py-2 text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
