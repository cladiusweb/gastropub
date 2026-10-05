"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0705]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)] border-b border-[#d4af37]/20"
          : "bg-gradient-to-b from-[#080604]/95 via-[#080604]/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Bespoke Heraldic Crest */}
          <a href="#" className="flex items-center" aria-label="GastroPub Anasayfa">
            <Logo size="md" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-semibold tracking-[0.18em] uppercase text-[#e8decb]/85">
            <a
              href="#mirasimiz"
              className="hover:text-[#dfb76c] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Mirasımız
            </a>
            <a
              href="#menu"
              className="hover:text-[#dfb76c] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Alakart & Mahzen
            </a>
            <a
              href="#mahzen"
              className="hover:text-[#dfb76c] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Sommelier Seçkisi
            </a>
            <a
              href="#deneyim"
              className="hover:text-[#dfb76c] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Atmosfer
            </a>
            <a
              href="#iletisim"
              className="hover:text-[#dfb76c] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              İletişim
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+902122491998"
              className="hidden sm:flex items-center gap-2 text-xs tracking-wider text-[#d0c4af]/80 border-r border-[#d4af37]/25 pr-4 hover:text-[#dfb76c] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>+90 (212) 249 1998</span>
            </a>

            <a
              href="#rezervasyon"
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm bg-gradient-to-r from-[#6b1227] via-[#851630] to-[#500c1c] text-[#fdf0cd] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase border border-[#d4af37]/60 shadow-[0_4px_15px_rgba(102,16,36,0.5)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:border-[#dfb76c] transition-all transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#f3d99b]" />
              <span className="hidden xs:inline">Masa Rezervasyonu</span>
              <span className="xs:hidden">Rezervasyon</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#dfb76c] hover:text-[#fbf8f2] focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0907]/98 border-b border-[#d4af37]/30 px-6 py-6 shadow-2xl animate-fade-in backdrop-blur-xl">
          <nav className="flex flex-col gap-3 text-sm tracking-wider uppercase">
            <a
              href="#mirasimiz"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#e8decb] hover:text-[#dfb76c] py-2 border-b border-white/5"
            >
              Mirasımız (1998)
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#e8decb] hover:text-[#dfb76c] py-2 border-b border-white/5"
            >
              Alakart Menü & Eşleşmeler
            </a>
            <a
              href="#mahzen"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#e8decb] hover:text-[#dfb76c] py-2 border-b border-white/5"
            >
              Sommelier Mahzeni & Kiler
            </a>
            <a
              href="#deneyim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#e8decb] hover:text-[#dfb76c] py-2 border-b border-white/5"
            >
              Akşam Yemeği Atmosferi
            </a>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#e8decb] hover:text-[#dfb76c] py-2 border-b border-white/5"
            >
              İletişim & Lokasyon
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#rezervasyon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-3 bg-gradient-to-r from-[#6b1227] to-[#4a0c1a] border border-[#d4af37] text-[#fbf0c0] font-semibold text-xs tracking-widest uppercase rounded-sm shadow-lg"
              >
                Masa Rezervasyonu (19:00 - 23:00)
              </a>
              <a
                href="tel:+902122491998"
                className="text-center py-2 text-xs tracking-wider text-[#d4af37] border border-[#d4af37]/30 rounded-sm"
              >
                📞 +90 (212) 249 1998
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
