import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alpha Logistics | Alpha Apex Logistics",
    template: "%s | Alpha Logistics",
  },
  description:
    "Alpha Logistics delivers data-aware freight forwarding, customs brokerage, and resilient supply chain coordination from Qatar across the GCC and beyond.",
  keywords: [
    "Alpha Logistics",
    "Alpha Apex Logistics",
    "freight forwarder Qatar",
    "GCC logistics",
    "air freight",
    "ocean freight",
    "customs brokerage",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Alpha Logistics | Alpha Apex Logistics",
    description:
      "International freight forwarding and logistics coordination across the GCC and beyond.",
    siteName: "Alpha Apex Logistics",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
