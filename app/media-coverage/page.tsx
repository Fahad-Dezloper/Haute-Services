export const metadata = {
    title: "Media Coverage | Haute Services & Maneesh Baheti",
    description: "Explore the latest media features, expert insights, and press coverage of Haute Services and its founder, Maneesh Baheti, in leading publications like Outlook India, ET Hospitality, and Zee Business.",
    keywords: ["Maneesh Baheti", "Haute Services", "Lifestyle Consultancy", "Art Advisory", "Media Coverage", "Press", "Gastronomy Expert", "Hospitality Expert"],
};

import { mediaCoverage } from "@/lib/data";
import MediaClient from "@/app/media-coverage/MediaClient";

export default function MediaCoveragePage() {
    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Media Coverage of Haute Services and Maneesh Baheti",
        "description": "A collection of media features, interviews, and press articles about Haute Services and founder Maneesh Baheti.",
        "publisher": {
            "@type": "Organization",
            "name": "Haute Services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hauteservices.in/logo.png" // Placeholder or actual logo if known
            }
        },
        "mainEntity": mediaCoverage.map((item) => ({
            "@type": "Article",
            "headline": item.title,
            "publisher": {
                "@type": "Organization",
                "name": item.source
            },
            "datePublished": item.date,
            "url": item.link || "https://hauteservices.in/media-coverage",
            "author": {
                "@type": "Person",
                "name": "Maneesh Baheti"
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MediaClient mediaCoverage={mediaCoverage} />
        </>
    );
}
