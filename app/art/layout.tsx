import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Art Advisory",
    description: "Thirty years of curatorial expertise. Haute Services art advisory: curation of art shows, sale and purchase of artworks, restoration, portfolio valuation. Modern and contemporary Indian art. Delhi.",
    keywords: ["Art Advisory India", "Modern Indian Art", "Contemporary Art", "Art Curation Delhi", "Art Restoration", "Private Art Collection", "India Art Fair", "Maneesh Baheti"],
    openGraph: {
        title: "Art Advisory | Haute Services",
        description: "Thirty years of art advisory – curation, restoration, valuation. Private and corporate collections.",
        url: "https://hauteservices.in/art",
        images: [{ url: "https://hauteservices.in/work/bigArt.jpg", alt: "Haute Services Art Advisory" }],
    },
    alternates: { canonical: "https://hauteservices.in/art" },
};

export default function ArtLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
