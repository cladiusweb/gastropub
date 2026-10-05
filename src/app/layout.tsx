import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090706",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gastropub.restaurant"),
  title: "GastroPub | Restaurant • 1998'den Beri Gastronomi Sanatı",
  description:
    "Tarihi taş mahzen, meşe odunu ateşi, Michelin kalibresinde lezzetler ve nadir vintage şarap koleksiyonuyla 1998'den bu yana lüks gastronomi deneyimi.",
  keywords: [
    "GastroPub",
    "GastroPub Restaurant",
    "Heritage Luxury",
    "Michelin Restoran",
    "Beef Wellington",
    "Mahzen Şarapları",
    "Lüks Akşam Yemeği",
    "Fine Dining",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "GastroPub | Restaurant • 1998'den Beri Gastronomi Sanatı",
    description: "Klasik ve köklü miras: Koyu meşe, şarap bordosu ve altın parıltılı lüks gastronomi mabedi.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "GastroPub | Restaurant Heritage Crest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${lato.variable} ${cinzel.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-screen bg-[#090706] text-[#f4ede0] font-sans selection:bg-[#550d1e] selection:text-[#f3d99b] antialiased overflow-x-hidden w-full relative">
        {children}
      </body>
    </html>
  );
}
