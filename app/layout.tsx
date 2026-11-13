import type { Metadata } from "next";
import { Inter, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gujarati",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garimawellness.com"),
  title: "GARIMA Wellness Center | Coach Aruna Modashia",
  description:
    "Garima Wellness Center by Certified Wellness Coach Aruna Modashia in Una, Gir Somnath. Personalized lifestyle transformation, visceral fat reduction, and sustainable nutrition habits.",
  keywords: [
    "Garima Wellness Center",
    "Aruna Modashia",
    "Wellness Coach Una",
    "Weight Loss Una Gir Somnath",
    "Lifestyle Transformation Gujarat",
    "Nutrition Coach Gujarat",
    "Online Health Coaching",
    "ગરિમા વેલનેસ સેન્ટર",
    "અરૂણા મોડાશીયા"
  ],
  authors: [{ name: "Coach Aruna Modashia" }],
  openGraph: {
    title: "GARIMA Wellness Center | Sustainable Health, Measurable Transformations",
    description:
      "Small lifestyle changes. Meaningful transformations. Guided by Certified Wellness Coach Aruna Modashia.",
    url: "https://garimawellness.com",
    siteName: "Garima Wellness Center",
    images: [
      {
        url: "/images/transformations/transformation-1-fatloss-9kg-clean.jpg",
        width: 1200,
        height: 630,
        alt: "Garima Wellness Center Verified Client Transformations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${notoSansGujarati.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased selection:bg-primary selection:text-ivory">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
