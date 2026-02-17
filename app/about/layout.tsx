import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Haute Services is a boutique consultancy founded by Maneesh Baheti and Sonali Anand. Over three decades of experience in hospitality consulting, lifestyle events, and art advisory. Founders of S.A.A.G and Food For Thought Fest. New Delhi.",
    keywords: ["Maneesh Baheti", "Sonali Anand", "Haute Services", "Luxury Hospitality Consultancy", "Boutique Consultancy Delhi", "Food For Thought Fest", "SAAG"],
    openGraph: {
        title: "About Us | Haute Services",
        description: "The team and heritage behind Haute Services – Maneesh Baheti, Sonali Anand, and three decades of excellence.",
        url: "https://hauteservices.in/about",
        images: [{ url: "https://hauteservices.in/images/about.png", alt: "Haute Services about and team" }],
    },
    alternates: { canonical: "https://hauteservices.in/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
