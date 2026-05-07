import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Handshake,
  Leaf,
  Network,
  Plane,
  Ship,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";
import heroImage from "../../public/images/hero-global-logistics.png";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Alpha Logistics by Alpha Apex Logistics delivers global supply chain solutions, freight forwarding, and GCC logistics support with expert teams and carrier partnerships.",
  keywords: [
    "Alpha Logistics",
    "global supply chain solution",
    "international freight forwarder",
    "GCC logistics",
    "global carrier partnerships",
  ],
};

const partners = ["Qatar", "Dammam", "Mumbai", "Makati", "Muscat", "Rwanda"];

export default function Home() {
  return (
    <div className="pb-6 text-white">
      <section className="site-shell relative isolate min-h-[720px] overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-black/30">
        <Image
          src={heroImage}
          alt="Alpha Logistics ocean and air freight network with cargo ship and aircraft"
          fill
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 1320px"
          className="hero-image-parallax -z-30 object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,18,30,0.94)_0%,rgba(5,31,49,0.78)_43%,rgba(5,31,49,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-[linear-gradient(0deg,rgba(3,18,30,0.95),rgba(3,18,30,0))]" />

        <div className="grid min-h-[720px] content-between gap-10 px-6 py-10 sm:px-10 lg:px-16">
          <div className="grid gap-8 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary-100 backdrop-blur">
                Alpha Logistics
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Your Global Supply Chain Solution
              </h1>
              <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-100 sm:text-lg">
                A leading international freight forwarder with over a decade of
                experience across the GCC and beyond.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="orange-cta inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black transition"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18"
                >
                  Track Solutions
                </Link>
              </div>
            </div>

            <div className="grid gap-4 justify-self-stretch lg:justify-self-end">
              <div className="ml-auto w-full max-w-sm rounded-[24px] bg-white/92 p-5 text-deep-blue shadow-2xl shadow-black/20 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex -space-x-2">
                    {["A", "L", "G"].map((item) => (
                      <span
                        key={item}
                        className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-secondary text-xs font-black text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-black underline underline-offset-4"
                  >
                    Leave a Review
                  </Link>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Trusted by global shippers
                </p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="text-6xl font-black tracking-tight">
                    4.8
                  </span>
                  <span className="mb-3 flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        className="size-4 fill-current"
                      />
                    ))}
                  </span>
                </div>
              </div>

              <div className="ml-auto hidden w-full max-w-md grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-[24px] bg-deep-blue/78 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur md:grid">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    CN SHG
                  </p>
                  <p className="mt-2 text-sm font-black">ATD May 3</p>
                </div>
                <ArrowRight aria-hidden="true" className="size-8 text-accent" />
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    QA DOH
                  </p>
                  <p className="mt-2 text-sm font-black">ETA May 5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 pb-2 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div className="glass-panel max-w-sm p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
                Unloading
              </p>
              <h2 className="mt-2 text-xl font-black">Book Container Today</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Fast quote handling for ocean, air, land, and specialized
                shipments.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-accent"
              >
                Book Now
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Air", Plane, "Urgent and high-value cargo"],
                ["Ocean", Ship, "FCL, LCL, and reefer freight"],
                ["Land", Truck, "Cross-border GCC haulage"],
              ].map(([title, Icon, text]) => (
                <div
                  key={title as string}
                  className="rounded-[22px] border border-white/12 bg-white/10 p-4 backdrop-blur"
                >
                  <Icon aria-hidden="true" className="size-6 text-accent" />
                  <h3 className="mt-3 font-black">{title as string}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    {text as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell mt-6 rounded-[32px] bg-white px-6 py-10 text-deep-blue shadow-2xl shadow-black/10 sm:px-10 lg:px-14">
        <p className="text-center text-sm font-semibold text-slate-500">
          Partners and active branches across key trade corridors
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 text-center text-xl font-black text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="site-shell mt-6 grid gap-6 rounded-[32px] bg-white px-6 py-14 text-deep-blue shadow-2xl shadow-black/10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <div className="max-w-xl self-center">
          <p className="inline-flex rounded-full bg-accent/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-accent-700">
            Why Choose Us
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight">
            Navigate global trade with trusted freight specialists.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Alpha Logistics combines top-tier carrier relationships with a team
            that understands freight movement, documentation, customs, and
            project cargo requirements.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-deep-blue px-6 text-sm font-black text-white transition hover:bg-muted-blue"
          >
            Ship Now
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Strong Global Partnerships",
              description:
                "Top-tier carriers and international partners help keep freight moving through reliable lanes.",
              icon: Handshake,
            },
            {
              title: "Expert Team",
              description:
                "Experienced specialists support air, ocean, land, customs, and specialized cargo.",
              icon: UsersRound,
            },
            {
              title: "Connected Network",
              description:
                "Regional offices and global coordination support responsive freight decisions.",
              icon: Network,
            },
            {
              title: "Sustainable Practices",
              description:
                "Smarter planning and efficient movement support responsible logistics operations.",
              icon: Leaf,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-surface-soft p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-[18px] bg-white text-primary shadow-sm">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell mt-6 grid gap-6 rounded-[32px] bg-white px-6 py-14 text-deep-blue shadow-2xl shadow-black/10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px]">
            <Image
              src={heroImage}
              alt="Container ship operated through Alpha Logistics ocean freight lanes"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover object-center"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[170px] overflow-hidden rounded-[28px]">
              <Image
                src={heroImage}
                alt="Alpha Logistics container freight detail"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover object-[70%_center]"
              />
            </div>
            <div className="rounded-[28px] bg-deep-blue p-6 text-white">
              <Boxes aria-hidden="true" className="size-8 text-accent" />
              <h3 className="mt-5 text-2xl font-black">3000+</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Coordinated shipments and growing carrier relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="self-center">
          <p className="inline-flex rounded-full bg-secondary/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-secondary">
            Company Vision
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight">
            Recognized globally for innovation and sustainable logistics.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Our vision is to become a globally recognized logistics partner by
            combining freight expertise, digital operational clarity, and
            sustainable practices that reduce waste across every movement.
          </p>
        </div>
      </section>
    </div>
  );
}
