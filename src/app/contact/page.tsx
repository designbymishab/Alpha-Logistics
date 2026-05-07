import type { Metadata } from "next";
import Image from "next/image";
import { Headset, Route, ShieldCheck, Sparkles } from "lucide-react";
import { RequestQuoteForm } from "@/components/request-quote-form";
import heroTrucks from "../../../public/images/hero-logistics-trucks.png";

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
    <div className="pb-8 text-deep-blue">
      <section className="site-shell soft-panel overflow-hidden p-6 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
              Contact Us
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Request a quote with a logistics team that knows your route.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Share your shipment requirements and our team will align the
              right service, timeline, and support model for your cargo.
            </p>
          </div>
          <div className="relative min-h-[330px]">
            <Image
              src={heroTrucks}
              alt="Alpha Logistics trucks ready for quote request"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="site-shell mt-6 grid gap-6 rounded-[32px] bg-white px-6 py-8 shadow-2xl shadow-sky-950/10 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-12">
        <RequestQuoteForm />

        <aside className="rounded-[28px] bg-primary p-6 text-white shadow-xl shadow-sky-950/10 lg:p-8">
          <span className="flex size-14 items-center justify-center rounded-[20px] bg-white text-primary">
            <Headset aria-hidden="true" className="size-7" />
          </span>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-sky-100">
            Dedicated Customer Representative
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight">
            One main point of contact for every client.
          </h2>
          <p className="mt-5 text-base leading-7 text-sky-50">
            Every Alpha Apex Logistics client is supported by a dedicated
            representative who understands their cargo profile, preferred
            lanes, documentation requirements, and delivery expectations.
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
                  className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/20 pt-4"
                >
                  <span className="flex size-11 items-center justify-center rounded-[16px] bg-white/16 text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-sky-50">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </section>
    </div>
  );
}
