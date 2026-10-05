# GastroPub — Klasik ve Köklü Miras (Heritage Luxury)

Fine dining, Michelin rehberi standartlarında ağırbaşlı bir atmosfere sahip, 1998'den bu yana hizmet veren lüks restoran "GastroPub" için geliştirilmiş Full-Stack web projesi.

---

## 🏛️ 1. Konsept ve Tasarım Kimliği (Heritage Luxury)

- **Atmosfer**: Ağırbaşlı, kurumsal, loş ışıklı lüks bir akşam yemeği hissi.
- **Renk Paleti**:
  - **Koyu Meşe (Dark Oak)**: `#080605`, `#120e0b`, `#1c1612`, `#261e19`
  - **Şarap Bordosu (Burgundy / Deep Wine)**: `#340913`, `#4e0d1d`, `#6b1227`, `#871832`
  - **Altın / Pirinç (Gold / Brass)**: `#c5a059`, `#dfb76c`, `#f3d99b`, `#fdf0cd`
  - **Parchment / Krem**: `#f4ede0`, `#cfc2aa`
- **Tipografi**:
  - Başlıklar: **Playfair Display** & **Cinzel** (Zarif serif fontlar)
  - Gövde Metinleri: **Lato** (Okunaklı, sofistike sans-serif)

---

## 🚀 2. Teknoloji Yığını

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React
- **Tip Güvenliği**: TypeScript 5
- **Backend / API**: Next.js API Routes (`/api/menu`, `/api/reservations`)
- **Veritabanı**: MongoDB & Mongoose Entegrasyonu (Serverless Connection Pooling + Dayanıklı Bellek/Mock Fallback)
- **Vercel Uyumluluğu**: Sıfır konfigürasyon ile doğrudan Vercel'e dağıtılabilir mimari.

---

## 🌟 3. Sayfa ve Fonksiyon Özellikleri

### 👑 A. Logo ve İkonografi (Header, Title & Favicon)
- Özel tasarlanmış hanedanlık arması; şefin usta şapkası (*toque blanche*), altın defne yaprakları, iç içe geçen *GP* monogramı ve *"EST. 1998"* şeridinden oluşur.
- Hem masaüstü hem mobil Header (Navbar)'da, Hero merkez rozetinde, Footer'da ve `src/app/icon.svg` ile tarayıcı başlık çubuğu/sekmesinde (*favicon*) kusursuzca kullanılır.

### 📱 B. Sıfır Taşma & Kusursuz Mobil Responsive Düzen
- `overflow-x: hidden !important` ve `max-width: 100vw` korumasıyla tüm akıllı telefon ekranlarında (360px - 480px) yatay kaydırma tamamen ortadan kaldırılmıştır.
- Rezervasyon formları, menü sekmeleri ve şarap mahzeni vitrinleri mobilde otomatik olarak tek sütunlu ve parmak dostu dokunmatik bloklara dönüşür.

### 👨‍🍳 C. İnteraktif Açılış Ekranı (Pizza Chef Loading Screen)
- Sayfa ilk açıldığında minik usta şapkası (toque blanche) takan şef figürünün elinde odun ateşi pizzayı havaya atıp 360 derece çevirdiği özel SVG fizik animasyonu.
- Gastropub altın dolum ilerleme çubuğu ve akıcı bir şekilde Hero sekansına geçiş.

### 🍷 B. Dinamik Hero Bölümü (Açılış Sekansı & Sinematik Video)
- Tam ekran yüksek çözünürlüklü mutfak ve alev arka plan videosu.
- Siyah-beyaz vintage nostaljiden canlı sıcak altın ve meşe renklerine pürüzsüzce evrilen sürekli sinematik geçiş.
- *"1998'den Beri Gastronomi Sanatı"* ana sloganı, altın degrade başlık ve çift yönlü aksiyon butonları.
- Canlı akşam yemeği servis göstergesi (*"Michelin Selection • 19:00 - 23:00 Rezervasyonlar Açık"*).
- Özel tasarlanmış hanedanlık armasını andıran altın GP monogram logosu.
- Loş şömine ve caz ambiyansı ses simülasyon butonu.

### 📜 C. Mirasımız (1998 Heritage & Chef Manifesto)
- Galata'nın tarihi taş kemerleri altında başlayan 26 yıllık serüven.
- 45 gün kuru dinlendirilen etler ve asırlık meşe ateşi felsefesi.
- Baş Şef Alexandre Demir'in manifestosu ve gastronomi vizyonu.

