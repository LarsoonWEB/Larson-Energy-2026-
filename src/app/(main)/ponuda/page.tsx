"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin, Zap, Home, Layers, Compass, TriangleRight, Cloud,
  Plug, Car, Battery, User, ArrowRight, ArrowLeft, Check,
  Sun, ChevronDown,
} from "lucide-react";

type FormData = {
  address: string;
  powerMode: "manual" | "estimate";
  powerKw: number;
  annualConsumption: number;
  roofType: "flat" | "tile" | "metal" | "shingle";
  orientation: string;
  tilt: number;
  shading: number;
  connectionType: "3phase" | "1phase" | "offgrid";
  evCharger: boolean;
  batterySystem: boolean;
  name: string;
  email: string;
  phone: string;
};

const STEPS = [
  { id: 1, label: "Lokacija", icon: MapPin },
  { id: 2, label: "Snaga", icon: Zap },
  { id: 3, label: "Krov", icon: Home },
  { id: 4, label: "Orijentacija", icon: Compass },
  { id: 5, label: "Nagib", icon: TriangleRight },
  { id: 6, label: "Sjena", icon: Cloud },
  { id: 7, label: "Priključak", icon: Plug },
  { id: 8, label: "Dodaci", icon: Battery },
  { id: 9, label: "Podaci", icon: User },
];

const PRICE_PER_KW = 850;
const SUBSIDY_PERCENT = 0.50;
const ELECTRICITY_PRICE = 0.13;
const CO2_PER_KWH = 0.0004;
const TREES_PER_TON_CO2 = 50;

const ORIENTATION_FACTORS: Record<string, number> = {
  S: 1.0, SSW: 0.97, SSE: 0.97, SW: 0.92, SE: 0.92,
  W: 0.82, E: 0.82, NW: 0.65, NE: 0.65, N: 0.55,
};

const TILT_FACTORS: Record<number, number> = {
  0: 0.87, 10: 0.93, 15: 0.95, 20: 0.97, 25: 0.99,
  30: 1.0, 35: 1.0, 40: 0.99, 45: 0.97, 50: 0.94,
  60: 0.87, 70: 0.78, 80: 0.67, 90: 0.55,
};

const SHADING_FACTORS = [1.0, 0.9, 0.75, 0.55];
const BASE_PRODUCTION_KWH_PER_KW = 1150;

