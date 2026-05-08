import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <nav
        className="site-shell flex flex-wrap items-center justify-between gap-3 py-3 text-deep-blue md:flex-nowrap md:py-4"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid size-9 grid-cols-2 overflow-hidden rounded-br-[16px] rounded-tl-[16px]">
            <span className="bg-deep-blue" />
            <span className="bg-secondary" />
            <span className="bg-[#2A9D8F]" />
            <span className="bg-accent" />
          </span>
          <span className="sr-only">Alpha Apex Logistics</span>
          <span className="hidden text-sm font-black tracking-normal sm:block">
            Alpha Logistics
          </span>
        </Link>

        <div className="order-3 flex w-full min-w-0 items-center gap-1 overflow-x-auto border-t border-black/10 pt-3 text-xs font-black text-deep-blue md:order-2 md:w-auto md:flex-1 md:justify-center md:border-t-0 md:pt-0">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 transition hover:bg-surface-soft hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="orange-cta order-2 inline-flex shrink-0 rounded-full px-4 py-2.5 text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-secondary/30 md:order-3 md:px-5 md:py-3"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
