"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Award, Wine, Volume2, VolumeX, Flame, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const [ambientSound, setAmbientSound] = useState(false);
  const [openingSequenceReady, setOpeningSequenceReady] = useState(false);

  // Trigger opening sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpeningSequenceReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#090706]">
      {/* Background Video with Smooth Automatic B&W to Color Cycle */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 hero-video-animated transition-all duration-1000"
          poster="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-41584-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-slicing-a-piece-of-meat-41583-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Oak & Wine Burgundy Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-[#090706]/75 to-[#090706]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090706]/90 via-transparent to-[#090706]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#2a0610]/35 to-[#090706]/85" />

        {/* Floating Embers / Fire Sparkles Micro-Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 rounded-full bg-[#dfb76c] animate-ping opacity-75" />
          <div className="absolute bottom-24 right-1/3 w-2 h-2 rounded-full bg-[#ff7b54] animate-pulse opacity-60" />
          <div className="absolute bottom-32 left-1/2 w-1 h-1 rounded-full bg-[#fdf0cd] animate-ping opacity-80" />
          <div className="absolute bottom-16 right-1/4 w-1.5 h-1.5 rounded-full bg-[#e2a33f] animate-pulse opacity-70" />
        </div>

        {/* Opening Light Beam Curtain Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#060403] via-transparent to-[#060403] transition-opacity duration-1000 ${
            openingSequenceReady ? "opacity-30" : "opacity-95"
          }`}
        />

        {/* Brass corner framing */}
        <div className="pointer-events-none absolute top-20 sm:top-24 left-4 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 border-t border-l border-[#d4af37]/30" />
        <div className="pointer-events-none absolute top-20 sm:top-24 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 border-t border-r border-[#d4af37]/30" />
        <div className="pointer-events-none absolute bottom-6 sm:bottom-8 left-4 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 border-b border-l border-[#d4af37]/30" />
        <div className="pointer-events-none absolute bottom-6 sm:bottom-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 border-b border-r border-[#d4af37]/30" />
      </div>

      {/* Hero Content Layer */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center transition-all duration-1000 transform ${
          openingSequenceReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Heraldic Brand Crest Logo Icon */}
        <div className="mb-4">
          <Logo size="lg" showText={false} />
        </div>

        {/* Live Service Indicator Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#16100c]/85 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(212,175,55,0.18)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#f5eedf]">
            Michelin Selection • 19:00 - 23:00 Rezervasyonlar Açık
          </span>
          <Award className="w-3.5 h-3.5 text-[#dfb76c]" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#fbf8f2] leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-6 drop-shadow-2xl">
          <span className="block font-normal italic text-lg xs:text-xl sm:text-3xl md:text-4xl text-[#dfb76c] mb-1 sm:mb-2 tracking-normal">
            GastroPub
          </span>
          <span className="text-gold-gradient block">
            1998&apos;den Beri Gastronomi Sanatı
          </span>
        </h1>

        {/* Brass divider */}
        <div className="w-32 sm:w-60 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-5 sm:mb-6 opacity-80" />

        {/* Subtitle / Atmosphere description */}
        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#ded3be] font-light leading-relaxed mb-6 sm:mb-10 px-2 tracking-wide">
          Koyu meşe masalar, asırlık taş mahzende korunan vintage şaraplar ve
          özel reçetelerle meşe odunu ateşinde mühürlenen unutulmaz bir akşam yemeği ritüeli.
        </p>

        {/* Call to Actions (Fully Responsive) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto px-2 sm:px-4">
          <a
            href="#rezervasyon"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 rounded-sm bg-gradient-to-r from-[#6b1227] via-[#871832] to-[#500c1c] text-[#fdf0cd] font-semibold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase border border-[#d4af37]/80 shadow-[0_10px_30px_rgba(102,16,36,0.6)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:border-[#f3d99b] transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <span>Masa Rezervasyonu</span>
            <span className="text-sm">✦</span>
          </a>

          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-9 py-3 sm:py-4 rounded-sm bg-[#16100c]/85 hover:bg-[#241a13] text-[#f4ede0] font-medium text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.18em] uppercase border border-[#d4af37]/35 hover:border-[#d4af37] transition-all backdrop-blur-sm cursor-pointer"
          >
            <Wine className="w-4 h-4 text-[#d4af37]" />
            <span>Alakart Menü & Mahzen</span>
          </a>
        </div>

        {/* Ambient Mood & Sound Atmosphere Pill */}
        <div className="mt-8 sm:mt-10 flex items-center gap-3">
          <button
            onClick={() => setAmbientSound(!ambientSound)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120e0b]/80 border border-[#d4af37]/25 text-[11px] text-[#cfc2aa] hover:border-[#d4af37] hover:text-[#f4ede0] transition-colors cursor-pointer"
          >
            {ambientSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Şömine & Caz Ambiyansı (Açık)</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#a99c85]" />
                <span>Akşam Ambiyansı Sesi</span>
              </>
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-1 text-[#d4af37]/75 hover:text-[#d4af37] transition-colors cursor-pointer">
          <a href="#mirasimiz" className="flex flex-col items-center gap-1 group">
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase group-hover:text-[#f4ede0]">
              Mirasımızı Keşfedin
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
}
