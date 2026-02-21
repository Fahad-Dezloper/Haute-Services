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
        source: "Everything Experiential",
        date: "February 18, 2026",
        title: "Inside Budweiser’s Marketing Playbook: Experience Design",
        description: "Maneesh Baheti provides expert analysis on Budweiser's 'fan-first' experiential strategies, highlighting how culture-led activations are reshaping sports marketing ROI.",
        image: "/news/Budweiser.png",
        link: "https://everythingexperiential.com/article/inside-budweiser-s-marketing-playbook-moving-from-sponsorship-to-experience-design-594110",
        category: 'Expert Opinion'
    },
    {
        source: "India Art Fair Parallel",
        date: "February 2026",
        title: "Solo Exhibition ‘Borrowed Identities’ By István Erőss To Open At Liszt Institute Delhi",
        description: "An official India Art Fair Parallel event presented by the Liszt Institute and co-curated by Haute Services & SANDARBH. Featuring an exhibition by István Eross at the Hungarian Culture Centre, New Delhi.",
        image: "/news/iaf2.png",
        link: "https://everythingexperiential.com/article/solo-exhibition-borrowed-identities-by-istv-n-er-ss-to-open-at-liszt-institute-delhi-591259",
        category: 'Press'
    },
    {
        source: "Everything Experiential",
        date: "January 24, 2026",
        title: "When Menus Become Marketing Collateral",
        description: "Maneesh Kumar Baheti explores the evolution of high-end menus into powerful storytelling tools that reflect culinary philosophy and drive premium brand value.",
        image: "/news/Collateral.png",
        link: "https://everythingexperiential.com/article/when-menus-become-marketing-collateral-590578",
        category: 'Expert Opinion'
    },
    {
        source: "ET Now Swadesh",
        date: "December 9, 2025",
        title: "Hospitality Standards & Safety Protocols",
        description: "As Principal Consultant, Maneesh Baheti shares critical industry insights on safety protocols and legal responsibilities within the Indian hospitality sector.",
        image: "/news/Safety.png",
        link: "https://youtu.be/VkbdTmSdvS4",
        category: 'Interview'
    },
    {
        source: "ET Now Swadesh",
        date: "September 18, 2025",
        title: "Consumer Privacy & Data Protection Rules",
        description: "A panel discussion with Maneesh Baheti on the DPDP Act 2023, exploring how new data security regulations impact the retail and consumer experience landscape.",
        image: "/news/Privacy.png",
        link: "https://youtu.be/uuN2vAfBFa0",
        category: 'Interview'
    },
    {
        source: "Times of India",
        date: "January 13, 2025",
        title: "Art of India’s Starry Night Captures the Energy and Colour of Indian Art",
        description: "Times of India National Edition covered the Art of India exhibition in a half page article on 16th Jan 2025. The article highlights the vibrancy and cultural significance of contemporary Indian art and featured the interview of our Founder.",
        image: "/art/news/toi1.jpeg",
        link: "",
        category: 'Press'
    },
    {
        source: "The Print",
        date: "October 31, 2024",
        title: "Cuba Beyond Postcards: The Art of Reinvention",
        description: "Art collector Maneesh Baheti discusses the democratization of photography and the importance of making fine art inclusive during a feature on Rohit Chawla's exhibition.",
        image: "/news/theprint.png",
        link: "https://theprint.in/feature/around-town/cuba-beyond-postcards-this-photographer-didnt-want-to-come-back-with-just-travel-pictures/2336508/",
        category: 'Press'
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
        source: "Times of India",
        date: "2024 & 2025",
        title: "Power Creator Travel Awards",
        description: "Maneesh Baheti, Founder of Haute Services, continous to be invited to present the prestigious Power Creator Travel Awards by Times of India since 2024, highlighting his influence in the luxury travel and hospitality sector.",
        image: "/fashion/Toi.png",
        link: "",
        category: 'Award'
    },
    {
        source: "Outlook India",
        date: "Jan 2024",
        title: "Maneesh Baheti – A Visionary in Lifestyle Consultancy & Gastronomy",
        description: "Outlook India profiled Maneesh Baheti’s pioneering role in lifestyle consulting, gastronomy events, and redefining India’s food & art experience landscape.",
        image: "/news/outlook.png",
        link: "https://www.outlookindia.com/amp/story/hub4business/maneesh-baheti-a-visionary-in-lifestyle-consultancy-gastronomy",
        category: 'Press'
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
        source: "ET Hospitality",
        date: "August 7, 2020",
        title: "Street Food Parks - The Time Is Ripe",
        description: "Maneesh Baheti advocates for the development of street food parks in India, drawing parallels with successful international models to boost tourism and entrepreneurship.",
        image: "/news/streefood.jpeg",
        link: "https://hospitality.economictimes.indiatimes.com/news/speaking-heads/street-food-parks-the-time-is-ripe/77409240",
        category: 'Expert Opinion'
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
        description: "Maneesh Baheti writes on a comprehensive journey and traces the evolution of Indian visual art, from royal patronage to modern and contemporary practices.",
        image: "/art/article/medley.jpeg",
        link: "",
        category: 'Expert Opinion'
    },
    {
        source: "Newspaper Feature",
        date: "April 2014",
        title: "Contemporary Affordable Art Show",
        description: "Showcasing regional talent through fine art curation in the national capital, highlighting the depth and diversity of Bengali artistic traditions.",
        image: "/art/news/bengal.png",
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
        source: "Multiple News Channels",
        date: "Multiple Appearances",
        title: "Hospitality Expert Featured Across Media",
        description: "Maneesh Baheti has appeared several times in national news as a hospitality expert, offering commentary on industry trends, service excellence, and consumer experience.",
        image: "/news/covid2.png",
        link: "",
        category: 'Expert Opinion'
    }
];
