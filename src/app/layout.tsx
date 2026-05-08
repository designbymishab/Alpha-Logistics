import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alpha Logistics | Alpha Apex Logistics",
    template: "%s | Alpha Logistics",
  },
  description:
    "Alpha Logistics freight forwarding, customs brokerage, and supply chain coordination from Qatar across the GCC and beyond.",
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