export default function PonudaPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    address: "",
    powerMode: "manual",
    powerKw: 10,
    annualConsumption: 8000,
    roofType: "tile",
    orientation: "S",
    tilt: 35,
    shading: 0,
    connectionType: "3phase",
    evCharger: false,
    batterySystem: false,
    name: "",
    email: "",
    phone: "",
  });

  const update = (partial: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...partial }));

  const effectivePower = form.powerMode === "estimate"
    ? Math.ceil(form.annualConsumption / BASE_PRODUCTION_KWH_PER_KW * 10) / 10
    : form.powerKw;

  const calc = useMemo(() => {
    const oFactor = ORIENTATION_FACTORS[form.orientation] ?? 1;
    const closestTilt = Object.keys(TILT_FACTORS).map(Number)
      .reduce((a, b) => Math.abs(b - form.tilt) < Math.abs(a - form.tilt) ? b : a);
    const tFactor = TILT_FACTORS[closestTilt] ?? 1;
    const sFactor = SHADING_FACTORS[form.shading] ?? 1;

    const annualProduction = Math.round(effectivePower * BASE_PRODUCTION_KWH_PER_KW * oFactor * tFactor * sFactor);
    const investmentBase = Math.round(effectivePower * PRICE_PER_KW);
    const evCost = form.evCharger ? 1200 : 0;
    const batteryCost = form.batterySystem ? 4500 : 0;
    const totalInvestment = investmentBase + evCost + batteryCost;
    const withSubsidy = Math.round(totalInvestment * (1 - SUBSIDY_PERCENT));
    const annualSavings = Math.round(annualProduction * ELECTRICITY_PRICE);
    const paybackYears = annualSavings > 0 ? Math.round((withSubsidy / annualSavings) * 10) / 10 : 0;
    const co2Savings = Math.round(annualProduction * CO2_PER_KWH * 10) / 10;
    const treesEquivalent = Math.round(co2Savings * TREES_PER_TON_CO2);

    return { annualProduction, totalInvestment, withSubsidy, annualSavings, paybackYears, co2Savings, treesEquivalent };
  }, [effectivePower, form.orientation, form.tilt, form.shading, form.evCharger, form.batterySystem]);

  const handleSubmit = () => setSubmitted(true);

  const next = () => setStep((s) => Math.min(s + 1, 9));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <section className="min-h-screen bg-navy-700 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-navy-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Ponuda je generirana!</h1>
          <p className="text-gray-500 mb-8">Detaljna ponuda bit će poslana na {form.email}. Kontaktirat ćemo vas u najkraćem roku.</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">{effectivePower} kW</div>
              <div className="text-xs text-gray-500">Snaga sustava</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">{calc.annualProduction.toLocaleString()}</div>
              <div className="text-xs text-gray-500">kWh/godišnje</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">€{calc.withSubsidy.toLocaleString()}</div>
              <div className="text-xs text-gray-500">S 50% subvencijom</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">{calc.paybackYears} god.</div>
              <div className="text-xs text-gray-500">Povrat investicije</div>
            </div>
          </div>
          <Link href="/" className="text-primary-600 hover:text-primary-500 font-medium text-sm">
            Povratak na naslovnicu →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Dobijte svoju informativnu ponudu
          </h1>
          <p className="text-white/60 text-sm">
            Neobvezujuća ponuda — procjena investicije na osnovu vaših podataka
          </p>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {STEPS.map((s) => (
              <button
                key={s.id}
                onClick={() => s.id <= step && setStep(s.id)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  s.id === step ? "text-primary-600" : s.id < step ? "text-primary-400" : "text-gray-300"
                } ${s.id <= step ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border-2 ${
                  s.id === step ? "border-primary-400 bg-primary-50 text-primary-700" :
                  s.id < step ? "border-primary-400 bg-primary-400 text-white" :
                  "border-gray-200 bg-white text-gray-400"
                }`}>
                  {s.id < step ? <Check className="w-4 h-4" /> : s.id}
                </div>
                <span className="text-[10px] font-medium hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              {/* Step 1: Location */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Lokacija elektrane</h2>
                  <p className="text-sm text-gray-500 mb-6">Unesite adresu objekta</p>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => update({ address: e.target.value })}
                    placeholder="Npr. Ilica 1, Zagreb"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none"
                  />
                  <div className="mt-4 aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                    Google Maps karta — dolazi u sljedećoj fazi
                  </div>
                </div>
              )}

              {/* Step 2: Power */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Snaga elektrane</h2>
                  <p className="text-sm text-gray-500 mb-6">Odaberite način određivanja snage</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { mode: "manual" as const, label: "Znam snagu", desc: "Unijet ću željenu snagu" },
                      { mode: "estimate" as const, label: "Procijeni", desc: "Na temelju godišnje potrošnje" },
                    ].map((opt) => (
                      <button
                        key={opt.mode}
                        onClick={() => update({ powerMode: opt.mode })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          form.powerMode === opt.mode ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-900 text-sm">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                  {form.powerMode === "manual" ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Snaga (kW): {form.powerKw} kW</label>
                      <input type="range" min="3" max="30" step="0.5" value={form.powerKw}
                        onChange={(e) => update({ powerKw: parseFloat(e.target.value) })}
                        className="w-full accent-primary-400" />
                      <div className="flex justify-between text-xs text-gray-400 mt-1"><span>3 kW</span><span>30 kW</span></div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Godišnja potrošnja (kWh): {form.annualConsumption.toLocaleString()} kWh</label>
                      <input type="range" min="2000" max="30000" step="500" value={form.annualConsumption}
                        onChange={(e) => update({ annualConsumption: parseInt(e.target.value) })}
                        className="w-full accent-primary-400" />
                      <div className="flex justify-between text-xs text-gray-400 mt-1"><span>2.000 kWh</span><span>30.000 kWh</span></div>
                      <p className="mt-3 text-sm text-primary-600">Procijenjena snaga: {effectivePower} kW</p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Roof Type */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Tip krova</h2>
                  <p className="text-sm text-gray-500 mb-6">Odaberite vrstu pokrova</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "flat" as const, label: "Ravni krov", desc: "Beton, bitumen" },
                      { id: "tile" as const, label: "Crijep", desc: "Glineni ili betonski" },
                      { id: "metal" as const, label: "Lim", desc: "Metalni ili trapezni" },
                      { id: "shingle" as const, label: "Šindra", desc: "Drvena ili bitumenska" },
                    ].map((opt) => (
                      <button key={opt.id} onClick={() => update({ roofType: opt.id })}
                        className={`p-5 rounded-xl border-2 text-left transition-all ${
                          form.roofType === opt.id ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <div className="font-semibold text-gray-900">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Orientation */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Orijentacija krova</h2>
                  <p className="text-sm text-gray-500 mb-6">Odaberite smjer krovne plohe</p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {Object.keys(ORIENTATION_FACTORS).map((dir) => (
                      <button key={dir} onClick={() => update({ orientation: dir })}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          form.orientation === dir ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <div className="font-semibold text-sm text-gray-900">{dir}</div>
                        <div className="text-[10px] text-gray-400">{Math.round(ORIENTATION_FACTORS[dir] * 100)}%</div>
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-500">Optimalna orijentacija za Hrvatsku je Jug (S).</p>
                </div>
              )}

              {/* Step 5: Tilt */}
              {step === 5 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Nagib krova</h2>
                  <p className="text-sm text-gray-500 mb-6">Nagib krovne plohe u stupnjevima</p>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{form.tilt}°</label>
                  <input type="range" min="0" max="90" step="5" value={form.tilt}
                    onChange={(e) => update({ tilt: parseInt(e.target.value) })}
                    className="w-full accent-primary-400" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0° (ravno)</span><span>45°</span><span>90° (okomito)</span>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">Optimalni nagib za Hrvatsku je između 30° i 40°.</p>
                </div>
              )}

              {/* Step 6: Shading */}
              {step === 6 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Zasjenjenost krova</h2>
                  <p className="text-sm text-gray-500 mb-6">Koliko je krov zasjenjen tijekom dana?</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 0, label: "Nema sjene", desc: "100% efikasnost" },
                      { id: 1, label: "Slaba sjena", desc: "90% efikasnost" },
                      { id: 2, label: "Umjerena sjena", desc: "75% efikasnost" },
                      { id: 3, label: "Jaka sjena", desc: "55% efikasnost" },
                    ].map((opt) => (
                      <button key={opt.id} onClick={() => update({ shading: opt.id })}
                        className={`p-5 rounded-xl border-2 text-left transition-all ${
                          form.shading === opt.id ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <div className="font-semibold text-gray-900">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Connection */}
              {step === 7 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Vrsta priključka</h2>
                  <p className="text-sm text-gray-500 mb-6">Odaberite vrstu električnog priključka</p>
                  <div className="space-y-3">
                    {[
                      { id: "3phase" as const, label: "Trofazni (3f)", desc: "Standardni priključak za veće kuće" },
                      { id: "1phase" as const, label: "Jednofazni (1f)", desc: "Za manje objekte" },
                      { id: "offgrid" as const, label: "Off-grid", desc: "Potpuno neovisna elektrana" },
                    ].map((opt) => (
                      <button key={opt.id} onClick={() => update({ connectionType: opt.id })}
                        className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                          form.connectionType === opt.id ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <div className="font-semibold text-gray-900">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 8: Extras */}
              {step === 8 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Dodatne opcije</h2>
                  <p className="text-sm text-gray-500 mb-6">Odaberite dodatnu opremu</p>
                  <div className="space-y-4">
                    <button onClick={() => update({ evCharger: !form.evCharger })}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                        form.evCharger ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                      }`}>
                      <Car className={`w-8 h-8 ${form.evCharger ? "text-primary-600" : "text-gray-400"}`} />
                      <div>
                        <div className="font-semibold text-gray-900">Punjač za električno vozilo</div>
                        <div className="text-xs text-gray-500">+€1.200 na investiciju</div>
                      </div>
                    </button>
                    <button onClick={() => update({ batterySystem: !form.batterySystem })}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                        form.batterySystem ? "border-primary-400 bg-primary-50" : "border-gray-200 hover:border-gray-300"
                      }`}>
                      <Battery className={`w-8 h-8 ${form.batterySystem ? "text-primary-600" : "text-gray-400"}`} />
                      <div>
                        <div className="font-semibold text-gray-900">Baterijski sustav</div>
                        <div className="text-xs text-gray-500">+€4.500 na investiciju (5 kWh)</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 9: Personal Info */}
              {step === 9 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Vaši podaci</h2>
                  <p className="text-sm text-gray-500 mb-6">Ponuda će biti poslana na vaš email</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime *</label>
                      <input type="text" required value={form.name} onChange={(e) => update({ name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => update({ email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => update({ phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button onClick={prev} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium text-sm">
                    <ArrowLeft className="w-4 h-4" /> Nazad
                  </button>
                ) : <div />}
                {step < 9 ? (
                  <button onClick={next}
                    className="flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-6 py-2.5 rounded-lg text-sm transition-all">
                    Dalje <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.phone}
                    className="flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-6 py-2.5 rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Generiraj ponudu <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Live Calculator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-40">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Procjena sustava</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Snaga</span>
                  <span className="text-lg font-bold text-gray-900">{effectivePower} kW</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Proizvodnja</span>
                  <span className="text-lg font-bold text-primary-600">{calc.annualProduction.toLocaleString()} kWh/god</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Investicija</span>
                  <span className="text-base font-semibold text-gray-900">€{calc.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">S 50% subvencijom</span>
                  <span className="text-lg font-bold text-primary-600">€{calc.withSubsidy.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Godišnja ušteda</span>
                  <span className="text-base font-semibold text-gray-900">€{calc.annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Povrat investicije</span>
                  <span className="text-base font-semibold text-gray-900">{calc.paybackYears} godina</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">CO₂ ušteda</span>
                  <span className="text-sm font-medium text-gray-700">{calc.co2Savings}t/god</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Ekvivalent stabala</span>
                  <span className="text-sm font-medium text-gray-700">{calc.treesEquivalent}</span>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-gray-400 leading-relaxed">
                * Procjena je informativnog karaktera. Točni podaci ovise o detaljnoj analizi lokacije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
