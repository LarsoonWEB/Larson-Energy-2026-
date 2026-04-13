import Link from "next/link";
import {
  Sun,
  Shield,
  Wrench,
  ClipboardCheck,
  ArrowRight,
  Phone,
  Zap,
  Battery,
  Car,
  Home,
  Factory,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-700 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-600 to-navy-700" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-400/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-400/10 border border-primary-400/20 rounded-full px-4 py-1.5 text-primary-400 text-sm mb-8">
              <Sun className="w-4 h-4" />
              Vodeća rješenja solarnih sustava u Hrvatskoj
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pokretajte svoju budućnost s{" "}
              <span className="text-primary-400">energijom sunca</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              Od projektiranja do održavanja, pružamo sveobuhvatna rješenja
              solarnih sustava za kućanstva i industriju.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ponuda"
                className="inline-flex items-center justify-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-4 rounded-lg text-base transition-all hover:shadow-lg hover:shadow-primary-400/20"
              >
                Kreirajte informativnu ponudu
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg text-base transition-all hover:bg-white/5"
              >
                <Phone className="w-5 h-5" />
                Nazovite nas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Naše usluge
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Nudimo kompletna rješenja u području obnovljivih izvora energije
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: "Projektiranje",
                desc: "Detaljno projektiranje solarnog sustava s kompletnom tehničkom dokumentacijom.",
              },
              {
                icon: Wrench,
                title: "Montaža",
                desc: "Profesionalna montaža solarnih panela od strane certificiranih tehničara.",
              },
              {
                icon: Shield,
                title: "Nadzor i održavanje",
                desc: "Kontinuirani nadzor rada sustava i preventivno održavanje.",
              },
              {
                icon: Sun,
                title: "Čišćenje",
                desc: "Periodično čišćenje panela za maksimalnu učinkovitost sustava.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-400/5 transition-all"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-400/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Naša rješenja
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Sveobuhvatna rješenja obnovljivih izvora energije za kućanstva i industriju
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Kućne solarne elektrane",
                desc: "Kompletna solarna rješenja za domove.",
              },
              {
                icon: Factory,
                title: "Industrijske solarne elektrane",
                desc: "Velike solarne instalacije za tvrtke.",
              },
              {
                icon: Car,
                title: "Punjači za EV",
                desc: "Stanice za punjenje pokretane solarnom energijom.",
              },
              {
                icon: Battery,
                title: "Baterijski sustavi",
                desc: "Kućni baterijski sustavi za energetsku neovisnost.",
              },
              {
                icon: Zap,
                title: "Baterije za potporu mreži",
                desc: "Komercijalna rješenja za skladištenje energije.",
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-500 text-sm">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Spremni za solarnu energiju?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Pridružite se tisućama zadovoljnih kupaca koji su prešli na čistu,
            obnovljivu energiju. Dobijte svoju besplatnu ponudu danas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ponuda"
              className="inline-flex items-center justify-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Besplatna ponuda
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg transition-all hover:bg-white/5"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
