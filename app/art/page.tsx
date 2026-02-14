"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Mic,
  Users,
  Eye,
  Heart,
  Sparkles,
  Globe,
  Instagram,
} from "lucide-react";

// --- Shared Components ---

const arts = [
  {
    title: "Modern Indian Art",
    img: "/art/modern.jpg",
  },
  {
    title: "Contemporary Art",
    img: "/art/contemparary.avif",
  },
  {
    title: "Photography & Print Art",
    img: "/art/Photography.jpg",
  },
  {
    title: "Sculptures & Installations",
    img: "/art/sculpture.jpg",
  },
];
const artspaces = [
  {
    title: "Luxury Residences",
    img: "/art/luxury.jpg",
  },
  {
    title: "Corporate Headquarters",
    img: "/art/office.jpg",
  },
  {
    title: "Hotels & Hospitality Hubs",
    img: "/art/hotels.jpg",
  },
  {
    title: "Public Art Installations",
    img: "/art/publicart.jpeg",
  },
];

const engagements = [
  {
    title: "Recognition of Patronage at Bikaner House",
    type: "Guest of Honour",
    location: "Bikaner House, New Delhi (2025)",
    desc: "Invited as Guest of Honour at the opening of an Art Show alongside stalwarts of the world of art, recognizing years of devotion to promoting and patronizing Indian Art.",
    icon: Award,
    img: "/art/guest/contemporary.jpeg",
  },
  {
    title: "Art for Concern – Patronage & Showcase",
    type: "Patron & Strategic Partner",
    location: "Alliance Francaise, 72, Lodhi Estate",
    desc: "Partnered with Secure Giving to showcase 75 works by over 40 Indian masters, including Ram Kumar, KG Subramanyan, and Jogen Choudhary. A long-term patron of the foundation, supporting social development in education and health through fine art curation.",
    icon: Heart,
    img: "/art/guest/artforconcern2.png",
  },
  {
    title: "Words Count Fest",
    type: "Speaker Appearance",
    location: "India Habitat Centre, New Delhi",
    desc: "Invited as a core speaker at WORDS COUNT fest, part of Delhi International Arts Festival, sharing insights on the intersection of arts, business, and policy.",
    icon: Mic,
    img: "/art/guest/wordcount.jpeg",
  },
  {
    title: "Art for a Cause – Concern India",
    type: "Sponsor & Collaborator",
    location: "Alliance Francaise De Delhi",
    desc: "A charitable collaboration with Concern India Foundation to raise funds with a contemporary art show, demonstrating our commitment to art as a catalyst for social change.",
    icon: Heart,
    img: "/art/guest/alliance.jpeg",
  },
  {
    title: "Contemporary Art Showcase",
    type: "Strategic Collaborator",
    location: "Le Meridien, Gurgaon",
    desc: "An Art Show in collaboration with Concern India Foundation, bridging corporate hospitality with the vibrant world of contemporary Indian art.",
    icon: Eye,
    img: "/art/guest/artforconcern.jpeg",
  },
  {
    title: "Spotlight Singapore",
    type: "Cultural Representative – India",
    location: "Singapore",
    desc: "Represented India at an international cultural platform showcasing South Asian perspectives on art, design, and lifestyle, emphasizing cultural diplomacy on a global stage.",
    icon: Globe,
    img: "/spotlightsingapore.jpeg",
  },
];

const involvementHighlights = [
  "/art/imp/1.jpeg",
  "/art/imp/2.jpeg",
  "/art/imp/3.jpeg",
  "/art/imp/4.jpeg",
  "/art/imp/5.jpeg",
  "/art/imp/6.jpeg",
  "/art/imp/7.jpeg",
  "/art/imp/8.jpeg",
  "/art/imp/9.jpeg",
  "/art/imp/10.jpeg",
  "/art/imp/11.jpeg",
  "/art/imp/12.jpeg",
  "/art/imp/13.jpeg",
  "/art/imp/14.jpeg",
  "/art/imp/15.jpeg",
  "/art/imp/16.jpeg",
  "/art/imp/17.jpeg",
  "/art/imp/18.jpeg",
  "/art/imp/19.jpeg",
  // "/art/imp/20.jpeg",
  "/art/imp/21.jpeg",
  "/art/imp/22.jpeg",
  "/art/imp/23.jpeg",
  "/art/imp/24.jpeg",
  "/art/imp/25.jpeg",
  "/art/imp/26.jpeg",
  "/art/imp/27.jpeg",
  "/art/imp/28.jpeg",
  "/art/imp/29.jpeg",
  "/art/imp/30.jpeg",
  "/art/imp/31.jpeg",
  "/art/imp/32.jpeg",
  "/art/imp/33.jpeg",
  "/art/imp/34.jpeg",
];

