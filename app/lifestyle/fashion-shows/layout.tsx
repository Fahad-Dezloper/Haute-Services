import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion & Lifestyle",
  description: "Haute Services fashion shows and lifestyle productions: Audi E-Tron launch, Dreamers Are Achievers, Maison de Bose Fashion Week, DFW Grand Finale showstopper, Power Creator Travel Awards.",
  keywords: ["Fashion shows Delhi", "Luxury brand launch", "Maison de Bose", "Designer Fashion Week", "Haute Services", "Fashion production"],
  openGraph: {
    title: "Fashion & Lifestyle | Haute Services",
    description: "High-impact fashion showcases, runway productions, and luxury brand launches.",
    url: "https://hauteservices.in/lifestyle/fashion-shows",
  },
  alternates: { canonical: "https://hauteservices.in/lifestyle/fashion-shows" },
};

export default function FashionShowsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
