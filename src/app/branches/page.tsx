import type { Metadata } from "next";
import {
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

type Branch = {
  country: string;
  label?: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  contactPerson?: string;
  contactEmail?: string;
  badges?: string[];
};

const branches: Branch[] = [
  {
    country: "Qatar",
    label: "HQ",
    address: "Al Suhaim Tower, Al Sadd, Doha, Qatar",
    phone: "+974 4142 4247",
    phoneHref: "tel:+97441424247",
    badges: ["MOT Approved"],
  },
  {
    country: "Saudi Arabia",
    address: "Building 4485, King Saud St., Dammam, Saudi Arabia",
    contactEmail: "mohamed.a@alphalogintl.com",
  },
  {
    country: "Philippines",
    address:
      "11th Floor, Vicente Madrigal Building, Ayala Avenue, Makati City, Philippines",
    contactEmail: "Donna@alphalogintl.com",
  },
  {
    country: "India",
    address:
      "Floor 2, Office B-222/B, Eastern Business District, Mumbai, India",
    contactPerson: "Sumi Nambiar",
  },
  {
    country: "Oman",
    label: "Coming Soon",
    address: "Muscat, Oman",
    badges: ["Coming Soon"],
  },
  {
    country: "Rwanda",
    label: "East Africa Office",
    address: "East Africa Office, Rwanda",
  },
];

export const metadata: Metadata = {
  title: "Global Branches",
  description:
    "Explore Alpha Logistics global branch locations for Alpha Apex Logistics across Qatar, Saudi Arabia, Philippines, India, Oman, and Rwanda.",
  keywords: [
    "Alpha Logistics",
    "Alpha Logistics branches",
    "Qatar logistics HQ",
    "GCC freight offices",
    "global logistics branches",
  ],
};

export default function BranchesPage() {
  return (
    <div className="text-deep-blue">
      <section className="section-band-soft overflow-hidden">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="kicker">Global Branches</p>
            <h1 className="page-title mt-4 max-w-3xl">
              Local teams connected to global freight lanes.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Find Alpha Logistics branch coverage across Qatar, the GCC, Asia,
              and East Africa, with contact details for the right regional
              office.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-white p-5 shadow-2xl shadow-deep-blue/10 sm:min-h-[460px]">
            <div className="absolute inset-0 opacity-70">
              <div className="h-full bg-[radial-gradient(circle_at_18%_50%,#ff6b1a_0_5px,transparent_6px),radial-gradient(circle_at_45%_42%,#1b4d89_0_5px,transparent_6px),radial-gradient(circle_at_58%_62%,#2A9D8F_0_5px,transparent_6px),radial-gradient(circle_at_72%_38%,#7f1d1d_0_5px,transparent_6px),radial-gradient(circle_at_82%_66%,#ff6b1a_0_5px,transparent_6px),linear-gradient(120deg,transparent_18%,rgba(27,77,137,.12)_18%_19%,transparent_19%_46%,rgba(42,157,143,.16)_46%_47%,transparent_47%)]" />
            </div>
            <div className="relative flex h-full flex-col justify-end">
              <div className="max-w-md rounded-[24px] bg-deep-blue p-5 text-white shadow-xl shadow-primary/10">
                <p className="kicker">Qatar HQ</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Office 212, Al Suhaim Tower, Doha
                </h2>
                <a
                  href="tel:+97441424247"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-black text-secondary"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  +974 4142 4247
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="site-shell">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="kicker">Locations</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Regional offices with clear contact routes.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Phone links are mobile-ready where numbers are available, with
              email and named contacts shown for applicable offices.
            </p>
          </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((branch) => (
            <article
              key={branch.country}
              className="flex min-h-[300px] flex-col rounded-[28px] border border-black/10 bg-white p-6 shadow-lg shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="kicker">{branch.label ?? "Branch"}</p>
                  <h2 className="mt-2 text-2xl font-black">
                    {branch.country}
                  </h2>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-deep-blue text-white">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
              </div>

              <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-600">
                <p>{branch.address}</p>
                {branch.phone && branch.phoneHref ? (
                  <a
                    href={branch.phoneHref}
                    className="inline-flex items-center gap-2 font-black text-secondary"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {branch.phone}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-semibold text-slate-500">
                    <Phone aria-hidden="true" className="size-4" />
                    Phone to be confirmed
                  </span>
                )}
                {branch.contactPerson ? (
                  <span className="inline-flex items-center gap-2">
                    <UserRound
                      aria-hidden="true"
                      className="size-4 text-secondary"
                    />
                    Contact: {branch.contactPerson}
                  </span>
                ) : null}
                {branch.contactEmail ? (
                  <a
                    href={`mailto:${branch.contactEmail}`}
                    className="inline-flex items-center gap-2 break-all font-black text-deep-blue"
                  >
                    <Mail aria-hidden="true" className="size-4 text-secondary" />
                    {branch.contactEmail}
                  </a>
                ) : null}
              </div>

              {branch.badges ? (
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {branch.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary-100 px-3 py-1.5 text-xs font-black text-secondary"
                    >
                      {badge === "Coming Soon" ? (
                        <Clock aria-hidden="true" className="size-3.5" />
                      ) : (
                        <BadgeCheck aria-hidden="true" className="size-3.5" />
                      )}
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}
