export interface MediaItem {
    source: string;
    date: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category?: 'Press' | 'Interview' | 'Award' | 'Expert Opinion';
}

export const mediaCoverage: MediaItem[] = [
    {
        source: "India Art Fair Parallel",
        date: "February 2026",
        title: "Borrowed Identities – Co-curated by Haute Services",
        description: "An official India Art Fair Parallel event presented by the Liszt Institute and co-curated by Haute Services & SANDARBH. Featuring an exhibition by István Eross at the Hungarian Culture Centre, New Delhi.",
        image: "/news/iaf.png",
        link: "",
        category: 'Press'
    },
    {
        source: "Zee Business",
        date: "",
        title: "Art as a Strategic Investment",
        description: "Manish K. Baheti was featured as an expert on Zee Business, sharing insights on art market investment, legacy building, and how art is emerging as a strategic wealth asset.",
        image: "/news/zeebusinessnews.jpeg",
        link: "",
        category: 'Expert Opinion'
    },
    {
        source: "Fortune Exchange Magazine",
        date: "March 2024",
        title: "A Gentleman Passionate About Gastronomy & Art",
        description: "A detailed interview with Manish Kumar Baheti covering his journey in hospitality, founding HAUTE Services, curating art events, and leading India's celebrated Food For Thought Fest.",
        image: "/news/fortune.jpeg",
        link: "",
        category: 'Interview'
    },
    {
        source: "HAUTE Services x Shantanu & Nikhil",
        date: "2023",
        title: "Customer Excellence Project for Shantanu & Nikhil",
        description: "HAUTE Services designed the ‘Customer Excellence Project’ for luxury retail brand Shantanu & Nikhil, which involved creating a specialized Brand Standards Manual and training teams across multiple locations.",
        image: "/news/shantanu.png",
        link: "",
        category: 'Press'
    },
    {
        source: "Times of India",
        date: "January 13, 2025",
        title: "AOI’s Starry Night Captures the Energy and Colour of Indian Art",
        description: "Times of India covered the Art of India exhibition featuring artworks supported and curated by HAUTE Services. The article highlights the vibrancy and cultural significance of contemporary Indian art.",
        image: "/news/toi.png",
        link: "",
        category: 'Press'
    },
    {
        source: "Outlook India",
        date: "Jan 2024",
        title: "Maneesh Baheti – A Visionary in Lifestyle Consultancy & Gastronomy",
        description: "Outlook India profiled Manish Baheti’s pioneering role in lifestyle consulting, gastronomy events, and redefining India’s food & art experience landscape.",
        image: "/news/outlook.png",
        link: "https://www.outlookindia.com/amp/story/hub4business/maneesh-baheti-a-visionary-in-lifestyle-consultancy-gastronomy",
        category: 'Press'
    },
    {
        source: "Multiple News Channels",
        date: "Multiple Appearances",
        title: "Hospitality Expert Featured Across Media",
        description: "Manish Baheti has appeared seven times in national news as a hospitality expert, offering commentary on industry trends, service excellence, and consumer experience.",
        image: "/news/covid2.png",
        link: "",
        category: 'Expert Opinion'
    },
    {
        source: "Times of India",
        date: "2024 & 2025",
        title: "Power Creator Travel Awards",
        description: "Maneesh Baheti, Founder of Haute Services, was invited to present the prestigious Power Creator Travel Awards by Times of India for two consecutive years, highlighting his influence in the luxury travel and hospitality sector.",
        image: "/fashion/Toi.png",
        link: "",
        category: 'Award'
    },
    {
        source: "ET Hospitality",
        date: "August 7, 2020",
        title: "Street food parks - the time is ripe",
        description: "Maneesh Baheti advocates for the development of street food parks in India, drawing parallels with successful international models to boost tourism and entrepreneurship.",
        image: "/news/ethospitality.jpeg",
        link: "https://hospitality.economictimes.indiatimes.com/news/speaking-heads/street-food-parks-the-time-is-ripe/77409240",
        category: 'Expert Opinion'
    },
    {
        source: "Newspaper Feature",
        date: "March 2023",
        title: "A Way to Bengal",
        description: "Showcasing regional talent through fine art curation in the national capital, highlighting the depth and diversity of Bengali artistic traditions.",
        image: "/art/news/bengal.png",
        link: "",
        category: 'Press'
    },
    {
        source: "CFO Connect",
        date: "November 2014",
        title: "Fine Art, A Fine Investment",
        description: "Maneesh Baheti explores fine art as both an emotional pursuit and a long-term strategic investment in the evolving Indian art market.",
        image: "/art/article/fineart.jpeg",
        link: "",
        category: 'Expert Opinion'
    },
    {
        source: "CFO Connect",
        date: "September 2014",
        title: "Medley of Indian Visual Art",
        description: "A comprehensive journey through the evolution of Indian visual art, from royal patronage to modern and contemporary practices.",
        image: "/art/article/medley.jpeg",
        link: "",
        category: 'Expert Opinion'
    }
];
