import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import heroImage from "../../../public/images/hero-global-logistics.png";

type Branch = {
  country: string;
  label?: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  contactPerson?: string;
  contactEmail?: string;
  badges?: string[];
  position: string;
};

const branches: Branch[] = [
  {
    country: "Qatar",
    label: "HQ",
    address: "Al Suhaim Tower, Al Sadd, Doha, Qatar",
    phone: "+974 4142 4247",
    phoneHref: "tel:+97441424247",
    badges: ["MOT Approved"],
    position: "left-[58%] top-[38%]",
  },
  {
    country: "Saudi Arabia",
    address: "Building 4485, King Saud St., Dammam, Saudi Arabia",
    contactEmail: "mohamed.a@alphalogintl.com",
    position: "left-[51%] top-[48%]",
  },
  {
    country: "Philippines",
    address:
      "11th Floor, Vicente Madrigal Building, Ayala Avenue, Makati City, Philippines",
    contactEmail: "Donna@alphalogintl.com",
    position: "left-[77%] top-[58%]",
  },
  {
    country: "India",
    address:
      "Floor 2, Office B-222/B, Eastern Business District, Mumbai, India",
    contactPerson: "Sumi Nambiar",
    position: "left-[66%] top-[56%]",
  },
  {
    country: "Oman",
    label: "Coming Soon",
    address: "Muscat, Oman",
    badges: ["Coming Soon"],
    position: "left-[59%] top-[51%]",
  },
  {
    country: "Rwanda",
    label: "East Africa Office",
    address: "East Africa Office, Rwanda",
    position: "left-[55%] top-[67%]",
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
    <div className="pb-6 text-white">
      <section className="site-shell grid gap-6 rounded-[32px] bg-white p-4 text-deep-blue shadow-2xl shadow-black/20 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative min-h-[440px] overflow-hidden rounded-[28px] bg-deep-blue p-8 text-white">
          <Image
            src={heroImage}
            alt="Alpha Logistics global branch network over ocean freight"
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 540px"
            className="-z-10 object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(42,157,143,0.26),transparent_30%),linear-gradient(135deg,rgba(4,21,34,0.9),rgba(4,21,34,0.54))]" />
          <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary-100">
            Network view
          </p>
          <h1 className="mt-4 max-w-lg text-5xl font-black leading-tight tracking-tight">
            Global Branches
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Local coordination across the GCC, Asia, and East Africa with Qatar
            HQ oversight.
          </p>

          {branches.map((branch) => (
            <div
              key={branch.country}
              className={`absolute ${branch.position} -translate-x-1/2 -translate-y-1/2`}
            >
              <span className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20" />
              <span className="relative block size-3 rounded-full bg-accent ring-4 ring-white/25" />
              <span className="absolute left-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-deep-blue shadow-sm sm:block">
                {branch.country}
              </span>
            </div>
          ))}
        </div>

        <div className="grid content-center gap-5 p-2 sm:p-4 lg:p-8">
          <p className="inline-flex w-fit rounded-full bg-accent/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-accent-700">
            Locations
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight">
            Offices and representatives across key freight corridors.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            Each Alpha Logistics branch supports local documentation,
            communication, and cargo coordination for international movement.
          </p>
        </div>
      </section>

      <section className="site-shell mt-6 rounded-[32px] bg-white px-6 py-14 text-deep-blue shadow-2xl shadow-black/10 sm:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((branch) => (
            <article
              key={branch.country}
              className="rounded-[28px] border border-slate-200 bg-surface-soft p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/12"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">
                    {branch.label ?? "Branch"}
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {branch.country}
                  </h2>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[18px] bg-white text-primary shadow-sm">
                  <MapPin aria-hidden="true" className="size-6" />
                </span>
              </div>

              <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-600">
                <div className="grid grid-cols-[20px_1fr] gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 text-accent" />
                  <p>{branch.address}</p>
                </div>

                <div className="grid grid-cols-[20px_1fr] gap-3">
                  <Phone aria-hidden="true" className="mt-1 size-5 text-accent" />
                  {branch.phone && branch.phoneHref ? (
                    <a
                      href={branch.phoneHref}
                      className="font-black text-primary transition hover:text-accent-700"
                    >
                      {branch.phone}
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-500">
                      Phone to be confirmed
                    </span>
                  )}
                </div>

                {branch.contactPerson ? (
                  <div className="grid grid-cols-[20px_1fr] gap-3">
                    <UserRound aria-hidden="true" className="mt-1 size-5 text-accent" />
                    <p>
                      <span className="font-black text-deep-blue">
                        Contact:
                      </span>{" "}
                      {branch.contactPerson}
                    </p>
                  </div>
                ) : null}

                {branch.contactEmail ? (
                  <div className="grid grid-cols-[20px_1fr] gap-3">
                    <Mail aria-hidden="true" className="mt-1 size-5 text-accent" />
                    <a
                      href={`mailto:${branch.contactEmail}`}
                      className="break-all font-black text-primary transition hover:text-accent-700"
                    >
                      {branch.contactEmail}
                    </a>
                  </div>
                ) : null}
              </div>

              {branch.badges ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {branch.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-black text-secondary shadow-sm"
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
      </section>
    </div>
  );
}
