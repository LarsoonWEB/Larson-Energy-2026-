import Link from "next/link";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-navy-700" />
              </div>
              <span className="text-xl font-bold tracking-wider">LARSOON</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Vodeći pružatelj solarnih rješenja u Hrvatskoj. Od projektiranja do održavanja — sve na jednom mjestu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Navigacija
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.cta.href}
                  className="text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  {siteConfig.cta.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Usluge
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Kućne solarne elektrane</li>
              <li>Industrijske solarne elektrane</li>
              <li>Punjači za električna vozila</li>
              <li>Baterijski sustavi</li>
              <li>Održavanje i servis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                    <br />
                    {siteConfig.address.country}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>
              &copy; {currentYear} {siteConfig.legalName} Sva prava pridržana.
            </p>
            <p className="text-center md:text-right">
              {siteConfig.legal.court} | MBS: {siteConfig.legal.mbs} | OIB: {siteConfig.legal.oib}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
