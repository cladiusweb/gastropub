"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Utensils, Wine, Sparkles, Search, SlidersHorizontal, Info, Check, X, ShieldAlert } from "lucide-react";
import { MOCK_MENU_ITEMS, MockMenuItem } from "@/data/mockMenu";

type CategoryKey = "all" | "starter" | "main" | "wine_pairing" | "dessert";

interface CategoryTab {
  id: CategoryKey;
  label: string;
  sublabel: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: "all", label: "Tüm Seçki", sublabel: "Grand Carte" },
  { id: "starter", label: "Başlangıçlar", sublabel: "Hors d'œuvres" },
  { id: "main", label: "Ana Yemekler", sublabel: "Heritage Cuts" },
  { id: "wine_pairing", label: "Şarap Eşleşmeleri", sublabel: "Sommelier Cellar" },
  { id: "dessert", label: "Tatlılar & Digestif", sublabel: "Finishing Notes" },
];

export default function MenuSection() {
  const [items, setItems] = useState<MockMenuItem[]>(MOCK_MENU_ITEMS);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [signaturesOnly, setSignaturesOnly] = useState(false);
  const [selectedPairingItem, setSelectedPairingItem] = useState<MockMenuItem | null>(null);

  // Fetch from /api/menu on mount (supports MongoDB or mock fallback)
  useEffect(() => {
    async function loadMenu() {
      try {
        setLoading(true);
        const res = await fetch("/api/menu");
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setItems(json.data);
          }
        }
      } catch (err) {
        console.warn("Could not load /api/menu, using static mock data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  // Instant State-Based Filtering (Category, Search query, Signature only)
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Signature filter
      if (signaturesOnly && !item.signature) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesTr = item.turkishName?.toLowerCase().includes(query) || false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesPairing = item.pairing?.toLowerCase().includes(query) || false;
        const matchesSub = item.subcategory?.toLowerCase().includes(query) || false;

        if (!matchesName && !matchesTr && !matchesDesc && !matchesPairing && !matchesSub) {
          return false;
        }
      }
      return true;
    });
  }, [items, activeCategory, searchTerm, signaturesOnly]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price) + " ₺";
  };

  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-[#090706] text-[#f4ede0] border-b border-[#d4af37]/20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4a0c1a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>ALAKART & MAHZEN MENÜSÜ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f2] tracking-tight mb-4">
            Miras Tarifler ve Kusursuz <br />
            <span className="text-gold-gradient font-normal italic">Şarap Eşleşmeleri</span>
          </h2>
          <div className="brass-line w-48 mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#cfc2aa] font-light leading-relaxed">
            Her tabak, mutfak şefimizin çeyrek asırlık tecrübesiyle şekillenir; baş sommelier&apos;mizin
            özenle seçtiği vintage kadehlerle tamamlanır.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-12 flex flex-col gap-6">
          {/* Category Tabs (Scrollable on small mobile, centered on larger screens) */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 p-1.5 rounded-sm bg-[#120e0b]/90 border border-[#d4af37]/25 backdrop-blur-md overflow-x-auto max-w-full">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-sm transition-all duration-300 text-xs sm:text-sm font-medium tracking-wider uppercase flex flex-col items-center shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#6b1227] to-[#871832] text-[#fbf0c0] border border-[#d4af37] shadow-[0_4px_15px_rgba(107,18,39,0.5)]"
                      : "text-[#cfc1a8] hover:text-[#f4ede0] hover:bg-[#1a1410] border border-transparent"
                  }`}
                >
                  <span className="font-semibold whitespace-nowrap">{tab.label}</span>
                  <span className="text-[9px] sm:text-[10px] opacity-75 font-normal tracking-widest whitespace-nowrap">{tab.sublabel}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Signature Toggle Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-sm bg-[#14100c]/80 border border-[#d4af37]/20">
            {/* Live Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Lezzet veya şarap arayın (Trüf, Wellington, Barolo...)"
                className="w-full bg-[#0b0806] border border-[#d4af37]/30 rounded-sm pl-10 pr-8 py-2 text-xs sm:text-sm text-[#f5eedf] placeholder-[#a69882] focus:outline-none focus:border-[#d4af37] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a69882] hover:text-[#f5eedf]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter: Signature Only & Counter */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <button
                onClick={() => setSignaturesOnly(!signaturesOnly)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wider transition-all border ${
                  signaturesOnly
                    ? "bg-[#d4af37] text-[#0b0806] border-[#f3d99b]"
                    : "bg-[#1c1611] text-[#cfc1a8] border-[#d4af37]/30 hover:border-[#d4af37]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Şefin İmzaları</span>
                {signaturesOnly && <Check className="w-3.5 h-3.5" />}
              </button>

              <span className="text-xs text-[#a99c85] tracking-widest font-mono">
                {filteredItems.length} SEÇENEK
              </span>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-sm bg-[#120e0b]/50 border border-white/5">
            <ShieldAlert className="w-10 h-10 text-[#d4af37] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl text-[#f4ede0] mb-1">Eşleşen Lezzet Bulunamadı</h3>
            <p className="text-sm text-[#a69882]">
              Lütfen arama teriminizi değiştirin veya tüm kategorileri görüntüleyin.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
                setSignaturesOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-[#251b14] border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#dfb76c] hover:bg-[#34261c]"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="group relative rounded-sm bg-gradient-to-b from-[#16110d] via-[#120e0b] to-[#0c0a08] border border-[#d4af37]/25 hover:border-[#d4af37] transition-all duration-300 p-5 sm:p-6 shadow-xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.9)] flex flex-col justify-between"
              >
                {/* Top content */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fbf8f2] tracking-wide group-hover:text-[#dfb76c] transition-colors">
                          {item.turkishName || item.name}
                        </h3>
                        {item.signature && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#520d1c] border border-[#d4af37] text-[10px] font-bold tracking-wider text-[#fdf0cd] uppercase">
                            <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                            İmza Lezzet
                          </span>
                        )}
                        {item.vintage && (
                          <span className="px-2 py-0.5 rounded-xs bg-[#1f1712] border border-[#d4af37]/40 text-[10px] font-mono text-[#dfb76c]">
                            Vintage {item.vintage}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#a99b84] italic font-serif">
                        {item.name}
                      </span>
                    </div>

                    <div className="text-right whitespace-nowrap">
                      <span className="font-serif text-lg sm:text-xl font-bold text-gold-gradient tracking-tight">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Brass dotted divider */}
                  <div className="border-b border-dashed border-[#d4af37]/20 my-3" />

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#cfc2ab] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom metadata & pairing recommendation */}
                <div className="pt-2 border-t border-[#d4af37]/15 flex flex-col gap-2">
                  {item.pairing && (
                    <div
                      onClick={() => setSelectedPairingItem(item)}
                      className="inline-flex items-center justify-between text-xs text-[#dfb76c] bg-[#1a120c] hover:bg-[#251a12] border border-[#d4af37]/30 px-3 py-1.5 rounded-sm cursor-pointer transition-colors"
                      title="Eşleşme detaylarını görüntüle"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Wine className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span className="font-medium truncate">
                          <strong className="text-[#f4ede0] font-normal">Sommelier Tavsiyesi:</strong> {item.pairing}
                        </span>
                      </div>
                      <Info className="w-3 h-3 text-[#d4af37] shrink-0 ml-2" />
                    </div>
                  )}

                  {/* Dietary & Origin Tags */}
                  <div className="flex items-center justify-between text-[11px] text-[#9b8d78] mt-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.dietary?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-xs bg-[#100d0a] border border-white/5 text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.subcategory && (
                        <span className="px-2 py-0.5 text-[10px] text-[#dfb76c]">
                          {item.subcategory}
                        </span>
                      )}
                    </div>
                    {item.origin && (
                      <span className="italic text-[10px] text-[#bfaf96]">{item.origin}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pairing Modal Drawer for deep-dive */}
        {selectedPairingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg bg-gradient-to-b from-[#18120e] to-[#0d0a08] border border-[#d4af37] p-6 sm:p-8 rounded-sm shadow-2xl">
              <button
                onClick={() => setSelectedPairingItem(null)}
                className="absolute top-4 right-4 text-[#a69882] hover:text-[#f4ede0]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
                <Wine className="w-4 h-4" />
                <span>BAŞ SOMMELIER EŞLEŞME NOTLARI</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#fbf8f2] mb-1">
                {selectedPairingItem.turkishName || selectedPairingItem.name}
              </h3>
              <p className="text-xs text-[#a99b84] italic mb-4">
                Tavsiye Edilen Kadeh / Şişe Rezervi
              </p>

              <div className="p-4 rounded-sm bg-[#221711] border border-[#d4af37]/40 mb-4">
                <div className="text-sm font-semibold text-[#f5eedf] mb-1">
                  🍷 {selectedPairingItem.pairing}
                </div>
                <p className="text-xs text-[#cfc2aa] leading-relaxed">
                  Tabağın yağ oranı, meşe dumanı ve trüf bileşenleri ile şarabın asiditesi ve meşe fıçı
                  olgunluğu dengelenerek damağı her lokmada sıfırlar ve aromayı zirveye taşır.
                </p>
              </div>

              <div className="text-xs text-[#a99c85] leading-relaxed mb-6 font-light">
                Mahzenimizdeki tüm şaraplar, ideal servis derecesi olan 16-18°C aralığında, özel kristal
                Riedel kadehlerle masanıza sunulur.
              </div>

              <button
                onClick={() => setSelectedPairingItem(null)}
                className="w-full py-2.5 bg-gradient-to-r from-[#6b1227] to-[#871832] border border-[#d4af37] text-xs font-semibold tracking-widest uppercase text-[#fdf0cd]"
              >
                Menüye Dön
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
