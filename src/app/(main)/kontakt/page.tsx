"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Spremni smo odgovoriti na sva vaša pitanja o solarnim elektranama
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Pošaljite nam poruku
              </h2>
              {submitted ? (
                <div className="bg-primary-50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Poruka je uspješno poslana!
                  </h3>
                  <p className="text-gray-500">
                    Odgovorit ćemo vam u najkraćem mogućem roku.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email adresa *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                        placeholder="vas@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Broj telefona
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                      placeholder="+385 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tema *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                    >
                      <option value="">Odaberite temu</option>
                      <option>Zahtjev za ponudu</option>
                      <option>Besplatne konzultacije</option>
                      <option>Servis i održavanje</option>
                      <option>Ostalo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poruka *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all resize-none"
                      placeholder="Opišite vaš upit..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-navy-700 font-semibold px-8 py-3 rounded-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Pošaljite poruku
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Kontakt informacije
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: siteConfig.contact.phoneDisplay,
                    href: `tel:${siteConfig.contact.phone}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: siteConfig.contact.email,
                    href: `mailto:${siteConfig.contact.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Adresa",
                    value: siteConfig.address.full,
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: "Radno vrijeme",
                    value: "Pon - Pet: 08:00 - 17:00\nSub: 09:00 - 14:00",
                    href: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gray-50"
                  >
                    <div className="w-10 h-10 bg-primary-400/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 hover:text-primary-600 transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal Info */}
              <div className="p-6 rounded-xl bg-navy-700 text-white">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                  Pravni podaci
                </h3>
                <div className="space-y-2 text-sm text-white/50">
                  <p>{siteConfig.legalName}</p>
                  <p>{siteConfig.legal.court}, MBS: {siteConfig.legal.mbs}</p>
                  <p>OIB: {siteConfig.legal.oib}</p>
                  <p>IBAN: {siteConfig.legal.iban}</p>
                  <p>{siteConfig.legal.bank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
