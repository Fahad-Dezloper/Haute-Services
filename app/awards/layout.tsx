import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Haute Services awards and recognition: Delhiites Food & Nightlife Awards, Hospitality Hope Ambassador, Peaklife Gourmet Gastronomy Event of the Year.",
  keywords: ["Haute Services awards", "Hospitality Hope", "Peaklife Gourmet", "Gastronomy award", "Delhiites awards", "Maneesh Baheti recognition"],
  openGraph: {
    title: "Awards & Recognition | Haute Services",
    description: "Celebrating excellence in hospitality, luxury, and lifestyle.",
    url: "https://hauteservices.in/awards",
    images: ["/og/image.png"],
  },
  alternates: { canonical: "https://hauteservices.in/awards" },
};

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
