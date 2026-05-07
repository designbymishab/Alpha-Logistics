import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  CheckCircle2,
  CircleDollarSign,
  Handshake,
  Plane,
  Route,
  Ship,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";
import heroTrucks from "../../public/images/hero-logistics-trucks.png";
import oceanImage from "../../public/images/hero-global-logistics.png";

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

const partnerChips = ["DHL", "FedEx", "GCC Carriers", "Air Cargo", "Ocean Lines"];

export default function Home() {
  return (
    <div className="pb-8 text-deep-blue">
      <section className="site-shell soft-panel relative isolate overflow-hidden px-6 pb-8 pt-10 sm:px-10 lg:px-14">
        <div className="grid min-h-[610px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10 max-w-2xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
              Alpha Logistics
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-deep-blue sm:text-7xl lg:text-8xl">
              Speed meets reliability in every delivery
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              A leading international freight forwarder with over a decade of
              experience across the GCC and beyond.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="orange-cta inline-flex h-13 items-center justify-center rounded-full px-6 text-sm font-black transition"
              >
                Create your account
              </Link>
              <Link
                href="/services"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-black text-deep-blue shadow-lg shadow-amber-400/20 transition hover:bg-accent-700 hover:text-white"
              >
                Start shipping
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {partnerChips.map((chip, index) => (
                <span
                  key={chip}
                  className={`inline-flex h-11 items-center rounded-full px-5 text-sm font-black shadow-sm ${
                    index === 0
                      ? "bg-amber-300 text-red-700"
                      : index === 1
                        ? "bg-white text-violet-700"
                        : index === 2
                          ? "bg-white text-primary"
                          : "bg-white text-slate-700"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px] lg:min-h-[610px]">
            <Image
              src={heroTrucks}
              alt="Alpha Logistics freight trucks moving on a clean modern delivery route"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 680px"
              className="object-contain object-center"
            />
            <div className="glass-panel absolute bottom-8 left-2 w-[240px] p-4 sm:left-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Shipment
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-white">
                  <CheckCircle2 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-black">On schedule</p>
                  <p className="text-xs text-slate-500">Doha ETA 09:00</p>
                </div>
              </div>
            </div>
            <div className="glass-panel absolute right-2 top-8 w-[190px] p-4 sm:right-8">
              <p className="text-xs font-black text-slate-500">Shipwide</p>
              <p className="mt-1 text-2xl font-black">Worry-free</p>
              <div className="mt-3 flex text-accent-700">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="size-4 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-6 md:grid-cols-4">
          {[
            ["Create your account", BadgeCheck],
            ["Connect your shipment", Route],
            ["Estimate freight cost", CircleDollarSign],
            ["Start shipping", Box],
          ].map(([title, Icon]) => (
            <article
              key={title as string}
              className="rounded-[22px] bg-white p-5 shadow-sm"
            >
              <Icon aria-hidden="true" className="size-8 text-primary" />
              <h2 className="mt-4 text-sm font-black">{title as string}</h2>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Reliable coordination with a dedicated Alpha Logistics team.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell mt-6 grid gap-6 rounded-[32px] bg-white px-6 py-14 shadow-2xl shadow-sky-950/10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <div className="max-w-xl self-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
            Transport solutions for business delivery problems
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Navigate global trade with trusted freight movement by road, air,
            and sea, backed by customs and specialized cargo expertise.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-black text-white transition hover:bg-primary-700"
          >
            More Info
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4">
          {[
            ["01", "By Road", Truck, "Cross-border GCC haulage"],
            ["02", "By Air", Plane, "Urgent and high-value cargo"],
            ["03", "By Sea", Ship, "FCL, LCL, and reefer cargo"],
          ].map(([number, title, Icon, text]) => (
            <article
              key={title as string}
              className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-b border-slate-200 py-5 last:border-b-0"
            >
              <span className="text-4xl font-black text-slate-200">
                {number as string}
              </span>
              <div>
                <h3 className="text-2xl font-black">{title as string}</h3>
                <p className="mt-1 text-sm text-slate-400">{text as string}</p>
              </div>
              <span className="flex size-11 items-center justify-center rounded-full bg-surface-soft text-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell mt-6 grid gap-6 rounded-[32px] bg-white px-6 py-14 shadow-2xl shadow-sky-950/10 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em]">
            Strong partnerships and expert people behind every shipment.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Strong Global Partnerships",
                description:
                  "Top-tier carriers and international partners help freight move through reliable lanes.",
                icon: Handshake,
              },
              {
                title: "Expert Team",
                description:
                  "Experienced specialists support air, ocean, land, customs, and specialized cargo.",
                icon: UsersRound,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[24px] bg-surface-soft p-6"
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
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[30px]">
          <Image
            src={oceanImage}
            alt="Alpha Logistics container ship for global freight progress"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,152,223,0.55),rgba(7,152,223,0.05))]" />
          <div className="absolute bottom-5 left-5 rounded-[22px] bg-white/88 p-5 backdrop-blur">
            <p className="text-3xl font-black">323K</p>
            <p className="text-xs font-bold text-slate-500">Delivered items</p>
          </div>
        </div>
      </section>
    </div>
  );
}
