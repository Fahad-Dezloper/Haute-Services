import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Launches",
  description: "Haute Services curates boutique literary and cookbook launches for international chefs and authors: Asma Khan, Vicky Ratnani, Rohini Rana, Abhijit Saha, Chris Gayle.",
  keywords: ["Book launches Delhi", "Cookbook launch", "Asma Khan", "Vicky Ratnani", "Haute Services", "Literary events", "Culinary authors"],
  openGraph: {
    title: "Book Launches | Haute Services",
    description: "Strategic curation of literary and cookbook launches for culinary masters and cultural historians.",
    url: "https://hauteservices.in/lifestyle/book-launches",
  },
  alternates: { canonical: "https://hauteservices.in/lifestyle/book-launches" },
};

export default function BookLaunchesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
