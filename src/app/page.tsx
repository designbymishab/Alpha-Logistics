import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Globe2,
  MapPin,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  UsersRound,
} from "lucide-react";
import containerImage from "../../public/images/hero-black-container.webp";
import oceanImage from "../../public/images/hero-global-logistics.webp";
import airshippingImage from "../../public/images/airshipping.webp";
import seashippingImage from "../../public/images/seashipping.webp";
import landshippingImage from "../../public/images/hero-logistics-trucks.webp";
import poweringlogistics from "../../public/images/poweringlogistics.webp";
import globalNetworkBg from "../../public/images/map.webp";
import nationwideTruck from "../../public/images/map.webp";
import nationwideWarehouse from "../../public/images/truck.gif";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Alpha Apex Logistics is an international freight forwarder headquartered in Qatar — moving air, ocean, and road cargo across the GCC and major global trade corridors.",
  keywords: [
    "Alpha Apex Logistics",
    "freight forwarder Qatar",
    "international freight forwarding",
    "GCC logistics company",
    "air ocean road freight",
  ],
};

const partners = [
  "QTR-HQ",
  "GCC-ROAD",
  "AIR-CARGO",
  "OCEAN-FCL",
  "REEFER",
  "CUSTOMS",
];

const services = [
  {
    title: "Sea Shipping",
    href: "/services",
    icon: Ship,
    image: seashippingImage,
  },
  {
    title: "Air Shipping",
    href: "/services",
    icon: Plane,
    image: airshippingImage,
  },
  {
    title: "Land Shipping",
    href: "/services",
    icon: Truck,
    image: landshippingImage,
  },
];

const businessPoints = [
  "Multi-carrier routing that adapts when ocean and air markets shift",
  "Customs paperwork prepared before your cargo reaches the border",
  "One dedicated contact for updates, exceptions, and quick decisions",
];

const locations = [
  ["Qatar", "HQ"],
  ["Saudi Arabia", "Dammam"],
  ["Philippines", "Makati"],
  ["India", "Mumbai"],
  ["Oman", "Soon"],
  ["Rwanda", "East Africa"],
];

