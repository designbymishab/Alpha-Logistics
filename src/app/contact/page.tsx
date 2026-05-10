import type { Metadata } from "next";
import Image from "next/image";
import { Headset, Route, ShieldCheck, Sparkles } from "lucide-react";
import { RequestQuoteForm } from "@/components/request-quote-form";
import containerImage from "../../../public/images/hero-black-container.webp";
import { ScrollReveal } from "@/components/scroll-reveal";

const representativeBenefits = [
  {
    title: "Tailored to your shipment",
    description:
      "We don't offer cookie-cutter quotes. Recommendations are shaped by your cargo type, urgency, destination, and budget.",
    icon: Sparkles,
  },
  {
    title: "One person, full ownership",
    description:
      "Your dedicated contact manages the quote, route decisions, status updates, and any issues that come up along the way.",
    icon: Route,
  },
  {
    title: "Compliance handled upfront",
    description:
      "Documentation, duty exposure, and regulatory requirements are reviewed before shipping — not scrambled at the border.",
    icon: ShieldCheck,
  },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a freight quote from Alpha Apex Logistics. Tell us what you're shipping and we'll connect you with a dedicated representative who handles everything from route planning to delivery.",
  keywords: [
    "Alpha Apex Logistics quote",
    "freight quote Qatar",
    "logistics quote GCC",
    "freight forwarding contact",
    "dedicated logistics support",
  ],
};

export default function ContactPage() {
  return (
    <div className="text-deep-blue">
      <section className="section-band-soft overflow-hidden">
        <ScrollReveal>
          <div className="site-shell pt-12 sm:pt-20 lg:pt-24 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="kicker">Contact Us</p>
            <h1 className="page-title mt-3 max-w-3xl sm:mt-4">
              Get a quote from a team that goes beyond the rate sheet.
            </h1>
            <p className="mt-4 max-w-2xl text-[0.85rem] leading-6 text-cool-gray sm:mt-5 sm:text-sm sm:leading-7">
              Tell us what you're shipping. We'll find the right mode, timeline,
              and clearance path — and make sure everything is lined up before
              your cargo starts moving.
            </p>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-deep-blue shadow-2xl shadow-deep-blue/20 sm:min-h-[430px]">
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
        </ScrollReveal>
      </section>

      <section className="section-band bg-white">
        <ScrollReveal>
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
              You'll always know who to call.
            </h2>
            <p className="mt-4 text-[0.85rem] leading-6 text-white/68 sm:mt-5 sm:text-sm sm:leading-7">
              Every client at Alpha Apex Logistics works with a dedicated
              representative — someone who knows your cargo, your preferred
              routes, your documentation needs, and what matters most to
              your business.
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
        </ScrollReveal>
      </section>
    </div>
  );
}
