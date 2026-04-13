"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sun, Shield, Wrench, ClipboardCheck, ArrowRight, Phone, Zap,
  Battery, Car, Home, Factory, Award, Clock, Users, HeartHandshake,
  CheckCircle, Star, BookOpen, Leaf, TrendingDown, BadgeCheck,
  ShieldCheck, Timer, Headphones,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

/* ── Calculator Constants ── */
const PRICE_PER_KW = 850;
const SUBSIDY = 0.5;
const ELEC_PRICE = 0.13;
const BASE_PROD = 1150;

/* ── Testimonials Data ── */
const testimonials = [
  {
    quote: "Larsoon Energy je transformirao naš dom prekrasnom solarnom instalacijom. Naši računi za struju su se smanjili za 80% i sustav radi besprijekorno.",
    name: "Ana Marić",
    location: "Zagreb, Hrvatska",
    rating: 5,
  },
  {
    quote: "Profesionalna usluga od početka do kraja. Tim je bio stručan, točan, a kvaliteta instalacije je nadmašila naša očekivanja.",
    name: "Marko Petrović",
    location: "Split, Hrvatska",
    rating: 5,
  },
  {
    quote: "Najbolja investicija za naš dom. Solarni paneli izgledaju odlično, a uštede su točno kakve su obećane. Toplo preporučujem!",
    name: "Petra Novak",
    location: "Rijeka, Hrvatska",
    rating: 5,
  },
];

/* ── Steps Data ── */
const steps = [
  { num: "01", title: "Početna konzultacija", desc: "Besplatna procjena vaše nekretnine i energetskih potreba", icon: Phone },
  { num: "02", title: "Pregled lokacije", desc: "Detaljni tehnički pregled i analiza izvodljivosti", icon: ClipboardCheck },
  { num: "03", title: "Izrada projekta", desc: "Projektiranje solarne elektrane i izrada dokumentacije", icon: BookOpen },
  { num: "04", title: "Ishođenje dozvola", desc: "Rješavanje svih potrebnih dozvola i mrežnih priključaka", icon: Shield },
  { num: "05", title: "Montaža", desc: "Profesionalna montaža od strane certificiranih tehničara", icon: Wrench },
  { num: "06", title: "Puštanje u pogon", desc: "Testiranje i puštanje elektrane u trajni pogon", icon: Zap },
];

/* ── Why Choose Us Data ── */
const whyUs = [
  { icon: Award, title: "Certificirani stručnjaci", desc: "Tim s dugogodišnjim iskustvom i svim potrebnim certifikacijama" },
  { icon: ShieldCheck, title: "Garancija kvalitete", desc: "25 godina garancije na panele, 10 godina na inverter, 5 godina na rad" },
  { icon: Timer, title: "Brza realizacija", desc: "Od potpisa ugovora do puštanja u pogon u samo 4-6 tjedana" },
  { icon: Headphones, title: "Podrška 24/7", desc: "Kontinuirani monitoring sustava i brza intervencija kad je potrebna" },
  { icon: TrendingDown, title: "Transparentne cijene", desc: "Bez skrivenih troškova — sve je jasno definirano u ponudi" },
  { icon: Leaf, title: "Zelena budućnost", desc: "Smanjite ugljični otisak i doprinesite održivom razvoju" },
];

/* ── Warranty Data ── */
const warranties = [
  { years: "25", label: "Garancija na solarne panele", desc: "Minimalno 80% učinkovitosti nakon 25 godina" },
  { years: "10", label: "Garancija na inverter", desc: "Huawei inverteri s produljenom garancijom" },
  { years: "10", label: "Garancija na konstrukciju", desc: "Nosiva konstrukcija otporna na sve vremenske uvjete" },
  { years: "5", label: "Garancija na izvedene radove", desc: "Puna garancija na kvalitetu montaže i instalacije" },
];

