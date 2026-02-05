import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lifestyle Events | Haute Services",
    description: "Curating high-impact lifestyle events, culinary festivals, book launches, and fashion shows. Celebrating regional heritage and luxury experiences.",
    keywords: ["Lifestyle Events", "Culinary Festivals", "Food For Thought Fest", "Book Launches", "Fashion Shows", "Luxury Brand Strategy"],
    openGraph: {
        title: "Lifestyle Events | Haute Services",
        description: "Exceptional lifestyle events and cultural milestones.",
        images: ["/images/lifestyle.png"],
    },
};

export default function LifestyleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
