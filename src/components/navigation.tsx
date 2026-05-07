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
        className="site-shell flex flex-col gap-4 rounded-[28px] border border-white bg-white/86 px-4 py-3 text-deep-blue shadow-2xl shadow-sky-950/10 backdrop-blur-xl sm:px-5 lg:flex-row lg:items-center lg:justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-[14px] bg-deep-blue text-sm font-black tracking-tight text-white shadow-lg shadow-sky-950/10">
            AL
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight text-deep-blue">
              Alpha Apex Logistics
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Alpha Logistics
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-sky-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="orange-cta rounded-full px-4 py-2 text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-secondary/30"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
