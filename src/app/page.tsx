"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeritageStory from "@/components/HeritageStory";
import MenuSection from "@/components/MenuSection";
import WineCellarShowcase from "@/components/WineCellarShowcase";
import DiningAtmosphere from "@/components/DiningAtmosphere";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import PizzaChefLoadingScreen from "@/components/PizzaChefLoadingScreen";

export default function Home() {
  const [showReplayLoading, setShowReplayLoading] = useState(false);

  return (
    <main className="min-h-screen bg-[#090706] text-[#f4ede0] relative selection:bg-[#520d1c] selection:text-[#fbf0c0] overflow-x-hidden w-full max-w-full">
      {/* Initial Page Loading Screen: Master Chef Hat & Spinning Pizza Animation */}
      <PizzaChefLoadingScreen />

      {/* Optional Replay Trigger for Testing the Pizza Chef Animation */}
      {showReplayLoading && (
        <PizzaChefLoadingScreen forceShow={true} onComplete={() => setShowReplayLoading(false)} />
      )}

      {/* Luxury Heritage Navigation */}
      <Navbar />

      {/* Dynamic Entrance Hero with Opening Sequence & Continuous Cinematic B&W to Color Transition */}
      <Hero />

      {/* 1998 Heritage & Chef Manifesto */}
      <HeritageStory />

      {/* Alakart Menü & Sommelier Eşleşmeleri with Instant State Filtering */}
      <MenuSection />

      {/* 3,400+ Şişelik Tarihi Taş Mahzen Gösterimi */}
      <WineCellarShowcase />

      {/* Çalışan Rezervasyon Sistemi (19:00 - 23:00, Loading & Success State) */}
      <ReservationSection />

      {/* Loş Işık & Lüks Akşam Yemeği Atmosferi, Dress Code & Vale */}
      <DiningAtmosphere />

      {/* Footer, Konum, Saatler & Sommelier Bülteni */}
      <Footer />
    </main>
  );
}
