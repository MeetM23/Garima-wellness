import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
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
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-poppins antialiased selection:bg-primary selection:text-ivory">
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
