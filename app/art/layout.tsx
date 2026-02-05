import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Art Advisory | Haute Services",
    description: "Boutique art advisory services specializing in modern and contemporary Indian art. We curate private collections, corporate spaces, and provide restoration services.",
    keywords: ["Art Advisory India", "Modern Indian Art", "Contemporary Art", "Art Curation", "Art Restoration Delhi", "Private Art Collection"],
    openGraph: {
        title: "Art Advisory | Haute Services",
        description: "Expert curatorial services for private and corporate art collections.",
        images: ["/work/bigArt.jpg"],
    },
};

export default function ArtLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
