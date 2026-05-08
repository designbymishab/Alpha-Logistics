import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-deep-blue text-white">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 grid-cols-2 overflow-hidden rounded-br-[18px] rounded-tl-[18px]">
              <span className="bg-white" />
              <span className="bg-secondary" />
              <span className="bg-[#2A9D8F]" />
              <span className="bg-accent" />
            </span>
            <div>
              <p className="font-black">Alpha Apex Logistics</p>
              <p className="text-sm font-medium text-white/60">
                Alpha Logistics for ocean, air, and GCC freight.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/62">
            Delivering dependable logistics support from Qatar to regional and
            international trade lanes.
          </p>
        </div>

        <div>
          <h2 className="kicker">
            Navigation
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-white/62">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <address className="not-italic">
          <h2 className="kicker">
            Qatar HQ
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-white/62">
            <p>Office 212, Al Suhaim Tower</p>
            <p>Doha, Qatar</p>
            <a className="font-black text-secondary" href="tel:+97441424247">
              +974 4142 4247
            </a>
          </div>
        </address>
        <div className="border-t border-white/10 pt-6 md:col-span-3">
          <div className="flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Alpha Apex Logistics. All
            rights reserved.
          </p>
          <p>Built for reliable global movement.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
