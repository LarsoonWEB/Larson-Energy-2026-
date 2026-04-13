"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Zap, Calendar, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Obiteljska kuća — Krapinske Toplice",
    location: "Krapinske Toplice",
    power: "10.8 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Solarna elektrana na crijepu s Huawei inverterom i optimizerima.",
    images: ["/images/projects/project-1.jpg"],
  },
  {
    id: 2,
    title: "Obiteljska kuća — Jastrebarsko",
    location: "Jastrebarsko",
    power: "8.1 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Elektrana na dvoslivnom krovu s pogledom na Žumberačko gorje.",
    images: ["/images/projects/project-2.jpg"],
  },
  {
    id: 3,
    title: "Moderna kuća — Samobor",
    location: "Samobor",
    power: "12.6 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Full-black paneli na tamnom crijepu za estetski savršen izgled.",
    images: ["/images/projects/project-3.jpg"],
  },
  {
    id: 4,
    title: "Obiteljska kuća — okolica Zagreba",
    location: "Okolica Zagreba",
    power: "9.45 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Sustav na crvenoj crijepu s pogledom na selo i prirodu.",
    images: ["/images/projects/project-4.jpg"],
  },
  {
    id: 5,
    title: "Obiteljska kuća — Zaprešić",
    location: "Zaprešić",
    power: "14.4 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Velika instalacija na četveroslivnom krovu — potpuna pokrivenost.",
    images: ["/images/projects/project-5.jpg"],
  },
  {
    id: 6,
    title: "Obiteljska kuća — Ivanec",
    location: "Ivanec",
    power: "7.2 kW",
    date: "2024",
    type: "Kućna elektrana",
    description: "Kompaktna elektrana za optimizaciju vlastite potrošnje.",
    images: ["/images/projects/project-6.jpg"],
  },
];

export default function NasiRadoviPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Naši radovi
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pogledajte naše solarne instalacije diljem Hrvatske
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "50+", label: "Instalacija" },
              { value: "500+ kW", label: "Ukupna snaga" },
              { value: "100%", label: "Zadovoljnih klijenata" },
              { value: "5+", label: "Godina iskustva" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group text-left rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-400/30 hover:shadow-lg transition-all"
              >
                {/* Placeholder image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-primary-400/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary-600 font-medium mb-2">
                    <span className="bg-primary-50 px-2 py-0.5 rounded">{project.type}</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">{project.power}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-16 h-16 text-primary-400/30" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{selectedProject.power}</div>
                  <div className="text-xs text-gray-500">Snaga</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{selectedProject.location}</div>
                  <div className="text-xs text-gray-500">Lokacija</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{selectedProject.date}</div>
                  <div className="text-xs text-gray-500">Godina</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Želite li i vi solarnu elektranu?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Vaš projekt može biti sljedeći u našoj galeriji
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
