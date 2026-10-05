"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  User,
  Phone,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Wine,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

interface ReservationSuccessData {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  seatingPreference?: string;
  confirmationCode: string;
}

const AVAILABLE_TIMES = [
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

const SEATING_OPTIONS = [
  { id: "main_hall", label: "Klasik Ana Salon", desc: "Koyu meşe masalar, loş atmosfer" },
  { id: "wine_cellar", label: "Tarihi Taş Mahzen", desc: "1998 vintage kiler ortamı" },
  { id: "fireplace", label: "Şömine Yanı", desc: "Meşe ateşi sıcaklığı & romantizm" },
  { id: "chef_table", label: "Şefin Masası", desc: "Açık mutfak seyri & özel sunum" },
];

export default function ReservationSection() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("20:00");
  const [guests, setGuests] = useState(2);
  const [seatingPreference, setSeatingPreference] = useState("main_hall");
  const [specialRequests, setSpecialRequests] = useState("");

  // UI Flow States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<ReservationSuccessData | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const payload = {
        fullName,
        email,
        phone,
        date,
        time,
        guests: Number(guests),
        seatingPreference,
        specialRequests,
      };

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Rezervasyon oluşturulamadı. Lütfen alanları kontrol ediniz.");
      }

      // Elegant loading duration for realistic fine dining experience
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccessData(result.data);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Bir bağlantı hatası oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setErrorMsg(null);
    setSpecialRequests("");
    setFullName("");
    setEmail("");
    setPhone("");
    setCopiedCode(false);
  };

  const copyConfirmationCode = () => {
    if (successData?.confirmationCode) {
      navigator.clipboard.writeText(successData.confirmationCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <section
      id="rezervasyon"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#090706] via-[#100c0a] to-[#070504] border-t border-b border-[#d4af37]/25 text-[#f4ede0] overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-at-c from-[#661024]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AKŞAM YEMEĞİ PROTOKOLÜ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f2] tracking-tight mb-3 sm:mb-4">
            Masanızı Ayırtın
          </h2>
          <div className="brass-line w-36 sm:w-48 mx-auto my-4 sm:my-5" />
          <p className="text-xs sm:text-base text-[#cfc2aa] font-light leading-relaxed px-2">
            Hizmet saatlerimiz 19:00 - 23:00 arasındadır. Mahzenimiz ve şef masası için sınırlı sayıda
            özel masa ayrılmaktadır.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-sm bg-gradient-to-b from-[#18120e] via-[#120d0a] to-[#0d0a08] border border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-5 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Brass Corner Accents */}
          <div className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t border-l border-[#d4af37]" />
          <div className="pointer-events-none absolute top-3 right-3 w-4 h-4 border-t border-r border-[#d4af37]" />
          <div className="pointer-events-none absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#d4af37]" />
          <div className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#d4af37]" />

          {/* STATE 1: LOADING ANIMATION */}
          {isSubmitting && (
            <div className="py-20 sm:py-24 flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/20 border-t-[#d4af37] animate-spin" />
                <div
                  className="absolute inset-2 rounded-full border-2 border-[#661024]/40 border-b-[#871832] animate-spin"
                  style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wine className="w-8 h-8 text-[#dfb76c] animate-pulse" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#fbf8f2] mb-2">
                Rezervasyonunuz İşleniyor
              </h3>
              <p className="text-sm text-[#cfc2aa] max-w-md font-light leading-relaxed px-4">
                Talebiniz salon şefimize ve baş sommelier&apos;mize iletiliyor. Masanız ayrılıyor...
              </p>
              <div className="mt-4 text-xs font-serif tracking-[0.25em] text-[#d4af37] uppercase">
                GastroPub Mahzen & Salon Protokolü
              </div>
            </div>
          )}

          {/* STATE 2: SUCCESS STATE */}
          {!isSubmitting && successData && (
            <div className="py-6 sm:py-8 flex flex-col items-center text-center animate-fade-in">
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-[#1b2713] border border-[#7bb661] text-[#a4e585] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(123,182,97,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2">
                GASTROPUB • HERITAGE ONAYI
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#fbf8f2] mb-2">
                Rezervasyonunuz Onaylandı
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc2aa] max-w-lg mb-8 font-light px-2">
                Sayın <strong className="text-[#f5eedf] font-semibold">{successData.fullName}</strong>,
                sizi ve değerli konuklarınızı ağırlamaktan onur duyacağız.
              </p>

              {/* Confirmation Details Card */}
              <div className="w-full max-w-xl rounded-sm bg-[#16100c] border border-[#d4af37]/60 p-5 sm:p-8 text-left mb-8 shadow-2xl relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#d4af37]/30">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#a69882] block">
                      Rezervasyon Referans Kodu
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-gold-gradient tracking-widest">
                      {successData.confirmationCode}
                    </span>
                  </div>

                  <button
                    onClick={copyConfirmationCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#241a13] border border-[#d4af37]/40 text-xs text-[#dfb76c] hover:bg-[#322319] transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Kopyalandı</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kodu Kopyala</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 py-5 border-b border-[#d4af37]/20 text-xs">
                  <div>
                    <span className="text-[#a69882] uppercase tracking-wider block mb-0.5">Tarih</span>
                    <span className="text-[#f5eedf] font-medium text-sm">{successData.date}</span>
                  </div>
                  <div>
                    <span className="text-[#a69882] uppercase tracking-wider block mb-0.5">Saat</span>
                    <span className="text-[#f5eedf] font-medium text-sm">{successData.time}</span>
                  </div>
                  <div>
                    <span className="text-[#a69882] uppercase tracking-wider block mb-0.5">Kişi Sayısı</span>
                    <span className="text-[#f5eedf] font-medium text-sm">{successData.guests} Konuk</span>
                  </div>
                  <div>
                    <span className="text-[#a69882] uppercase tracking-wider block mb-0.5">Masa Konumu</span>
                    <span className="text-[#dfb76c] font-medium text-sm">
                      {SEATING_OPTIONS.find((s) => s.id === successData.seatingPreference)?.label || "Ana Salon"}
                    </span>
                  </div>
                </div>

                {successData.specialRequests && (
                  <div className="pt-4 text-xs">
                    <span className="text-[#a69882] uppercase tracking-wider block mb-1">
                      Özel Notlar:
                    </span>
                    <p className="text-[#dcd2be] italic bg-[#0c0907] p-2.5 rounded-xs border border-white/5">
                      &ldquo;{successData.specialRequests}&rdquo;
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-[#d4af37]/20 flex items-start gap-2.5 text-[11px] text-[#bcae98]">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    Dress code: <strong>Smart Casual / Elegant</strong>. Rezervasyon saatinizden sonra
                    masanız 15 dakika boyunca bekletilmektedir.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1d1510] hover:bg-[#2a1d16] border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#dfb76c] rounded-sm transition-colors cursor-pointer"
                >
                  Yeni Bir Masa Ayırt
                </button>
                <a
                  href="#menu"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#6b1227] to-[#871832] border border-[#d4af37] text-xs uppercase tracking-widest text-[#fbf0c0] font-semibold rounded-sm transition-all text-center cursor-pointer"
                >
                  Menü ve Mahzeni İncele
                </a>
              </div>
            </div>
          )}

          {/* STATE 3: FORM */}
          {!isSubmitting && !successData && (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 animate-fade-in">
              {errorMsg && (
                <div className="p-3.5 sm:p-4 rounded-sm bg-[#3a0a14] border border-[#e53e3e] flex items-center gap-3 text-xs sm:text-sm text-[#ffcdd2]">
                  <AlertCircle className="w-5 h-5 shrink-0 text-[#ff8a80]" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Örn: Alexandre Demir"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] placeholder-[#7d715e] focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    E-Posta *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="onay@gastropub.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] placeholder-[#7d715e] focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    Telefon Numarası *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+90 532 000 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] placeholder-[#7d715e] focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time Slot (19:00 - 23:00) & Party Size */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4 border-t border-[#d4af37]/15">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    Rezervasyon Tarihi *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    Kişi Sayısı *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] focus:outline-none focus:border-[#d4af37] transition-all appearance-none cursor-pointer"
                    >
                      <option value={1}>1 Konuk (Tek Kişi)</option>
                      <option value={2}>2 Konuk (Çift Masası)</option>
                      <option value={3}>3 Konuk</option>
                      <option value={4}>4 Konuk (Standart Masa)</option>
                      <option value={5}>5 Konuk</option>
                      <option value={6}>6 Konuk (Büyük Masa)</option>
                      <option value={8}>8 Konuk (Özel Aile / Grup)</option>
                      <option value={10}>10-12 Konuk (Özel Salon)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                    Saat Seçimi (19:00 - 23:00) *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#a69882] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#f5eedf] focus:outline-none focus:border-[#d4af37] transition-all appearance-none cursor-pointer"
                    >
                      {AVAILABLE_TIMES.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot} - Akşam Yemeği
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Preference Selector */}
              <div className="pt-2 sm:pt-4 border-t border-[#d4af37]/15">
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-3 font-semibold">
                  Masa & Atmosfer Tercihi
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  {SEATING_OPTIONS.map((seat) => {
                    const isSelected = seatingPreference === seat.id;
                    return (
                      <button
                        type="button"
                        key={seat.id}
                        onClick={() => setSeatingPreference(seat.id)}
                        className={`p-3 rounded-sm text-left transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-[#251318] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                            : "bg-[#0f0b08] border-[#d4af37]/20 hover:border-[#d4af37]/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-semibold ${isSelected ? "text-[#f5eedf]" : "text-[#d0c4af]"}`}>
                            {seat.label}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                        </div>
                        <span className="text-[10px] text-[#9b8d78] block">{seat.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests / Allergies / Notes */}
              <div className="pt-2 sm:pt-4 border-t border-[#d4af37]/15">
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">
                  Özel İstekler, Alerjiler veya Kutlama Notu (İsteğe Bağlı)
                </label>
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Glüten hassasiyeti, kabuklu deniz ürünü alerjisi, evlilik yıl dönümü kutlaması veya şömineye yakın masa ricası..."
                  className="w-full bg-[#0d0907] border border-[#d4af37]/30 rounded-sm p-3 text-xs sm:text-sm text-[#f5eedf] placeholder-[#7d715e] focus:outline-none focus:border-[#d4af37] transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 sm:pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#a99c85]">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Rezervasyonunuz doğrudan baş sommelier ve salon şefimize iletilir.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm bg-gradient-to-r from-[#6b1227] via-[#851630] to-[#500c1c] text-[#fbf0c0] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#d4af37] shadow-[0_8px_25px_rgba(107,18,39,0.6)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Rezervasyonu Tamamla & Onayla ✦
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
