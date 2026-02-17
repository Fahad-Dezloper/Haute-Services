import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Film Festival",
  description: "Haute Services advisory role in SAFACH – South Asia Forum for Art and Creative Heritage. Culinary cinema, cultural storytelling, and filmmaker support.",
  keywords: ["SAFACH", "Culinary cinema", "South Asia film", "Cultural heritage", "Haute Services", "Film festival advisory"],
  openGraph: {
    title: "Film Festival | Haute Services",
    description: "SAFACH advisory – cinema as a medium for cultural heritage and gastronomy.",
    url: "https://hauteservices.in/lifestyle/film-festival",
  },
  alternates: { canonical: "https://hauteservices.in/lifestyle/film-festival" },
};

export default function FilmFestivalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
