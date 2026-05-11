"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/", number: "01" },
  { label: "Services", href: "/services", number: "02" },
  { label: "Branches", href: "/branches", number: "03" },
  { label: "Contact", href: "/contact", number: "04" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for navbar background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuVars: Variants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: "100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const linkVars: Variants = {
    initial: { y: "40vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled && !isOpen ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-border-color/40" : "bg-transparent"
        }`}
      >
        <div className="site-shell flex items-center justify-between py-4 sm:py-5">
          {/* ── Logo ── */}
          <Link href="/" className="relative flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="relative overflow-hidden rounded-md w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/logo/android-chrome-512x512.png"
                alt="Alpha Logistics Logo"
                fill
                sizes="32px"
                className={`object-cover transition-all duration-300 ${isOpen ? "brightness-0 invert" : ""}`}
              />
            </div>
            <span className={`font-mono font-black tracking-tight text-base sm:text-lg transition-colors duration-300 ${isOpen ? "text-white" : "text-deep-blue"}`}>
              Alpha Logistics
            </span>
          </Link>

          {/* ── Menu Toggle Button ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-transparent transition-colors group"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {/* Soft hover background */}
            <span className={`absolute inset-0 rounded-full scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${isOpen ? "bg-white/10" : "bg-black/5"}`} />
            
            <div className={`relative flex flex-col gap-[5px] transition-all duration-300 w-6 ${isOpen ? "rotate-180" : ""}`}>
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45 text-white" : "text-deep-blue"}`} />
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "opacity-0 text-white" : "text-deep-blue"}`} />
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45 text-white" : "text-deep-blue"}`} />
            </div>
          </button>
        </div>
      </header>

      {/* ── Fullscreen Staggered Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#0A2342] origin-right flex flex-col justify-center px-6 sm:px-16 lg:px-24 overflow-y-auto overflow-x-hidden"
          >
            {/* Background abstract decorators */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            <div className="site-shell relative z-10 w-full max-w-6xl mx-auto pt-32 sm:pt-40 pb-12 my-auto min-h-max flex flex-col justify-center">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-2 sm:gap-4 lg:gap-6"
              >
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.href} className="overflow-hidden py-1">
                      <motion.div variants={linkVars}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group relative flex items-baseline gap-4 sm:gap-6 lg:gap-8 text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white transition-colors w-fit leading-[0.9]"
                        >
                          <span className="text-xs sm:text-lg lg:text-xl font-mono text-white/50 group-hover:text-gold-accent/80 transition-colors">
                            {item.number}
                          </span>
                          <span className="uppercase tracking-tighter group-hover:text-gold-accent transition-colors duration-300">
                            {item.label}
                          </span>
                          {isActive && (
                            <span className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-2 sm:w-4 lg:w-6 h-1 sm:h-2 bg-gold-accent rounded-full" />
                          )}
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-8 sm:gap-16 sm:items-center"
              >
                <div>
                  <p className="text-[0.65rem] sm:text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-3">
                    Contact Headquarters
                  </p>
                  <a href="tel:+97441424247" className="text-white text-lg sm:text-2xl font-black font-mono hover:text-gold-accent transition-colors inline-flex items-center gap-3">
                    <span className="flex size-8 sm:size-10 items-center justify-center rounded-full bg-white/10">
                      <Phone size={16} className="text-gold-accent sm:w-5 sm:h-5" />
                    </span>
                    +974 4142 4247
                  </a>
                </div>
                <div>
                  <p className="text-[0.65rem] sm:text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-3">
                    Quick Action
                  </p>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 text-gold-accent hover:text-white font-black text-sm sm:text-base uppercase tracking-wider transition-colors bg-white/5 hover:bg-white/10 px-5 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 hover:border-white/30">
                    Request a Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
