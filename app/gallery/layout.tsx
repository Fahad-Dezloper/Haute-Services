import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Press clippings, podcast posters, and photos with celebrities. A visual archive of Haute Services coverage, Food For Thought Fest, and cultural collaborations.",
  keywords: ["Haute Services gallery", "Press coverage", "Food For Thought Fest", "Maneesh Baheti", "Media archive", "Celebrity events", "Podcast posters"],
  openGraph: {
    title: "Gallery | Haute Services",
    description: "Press, posters and people – a visual archive of Haute Services cultural footprint.",
    url: "https://hauteservices.in/gallery",
    images: ["/og/image.png"],
  },
  alternates: { canonical: "https://hauteservices.in/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
