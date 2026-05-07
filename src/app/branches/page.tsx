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
import oceanImage from "../../../public/images/hero-global-logistics.png";

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
    <div className="pb-8 text-deep-blue">
      <section className="site-shell soft-panel grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            Global Branches
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            Offices and representatives across key freight corridors.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Local coordination across the GCC, Asia, and East Africa with Qatar
            HQ oversight.
          </p>
        </div>
        <div className="relative min-h-[330px] overflow-hidden rounded-[30px]">
          <Image
            src={oceanImage}
            alt="Alpha Logistics global branches and ocean freight"
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,152,223,0.45),rgba(255,255,255,0.05))]" />
          <div className="absolute bottom-5 left-5 rounded-[22px] bg-white/88 p-5 backdrop-blur">
            <p className="text-4xl font-black">6</p>
            <p className="text-sm font-bold text-slate-500">
              Strategic locations
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell mt-6 rounded-[32px] bg-white px-6 py-12 shadow-2xl shadow-sky-950/10 sm:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((branch) => (
            <article
              key={branch.country}
              className="rounded-[28px] bg-surface-soft p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
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
                  <MapPin aria-hidden="true" className="mt-1 size-5 text-primary" />
                  <p>{branch.address}</p>
                </div>
                <div className="grid grid-cols-[20px_1fr] gap-3">
                  <Phone aria-hidden="true" className="mt-1 size-5 text-primary" />
                  {branch.phone && branch.phoneHref ? (
                    <a
                      href={branch.phoneHref}
                      className="font-black text-primary transition hover:text-primary-700"
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
                    <UserRound aria-hidden="true" className="mt-1 size-5 text-primary" />
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
                    <Mail aria-hidden="true" className="mt-1 size-5 text-primary" />
                    <a
                      href={`mailto:${branch.contactEmail}`}
                      className="break-all font-black text-primary transition hover:text-primary-700"
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
