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
  Search,
  ShieldCheck,
  Ship,
  Truck,
  UsersRound,
} from "lucide-react";
import containerImage from "../../public/images/hero-black-container.png";
import oceanImage from "../../public/images/hero-global-logistics.png";
import airshippingImage from "../../public/images/airshipping.png";
import seashippingImage from "../../public/images/seashipping.png";
import landshippingImage from "../../public/images/landshipping.png";
import poweringlogistics from "../../public/images/poweringlogistics.png";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Alpha Logistics by Alpha Apex Logistics delivers resilient freight forwarding, customs coordination, and data-aware supply chain solutions across Qatar, the GCC, and global trade lanes.",
  keywords: [
    "Alpha Logistics",
    "global supply chain solution",
    "international freight forwarder",
    "GCC logistics",
    "global carrier partnerships",
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
  "Multi-carrier routing for volatile ocean and air markets",
  "Customs-ready documentation before cargo reaches the border",
  "Single point of contact for exceptions, status, and decisions",
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
    title: "Strong Global Partnerships",
    description:
      "Carrier and agent relationships help Alpha Logistics protect capacity across high-demand air, ocean, and GCC road lanes.",
    icon: Globe2,
  },
  {
    title: "Expert Team",
    description:
      "Freight specialists translate routing, documentation, duty, and compliance decisions into a clear shipment plan.",
    icon: UsersRound,
  },
  {
    title: "Compliance First",
    description:
      "Structured brokerage support reduces avoidable border delays for regulated cargo, project freight, and regional distribution.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="bg-white text-deep-blue">
      <section className="relative overflow-visible bg-white">
        <div className="site-shell pb-0 pt-10 sm:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
              Delivering Your Cargo
              <span className="mt-2 flex items-center justify-center gap-3 text-secondary">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary-100 sm:size-12">
                  <Globe2 aria-hidden="true" className="size-5 sm:size-6" />
                </span>
                Worldwide
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A Qatar-based international freight forwarder helping ambitious
              businesses move time-sensitive, regulated, and high-value cargo
              across the GCC and beyond.
            </p>

            <div className="mx-auto mt-7 grid max-w-xl gap-2 rounded-[18px] border border-black/12 bg-white p-2 shadow-xl shadow-black/8 sm:grid-cols-[1fr_1fr_48px]">
              <div className="flex min-h-11 items-center gap-2 rounded-[12px] border border-black/10 px-3 text-left">
                <MapPin aria-hidden="true" className="size-4 text-secondary" />
                <span className="text-xs font-bold text-slate-500">
                  Enter pickup location
                </span>
              </div>
              <div className="flex min-h-11 items-center gap-2 rounded-[12px] border border-black/10 px-3 text-left">
                <MapPin aria-hidden="true" className="size-4 text-secondary" />
                <span className="text-xs font-bold text-slate-500">
                  Enter destination location
                </span>
              </div>
              <Link
                href="/contact"
                aria-label="Search shipment route"
                className="flex min-h-11 items-center justify-center rounded-[12px] bg-[#111111] text-white transition hover:bg-secondary"
              >
                <Search aria-hidden="true" className="size-5" />
              </Link>
            </div>
          </div>

          <div className="relative z-20 mx-auto mb-[-2rem] mt-7 min-h-[330px] max-w-6xl sm:mb-[-3.5rem] sm:min-h-[470px] lg:mb-[-5rem] lg:min-h-[560px]">
            <div className="absolute left-2 top-16 hidden h-px w-40 rotate-[-18deg] bg-secondary sm:block" />
            <div className="absolute right-16 top-8 hidden h-px w-48 rotate-[12deg] bg-secondary sm:block" />
            <span className="absolute left-2 top-20 hidden size-4 rounded-full border-2 border-secondary sm:block" />
            <span className="absolute right-5 top-14 hidden size-4 rounded-full border-2 border-secondary sm:block" />
            {/* <span className="absolute left-4 top-[42%] z-20 flex size-16 items-center justify-center rounded-full bg-secondary text-center text-sm font-black leading-none text-white shadow-xl shadow-secondary/30 sm:left-20 sm:size-20">
              360
            </span> */}
            <Image
              src={containerImage}
              alt="Alpha Logistics black shipping container"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 1040px"
              className="z-30 translate-y-8 object-contain object-center sm:translate-y-10 sm:scale-110 lg:translate-y-14 lg:scale-125"
            />
            <div className="pointer-events-none absolute inset-x-10 bottom-0 z-10 h-16 rounded-full bg-black/12 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white pb-16 pt-4 sm:-mt-14 sm:pb-20 lg:-mt-24">
        <div className="site-shell">
          <div className="relative overflow-hidden rounded-[34px] bg-[#111111] text-white shadow-2xl shadow-black/25 sm:rounded-[42px]">
            <div
              aria-hidden="true"
              className="absolute -right-28 -top-28 size-72 rounded-full bg-secondary/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 left-1/4 size-80 rounded-full bg-primary/18 blur-3xl"
            />

            <div className="relative flex flex-wrap items-center justify-center gap-2 border-b border-white/10 px-4 py-5 sm:gap-3 sm:px-8 lg:px-10">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.7rem] font-black text-white/68"
                >
                  <span className="size-1.5 rounded-full bg-secondary" />
                  <span className="mono-accent">{partner}</span>
                </span>
              ))}
            </div>

            <div className="relative grid gap-8 p-4 sm:p-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:p-10 xl:p-12">
              <div className="grid gap-4 sm:grid-cols-[1fr_180px] lg:grid-cols-[1fr_170px]">
                <div className="relative min-h-[320px] overflow-hidden rounded-[30px] bg-deep-blue sm:min-h-[420px]">
                  <Image
                    src={oceanImage}
                    alt="Alpha Logistics containers under orange light"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">
                      Route intelligence
                    </p>
                    <p className="mt-2 max-w-sm text-2xl font-black leading-tight">
                      Ocean, air, land, and customs aligned before cargo moves.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-rows-[1fr_116px]">
                  <div className="relative min-h-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-white/8 sm:min-h-0">
                    <Image
                      src={containerImage}
                      alt="Alpha Logistics container preview"
                      fill
                      placeholder="blur"
                      sizes="180px"
                      className="object-contain p-4 grayscale"
                    />
                    <div className="absolute inset-x-4 bottom-4 h-1.5 overflow-hidden rounded-full bg-white/12">
                      <div className="h-full w-2/3 rounded-full bg-secondary" />
                    </div>
                  </div>
                  <div className="rounded-[26px] bg-[#fff0e8] p-5 text-[#111111]">
                    <p className="mono-accent text-4xl font-black text-secondary">
                      10+
                    </p>
                    <p className="mt-1 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#111111]/70">
                      Years across GCC lanes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:pl-4">
                <span className="w-fit rounded-full bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                  Alpha Logistics
                </span>
                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
                  <span className="text-secondary">#1</span> Nationwide{" "}
                  Delivery Logistics Solution
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/64">
                  Global trade is growing, but capacity, tariffs, and route
                  disruption make execution harder. Alpha Logistics gives
                  clients a calmer operating model: practical routing, clear
                  documentation, and accountable support from quote to delivery.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {["AIR", "OCEAN", "LAND"].map((mode) => (
                    <div
                      key={mode}
                      className="rounded-[18px] border border-white/10 bg-white/6 p-4"
                    >
                      <p className="mono-accent text-2xl font-black text-white">
                        {mode}
                      </p>
                      <p className="mt-1 text-xs font-bold text-white/48">
                        freight support
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="orange-cta inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/18 px-6 text-sm font-black text-white transition hover:border-secondary hover:text-secondary"
                  >
                    Learn More
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#111111] sm:text-5xl">
              Shipping & Logistics Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Choose the mode that protects your margin, timeline, and cargo
              condition, then let one team coordinate the handoffs.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative min-h-[260px] overflow-hidden rounded-[28px] bg-deep-blue p-5 text-white shadow-xl shadow-black/10"
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
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/16 transition group-hover:bg-secondary">
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="kicker">Powering Logistics</p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-[#111111] sm:text-5xl">
              Powering logistics across business
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Air cargo reached record volumes in 2025 while maritime trade
              faced slower growth and route pressure. Our role is to help
              clients stay flexible, compare options, and avoid late decisions
              that create cost.
            </p>
            <div className="mt-7 max-w-xl divide-y divide-black/10 border-y border-black/10">
              {businessPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 py-4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-secondary-100 text-secondary">
                    <BadgeCheck aria-hidden="true" className="size-4" />
                  </span>
                  <span className="text-sm font-black text-[#111111]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-[#111111]">
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
            <div className="grid gap-4">
              <div className="rounded-[28px] bg-[#111111] p-6 text-white">
                <Box aria-hidden="true" className="size-9 text-secondary" />
                <p className="mono-accent mt-8 text-4xl font-black">10+</p>
                <p className="mt-2 text-sm font-bold text-white/62">
                  Years of regional freight experience
                </p>
              </div>
              <div className="rounded-[28px] bg-secondary p-6 text-white">
                <p className="mono-accent text-4xl font-black">24/7</p>
                <p className="mt-2 text-sm font-bold text-white/78">
                  Shipment coordination support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f3] py-16 sm:py-24">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#111111] sm:text-5xl">
              Find Alpha Logistics locations across key trade lanes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Qatar HQ anchors a network reaching the GCC, South Asia,
              Southeast Asia, and East Africa.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[34px] bg-white p-5 shadow-xl shadow-black/6 sm:p-8">
            <div className="absolute inset-0 opacity-70">
              <div className="h-full bg-[radial-gradient(circle_at_20%_44%,#111_0_5px,transparent_6px),radial-gradient(circle_at_43%_38%,#111_0_5px,transparent_6px),radial-gradient(circle_at_56%_55%,#111_0_5px,transparent_6px),radial-gradient(circle_at_68%_34%,#111_0_5px,transparent_6px),radial-gradient(circle_at_76%_62%,#111_0_5px,transparent_6px),radial-gradient(circle_at_84%_48%,#111_0_5px,transparent_6px),linear-gradient(120deg,transparent_18%,rgba(0,0,0,.06)_18%_19%,transparent_19%_46%,rgba(0,0,0,.05)_46%_47%,transparent_47%)]" />
            </div>
            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map(([country, label]) => (
                <Link
                  key={country}
                  href="/branches"
                  className="rounded-[22px] border border-black/10 bg-white/88 p-4 shadow-lg shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:border-secondary"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#111111] text-white">
                    <MapPin aria-hidden="true" className="size-4" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#111111]">
                    {country}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    <span className="mono-accent">{label}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="site-shell">
          <div className="grid overflow-hidden rounded-[34px] bg-[#111111] text-white shadow-2xl shadow-black/18 lg:grid-cols-[1fr_360px]">
            <div className="relative min-h-[320px] p-6 sm:p-10">
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
                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  Track or calculate your shipments
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                  Send shipment details early so our team can identify the
                  right service, documentation path, and delivery expectation.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 text-deep-blue sm:p-7">
              <h3 className="text-2xl font-black">Quickly Track your Shipments</h3>
              <div className="mt-6 grid gap-3">
                <div className="mono-accent rounded-[14px] border border-black/10 px-4 py-3 text-sm font-bold text-slate-500">
                  ALX-QA-DOH-0001
                </div>
                <div className="rounded-[14px] border border-black/10 px-4 py-3 text-sm font-bold text-slate-500">
                  Select your service
                </div>
                <Link
                  href="/contact"
                  className="orange-cta inline-flex h-12 items-center justify-center rounded-[14px] text-sm font-black"
                >
                  Track Now
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-white p-6 shadow-lg shadow-black/5"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary-100 text-secondary">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-black text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
