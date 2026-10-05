"use client";

import React from "react";
import { History, ShieldCheck, Flame, Wine, Compass, CheckCircle2 } from "lucide-react";

export default function HeritageStory() {
  return (
    <section id="mirasimiz" className="relative py-28 bg-[#0b0806] overflow-hidden border-t border-b border-[#d4af37]/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4a0c1a]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
            <History className="w-4 h-4 text-[#d4af37]" />
            <span>KÖKLÜ BİR GASTRONOMİ SERÜVENİ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f2] tracking-tight mb-4">
            Zamanın Eskitemediği Lezzetler, <br />
            <span className="text-gold-gradient font-normal italic">Çeyrek Asırlık Mahzen Geleneği</span>
          </h2>
          <div className="brass-line w-40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#cfc1a8] font-light leading-relaxed">
            1998 yılının sonbaharında, Galata&apos;nın asırlık taş kemerleri altında kapılarını aralayan
            GastroPub; klasik Avrupa pub kültürünün samimiyeti ile Michelin standartlarındaki lüks
            mutfak disiplinini aynı çatıda buluşturdu.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="p-8 rounded-sm bg-gradient-to-b from-[#18120e] to-[#0f0c09] border border-[#d4af37]/25 hover:border-[#d4af37] transition-all group shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            <div className="w-14 h-14 rounded-full bg-[#2a0912] border border-[#d4af37]/40 flex items-center justify-center text-[#dfb76c] mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-[#dfb76c]" />
            </div>
            <h3 className="font-serif text-xl text-[#f5eedf] font-semibold mb-3 tracking-wide">
              Meşe Odununda Füme & Ateş
            </h3>
            <p className="text-sm text-[#c5b59c] leading-relaxed font-light">
              Trakya ve Balıkesir meralarından özenle seçilen yerli besi etler, Himalaya tuzuyla kaplı özel
              odalarımızda 45 gün boyunca kuru dinlendirilir ve asırlık meşe odununda mühürlenir.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-sm bg-gradient-to-b from-[#1d1410] to-[#120e0b] border border-[#d4af37]/40 hover:border-[#f3d99b] transition-all group shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-[#661024] text-[#fbf0c0] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm border border-[#d4af37]">
              Özel Mahzen
            </div>
            <div className="w-14 h-14 rounded-full bg-[#350a14] border border-[#d4af37]/60 flex items-center justify-center text-[#dfb76c] mb-6 group-hover:scale-110 transition-transform">
              <Wine className="w-6 h-6 text-[#dfb76c]" />
            </div>
            <h3 className="font-serif text-xl text-[#f5eedf] font-semibold mb-3 tracking-wide">
              3,400+ Şişelik Tarihi Kiler
            </h3>
            <p className="text-sm text-[#c5b59c] leading-relaxed font-light">
              Bordeaux Grand Cru&apos;lerinden nadir vintage Toskana rezervlerine, Anadolu&apos;nun kaybolmaya
              yüz tutmuş bağlarından çıkan tek parsel şişelere kadar baş sommelier&apos;mizin özenle koruduğu
              koleksiyon.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-sm bg-gradient-to-b from-[#18120e] to-[#0f0c09] border border-[#d4af37]/25 hover:border-[#d4af37] transition-all group shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            <div className="w-14 h-14 rounded-full bg-[#2a0912] border border-[#d4af37]/40 flex items-center justify-center text-[#dfb76c] mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#dfb76c]" />
            </div>
            <h3 className="font-serif text-xl text-[#f5eedf] font-semibold mb-3 tracking-wide">
              Ağırbaşlı ve Kusursuz Servis
            </h3>
            <p className="text-sm text-[#c5b59c] leading-relaxed font-light">
              Göz yormayan loş mum ışığı, koyu meşe dokuları, gümüş ve pirinç detaylar. Her masaya özel
              servis temposu ve konuklarımızın mahremiyetini merkezine alan klasik adabımuaşeret.
            </p>
          </div>
        </div>

        {/* Chef & Founder Manifesto Block */}
        <div className="relative rounded-sm bg-gradient-to-r from-[#17120e] via-[#201014] to-[#17120e] border border-[#d4af37]/40 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#d4af37]/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Executive Chef"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0d0907] border border-[#d4af37] p-3 rounded-sm shadow-xl text-center">
                <span className="block font-serif text-xs text-[#d4af37] font-bold tracking-widest uppercase">
                  Chef Patron
                </span>
                <span className="text-[11px] text-[#cfc2aa]">M. Alexandre Demir</span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:pl-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
                ŞEFİN MANİFESTOSU
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#fbf8f2] font-normal italic my-4 leading-snug">
                &ldquo;İyi bir et ve olgun bir şarap, sadece sabredenlerin anlayabileceği sessiz bir
                diyalogdur.&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-[#c9bba3] font-light leading-relaxed mb-6">
                1998&apos;de bu ocağı yaktığımızda tek bir kuralımız vardı: Asla zamandan ve malzemeden
                ödün vermemek. Kullandığımız trüf mantarları İtalya&apos;nın Alba ormanlarından, brioche
                ekmeklerimiz her sabah 05:00&apos;te fırınlanan ekşi mayamızdan, bifteklerimiz ise sadece
                geleneksel yöntemlerle dinlendirilmiş hayvanlardan gelir.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d4af37]/20">
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#dfb76c]">1998</span>
                  <span className="text-xs text-[#a99c85] uppercase tracking-wider">Kuruluş Yılı</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#dfb76c]">45 Gün</span>
                  <span className="text-xs text-[#a99c85] uppercase tracking-wider">Kuru Dinlendirme</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#dfb76c]">3,400+</span>
                  <span className="text-xs text-[#a99c85] uppercase tracking-wider">Vintage Şişe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
