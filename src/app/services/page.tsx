import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  PackageCheck,
  Plane,
  Ship,
  Truck,
  type LucideIcon,
} from "lucide-react";
import oceanImage from "../../../public/images/hero-global-logistics.png";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
};

const services: Service[] = [
  {
    title: "Air Freight",
    description: "Fast solutions for urgent/high-value shipments.",
    icon: Plane,
  },
  {
    title: "Ocean Freight",
    description: "FCL, LCL, and temperature-sensitive reefer cargo.",
    icon: Ship,
  },
  {
    title: "Land Freight",
    description: "Cross-border haulage across the GCC.",
    icon: Truck,
  },
  {
    title: "Customs Brokerage",
    description:
      "Handling documentation, duty calculations, and compliance.",
    icon: ClipboardCheck,
  },
  {
    title: "Specialized Services",
    description:
      "Project cargo, dangerous goods management, and packing and relocation.",
    icon: PackageCheck,
    details: [
      "Project Cargo for Oil & Gas and Construction",
      "Dangerous Goods Management",
      "Packing and Relocation",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Alpha Logistics services from Alpha Apex Logistics, including air freight, ocean freight, land freight, customs brokerage, and specialized cargo support.",
  keywords: [
    "Alpha Logistics",
    "air freight services",
    "ocean freight services",
    "land freight GCC",
    "customs brokerage",
    "specialized cargo",
  ],
};

export default function ServicesPage() {
  return (
    <div className="text-deep-blue">
      <section className="section-band-soft overflow-hidden">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="kicker">Shipping & Logistics Services</p>
            <h1 className="page-title mt-4 max-w-3xl text-balance">
              Services designed for every cargo route.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Alpha Logistics coordinates air, ocean, land, customs, and
              specialized shipments through a clear operating model built for
              speed, compliance, and dependable movement.
            </p>
            <Link
              href="/contact"
              className="orange-cta mt-7 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black"
            >
              Request a Quote
            </Link>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[34px] bg-deep-blue shadow-2xl shadow-deep-blue/20 sm:min-h-[450px]">
            <Image
              src={oceanImage}
              alt="Alpha Logistics freight services across ocean and air"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="site-shell">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="kicker">Service Overview</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Move cargo by air, sea, road, and specialist handling.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Every service card connects to the quote flow so customers can
              move from discovery to action quickly on mobile and desktop.
            </p>
          </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 4;

            return (
              <article
                key={service.title}
                className={`group flex min-h-[280px] flex-col rounded-[28px] border bg-white p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                  featured
                    ? "border-secondary/30 md:col-span-2 xl:col-span-1"
                    : "border-white/70"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary-100 text-secondary">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-surface-soft text-deep-blue transition group-hover:bg-secondary group-hover:text-white">
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                {service.details ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full bg-surface-soft px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-secondary"
                >
                  Learn More
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
        </div>
      </section>
    </div>
  );
}
