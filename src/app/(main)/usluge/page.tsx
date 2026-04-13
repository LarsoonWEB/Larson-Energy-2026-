import Link from "next/link";
import {
  ClipboardCheck,
  Wrench,
  Shield,
  Sun,
  Users,
  FileText,
  Cog,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Projektiranje solarnih elektrana",
    desc: "Kompletan dizajn i projektiranje solarnih sustava prilagođenih vašim potrebama i lokaciji.",
    features: [
      "3D modeliranje",
      "Analiza zasjenjenosti",
      "Optimizacija performansi",
      "Tehnička dokumentacija",
    ],
  },
  {
    icon: Wrench,
    title: "Montaža i puštanje u rad",
    desc: "Profesionalna montaža solarnih panela i kompletnog sustava s garancijom kvalitete.",
    features: [
      "Montaža panela",
      "Električne instalacije",
      "Mrežno povezivanje",
      "Testiranje sustava",
    ],
  },
  {
    icon: Shield,
    title: "Nadzor i održavanje",
    desc: "Redovno održavanje i servis za maksimalnu učinkovitost vašeg solarnog sustava.",
    features: [
      "Preventivno održavanje",
      "Monitoring performansi",
      "Brze intervencije",
      "Izvještaji o proizvodnji",
    ],
  },
  {
    icon: Sun,
    title: "Čišćenje panela",
    desc: "Periodično čišćenje solarnih panela za povećanje ukupne godišnje proizvodnje energije.",
    features: [
      "Profesionalno čišćenje",
      "Deionizirana voda",
      "Inspekcija panela",
      "Ugovor o održavanju",
    ],
  },
  {
    icon: Users,
    title: "Konzultacije i podrška",
    desc: "Stručne konzultacije i kontinuirana podrška tijekom cijelog životnog ciklusa sustava.",
    features: [
      "Energetski audit",
      "Financijsko planiranje",
      "Regulatorna podrška",
      "Obuka korisnika",
    ],
  },
  {
    icon: FileText,
    title: "Ishođenje dozvola",
    desc: "Rješavanje svih potrebnih dozvola, priključaka na mrežu i administrativnih zahtjeva.",
    features: [
      "Građevinska dozvola",
      "Priključak na mrežu",
      "HROTE prijava",
      "Subvencije i poticaji",
    ],
  },
];

const process = [
  { step: "01", icon: Users, title: "Konzultacije", desc: "Analiza potreba i lokacije" },
  { step: "02", icon: FileText, title: "Projektiranje", desc: "Dizajn optimalnog rješenja" },
  { step: "03", icon: Cog, title: "Dozvole", desc: "Ishođenje svih dozvola" },
  { step: "04", icon: Wrench, title: "Montaža", desc: "Profesionalna ugradnja" },
  { step: "05", icon: Sparkles, title: "Puštanje u rad", desc: "Testiranje i pokretanje" },
];

export default function UslugePage() {
  return (
    <>
      <section className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Naše usluge
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Kompletna rješenja za solarne elektrane — od ideje do realizacije
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-400/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-400/10 transition-colors">
                  <service.icon className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Naš proces rada
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Jednostavan i transparentan proces od prvog kontakta do puštanja sustava u rad
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-3">{p.step}</div>
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Spremni za solarnu elektranu?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Kontaktirajte nas za besplatnu konzultaciju i procjenu
          </p>
          <Link
            href="/ponuda"
            className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Zatražite ponudu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
