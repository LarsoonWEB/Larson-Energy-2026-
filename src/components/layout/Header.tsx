"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Zap } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-700/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-400 rounded-lg flex items-center justify-center group-hover:bg-primary-300 transition-colors">
              <Zap className="w-5 h-5 text-navy-700" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              LARSOON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-primary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href={siteConfig.cta.href}
              className="bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-6 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-primary-400/20"
            >
              {siteConfig.cta.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-700 border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-primary-400"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link
                href={siteConfig.cta.href}
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-6 py-3 rounded-lg transition-all"
              >
                {siteConfig.cta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
