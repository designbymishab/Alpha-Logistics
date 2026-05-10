"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Truck,
  MapPin,
  MessageSquare,
  ArrowRight,
  Phone,
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Truck },
  { label: "Branches", href: "/branches", icon: MapPin },
  { label: "Contact", href: "/contact", icon: MessageSquare },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for navbar shrink/shadow effect
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

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header
        className={`nav-header ${scrolled ? "nav-scrolled" : ""}`}
        id="main-navigation"
      >
        <nav
          className="site-shell nav-inner"
          aria-label="Primary navigation"
        >
          {/* ── Logo ── */}
          <Link href="/" className="nav-logo group" onClick={close}>
            <Image
              src="/images/logo/android-chrome-512x512.png"
              alt="Alpha Logistics Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="nav-logo-text">Alpha Logistics</span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="nav-desktop-links">
            {navigationItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-desktop-link ${active ? "nav-link-active" : ""}`}
                >
                  <item.icon size={14} strokeWidth={2.4} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <Link href="/contact" className="nav-cta-desktop">
            Get a Quote
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>

          {/* ── Hamburger button (mobile) ── */}
          <button
            type="button"
            className="nav-hamburger"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className={`hamburger-bar bar-1 ${isOpen ? "open" : ""}`} />
            <span className={`hamburger-bar bar-2 ${isOpen ? "open" : ""}`} />
            <span className={`hamburger-bar bar-3 ${isOpen ? "open" : ""}`} />
          </button>
        </nav>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`nav-overlay ${isOpen ? "nav-overlay-visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`nav-drawer ${isOpen ? "nav-drawer-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="nav-drawer-inner">
          {/* Links */}
          <ul className="nav-drawer-links">
            {navigationItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className="nav-drawer-item"
                  style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    className={`nav-drawer-link ${active ? "nav-drawer-link-active" : ""}`}
                    onClick={close}
                  >
                    <span className="nav-drawer-icon">
                      <item.icon size={20} strokeWidth={2} />
                    </span>
                    <span className="nav-drawer-label">{item.label}</span>
                    {active && <span className="nav-drawer-dot" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="nav-drawer-cta-wrap">
            <Link href="/contact" className="nav-drawer-cta" onClick={close}>
              <Phone size={18} strokeWidth={2.2} />
              Get a Free Quote
              <ArrowRight size={16} strokeWidth={2.5} className="nav-drawer-cta-arrow" />
            </Link>
          </div>

          {/* Footer accent */}
          <p className="nav-drawer-footer">
            Alpha Apex Logistics &middot; Qatar &amp; Beyond
          </p>
        </div>
      </aside>
    </>
  );
}
