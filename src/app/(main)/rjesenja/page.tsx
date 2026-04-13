import Link from "next/link";
import { Home, Factory, Car, Battery, Zap, ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Kućne solarne elektrane",
    desc: "Kompletna solarna rješenja za domove, smanjujući račune za energiju i ugljični otisak.",
    features: [
      "Sustavi od 3 kW do 20 kW",
      "Huawei inverteri premium kvalitete",
      "Tier 1 solarni paneli",
      "Garancija 25+ godina na panele",
      "Neto mjerenje s HEP-om",
      "Mogućnost nadogradnje baterijama",
    ],
  },
  {
    icon: Factory,
    title: "Industrijske solarne elektrane",
    desc: "Velike solarne instalacije za tvrtke i industrijske objekte s visokim povratom investicije.",
    features: [
      "Sustavi od 20 kW do 500+ kW",
      "Prilagođeno poslovnim potrebama",
      "Optimizacija vlastite potrošnje",
      "Smanjenje operativnih troškova",
      "Ravni i kosi krovovi",
      "Monitoring i izvještavanje",
    ],
  },
  {
    icon: Car,
    title: "Punjači za električna vozila",
    desc: "Stanice za punjenje električnih vozila pokretane čistom solarnom energijom.",
    features: [
      "AC i DC punjači",
      "Integracija sa solarnim sustavom",
      "Pametno punjenje",
      "Kompatibilno sa svim EV vozilima",
      "Aplikacija za upravljanje",
      "Ugradnja kod kuće ili na poslu",
    ],
  },
  {
    icon: Battery,
    title: "Kućni baterijski sustavi",
    desc: "Kućni baterijski sustavi za energetsku neovisnost i rezervno napajanje.",
    features: [
      "Huawei LUNA baterije",
      "Kapaciteti od 5 kWh do 30 kWh",
      "Rezervno napajanje u slučaju nestanka",
      "Optimizacija vlastite potrošnje",
      "Inteligentno upravljanje energijom",
      "Modularno proširenje",
    ],
  },
  {
    icon: Zap,
    title: "Baterijski sustavi za potporu mreži",
    desc: "Komercijalna rješenja za skladištenje energije za tvrtke i energetske zajednice.",
    features: [
      "Veliki kapaciteti skladištenja",
      "Stabilizacija mreže",
      "Peak shaving",
      "Energetske zajednice",
      "Agregacija i trgovanje energijom",
      "Profesionalni monitoring",
    ],
  },
];

export default function RjesenjaPage() {
  return (
    <>
      <section className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Naša rješenja
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Sveobuhvatna rješenja obnovljivih izvora energije za kućanstva i industriju
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((sol, i) => (
              <div
                key={sol.title}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon block */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-navy-700 rounded-3xl flex items-center justify-center">
                    <sol.icon className="w-16 h-16 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {sol.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sol.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-primary-400 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/ponuda"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 font-medium text-sm transition-colors"
                  >
                    Zatražite ponudu za ovo rješenje
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Niste sigurni koje rješenje vam treba?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Kontaktirajte nas za besplatnu konzultaciju — pomoći ćemo vam odabrati optimalno rješenje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ponuda"
              className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Kreiraj ponudu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg transition-all hover:bg-white/5"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
