import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Culinary Festivals",
  description: "Food For Thought Fest and South Asian gastronomy. Haute Services and SAAG create authoritative platforms for heritage cuisines and industry discourse. NDTV, Associated Press coverage.",
  keywords: ["Food For Thought Fest", "SAAG", "Culinary festivals India", "South Asian gastronomy", "Haute Services", "Maneesh Baheti", "Gastronomy events Delhi"],
  openGraph: {
    title: "Culinary Festivals | Haute Services",
    description: "Food For Thought Fest – the defining platform for South Asian gastronomy. Founded by SAAG.",
    url: "https://hauteservices.in/lifestyle/culinary-festivals",
  },
  alternates: { canonical: "https://hauteservices.in/lifestyle/culinary-festivals" },
};

export default function CulinaryFestivalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
