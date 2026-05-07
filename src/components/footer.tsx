import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="px-3 pb-6 text-deep-blue sm:px-6">
      <div className="site-shell grid gap-10 rounded-[32px] bg-white px-5 py-12 shadow-2xl shadow-sky-950/10 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[14px] bg-deep-blue text-base font-black tracking-tight text-white">
              AL
            </span>
            <div>
              <p className="font-bold">Alpha Apex Logistics</p>
              <p className="text-sm font-medium text-slate-500">
                Alpha Logistics for ocean, air, and GCC freight.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Delivering dependable logistics support from Qatar to regional and
            international trade lanes.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Navigation
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Qatar HQ
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <p>Office 212, Al Suhaim Tower</p>
            <p>Doha, Qatar</p>
            <a className="font-semibold text-primary" href="tel:+97441424247">
              +974 4142 4247
            </a>
          </div>
        </address>
        <div className="border-t border-slate-200 pt-6 md:col-span-3">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Alpha Apex Logistics. All
            rights reserved.
          </p>
          <p className="text-slate-500">Built for reliable global movement.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
