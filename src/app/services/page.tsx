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
import heroImage from "../../../public/images/hero-global-logistics.png";

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
    <div className="pb-6 text-white">
      <section className="site-shell grid gap-8 overflow-hidden rounded-[32px] border border-white/12 bg-deep-blue shadow-2xl shadow-black/30 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="px-6 py-14 sm:px-10 lg:px-14">
          <p className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-secondary-100">
            Alpha Logistics services
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Freight services designed for speed, control, and reach.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            From urgent air cargo to cross-border haulage and regulated
            shipments, our model is built around dependable movement, clear
            documentation, and proactive coordination.
          </p>
        </div>
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src={heroImage}
            alt="Alpha Logistics cargo ship for freight services"
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,21,34,0.7),rgba(4,21,34,0.05))]" />
        </div>
      </section>

      <section className="site-shell mt-6 rounded-[32px] bg-white px-6 py-14 text-deep-blue shadow-2xl shadow-black/10 sm:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group relative min-h-[330px] overflow-hidden rounded-[28px] border border-slate-200 p-6 pb-16 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/12 ${
                  index === 1
                    ? "bg-deep-blue text-white"
                    : "bg-surface-soft text-deep-blue"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-accent transition group-hover:bg-secondary" />
                <div
                  className={`flex size-14 items-center justify-center rounded-[20px] transition duration-300 ${
                    index === 1
                      ? "bg-white/10 text-accent"
                      : "bg-white text-primary shadow-sm"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-7" strokeWidth={2} />
                </div>

                <h2 className="mt-6 text-2xl font-black">{service.title}</h2>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    index === 1 ? "text-slate-300" : "text-slate-600"
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
                    index === 1 ? "text-accent" : "text-primary"
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