export default function EnhancedHome() {
  const [calcPower, setCalcPower] = useState(10);

  const calc = useMemo(() => {
    const production = Math.round(calcPower * BASE_PROD);
    const investment = Math.round(calcPower * PRICE_PER_KW);
    const withSubsidy = Math.round(investment * (1 - SUBSIDY));
    const annualSavings = Math.round(production * ELEC_PRICE);
    const payback = annualSavings > 0 ? Math.round((withSubsidy / annualSavings) * 10) / 10 : 0;
    const co2 = Math.round(production * 0.0004 * 10) / 10;
    const trees = Math.round(co2 * 50);
    return { production, investment, withSubsidy, annualSavings, payback, co2, trees };
  }, [calcPower]);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-navy-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,170,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-800/50 to-transparent" />
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E\")"}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-400/10 border border-primary-400/20 rounded-full px-4 py-1.5 text-primary-400 text-sm mb-8 backdrop-blur-sm">
                <Sun className="w-4 h-4" />
                Vodeća rješenja solarnih sustava u Hrvatskoj
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Pokretajte svoju budućnost s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                  energijom sunca
                </span>
              </h1>

              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl">
                Od projektiranja do održavanja, pružamo sveobuhvatna rješenja
                solarnih sustava za kućanstva i industriju u cijeloj Hrvatskoj.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ponuda"
                  className="group inline-flex items-center justify-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-primary-400/25"
                >
                  Kreirajte informativnu ponudu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-medium px-8 py-4 rounded-xl transition-all hover:bg-white/5 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Nazovite nas
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-8 text-white/30 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>50+ instalacija</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Huawei partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>25 god. garancija</span>
                </div>
              </div>
            </div>

            {/* Hero right - Stats card */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "500+", unit: "kW", label: "Instalirane snage" },
                    { value: "50+", unit: "", label: "Zadovoljnih klijenata" },
                    { value: "25", unit: "god", label: "Garancija na panele" },
                    { value: "80%", unit: "", label: "Prosječna ušteda" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4">
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                        {stat.unit && <span className="text-lg text-primary-400 ml-1">{stat.unit}</span>}
                      </div>
                      <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CALCULATOR ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kalkulator investicije i ušteda
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Provjerite koliko možete uštedjeti s vlastitom solarnom elektranom
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 sm:p-10">
            {/* Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-gray-700">Snaga solarne elektrane</label>
                <span className="text-2xl font-bold text-primary-600">{calcPower} kW</span>
              </div>
              <input
                type="range" min="3" max="20" step="0.5" value={calcPower}
                onChange={(e) => setCalcPower(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-400"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>3 kW</span><span>5 kW</span><span>10 kW</span><span>15 kW</span><span>20 kW</span>
              </div>
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { value: `€${calc.investment.toLocaleString()}`, label: "Investicija", highlight: false },
                { value: `€${calc.withSubsidy.toLocaleString()}`, label: "S 50% subvencijom", highlight: true },
                { value: `€${calc.annualSavings.toLocaleString()}`, label: "Godišnje uštede", highlight: false },
                { value: `${calc.payback} god.`, label: "Povrat investicije", highlight: true },
                { value: `${calc.co2}t`, label: "CO₂ ušteda/god.", highlight: false },
                { value: `${calc.trees}`, label: "Ekvivalent stabala", highlight: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-xl text-center ${
                    item.highlight ? "bg-primary-400 text-navy-700" : "bg-white border border-gray-100"
                  }`}
                >
                  <div className={`text-xl font-bold ${item.highlight ? "" : "text-gray-900"}`}>
                    {item.value}
                  </div>
                  <div className={`text-xs mt-1 ${item.highlight ? "text-navy-700/70" : "text-gray-500"}`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/ponuda"
                className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold px-8 py-3 rounded-xl transition-all"
              >
                Detaljnija procjena <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STEPS TIMELINE ═══════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Koraci do energetske slobode
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Jednostavan proces od ideje do puštanja u pogon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-400/30 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-400 flex items-center justify-center text-navy-700 font-bold text-sm">
                      {s.num}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                      <s.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zašto odabrati Larsoon Energy?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Pouzdani partner na vašem putu prema energetskoj neovisnosti
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary-400/20 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center mb-4 group-hover:bg-primary-400/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Nudimo kompletna rješenja u području obnovljivih izvora energije
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ClipboardCheck, title: "Projektiranje i dokumentacija", desc: "Detaljno projektiranje s kompletnom tehničkom dokumentacijom, analizom lokacije i optimizacijom performansi." },
              { icon: Wrench, title: "Montaža", desc: "Profesionalna montaža solarnih panela od strane certificiranih tehničara s garancijom kvalitete rada." },
              { icon: Shield, title: "Nadzor i održavanje", desc: "Kontinuirani nadzor rada sustava, redovite provjere i brza intervencija u slučaju potrebe." },
              { icon: Sun, title: "Čišćenje panela", desc: "Periodično čišćenje za povećanje ukupne godišnje proizvodnje energije vašeg sustava." },
            ].map((s) => (
              <div key={s.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-primary-400/30 hover:shadow-xl hover:shadow-primary-400/5 transition-all">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <s.icon className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOLUTIONS ═══════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Naša rješenja</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Sveobuhvatna rješenja obnovljivih izvora energije za kućanstva i industriju
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "Kućne solarne elektrane", desc: "Kompletna solarna rješenja za domove, smanjujući račune za energiju i ugljični otisak." },
              { icon: Factory, title: "Industrijske elektrane", desc: "Velike solarne instalacije za tvrtke i industrijske objekte." },
              { icon: Car, title: "Punjači za EV", desc: "Stanice za punjenje električnih vozila pokretane čistom solarnom energijom." },
              { icon: Battery, title: "Kućni baterijski sustavi", desc: "Energetska neovisnost i rezervno napajanje za vaš dom." },
              { icon: Zap, title: "Baterije za potporu mreži", desc: "Komercijalna rješenja za skladištenje energije za tvrtke." },
            ].map((sol) => (
              <Link key={sol.title} href="/rjesenja"
                className="group bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-navy-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-navy-600 transition-colors">
                  <sol.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium mt-4 group-hover:gap-2 transition-all">
                  Saznajte više <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WARRANTY ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Garancijski uvjeti
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Vaša investicija je zaštićena sveobuhvatnom garancijom
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warranties.map((w) => (
              <div key={w.label} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-5xl font-bold text-primary-600 mb-1">{w.years}</div>
                <div className="text-sm font-medium text-primary-700 mb-3">godina</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{w.label}</h3>
                <p className="text-sm text-gray-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Što kažu naši kupci
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Stvarna iskustva zadovoljnih kupaca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WIKI PREVIEW ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Solarna Wiki</h2>
              <p className="text-gray-500">Korisni članci i informacije o solarnoj energiji</p>
            </div>
            <Link href="/solarna-wiki" className="hidden sm:inline-flex items-center gap-1 text-sm text-primary-600 font-medium hover:gap-2 transition-all">
              Svi članci <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Koji su glavni dijelovi solarne elektrane?", category: "Osnove", time: "5 min" },
              { title: "Kako se obračunava proizvodnja i potrošnja?", category: "Financije", time: "8 min" },
              { title: "Vrste solarnih elektrana", category: "Osnove", time: "6 min" },
            ].map((article) => (
              <div key={article.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-400/30 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.time} čitanja</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium">
                  Čitaj više <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-24 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.06),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Spremni za solarnu energiju?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Pridružite se stotinama zadovoljnih kupaca koji su prešli na čistu,
            obnovljivu energiju. Dobijte svoju besplatnu ponudu danas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ponuda"
              className="group inline-flex items-center justify-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-400/25"
            >
              Besplatna ponuda
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-medium px-10 py-4 rounded-xl transition-all hover:bg-white/5"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
