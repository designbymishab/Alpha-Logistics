import type { Metadata } from "next";
import Image from "next/image";
import { Headset, Route, ShieldCheck, Sparkles } from "lucide-react";
import { RequestQuoteForm } from "@/components/request-quote-form";
import containerImage from "../../../public/images/hero-black-container.png";

const representativeBenefits = [
  {
    title: "Tailored solutions",
    description:
      "Routing recommendations shaped around shipment urgency, cargo type, destination risk, and budget.",
    icon: Sparkles,
  },
  {
    title: "Clear ownership",
    description:
      "A primary contact coordinates quote details, route decisions, status updates, and exception handling.",
    icon: Route,
  },
  {
    title: "Compliance-aware support",
    description:
      "Guidance aligned with documentation, duty exposure, regulated cargo requirements, and customs readiness.",
    icon: ShieldCheck,
  },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alpha Logistics at Alpha Apex Logistics to request a freight quote and connect with a dedicated customer representative.",
  keywords: [
    "Alpha Logistics",
    "request freight quote",
    "logistics quote Qatar",
    "freight forwarding contact",
    "dedicated logistics representative",
  ],
};

export default function ContactPage() {
  return (
    <div className="text-deep-blue">
      <section className="section-band-soft overflow-hidden">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="kicker">Contact Us</p>
            <h1 className="page-title mt-3 max-w-3xl sm:mt-4">
              Request a quote with a team that thinks beyond the rate.
            </h1>
            <p className="mt-4 max-w-2xl text-[0.85rem] leading-6 text-cool-gray sm:mt-5 sm:text-sm sm:leading-7">
              Share your shipment requirements and we will align the right
              mode, timeline, clearance path, and support model before your
              cargo enters the supply chain.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-deep-blue shadow-2xl shadow-deep-blue/20 sm:min-h-[430px]">
            <Image
              src={containerImage}
              alt="Alpha Logistics black shipping container contact visual"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-contain object-center p-4"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(13,71,161,.22),transparent_22rem)]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white p-4 shadow-xl sm:left-auto sm:w-[300px]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-secondary">
                Qatar HQ
              </p>
              <p className="mono-accent mt-2 text-xl font-black">
                +974 4142 4247
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="site-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <RequestQuoteForm />

          <aside className="rounded-xl bg-deep-blue p-6 text-white shadow-2xl shadow-deep-blue/20 sm:p-8 lg:sticky lg:top-28">
            <span className="flex size-14 items-center justify-center rounded-full bg-gold-accent text-white">
              <Headset aria-hidden="true" className="size-7" />
            </span>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-gold-accent">
              Dedicated Customer Representative
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight sm:mt-3 sm:text-4xl">
              One main point of contact for every client.
            </h2>
            <p className="mt-4 text-[0.85rem] leading-6 text-white/68 sm:mt-5 sm:text-sm sm:leading-7">
              Every Alpha Apex Logistics client is supported by a dedicated
              representative who understands their cargo profile, preferred
              lanes, documentation requirements, delivery expectations, and
              commercial priorities.
            </p>

            <div className="mt-8 grid gap-4">
              {representativeBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/15 pt-4"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-gold-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/62">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
