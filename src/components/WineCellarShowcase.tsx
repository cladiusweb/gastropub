"use client";

import React, { useState } from "react";
import { Wine, Award, Compass, Sparkles, Check } from "lucide-react";

interface VintageBottle {
  name: string;
  vintage: string;
  region: string;
  notes: string;
  tag: string;
}

const FEATURED_BOTTLES: VintageBottle[] = [
  {
    name: "Château Latour Pauillac 1er Grand Cru",
    vintage: "2010",
    region: "Bordeaux, Fransa",
    notes: "Yoğun sedir, cassis, tütün yaprağı ve 40 yıllık potansiyele sahip kusursuz yapı.",
    tag: "Nadir Kiler",
  },
  {
    name: "Ornellaia Bolgheri Superiore",
    vintage: "2015",
    region: "Toskana, İtalya",
    notes: "Zengin böğürtlen, balzamik tonlar, kakao ve Akdeniz çalıları aroması.",
    tag: "Süper Toskana",
  },
  {
    name: "Urla Tempus Reserve Kütüphanesi",
    vintage: "2016",
    region: "Urla, İzmir",
    notes: "Özel meşe fıçılarda dinlendirilmiş kupaj; olgun erik, vanilya ve kadifemsi bitiş.",
    tag: "Yerel Miras",
  },
  {
    name: "Krug Clos d'Ambonnay Brut",
    vintage: "2002",
    region: "Champagne, Fransa",
    notes: "Tek bağ Pinot Noir şaheseri; fındık pralini, kavruk brioche ve sonsuz derinlik.",
    tag: "Koleksiyonel",
  },
];

export default function WineCellarShowcase() {
  const [activeBottleIndex, setActiveBottleIndex] = useState(0);

  return (
    <section id="mahzen" className="relative py-28 bg-[#0b0806] text-[#f4ede0] border-b border-[#d4af37]/20 overflow-hidden">
      {/* Ambient Red Wine Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#4a0c1a]/25 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
                alt="1998 Wine Cellar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-transparent to-transparent opacity-90" />

              {/* Inset badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#120e0b]/90 border border-[#d4af37]/40 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    MAHZEN KOŞULLARI
                  </span>
                  <span className="text-xs text-green-400 font-mono">14.2°C • %72 Nem</span>
                </div>
                <p className="text-xs text-[#cfc2aa] font-light">
                  1890&apos;lardan kalma taş tonoz kilerde, titreşimsiz ortamda korunan çeyrek asırlık şişeler.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Bottles */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              <Wine className="w-3.5 h-3.5" />
              <span>SOMMELIER MAHZENİ & KİLERİ</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f2] tracking-tight mb-6">
              1998&apos;den Bu Yana Korunan <br />
              <span className="text-gold-gradient font-normal italic">Özel Şarap Mirası</span>
            </h2>

            <p className="text-sm sm:text-base text-[#cfc2aa] font-light leading-relaxed mb-8">
              GastroPub&apos;ın kalbinde yer alan taş mahzen, Fransa&apos;nın prestijli şatolarından ve
              Anadolu&apos;nun güneşle olgunlaşan kadim bağlarından derlenmiş 3.400&apos;ün üzerinde şişeye
              ev sahipliği yapmaktadır. Masanıza sipariş ettiğiniz her ana yemek, sommelier&apos;mizin
              tavsiye ettiği rezerve kadehle tamamlanır.
            </p>

            {/* Interactive Bottle Accordion / Selector */}
            <div className="space-y-3 mb-8">
              {FEATURED_BOTTLES.map((bottle, idx) => {
                const isActive = activeBottleIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveBottleIndex(idx)}
                    className={`p-4 rounded-sm cursor-pointer transition-all border ${
                      isActive
                        ? "bg-[#1c1310] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        : "bg-[#110d0a] border-[#d4af37]/20 hover:border-[#d4af37]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#dfb76c] font-bold">
                          {bottle.vintage}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base text-[#f5eedf] font-semibold">
                          {bottle.name}
                        </h4>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a99c85] bg-[#0c0907] px-2 py-0.5 border border-white/5">
                        {bottle.tag}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-[#d4af37]/20 text-xs text-[#cfc2aa] font-light animate-fade-in flex flex-col gap-1">
                        <span className="text-[#a99c85] italic">{bottle.region}</span>
                        <p>{bottle.notes}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Cellar Tour Notice */}
            <div className="p-4 rounded-sm bg-[#160f0d] border border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-serif text-sm font-semibold text-[#f5eedf] block">
                  Mahzen Gezisi & Özel Şarap Tadımı
                </span>
                <span className="text-xs text-[#a99c85] font-light">
                  Akşam yemeğiniz öncesinde baş sommelier&apos;miz eşliğinde 20 dakikalık mahzen turu.
                </span>
              </div>
              <a
                href="#rezervasyon"
                className="px-4 py-2 bg-[#2d0a14] hover:bg-[#430f1e] border border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-[#fdf0cd] whitespace-nowrap rounded-sm transition-colors"
              >
                Tadım Talep Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