import { mediaCoverage } from "@/lib/data";

const news_cycle = mediaCoverage
  .filter(
    (item) =>
      item.title.toLowerCase().includes("art") ||
      item.source.toLowerCase().includes("art") ||
      item.category === "Press",
  )
  .slice(0, 3);

const published_articles = [
  {
    title: "Fine Art, A Fine Investment",
    publication: "CFO Connect",
    section: "Think Tank",
    date: "November 2014",
    category: "Art Advisory",
    excerpt:
      "An exploration of fine art as both an emotional pursuit and a long-term investment in the evolving Indian art market.",
    image: "/art/article/fineart.jpeg",
  },
  {
    title: "Medley of Indian Visual Art",
    publication: "CFO Connect",
    section: "Think Tank",
    date: "September 2014",
    category: "Art & Culture",
    excerpt:
      "A journey through the evolution of Indian visual art, from royal patronage to modern and contemporary practices.",
    image: "/art/article/medley.jpeg",
  },
];

const iafArtists = [
  {
    name: "Buddhadev Mukherjee",
    link: "https://www.instagram.com/buddh.mukherjee?igsh=MWZ3OGlwNnJ0d2Z2cA==",
  },
  {
    name: "Vinod Balak",
    link: "https://www.instagram.com/vinodbalak?igsh=Z2U1b3F4d2JrNWMz",
  },
  {
    name: "Om Soorya",
    link: "https://www.instagram.com/omsoorya?igsh=MWZrczB4ZWUzYWlxcw==",
  },
  {
    name: "Chintan Upadhyay",
    link: "https://www.instagram.com/chintanupadhyayart?igsh=bG81d2U3bnZtZzBo",
  },
  { name: "Biswajit", link: null },
];

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const ParallaxImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

// --- Page Component ---

