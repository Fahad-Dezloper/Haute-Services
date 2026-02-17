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
  title: {
    default: "Haute Services | Boutique Consultancy for Lifestyle, Art Advisory & Gastronomy",
    template: "%s | Haute Services",
  },
  description: "Haute Services is a premier boutique consultancy since 2009, with over three decades of experience in hospitality consulting, lifestyle events, and art advisory. Founders of S.A.A.G and Food For Thought Fest. Based in New Delhi.",
  keywords: ["Haute Services", "Art Advisory India", "Lifestyle Events Delhi", "Gastronomy Consultancy", "Food For Thought Fest", "SAAG", "Maneesh Baheti", "Sonali Anand", "Luxury Hospitality Consultancy", "Art Curation Delhi", "Culinary Festivals", "Boutique Consultancy New Delhi"],
  authors: [{ name: "Maneesh Baheti", url: "https://hauteservices.in/about" }, { name: "Sonali Anand", url: "https://hauteservices.in/about" }],
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
    title: "Haute Services | Boutique Consultancy for Lifestyle, Art Advisory & Gastronomy",
    description: "Premier boutique consultancy since 2009. Hospitality consulting, lifestyle events, and art advisory. Founders of Food For Thought Fest. New Delhi.",
    url: "https://hauteservices.in",
    siteName: "Haute Services",
    images: [
      {
        url: "https://hauteservices.in/og/image.png",
        width: 1200,
        height: 630,
        alt: "Haute Services – Boutique Consultancy for Lifestyle, Art Advisory and Gastronomy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Services | Boutique Consultancy for Lifestyle, Art Advisory & Gastronomy",
    description: "Premier boutique consultancy since 2009. Hospitality, lifestyle events, art advisory. Founders of Food For Thought Fest.",
    images: ["https://hauteservices.in/og/image.png"],
  },
  alternates: {
    canonical: "https://hauteservices.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Haute Services",
  url: "https://hauteservices.in",
  logo: "https://hauteservices.in/logo/MainLogo.jpeg",
  description: "Boutique consultancy specializing in hospitality consulting, lifestyle events, and art advisory. Founders of S.A.A.G and Food For Thought Fest.",
  foundingDate: "2009",
  founders: [
    { "@type": "Person", name: "Maneesh Baheti" },
    { "@type": "Person", name: "Sonali Anand" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
