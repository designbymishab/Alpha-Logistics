import type { Metadata } from "next";
import Image from "next/image";
import { Headset, Route, ShieldCheck, Sparkles } from "lucide-react";
import { RequestQuoteForm } from "@/components/request-quote-form";
import heroImage from "../../../public/images/hero-global-logistics.png";

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
    <div className="pb-6 text-white">
      <section className="site-shell overflow-hidden rounded-[32px] bg-white p-4 text-deep-blue shadow-2xl shadow-black/20">
        <div className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-deep-blue px-6 py-12 text-white sm:px-10 lg:px-14">
          <Image
            src={heroImage}
            alt="Alpha Logistics quote request with ocean cargo background"
            fill
            priority
            placeholder="blur"
            sizes="1320px"
            className="-z-10 object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,21,34,0.9),rgba(4,21,34,0.42))]" />
          <p className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-secondary-100">
            Contact Alpha Logistics
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Request a quote with a logistics team that knows your route.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
            Share your shipment requirements and our team will align the right
            service, timeline, and support model for your cargo.
          </p>
        </div>

        <div className="grid gap-6 px-2 py-6 sm:px-4 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
          <RequestQuoteForm />

          <aside className="rounded-[28px] bg-deep-blue p-6 text-white shadow-xl shadow-primary/10 lg:p-8">
            <span className="flex size-14 items-center justify-center rounded-[20px] bg-white/10 text-accent">
              <Headset aria-hidden="true" className="size-7" />
            </span>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-secondary-100">
              Dedicated Customer Representative
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight">
              One main point of contact for every client.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-200">
              Every Alpha Apex Logistics client is supported by a dedicated
              representative who understands their cargo profile, preferred
              lanes, documentation requirements, and delivery expectations.
              That means fewer handoffs, faster answers, and tailored
              solutions for every shipment.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  title: "Tailored solutions",
                  description:
                    "Recommendations shaped around shipment urgency, cargo type, and destination.",
                  icon: Sparkles,
                },
                {
                  title: "Clear ownership",
                  description:
                    "A primary contact coordinates updates from quote to final delivery.",
                  icon: Route,
                },
                {
                  title: "Compliance-aware support",
                  description:
                    "Guidance aligned with documentation, duty, and regulatory requirements.",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/15 pt-4"
                  >
                    <span className="flex size-11 items-center justify-center rounded-[16px] bg-white/10 text-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
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