export default function ArtPage() {
  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden">
      <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage
            src="/work/bigArt.jpg"
            alt="Fine Art Detail"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
              Art{" "}
              <span className="italic font-light text-white/90 ml-2">
                Advisory
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
              Over a decade of curatorial expertise, bridging the gap between
              historical heritage and contemporary art.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- THE PHILOSOPHY --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-12">
            <Reveal>
              <h2 className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-10 lg:mb-16 flex items-center gap-4">
                <div className="h-px w-8 bg-charcoal/20" /> The Haute Approach
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
              <Reveal delay={0.1}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                  "We curate not just spaces, but{" "}
                  <span className="italic font-light">legacies</span>."
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6 text-base lg:text-lg text-charcoal/70 font-light leading-relaxed max-w-xl">
                  <p>
                    At Haute Services, art advisory is a deeply personal
                    consultancy. We recognize that art is more than decoration;
                    it is an asset class, a cultural statement, and a reflection
                    of identity.
                  </p>
                  <p>
                    With over a decade of experience in our culturally rich
                    verticals, we operate as boutique advisors for discerning
                    private collectors and corporate headquarters.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE ADVISORY: FULL WIDTH SECTIONS --- */}
      <section className="bg-white">
        {/* Section 1: Our Services */}
        <div className="relative border-b border-charcoal/5">
          <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <div className="lg:col-span-6 lg:order-2">
                <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-8 bg-charcoal/20" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/40">
                      Exclusive Offerings
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-12 lg:mb-16 text-charcoal leading-tight">
                    Our <br />
                    <span className="italic font-light">Services</span>
                  </h2>
                  <ul className="space-y-8 lg:space-y-12">
                    {[
                      {
                        title: "Curation of Art Shows & Events",
                        desc: "Crafting immersive experiences that bridge artists and collectors.",
                      },
                      {
                        title: "Sale & Purchase of Artworks",
                        desc: "Expert market insight for seamless acquisition and divestment.",
                      },
                      {
                        title: "Art Restoration Services",
                        desc: "Specialized care for historical and contemporary masterpieces.",
                      },
                      {
                        title: "Portfolio Valuation & Management",
                        desc: "Strategic oversight for investment-grade art assets.",
                      },
                    ].map((item, i) => (
                      <li key={i} className="group cursor-default relative">
                        <div className="flex items-start gap-4 lg:gap-6">
                          <span className="text-[10px] font-bold text-charcoal/20 mt-1.5 lg:mt-2 tracking-widest group-hover:text-charcoal/40 transition-colors duration-500">
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-xl lg:text-3xl font-serif text-charcoal mb-2 lg:mb-3 transition-all duration-500 group-hover:translate-x-2">
                              {item.title}
                            </h3>
                            <p className="text-sm lg:text-base text-charcoal/50 font-light max-w-md leading-relaxed transition-all duration-500 group-hover:translate-x-2 group-hover:text-charcoal/70">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 w-[2px] bg-charcoal scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <Reveal delay={0.2}>
                  <div className="relative aspect-4/5 w-full rounded-sm overflow-hidden group shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
                    <ParallaxImage
                      src="/founder/Maneesh2.jpg"
                      alt="Art Restoration and Curation"
                      className="w-full h-full group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1500 ease-out"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: We Deal In */}
        <div className="relative border-b border-charcoal/5 bg-cream/20">
          <div className="container mx-auto px-6 py-20 lg:py-32">
            <div className="items-center">
              <div className="w-full">
                <Reveal>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 text-charcoal leading-tight">
                    Expertise <span className="font-light">&</span>{" "}
                    <span className="italic font-light">Specializations</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-charcoal/70 mb-12 lg:mb-16 font-light leading-relaxed max-w-4xl">
                    We specialize in a broad spectrum of visual arts, ensuring
                    our clients have access to the most significant movements in
                    the art world.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {arts.map((item, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-3/4 w-full bg-charcoal/5 overflow-hidden mb-6 lg:mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="grayscale-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                          />
                          <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700" />
                        </div>

                        <div className="space-y-3 px-1">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-charcoal/20 tracking-widest group-hover:text-charcoal/40 transition-colors">
                              0{i + 1}
                            </span>
                            <div className="h-px flex-1 bg-charcoal/5 group-hover:bg-charcoal/20 transition-colors" />
                          </div>
                          <h4 className="text-xl lg:text-2xl font-serif text-charcoal leading-tight group-hover:italic transition-all duration-500">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Curated Spaces */}
        <div className="relative border-b border-charcoal/5">
          <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 lg:mb-8 text-charcoal leading-tight text-center">
                Curated <span className="italic font-light">Spaces</span>
              </h2>
              <p className="text-lg lg:text-xl text-charcoal/70 mb-12 lg:mb-20 font-light leading-relaxed max-w-3xl mx-auto text-center">
                From intimate private residences to expansive corporate
                environments, we redefine how art interacts with physical space.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
              {artspaces.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-16/10 w-full bg-charcoal/5 overflow-hidden mb-6 lg:mb-8 rounded-sm shadow-sm group-hover:shadow-xl transition-all duration-700">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-700" />

                      {/* Corner Detail */}
                      <div className="absolute top-4 lg:top-6 right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <div className="bg-white/90 backdrop-blur-md p-2 lg:p-3 rounded-full shadow-lg">
                          <ArrowUpRight className="w-4 lg:w-5 h-4 lg:h-5 text-charcoal" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between border-b border-charcoal/10 pb-6">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/30">
                          Project Vertical
                        </span>
                        <h3 className="text-2xl lg:text-4xl font-serif text-charcoal group-hover:italic transition-all duration-500">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-sm font-light text-charcoal/40 group-hover:text-charcoal transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INDIA ART FAIR PARALLEL EVENT --- */}
      <section className="py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-charcoal/20" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/40">
                Exclusive Collaboration
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-charcoal mb-12 leading-tight">
              India Art Fair <br />
              <span className="italic font-light">Parallel Event</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-3/4 w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/news/iaf.png"
                    alt="IAF Parallel Event Poster"
                    fill
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <h3 className="text-2xl lg:text-4xl font-serif mb-8 leading-tight">
                  Borrowed Identities – <br />
                  <span className="text-charcoal/60 font-light italic">
                    Co-curated by Haute Services
                  </span>
                </h3>
                <div className="space-y-6 text-lg font-light leading-relaxed text-charcoal/70">
                  <p>
                    An official India Art Fair Parallel event presented by the{" "}
                    <strong>Liszt Institute (Hungarian Culture Centre)</strong>{" "}
                    and co-curated by <strong>Haute Services & SANDARBH</strong>
                    .
                  </p>
                  <p>
                    Featuring a profound exhibition by{" "}
                    <strong>István Erőss</strong> at the Hungarian Culture
                    Centre, New Delhi, this collaboration explores the
                    intersections of identity, nature, and cultural heritage.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-12">
                  {[1, 2, 4].map((num) => (
                    <div
                      key={num}
                      className="relative aspect-square overflow-hidden rounded-sm shadow-md"
                    >
                      <Image
                        src={`/iaf/${num}.jpeg`}
                        alt={`IAF Exhibition ${num}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                  <div className="h-full flex flex-col justify-center p-6 bg-cream/50 border border-charcoal/5 italic text-sm lg:text-base font-serif text-charcoal/60">
                    "Bridging global artistic visions with the heart of New
                    Delhi’s art landscape."
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Renowned Artists Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-32 border-t border-charcoal/10 pt-24">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <div className="relative aspect-4/3 mb-12 rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/iaf/3.jpeg"
                    alt="Founder with Renowned Artists"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Mobile Only Artists List */}
                <div className="lg:hidden space-y-6">
                  <p className="text-sm text-charcoal/60 italic leading-relaxed">
                    A convergence of contemporary masters including Om Soorya,
                    Vinod Balak, Chintan Upadhyay, Biswajit and Buddhadev
                    Mukherjee.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-4">
                    {iafArtists.map((artist, i) =>
                      artist.link ? (
                        <a
                          key={i}
                          href={artist.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-charcoal/60"
                        >
                          <Instagram className="w-4 h-4" /> {artist.name}
                        </a>
                      ) : (
                        <span
                          key={i}
                          className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40"
                        >
                          {artist.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/40 mb-4 block">
                  Artistic Confluence
                </span>
                <h3 className="text-3xl lg:text-5xl font-serif mb-2">
                  Renowned <span className="italic">Collaborators</span>
                </h3>
              </Reveal>
            </div>
          </div>

          {/* Performance Section */}
          <div className="bg-charcoal text-white rounded-sm overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 lg:p-24 order-2 lg:order-1">
                <Reveal>
                  <h4 className="text-2xl lg:text-4xl font-serif mb-12 italic text-white/90">
                    The Performance
                  </h4>
                  <div className="max-w-none text-white/50 font-light leading-relaxed space-y-6 text-sm lg:text-base">
                    <p>
                      This performance is developed in response to{" "}
                      <strong>István Erőss’s</strong> body of work on nature
                      action, in which nature is approached as a condition
                      rather than a representation, and durational actions
                      function as methodical and effective procedures.
                    </p>
                    <p>
                      While Erőss engages directly with outdoor environments,
                      this work translates his logic into a constructed interior
                      situation, where light, soil, smoke, and spatial
                      constraint operate as active conditions.
                    </p>
                    <p>
                      Stillness is used as a durational method, allowing the
                      body to remain subject to these conditions without gesture
                      or intervention. The performance does not interpret
                      Erőss’s actions, but responds to their structural
                      principles by placing the body in sustained exposure,
                      where action is defined by remaining rather than doing.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 relative aspect-square lg:aspect-auto min-h-[400px] lg:h-full overflow-hidden order-1 lg:order-2">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/iafvideo/iaf.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-charcoal/20" />
                <a
                  href="https://www.instagram.com/eross_istvan?igsh=MXh5cXg1ZHN0cW0ybg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-14 z-10 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-500"
                >
                  <Instagram className="w-4 h-4" /> István Erőss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHT: SH RAZA --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-charcoal border-b border-white/5">
        <div className="max-w-screen-xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">
                Iconic Moment
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <div className="relative aspect-video lg:aspect-[21/9] w-full mb-12 rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/art/imp/raza.jpeg"
                alt="Maneesh Baheti with S.H. Raza"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-2xl lg:text-4xl font-serif text-white/90 leading-tight">
                "With the legendary{" "}
                <span className="italic text-white">S.H. Raza</span> at his
                retrospective show, Delhi Art Gallery (2012)."
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                Picture Courtesy: Artist Manisha Gera Baswani
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- INVOLVEMENT HIGHLIGHTS --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-16 lg:mb-24 text-center text-white">
              Gallery of Artists
            </h2>
          </Reveal>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {involvementHighlights.map((item, i) => (
              <Reveal key={i} delay={(i % 4) * 0.1}>
                <div className="relative group overflow-hidden bg-white/5 rounded-sm break-inside-avoid shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item}
                    alt={`Event Highlight ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PUBLIC ENGAGEMENTS & GUEST APPEARANCES --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="mb-16 lg:mb-24 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none">
                Curatorial &<br />{" "}
                <span className="italic font-light">Cultural Footprint</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagements.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="h-full bg-white border border-charcoal/5 group hover:border-charcoal/20 transition-all duration-500 flex flex-col overflow-hidden shadow-sm hover:shadow-xl">
                  <div className="relative aspect-3/4 lg:h-[46vh] w-full overflow-hidden">
                    <Image
                      src={item.img || "/images/art.png"}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="grayscale-20 group-hover:grayscale-0 object-cover group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-4 block">
                      {item.type}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-serif mb-4 leading-tight group-hover:italic transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed font-light mb-8 flex-1">
                      {item.desc}
                    </p>
                    <div className="pt-4 border-t border-charcoal/5 text-[10px] uppercase tracking-widest font-bold text-charcoal/60">
                      {item.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PUBLISHED ARTICLES SECTION --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-4 block">
                Thought Leadership
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none">
                Published <span className="italic font-light">Articles</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {published_articles.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer flex flex-col h-full border-b border-charcoal/5 pb-10 lg:pb-12">
                  <div className="relative aspect-video w-full overflow-hidden mb-6 lg:mb-8 rounded-sm transition-all duration-700 bg-charcoal/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="group-hover:scale-105 object-contain transition-transform duration-1000"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">
                      <span>
                        {item.publication}{" "}
                        <span className="opacity-30 mx-2">|</span>{" "}
                        {item.section}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif text-charcoal leading-tight group-hover:text-charcoal/70 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed font-light line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-charcoal/5 group-hover:pl-4 transition-all duration-500">
                    <span className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-charcoal group-hover:gap-6 transition-all">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- YOUTUBE SHORTS MASONRY GRID --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-cream/30">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-4 block">
                Visual Stories
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none">
                Featured <span className="italic font-light">Shorts</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {[
              {
                id: "PPOVoy9Y1Lo",
                url: "https://youtube.com/shorts/PPOVoy9Y1Lo?si=r3t25lV2IWIwM95A",
              },
            ].map((short, index) => (
              <Reveal key={short.id} delay={index * 0.15}>
                <div className="group relative">
                  <div className="relative aspect-9/16 w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-700 bg-charcoal/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${short.id}`}
                      title={`YouTube Short ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 border border-charcoal/5 pointer-events-none group-hover:border-charcoal/20 transition-colors duration-500" />
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- ART MEDIA COVERAGE --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-16 lg:mb-24 text-center">
              Media & <span className="italic font-light">Press</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {news_cycle.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative h-fit lg:h-[40vh] w-full bg-charcoal/5 rounded-sm overflow-hidden mb-6 shadow-md lg:shadow-lg transition-all duration-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                    />
                    {item.image === "/art/news/toi1.jpeg" && (
                      <span className="absolute bottom-0 right-0 w-32 h-36 lg:w-44 lg:h-48 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-white overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src="/art/news/toi2.jpeg"
                          alt="times of india recognition"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover brightness-110 contrast-105"
                        />
                      </span>
                    )}
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="space-y-3 px-1">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif text-charcoal group-hover:text-charcoal/70 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
            Begin your journey with{" "}
            <span className="italic font-light">Haute Art</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Consult with us to discuss your private collection, corporate
            curation, or restoration needs.
          </p>
          <a
            href="mailto:info@hauteservices.in"
            className="inline-block bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-colors font-serif italic text-xl"
          >
            Inquire Now
          </a>
        </Reveal>
      </section>
    </main>
  );
}
