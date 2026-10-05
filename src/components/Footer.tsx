"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Award, Check, Send } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer id="iletisim" className="bg-[#050302] text-[#dcd2be] pt-16 sm:pt-20 pb-12 border-t border-[#d4af37]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#d4af37]/20">
          {/* Brand & Crest Column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo size="lg" showText={true} />
            </div>

            <p className="text-xs sm:text-sm text-[#b5a790] font-light leading-relaxed mb-6">
              Michelin Rehberi tavsiyeli, 26 yıllık taş mahzen ve meşe odununda dinlendirilmiş etlerin
              buluştuğu ağırbaşlı gastronomi mabedi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#140e0b] border border-[#d4af37]/30 text-xs text-[#dfb76c]">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span>Michelin Guide Selection • Heritage Award</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-[#f5eedf] mb-4 sm:mb-5">
              Bölümler
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs tracking-wider uppercase text-[#a99c85]">
              <li>
                <a href="#mirasimiz" className="hover:text-[#dfb76c] transition-colors">
                  Mirasımız (1998)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#dfb76c] transition-colors">
                  Alakart Menü
                </a>
              </li>
              <li>
                <a href="#mahzen" className="hover:text-[#dfb76c] transition-colors">
                  Sommelier Mahzeni
                </a>
              </li>
              <li>
                <a href="#deneyim" className="hover:text-[#dfb76c] transition-colors">
                  Akşam Atmosferi
                </a>
              </li>
              <li>
                <a href="#rezervasyon" className="hover:text-[#dfb76c] transition-colors">
                  Rezervasyon Talebi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-[#f5eedf] mb-4 sm:mb-5">
              İletişim & Lokasyon
            </h4>
            <div className="space-y-3 text-xs text-[#b8ab96] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Tarihi Kemer Sok. No: 18, Galata / Beyoğlu, İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+902122491998" className="hover:text-[#dfb76c] transition-colors">
                  +90 (212) 249 1998
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>concierge@gastropub.com</span>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Her Gün: 18:30 – 01:00 <br />
                  Rezervasyon Saatleri: 19:00 – 23:00
                </span>
              </div>
            </div>
          </div>

          {/* Sommelier Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-[#f5eedf] mb-3">
              Mahzen Bülteni
            </h4>
            <p className="text-xs text-[#a99c85] font-light leading-relaxed mb-4">
              Nadir vintage koli açılışları ve şefin özel tadım menülerinden öncelikli haberdar olun.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="E-posta adresiniz"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#120e0b] border border-[#d4af37]/30 rounded-sm px-3 py-2.5 text-xs text-[#f5eedf] placeholder-[#7d715e] focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  aria-label="Abone Ol"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#4a0c1a] hover:bg-[#6b1227] text-[#fbf0c0] rounded-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterSuccess && (
                <div className="text-[11px] text-[#7bb661] flex items-center gap-1.5 pt-1 animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Mahzen bültenimize kaydınız tamamlandı.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#877a68]">
          <p>© 1998 – 2026 GastroPub Heritage Dining. Tüm Hakları Saklıdır. Michelin Guide Selection.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-[#dfb76c] cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-[#dfb76c] cursor-pointer">Adabımuaşeret & Kurallar</span>
            <span className="hover:text-[#dfb76c] cursor-pointer">KVKK Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