### 🍽️ D. Alakart & Mahzen Menüsü (Anlık Filtreleme & Eşleşmeler)
- `/api/menu` rotası üzerinden veri çekimi.
- Frontend'de anlık çalışan durum (state) filtrelemesi:
  - **Tüm Seçki (Grand Carte)**
  - **Başlangıçlar (Hors d'œuvres)**: Trüflü Dana İlik & Brioche, Meşe Füme Ördek Göğsü, Taş Mahzen Burrata vb.
  - **Ana Yemekler (Heritage Cuts)**: Klasik Beef Wellington, 45 Gün Kuru Dinlendirilmiş Tomahawk, Kuzu İncik, Yabani Levrek & Havyar.
  - **Şarap Eşleşmeleri (Sommelier Cellar)**: Château Margaux 2015, Sassicaia 2018, Kayra Imperial Öküzgözü vb.
  - **Tatlılar & Digestif**: Sıcak Valrhona Guanaja %70 Sufle, Macallan 18 & İsli Meşe Trüf Seçkisi.
- Anlık arama çubuğu ve *"Şefin İmzaları"* filtre butonu.
- Sommelier tavsiye modalleri ve tadım notları.

### 🍾 E. Sommelier Mahzeni & Kütüphanesi
- 1890'lardan kalma taş tonoz kilerde korunan 3.400+ şişelik kiler.
- 14.2°C sıcaklık ve %72 nem kontrolü.
- İnteraktif rezerve şişe seçkisi ve özel tadım turu talep alanı.

### 📅 F. Çalışan Rezervasyon Sistemi (19:00 - 23:00)
- **Girdi Alanları**:
  - Ad Soyad, E-Posta, Telefon
  - Rezervasyon Tarihi
  - Saat Seçimi (Kesinlikle 19:00 - 23:00 arası 30 dk aralıklarla sınırlandırılmış)
  - Kişi Sayısı (1 ile 12 konuk arası)
  - Masa Konumu Tercihi (Klasik Ana Salon, Tarihi Taş Mahzen, Şömine Yanı, Şefin Masası)
  - Özel Notlar & Alerjen Bildirimi
- **Lüks Yükleniyor (Loading) Durumu**:
  - Dönen pirinç çarklar ve parıldayan kadeh animasyonu: *"Rezervasyonunuz İşleniyor... Şef ve Sommelier Masanızı Hazırlıyor..."*
- **Başarılı Durum (Success State)**:
  - *"Rezervasyonunuz Onaylandı"* ekranı.
  - Benzersiz rezervasyon referans kodu (Örn: `GP-98-XF8A`).
  - Misafir kartı, tek tıkla kod kopyalama, kılık-kıyafet kuralları (Smart Casual / Elegant) bilgilendirmesi.
- **API ve Veritabanı**:
  - `POST /api/reservations` rotası: Mongoose Schema doğrulaması yapar, MongoDB'ye kaydeder.
  - MongoDB bağlantısı olmasa bile sunucusuz bellek kütüphanesine kaydederek kesintisiz çalışır.

### 🕯️ G. Atmosfer, Vale & Adabımuaşeret
- Loş mum ışığı felsefesi, meşe dumanı, Riedel kristal kadehleri.
- Dress Code politikası, 7/24 özel vale ve concierge desteği, çalışma saatleri.

---

## 🛠️ 4. Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ (Node v22 önerilir)
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
   Uygulama `http://localhost:3000` adresinde çalışacaktır.

3. Üretim sürümünü derleyin:
   ```bash
   npm run build
   npm run start
   ```

### MongoDB Yapılandırması (İsteğe Bağlı)
Projeye gerçek bir MongoDB Atlas veritabanı bağlamak isterseniz, kök dizinde bir `.env.local` dosyası oluşturun:
```env
MONGODB_URI=mongodb+srv://<kullanici_adi>:<parola>@cluster0.mongodb.net/gastropub?retryWrites=true&w=majority
```
*(Not: `MONGODB_URI` girilmediğinde sistem otomatik olarak hazır mimari veri tabanı simülasyonuna geçer, demo veya testler asla aksamaz.)*

---

## 📁 5. Proje Dizin Yapısı

```
GastroPub/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── menu/route.ts          # Menü listeleme, arama ve filtreleme API'si
│   │   │   └── reservations/route.ts  # Rezervasyon doğrulama ve kayıt API'si
│   │   ├── favicon.ico
│   │   ├── globals.css                # Koyu meşe, bordo ve altın temalı CSS sistemi
│   │   ├── icon.svg                   # Vektörel lüks hanedan arması tarayıcı ikonu
│   │   ├── layout.tsx                 # Google Fonts (Playfair, Lato, Cinzel) ve SEO
│   │   └── page.tsx                   # Ana sayfa orkestrasyonu
│   ├── components/
│   │   ├── DiningAtmosphere.tsx       # Akşam yemeği loş ışık ve atmosfer bileşeni
│   │   ├── Footer.tsx                 # İletişim, saatler, bülten ve adres
│   │   ├── HeritageStory.tsx          # 1998 mirası, odun ateşi ve şef manifestosu
│   │   ├── Hero.tsx                   # Sinematik açılış, video geçişi ve slogan
│   │   ├── Logo.tsx                   # Vektörel GP hanedanlık arması
│   │   ├── MenuSection.tsx            # Alakart menü ve anlık filtreleme
│   │   ├── Navbar.tsx                 # Responsive lüks başlık menüsü
│   │   ├── PizzaChefLoadingScreen.tsx # Usta şapkası ve pizza çeviren animasyon
│   │   ├── ReservationSection.tsx     # Çalışan rezervasyon sistemi ve onay kartı
│   │   └── WineCellarShowcase.tsx     # 3.400+ şişelik tarihi mahzen vitrini
│   ├── data/
│   │   └── mockMenu.ts                # Michelin seviyesi alakart ve mahzen verileri
│   ├── lib/
│   │   └── mongodb.ts                 # Mongoose bağlantı ve bağlantı havuzu yönetimi
│   └── models/
│       ├── MenuItem.ts                # Menü öğesi Mongoose şeması
│       └── Reservation.ts             # Rezervasyon Mongoose şeması ve validasyonu
├── .env.example
├── package.json
├── README.md
└── RAPOR.txt
```
