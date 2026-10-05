"use client";

import React from "react";
import { Sparkles, ShieldCheck, Flame, Compass, Car, Clock } from "lucide-react";

export default function DiningAtmosphere() {
  const atmosphereFeatures = [
    {
      title: "Loş Mum Işığı & Koyu Meşe",
      desc: "Her masa, misafirlerimizin mahremiyetini ve sohbetini önceleyen yumuşak amber mum ışığı ve asırlık meşe dokusuyla çevrilidir.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Meşe Odunu & Döküm Alev",
      desc: "Mutfakta yalnızca dinlendirilmiş meşe ve zeytin ağacı odunları yakılır. Etler ve soslar doğal köz ısısında karakter kazanır.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Riedel Kristali & Gümüş Servis",
      desc: "Şarapların havalanması ve aromatik notalarının açılması için her üzüm çeşidine özel el yapımı kristal kadehler sunulur.",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="deneyim" className="relative py-20 sm:py-28 bg-[#080605] text-[#f4ede0] border-b border-[#d4af37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AĞIRBAŞLI & KORUNAN ATMOSFER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f2] tracking-tight mb-4">
            Loş Işıkta Lüks Bir Akşam Yemeği Ritüeli
          </h2>
          <div className="brass-line w-40 mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#cfc2aa] font-light leading-relaxed">
            Zamanın yavaşladığı, arka planda hafif bir caz tınısının meşe masalara eşlik ettiği,
            ağırbaşlı ve kusursuz bir gastronomi tecrübesi.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {atmosphereFeatures.map((feat, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden bg-[#130f0c] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all group shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130f0c] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#f5eedf] mb-2 group-hover:text-[#dfb76c] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cfc2aa] font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hospitality & Etiquette Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#d4af37]/20">
          <div className="flex items-start gap-4 p-4 rounded-sm bg-[#120e0b] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-sm font-semibold text-[#f5eedf] mb-1">
                Kıyafet Kodu (Dress Code)
              </h4>
              <p className="text-xs text-[#a99c85] font-light">
                Mekanımızın ağırbaşlı havası gereğince <strong>Smart Casual / Elegant</strong> giyim
                tercih edilmektedir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-sm bg-[#120e0b] border border-white/5">
            <Car className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-sm font-semibold text-[#f5eedf] mb-1">
                Özel Vale & Concierge
              </h4>
              <p className="text-xs text-[#a99c85] font-light">
                Kapıda 7/24 hizmet veren profesyonel vale ve akşamınız için concierge asistanlığı.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-sm bg-[#120e0b] border border-white/5">
            <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-sm font-semibold text-[#f5eedf] mb-1">
                Çalışma Saatleri
              </h4>
              <p className="text-xs text-[#a99c85] font-light">
                Haftanın her günü 18:30 - 01:00 arası açık. Mutfak sipariş alımı 23:30&apos;da sonlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
