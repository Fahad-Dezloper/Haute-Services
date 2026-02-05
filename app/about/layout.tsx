import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Haute Services",
    description: "Learn about Haute Services, a boutique consultancy founded by Maneesh Baheti and Sonali Anand, specializing in luxury hospitality, lifestyle events, and art.",
    keywords: ["Maneesh Baheti", "Sonali Anand", "Haute Services History", "Luxury Hospitality Consultancy", "Boutique Consultancy Delhi"],
    openGraph: {
        title: "About Us | Haute Services",
        description: "The team and heritage behind Haute Services.",
        images: ["/images/about.png"],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
