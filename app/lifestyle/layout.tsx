import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lifestyle Events",
    description: "Haute Services lifestyle events: Food For Thought Fest, culinary festivals, book launches, fashion shows, film festival advisory. Cultural heritage and luxury experiences. New Delhi.",
    keywords: ["Lifestyle Events Delhi", "Culinary Festivals", "Food For Thought Fest", "Book Launches", "Fashion Shows", "SAFACH", "Haute Services"],
    openGraph: {
        title: "Lifestyle Events | Haute Services",
        description: "Culinary festivals, book launches, fashion shows – cultural milestones by Haute Services.",
        url: "https://hauteservices.in/lifestyle",
        images: [{ url: "https://hauteservices.in/images/lifestyle.png", alt: "Haute Services Lifestyle Events" }],
    },
    alternates: { canonical: "https://hauteservices.in/lifestyle" },
};

export default function LifestyleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}