import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haute Services | Boutique Consultancy for Lifestyle & Art Advisory",
  description: "Haute Services is a premier boutique consultancy specializing in international gastronomy, turnkey art advisory, and bespoke brand strategy since 2014. Based in New Delhi, we bridge the gap between cultural heritage and modern excellence.",
  keywords: ["Haute Services", "Art Advisory", "Lifestyle Events", "Gastronomy Consultancy", "Food For Thought Fest", "SAAG", "Maneesh Baheti", "Sonali Anand", "Luxury Brand Strategy", "Art Curation Delhi"],
  authors: [{ name: "Maneesh Baheti" }, { name: "Sonali Anand" }],
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Haute Services | Lifestyle & Art Advisory",
    description: "Boutique consultancy specializing in international gastronomy, turnkey art advisory, and bespoke brand strategy.",
    url: "https://hauteservices.in",
    siteName: "Haute Services",
    images: [
      {
        url: "/og/image.png",
        width: 1200,
        height: 630,
        alt: "Haute Services Logo and Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Services | Lifestyle & Art Advisory",
    description: "Boutique consultancy specializing in international gastronomy, turnkey art advisory, and bespoke brand strategy.",
    images: ["/og/image.png"],
  },
  alternates: {
    canonical: "https://hauteservices.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} md:mx-8 antialiased`}
      >
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