const whyChooseUs = [
  {
    title: "Trusted Carrier Network",
    description:
      "We've built long-standing relationships with carriers and agents worldwide, so your cargo gets priority even when capacity is tight.",
    icon: Globe2,
  },
  {
    title: "People Who Know Freight",
    description:
      "Our team handles the routing, paperwork, duties, and compliance details — so you get a clear plan instead of a pile of decisions.",
    icon: UsersRound,
  },
  {
    title: "Built Around Compliance",
    description:
      "We prepare documentation and brokerage support upfront, which means fewer surprises at the border and faster clearance times.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="bg-background text-deep-blue">
      <section className="relative overflow-visible bg-background">
        <ScrollReveal>
          <div className="site-shell pb-0 pt-20 sm:pt-28 lg:pt-36">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-black leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
                Delivering Your Cargo
                <span className="mt-2 flex items-center justify-center gap-2 sm:gap-3 text-secondary">
                  Worldwide
                </span>
              </h1>
              <p className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-[0.85rem] leading-6 text-cool-gray sm:px-0 sm:text-base sm:leading-7">
                Qatar-based freight forwarding for businesses that ship
                time-sensitive, regulated, and high-value cargo across
                the GCC and international markets.
              </p>

              <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/contact"
                  className="cta-gold inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-black"
                >
                  Get a Free Quote
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-color bg-white px-7 text-sm font-black text-deep-blue shadow-sm transition hover:border-secondary hover:shadow-md"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="relative z-20 mx-auto mb-[-1.5rem] mt-8 min-h-[240px] max-w-6xl sm:mb-[-3.5rem] sm:min-h-[470px] lg:mb-[-5rem] lg:min-h-[560px]">
              <div className="absolute left-2 top-16 hidden h-px w-40 rotate-[-18deg] bg-secondary sm:block" />
              <div className="absolute right-16 top-8 hidden h-px w-48 rotate-[12deg] bg-secondary sm:block" />
              <span className="absolute left-2 top-20 hidden size-4 rounded-full border-2 border-secondary sm:block" />
              <span className="absolute right-5 top-14 hidden size-4 rounded-full border-2 border-secondary sm:block" />
              <div className="absolute inset-0 z-30 translate-y-8 sm:translate-y-10 sm:scale-110 lg:translate-y-14 lg:scale-125">
                <div className="relative h-full w-full animate-container-3d">
                  <Image
                    src={containerImage}
                    alt="Alpha Logistics black shipping container"
                    fill
                    priority
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 1040px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-10 bottom-0 z-10 h-16 rounded-full bg-deep-blue/10 blur-3xl" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative z-10 bg-white pb-16 pt-4 sm:-mt-14 sm:pb-20 lg:-mt-24">
        <ScrollReveal>
          <div className="site-shell">
            <div className="relative overflow-hidden rounded-2xl bg-deep-blue text-white shadow-2xl shadow-deep-blue/25 sm:rounded-3xl">
              <div
                aria-hidden="true"
                className="absolute -right-28 -top-28 size-72 rounded-full bg-secondary/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-32 left-1/4 size-80 rounded-full bg-primary/18 blur-3xl"
              />

              <div className="relative flex flex-wrap items-center justify-center gap-1.5 border-b border-white/10 px-3 py-4 sm:gap-3 sm:px-8 lg:px-10">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2.5 py-1.5 text-[0.65rem] font-black text-white/68 sm:gap-2 sm:px-3 sm:py-2 sm:text-[0.7rem]"
                  >
                    <span className="size-1.5 rounded-full bg-secondary" />
                    <span className="mono-accent">{partner}</span>
                  </span>
                ))}
              </div>

              <div className="relative grid gap-8 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-10 xl:p-12">
                <div className="relative min-h-[340px] mt-4 sm:mt-0 sm:min-h-[480px] w-full">
                  {/* Main Large Image (Warehouse) */}
                  <div className="absolute inset-0 sm:bottom-12 sm:right-12 overflow-hidden rounded-2xl border border-white/10 bg-deep-blue shadow-2xl shadow-black/40">
                    <Image
                      src={nationwideWarehouse}
                      alt="High-tech logistics warehouse"
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/90 via-transparent to-transparent" />

                    {/* Floating Badge inside Warehouse image */}
                    <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-[#0A2342]/60 p-4 backdrop-blur-md shadow-lg shadow-black/20">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-cyan-accent">
                        Route intelligence
                      </p>
                      <p className="mt-1 text-xl font-black leading-tight text-white sm:text-2xl">
                        Synced operations
                      </p>
                    </div>
                  </div>

                  {/* Floating Image (Truck) */}
                  <div className="absolute -bottom-2 -right-2 hidden sm:block h-[260px] w-[280px] overflow-hidden rounded-2xl border-[6px] border-[#0A2342] bg-deep-blue shadow-2xl shadow-black/40 backdrop-blur-sm lg:-bottom-6 lg:-right-6">
                    <Image
                      src={nationwideTruck}
                      alt="Premium logistics delivery truck"
                      fill
                      placeholder="blur"
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Stat Badge */}
                  <div className="absolute -top-2 -left-2 rounded-2xl bg-gold-accent px-4 py-3 text-deep-blue shadow-xl shadow-gold-accent/30 sm:-left-6 sm:-top-4 sm:px-5 sm:py-4 z-10">
                    <p className="mono-accent text-2xl font-black drop-shadow-sm sm:text-4xl">
                      10+
                    </p>
                    <p className="mt-0.5 text-[0.6rem] font-black uppercase tracking-[0.14em] opacity-80 sm:mt-1 sm:text-xs">
                      Years GCC Exp
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:pl-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="w-fit rounded-full bg-secondary/20 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] text-secondary border border-secondary/20 sm:px-4 sm:py-2 sm:text-xs">
                      Alpha Logistics
                    </span>
                    <span className="flex items-center gap-1.5 text-[0.65rem] font-bold text-white/60 sm:text-[0.7rem]">
                      <ShieldCheck aria-hidden="true" className="size-3.5 text-secondary sm:size-4" />
                      Verified Network
                    </span>
                  </div>
                  <h2 className="mt-4 max-w-2xl text-[1.65rem] font-black leading-[1.1] text-white sm:mt-6 sm:text-4xl lg:text-6xl">
                    Your{" "}
                    <span className="text-secondary drop-shadow-sm">Complete</span> Freight{" "}
                    Forwarding Partner
                  </h2>
                  <p className="mt-4 max-w-xl text-[0.85rem] leading-6 text-white/60 sm:mt-5 sm:text-[0.95rem] sm:leading-relaxed">
                    Shipping is getting more complex — tighter capacity, shifting
                    tariffs, unpredictable routes. We cut through that noise with
                    practical routing, clear documentation, and a team that stays
                    accountable from the first quote to final delivery.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
                    {[
                      { mode: "AIR", icon: Plane },
                      { mode: "OCEAN", icon: Ship },
                      { mode: "LAND", icon: Truck }
                    ].map(({ mode, icon: Icon }) => (
                      <div
                        key={mode}
                        className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center transition hover:border-gold-accent/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-gold-accent/5 sm:rounded-2xl sm:p-4"
                      >
                        <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white shadow-sm transition group-hover:scale-110 group-hover:bg-gold-accent group-hover:text-deep-blue sm:size-10">
                          <Icon aria-hidden="true" className="size-4 sm:size-5" />
                        </span>
                        <p className="mono-accent mt-2 text-sm font-black text-white sm:mt-3 sm:text-xl">
                          {mode}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                    <Link
                      href="/contact"
                      className="cta-gold inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-black"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 text-sm font-black text-white transition hover:border-white hover:bg-white/5"
                    >
                      Learn More
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-background py-12 sm:py-20">
        <ScrollReveal>
          <div className="site-shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black leading-tight text-foreground sm:text-5xl">
                How We Move Your Cargo
              </h2>
              <p className="mx-auto mt-3 max-w-2xl px-2 text-[0.85rem] leading-6 text-cool-gray sm:mt-4 sm:px-0 sm:text-sm sm:leading-7">
                Pick the shipping mode that fits your budget, timeline, and cargo
                requirements. We handle the coordination from pickup to delivery.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group relative min-h-[260px] overflow-hidden rounded-xl bg-deep-blue p-5 text-white shadow-xl shadow-deep-blue/10"
                  >
                    <Image
                      src={service.image}
                      alt={`Alpha Logistics ${service.title}`}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-76 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end">
                      <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-white/18 backdrop-blur">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="text-2xl font-black">{service.title}</h3>
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/16 transition group-hover:bg-gold-accent">
                          <ArrowRight aria-hidden="true" className="size-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-white pb-12 sm:pb-24">
        <ScrollReveal>
          <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
            <div>
              <p className="kicker">Powering Logistics</p>
              <h2 className="mt-2 max-w-xl text-2xl font-black leading-tight text-foreground sm:mt-3 sm:text-5xl">
                The engine behind your supply chain
              </h2>
              <p className="mt-4 max-w-xl text-[0.85rem] leading-6 text-cool-gray sm:mt-5 sm:text-sm sm:leading-7">
                Air cargo hit record volumes recently, while ocean shipping faced
                tighter routes and slower growth. We help you stay ahead of those
                shifts — comparing options early so last-minute decisions don't
                eat into your margins.
              </p>
              <div className="mt-7 max-w-xl divide-y divide-border-color border-y border-border-color">
                {businessPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 py-4">
                    <span className="flex size-8 items-center justify-center rounded-full bg-secondary-100 text-secondary">
                      <BadgeCheck aria-hidden="true" className="size-4" />
                    </span>
                    <span className="text-sm font-black text-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr] sm:gap-4">
              <div className="relative min-h-[200px] overflow-hidden rounded-xl bg-deep-blue sm:min-h-[360px]">
                <Image
                  src={poweringlogistics}
                  alt="Alpha Logistics ocean freight"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/54 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
                <div className="flex flex-col justify-center rounded-xl bg-deep-blue p-5 text-white sm:p-6">
                  <Box aria-hidden="true" className="size-7 text-gold-accent sm:size-9" />
                  <p className="mono-accent mt-4 text-3xl font-black sm:mt-8 sm:text-4xl">10+</p>
                  <p className="mt-1 text-xs font-bold text-white/62 sm:mt-2 sm:text-sm">
                    Years of regional freight experience
                  </p>
                </div>
                <div className="cta-primary flex flex-col justify-center rounded-xl p-5 text-white sm:p-6">
                  <p className="mono-accent text-3xl font-black sm:text-4xl">24/7</p>
                  <p className="mt-1 text-xs font-bold text-white/78 sm:mt-2 sm:text-sm">
                    Shipment coordination support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="global-network-section relative bg-[#0A2342] overflow-hidden py-16 sm:py-24">
        {/* Decorative background elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src={globalNetworkBg}
            alt="Global network abstract map"
            fill
            sizes="100vw"
            className="object-cover mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[#0A2342]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342] via-transparent to-[#0A2342]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#0A2342]/20 to-[#0A2342]/90" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-secondary/[0.08] blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-gold-accent/[0.08] blur-[100px]" />
          <div className="absolute right-0 top-1/4 size-72 rounded-full bg-cyan-accent/[0.06] blur-[80px]" />
        </div>

        <ScrollReveal>
          <div className="site-shell relative z-10">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-secondary backdrop-blur-sm">
                <Globe2 aria-hidden="true" className="size-3.5" />
                Global Network
              </span>
              <h2 className="mt-5 text-3xl font-black leading-[1.06] text-white sm:mt-6 sm:text-5xl lg:text-[3.4rem]">
                Offices where the{" "}
                <span className="bg-gradient-to-r from-gold-accent to-[#f0c040] bg-clip-text text-transparent">
                  trade moves
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[0.85rem] leading-6 text-white/55 sm:mt-5 sm:text-sm sm:leading-7">
                Our Qatar headquarters connects to a growing network across the GCC,
                South Asia, Southeast Asia, and East Africa — putting your cargo
                closer to every major shipping corridor.
              </p>
            </div>

            {/* HQ Featured Card */}
            <div className="relative mt-12">
              <Link
                href="/branches"
                className="group relative block overflow-hidden rounded-2xl border border-gold-accent/25 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-1 backdrop-blur-md transition hover:border-gold-accent/40"
              >
                <div className="absolute -right-10 -top-10 size-52 rounded-full bg-gold-accent/10 blur-3xl transition-all group-hover:bg-gold-accent/15" />
                <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-secondary/10 blur-3xl" />
                <div className="relative flex flex-col gap-5 rounded-xl bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:p-8">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-accent to-[#c8920f] shadow-lg shadow-gold-accent/25">
                    <MapPin aria-hidden="true" className="size-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-black text-white sm:text-3xl">Qatar</h3>
                      <span className="rounded-full bg-gold-accent/15 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-gold-accent">
                        Headquarters
                      </span>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                      Our central hub in Doha — coordinating air, ocean, and land shipments across every GCC and international route.
                    </p>
                  </div>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-gold-accent transition group-hover:border-gold-accent/30 group-hover:bg-gold-accent group-hover:text-white">
                    <ArrowRight aria-hidden="true" className="size-5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Branch Grid */}
            <div className="mt-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:mt-5 sm:gap-3 lg:grid-cols-5">
              {locations.slice(1).map(([country, label]) => (
                <Link
                  key={country}
                  href="/branches"
                  className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/25 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-secondary/[0.06]"
                >
                  <div className="absolute -right-6 -top-6 size-20 rounded-full bg-secondary/[0.06] blur-2xl transition group-hover:bg-secondary/10" />
                  <div className="relative">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition group-hover:bg-secondary/15">
                      <MapPin aria-hidden="true" className="size-4.5" />
                    </span>
                    <h3 className="mt-3 text-lg font-black text-white">
                      {country}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold text-white/40">
                      <span className="mono-accent">{label}</span>
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[0.68rem] font-bold text-secondary/70 transition group-hover:text-secondary">
                      View Branch
                      <ArrowRight aria-hidden="true" className="size-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom stat strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-5 backdrop-blur-sm min-[480px]:grid-cols-4 sm:mt-10 sm:gap-x-14 sm:px-6 sm:py-5 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
              {[
                ["6+", "Locations"],
                ["4", "Continents"],
                ["10+", "Years Active"],
                ["24/7", "Support"],
              ].map(([stat, label]) => (
                <div key={label} className="text-center">
                  <p className="mono-accent text-xl font-black text-white sm:text-3xl">{stat}</p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/40 sm:text-[0.68rem]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-white py-12 sm:py-24">
        <ScrollReveal>
          <div className="site-shell">
            <div className="grid overflow-hidden rounded-2xl bg-deep-blue text-white shadow-2xl shadow-deep-blue/18 lg:grid-cols-[1fr_360px]">
              <div className="relative min-h-[260px] p-5 sm:min-h-[320px] sm:p-10">
                <Image
                  src={oceanImage}
                  alt="Alpha Logistics shipment tracking"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover opacity-58"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/40 to-transparent" />
                <div className="relative max-w-xl">
                  <p className="kicker">Shipment Tracking</p>
                  <h2 className="mt-3 text-3xl font-black leading-tight sm:mt-4 sm:text-5xl">
                    Stay on top of every shipment
                  </h2>
                  <p className="mt-3 max-w-md text-[0.85rem] leading-6 text-white/68 sm:mt-4 sm:text-sm sm:leading-7">
                    Share your shipment details early and we'll match you with the
                    right service, prepare the paperwork, and set clear delivery
                    expectations from day one.
                  </p>
                </div>
              </div>
              <div className="bg-background p-5 text-deep-blue sm:p-7">
                <h3 className="text-2xl font-black">Need shipment updates?</h3>
                <p className="mt-3 text-sm leading-6 text-cool-gray">
                  Contact our team for real-time tracking updates, ETA confirmations, and status reports on your active shipments.
                </p>
                <div className="mt-6 grid gap-3">
                  <Link
                    href="/contact"
                    className="cta-primary inline-flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-black"
                  >
                    Contact Our Team
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <a
                    href="tel:+97441424247"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-white text-sm font-black text-deep-blue transition hover:border-secondary"
                  >
                    <MapPin aria-hidden="true" className="size-4 text-secondary" />
                    +974 4142 4247
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="card"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-black text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-cool-gray">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
