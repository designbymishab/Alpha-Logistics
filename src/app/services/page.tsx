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
    description:
      "When time costs more than freight, our air cargo team gets it there fast — handling urgent, high-value, and replenishment shipments.",
    icon: Plane,
  },
  {
    title: "Ocean Freight",
    description:
      "Full container, less-than-container, and temperature-controlled shipping for long-haul routes where keeping costs predictable matters most.",
    icon: Ship,
  },
  {
    title: "Land Freight",
    description:
      "Cross-border trucking across the GCC for regional distribution, time-definite delivery, and reliable first-mile or last-mile coverage.",
    icon: Truck,
  },
  {
    title: "Customs Brokerage",
    description:
      "We handle HS codes, duty calculations, compliance reviews, and documentation prep — so your cargo clears without delays.",
    icon: ClipboardCheck,
  },
  {
    title: "Specialized Services",
    description:
      "Careful handling for project cargo, hazardous materials, packing, relocation, and any shipment that needs extra attention and oversight.",
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
    "Air freight, ocean freight, GCC road freight, customs brokerage, and specialized cargo handling — all managed by one experienced team at Alpha Apex Logistics.",
  keywords: [
    "Alpha Apex Logistics services",
    "air freight Qatar",
    "ocean freight services",
    "GCC road freight",
    "customs brokerage Qatar",
    "specialized cargo handling",
  ],
};

export default function ServicesPage() {
  return (
    <div className="text-deep-blue">
      <section className="section-band-soft overflow-hidden">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="kicker">Shipping & Logistics Services</p>
            <h1 className="page-title mt-3 max-w-3xl text-balance sm:mt-4">
              Freight solutions that hold up when the pressure is on.
            </h1>
            <p className="mt-4 max-w-2xl text-[0.85rem] leading-6 text-cool-gray sm:mt-5 sm:text-sm sm:leading-7">
              We bring air, ocean, land, customs, and specialized cargo under
              one roof — so you can compare cost, speed, and risk before
              committing to a route. No surprises down the line.
            </p>
            <Link
              href="/contact"
              className="cta-primary mt-7 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black"
            >
              Request a Quote
            </Link>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-deep-blue shadow-2xl shadow-deep-blue/20 sm:min-h-[450px]">
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
          <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 md:flex-row md:items-end">
            <div>
              <p className="kicker">Service Overview</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight sm:mt-3 sm:text-5xl">
                The right mode for the moment.
              </h2>
            </div>
            <p className="max-w-md text-[0.85rem] leading-6 text-cool-gray sm:text-sm sm:leading-7">
              Air keeps things moving when speed matters. Ocean keeps unit costs
              down on longer hauls. Road gives you tighter regional control.
              And brokerage keeps clearance on schedule.
            </p>
          </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 4;

            return (
              <article
                key={service.title}
                className={`group flex min-h-[280px] flex-col rounded-xl border bg-white p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                  featured
                    ? "border-gold-accent/30 md:col-span-2 xl:col-span-1"
                    : "border-border-color"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-surface-soft text-deep-blue transition group-hover:bg-gold-accent group-hover:text-white">
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-cool-gray">
                  {service.description}
                </p>
                {service.details ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full bg-surface-soft px-3 py-1.5 text-xs font-bold text-cool-gray"
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
