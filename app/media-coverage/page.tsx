import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Coverage",
    description: "Latest media features, interviews, and press coverage of Haute Services and founder Maneesh Baheti – Outlook India, Times of India, Zee Business, Fortune Exchange, Food For Thought Fest.",
    keywords: ["Maneesh Baheti", "Haute Services", "Media Coverage", "Press", "Gastronomy Expert", "Hospitality Expert", "Art Advisory", "Outlook India", "Times of India"],
    openGraph: {
        title: "Media Coverage | Haute Services & Maneesh Baheti",
        description: "Press, interviews and expert insights on Haute Services in leading publications.",
        url: "https://hauteservices.in/media-coverage",
        images: ["/og/image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Media Coverage | Haute Services & Maneesh Baheti",
    },
    alternates: { canonical: "https://hauteservices.in/media-coverage" },
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
        "url": "https://hauteservices.in/media-coverage",
        "publisher": {
            "@type": "Organization",
            "name": "Haute Services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hauteservices.in/logo/MainLogo.jpeg"
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
