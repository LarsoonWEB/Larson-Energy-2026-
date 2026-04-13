import Link from "next/link";
import { BookOpen, Calculator, Wrench, Coins, Shield, Lightbulb, ArrowRight, Search } from "lucide-react";

const featuredArticles = [
  {
    slug: "dijelovi-solarne-elektrane",
    title: "Koji su glavni dijelovi solarne elektrane?",
    excerpt: "Solarna elektrana sastoji se od solarnih panela, invertera, nosive konstrukcije, sustava za praćenje i opcionalno baterija za pohranu energije.",
    category: "Osnove",
    readTime: "5 min",
  },
  {
    slug: "obracun-proizvodnje-potrosnje",
    title: "Kako se obračunava proizvodnja i potrošnja?",
    excerpt: "Obračun se temelji na sustavu neto mjerenja — višak proizvedene energije šalje se u mrežu, a manjak se uzima iz mreže.",
    category: "Financije",
    readTime: "8 min",
  },
  {
    slug: "vrste-solarnih-elektrana",
    title: "Vrste solarnih elektrana",
    excerpt: "Mrežne (on-grid), samostalne (off-grid) i hibridne elektrane — svaka ima svoje prednosti i idealne primjene.",
    category: "Osnove",
    readTime: "6 min",
  },
];

const categories = [
  {
    icon: BookOpen,
    title: "Osnove solarne energije",
    desc: "Osnovni principi rada solarnih elektrana",
    topics: ["Što su solarne elektrane?", "Kako funkcioniraju solarni paneli?", "Tipovi solarnih sustava", "Fotovoltaički vs. termalni sustavi"],
  },
  {
    icon: Calculator,
    title: "Planiranje i proračun",
    desc: "Alati i savjeti za planiranje vašeg sustava",
    topics: ["Kako izračunati potrebnu snagu?", "Analiza potrošnje električne energije", "Faktori koji utječu na učinkovitost", "ROI kalkulatori"],
  },
  {
    icon: Wrench,
    title: "Instalacija i održavanje",
    desc: "Sve o instalaciji i održavanju solarnih sustava",
    topics: ["Priprema za instalaciju", "Proces instalacije korak po korak", "Redovno održavanje panela", "Čišćenje i servis"],
  },
  {
    icon: Coins,
    title: "Financije i poticaji",
    desc: "Informacije o financiranju i državnim poticajima",
    topics: ["Državni poticaji u Hrvatskoj", "Opcije financiranja", "Povrat investicije", "Porezne olakšice"],
  },
  {
    icon: Shield,
    title: "Sigurnost i regulativa",
    desc: "Sigurnosni standardi i regulatorni okvir",
    topics: ["Sigurnosni standardi", "Dozvole i licence", "Mrežno povezivanje", "Osiguranje sustava"],
  },
  {
    icon: Lightbulb,
    title: "Savjeti i trikovi",
    desc: "Praktični savjeti za optimalno korištenje",
    topics: ["Maksimiziranje proizvodnje", "Energetska učinkovitost doma", "Skladištenje energije", "Pametni inverteri"],
  },
];

export default function SolarnaWikiPage() {
  return (
    <>
      <section className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Solarna Wiki
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Vaš kompletni vodič kroz svijet solarne energije
          </p>
          {/* Search placeholder */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pretražite članke..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-primary-400 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Izdvojeni članci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div
                key={article.slug}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-400/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime} čitanja</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium">
                  Čitaj više <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Kategorije članaka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-primary-400 rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popularne teme</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Cijena solarne elektrane",
              "Povrat investicije",
              "Državni poticaji",
              "Održavanje panela",
              "Mrežno povezivanje",
              "Energetska učinkovitost",
              "Baterije za skladištenje",
              "Huawei inverteri",
              "Dozvole i licence",
              "Neto mjerenje",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Budite u toku s najnovijim člancima
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Prijavite se i redovno dobivajte najnovije informacije o solarnoj energiji
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Vaš email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-primary-400"
            />
            <button className="bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-6 py-3 rounded-lg transition-all">
              Prijavite se
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
