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
    default: "Alpha Apex Logistics | Freight Forwarding from Qatar to the World",
    template: "%s | Alpha Apex Logistics",
  },
  description:
    "Alpha Apex Logistics is a Qatar-based freight forwarder offering air, ocean, and road shipping alongside customs brokerage — serving the GCC, South Asia, and global trade lanes.",
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
    title: "Alpha Apex Logistics | Freight Forwarding from Qatar to the World",
    description:
      "Qatar-based freight forwarding, customs brokerage, and supply chain support for businesses shipping across the GCC and beyond.",
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
