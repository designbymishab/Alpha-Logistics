import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-deep-blue text-white">
      <div className="site-shell grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/android-chrome-512x512.png"
              alt="Alpha Apex Logistics Logo"
              width={44}
              height={44}
              className="rounded-xl"
            />
            <div>
              <p className="mono-accent font-black">Alpha Apex Logistics</p>
              <p className="text-sm font-medium text-white/60">
                Freight forwarding, rooted in Qatar.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/62">
            We move cargo by air, ocean, and road — with customs support and a
            single accountable team from start to finish.
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
                className="transition hover:text-gold-accent"
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
            <a className="mono-accent font-black text-gold-accent" href="tel:+97441424247">
              +974 4142 4247
            </a>
          </div>
        </address>
        <div className="border-t border-white/10 pt-6 md:col-span-3">
          <div className="flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <p>
            Copyright {new Date().getFullYear()} Alpha Apex Logistics. All
            rights reserved.
          </p>
          <p className="mono-accent">DOH / GCC / GLOBAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
