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
import heroTrucks from "../../../public/images/hero-logistics-trucks.png";

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
    <div className="pb-8 text-deep-blue">
      <section className="site-shell soft-panel grid gap-8 overflow-hidden p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <div className="self-center">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            Our Services
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            Transport solutions for every business delivery problem.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Alpha Logistics coordinates air, ocean, land, customs, and
            specialized shipments through a clean operating model built for
            speed and reliability.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          <Image
            src={heroTrucks}
            alt="Alpha Logistics service trucks and freight containers"
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-contain"
          />
        </div>
      </section>

      <section className="site-shell mt-6 rounded-[32px] bg-white px-6 py-12 shadow-2xl shadow-sky-950/10 sm:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group relative min-h-[320px] overflow-hidden rounded-[28px] p-6 pb-16 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/10 ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-surface-soft text-deep-blue"
                }`}
              >
                <div className="flex size-14 items-center justify-center rounded-[20px] bg-white text-primary shadow-sm">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={2} />
                </div>

                <h2 className="mt-6 text-2xl font-black">{service.title}</h2>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    index === 0 ? "text-sky-50" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>

                {service.details ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                ) : null}

                <Link
                  href="/contact"
                  className={`absolute inset-x-6 bottom-6 inline-flex items-center gap-2 text-sm font-black transition group-hover:gap-3 ${
                    index === 0 ? "text-white" : "text-primary"
                  }`}
                >
                  Learn More
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
