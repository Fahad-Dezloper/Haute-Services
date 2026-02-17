"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Globe,
  Utensils,
  Award,
  Users,
  MapPin,
  Play,
  Newspaper,
  BookOpen,
  Quote,
  ArrowUpRight,
  X,
  Facebook,
  Instagram,
} from "lucide-react";

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

export default function CulinaryFestivalsPage() {
  const testimonials = [
    {
      name: "Dr. Shashi Tharoor",
      role: "Member of Parliament & Author",
      image: "/food/shashi.png",
      quote:
        "Food sustains life, encourages thought, nourishes the intellect, and expands your horizons (as well as your waistline!) Above all, good food, tastily made and tastefully presented, is a pleasure to view, consume and reflect upon. We all literally eat to live — in the fullest sense of the word ‘live’.",
    },
    {
      name: "Chef Ranveer Brar",
      role: "Masterchef India Judge & Culinary Artist",
      image: "/food/ranveer.webp",
      quote:
        "For me, Food For Thought Fest allows you to seep into the conversation about food a little deeper, and when this happens, your relationship with food becomes stronger.",
    },
    {
      name: "Mr. Rahul Dravid",
      role: "Former Indian Cricket Captain",
      image: "/food/rahul.png",
      quote:
        "At the outset, I would like to congratulate the S.A.A.G team for hosting the Food for Thought Fest. This convergence of ideas, flavors and cultures from the South Asian region will bring this part of the world closer.",
    },
  ];

  const magazines = [
    {
      title: "Heritage Gastronomy & Royal Culinary Traditions",
      desc: "Celebrating India’s royal kitchens and heritage cuisines by reviving age-old recipes, techniques, and regional food narratives. Food For Thought Fest positions cuisine as living history—preserving authenticity while presenting it on a contemporary, intellectual platform.",
      ref: "The Times of India – The Royal Ode to Odisha",
      year: "2024",
      img: "/food/toi.png",
    },
    {
      title: "Gastronomy as Intellectual Discourse",
      desc: "Food For Thought Fest redefines gastronomy as a serious intellectual subject, bringing together chefs, historians, policymakers, and cultural thinkers to explore food as identity, economics, history, and diplomacy.",
      ref: "Society Magazine – Gastronomy at Its Finest",
      year: "2019",
      img: "/food/society.png",
    },
    {
      title: "Breaking Economic & Cultural Misconceptions Through Food",
      desc: "Using gastronomy as a lens to challenge misconceptions around culture, economics, and development. The fest demonstrates how food intersects with policy, sustainability, and social structures.",
      ref: "IBLF Magazine – Breaking Misconceptions",
      year: "Archive",
      img: "/food/aerocitysuccess.png",
    },
    {
      title: "Wellness, Mindfulness & Post-Pandemic Living",
      desc: "Exploring food as a foundation for wellness and rejuvenation in a post-pandemic world. The fest emphasizes conscious eating, holistic health, and mindful living through expert-led discussions and curated experiences.",
      ref: "Aerocity Conversations – Food For Thought Fest",
      year: "2022",
      img: "/food/aerocitywell.avif",
    },
    {
      title: "Urban Cultural Confluence",
      desc: "Positioning Food For Thought Fest as a cultural anchor within urban ecosystems—bringing together hospitality, gastronomy, and intellectual exchange to redefine modern city experiences.",
      ref: "City News – Food For Thought at Aerocity",
      year: "2022",
      img: "/food/citynews.avif",
    },
    {
      title: "Collaborative Excellence & Global Partnerships",
      desc: "Showcasing Food For Thought Fest as a collaborative platform powered by global hospitality brands, institutions, and cultural partners—reinforcing its stature as a large-scale, high-impact gastronomic forum.",
      ref: "Aerocity Magazine – FFTF 2022 Success Feature",
      year: "2022",
      img: "/food/aerocity.avif",
    },
  ];

  const yearBlocks = [
    {
      year: "2025",
      videos: [
        {
          channel: "NDTV GoodTimes",
          title: "Food For Thought Fest 2025 Coverage",
          id: "7m9aXi6u7V0",
        },
      ],
    },
    {
      year: "2024",
      videos: [
        {
          channel: "News Coverage",
          title: "Ahmedabad Food Festival Inauguration",
          id: "QboCWHUaNXU",
        },
      ],
    },
    {
      year: "2022",
      videos: [
        {
          channel: "NewsX",
          title: "Cuisine, Culture, Conversations Galore",
          id: "GVJ2nOSuLGc",
        },
      ],
    },
    {
      year: "2019",
      videos: [
        {
          channel: "FFTF",
          title: "Food For Thought Fest 2019 - A Round Up",
          id: "HTA6-6rVlfs",
        },
        {
          channel: "SAAG",
          title: "5th Edition at GMR Square, Aerocity",
          id: "T7-eLwtWXSc",
        },
        {
          channel: "NDTV",
          title: "Series Highlight: 2015 - 2019",
          id: "Ig9p8cR5ssA",
        },
      ],
    },
    {
      year: "2018",
      videos: [
        {
          channel: "SAAG",
          title: "Special Coverage: Food for Thought Fest 2018",
          id: "O_iNrsPyJtI",
        },
      ],
    },
    {
      year: "2017",
      videos: [
        {
          channel: "NDTV",
          title: "Food For Thought Fest 2017 - Part 1",
          id: "QQBsp0oR6kE",
        },
        {
          channel: "NDTV",
          title: "Food For Thought Fest 2017 - Part 2",
          id: "c5Cb6LnQArU",
        },
      ],
    },
    {
      year: "2016",
      videos: [
        {
          channel: "NDTV Good Times",
          title: "Food For Thought Fest 2016 Coverage",
          id: "4KvqQez_tCU",
        },
      ],
    },
    {
      year: "2015",
      videos: [
        {
          channel: "NDTV",
          title: "Food For Thought Fest 2015 Coverage",
          id: "1gvSMnuxI-U",
        },
        {
          channel: "Associated Press",
          title: "Global Feature: FFTF 2015",
          id: "cYpRQumfblg",
        },
      ],
    },
  ];

  const socialReels = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/v/187o5gPsPD/?mibextid=wwXIfr",
      label: "Digital Pulse 01",
      height: "h-[300px] sm:h-[450px]",
      img: "/food/toi.png",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/v/1GbxbFy1ve/?mibextid=wwXIfr",
      label: "Cultural Highlights",
      height: "h-[250px] sm:h-[380px]",
      img: "/food/society.png",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/v/1CMXGeZLc4/?mibextid=wwXIfr",
      label: "Masterclass Moments",
      height: "h-[320px] sm:h-[520px]",
      img: "/food/aerocitysuccess.png",
    },
    {
      platform: "Instagram",
      url: "#",
      label: "Social Snippets",
      height: "h-[280px] sm:h-[420px]",
      img: "/food/aerocitywell.avif",
    },
    {
      platform: "YouTube",
      url: "#",
      label: "Festival Shorts",
      height: "h-[350px] sm:h-[550px]",
      img: "/food/citynews.avif",
    },
  ];

  const involvementHighlights = [
    "/food/imp/25.jpeg",
    "/food/imp/2.jpeg",
    "/food/imp/23.jpeg",
    "/food/imp/24.jpeg",
    "/food/imp/19.jpeg",
    "/food/imp/12.jpeg",
    // "/food/imp/3.jpeg",
    // "/food/imp/4.jpeg",
    // "/food/imp/5.jpeg",
    "/food/imp/20.jpeg",
    "/food/imp/29.jpeg",
    "/food/imp/30.jpeg",
    "/food/imp/28.jpeg",
    "/food/imp/26.jpeg",
    "/food/imp/27.jpeg",
    "/food/imp/6.jpeg",
    "/food/imp/7.jpeg",
    "/food/imp/8.jpeg",
    "/food/imp/31.jpeg",
    "/food/imp/32.jpeg",
    "/food/imp/33.jpeg",
    "/food/imp/34.jpeg",
    "/food/imp/35.jpeg",
    // "/food/imp/36.jpeg",
    "/food/imp/9.jpeg",
    // "/food/imp/11.jpeg",
    // "/food/imp/13.jpeg",
    "/food/imp/15.jpeg",
    // "/food/imp/16.jpeg",
    "/food/imp/17.jpeg",
    // "/food/imp/18.jpeg",
    "/food/imp/1.jpeg",
    "/food/imp/36.jpeg",
    // "/food/imp/38.jpeg",
    "/food/imp/39.jpeg",
    "/food/imp/40.jpeg",
    // "/food/imp/21.jpeg",
    // "/food/imp/22.jpeg",
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">
      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 lg:p-12 bg-charcoal/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/60 transition-colors flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-bold"
              >
                Close <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-[40vh] lg:min-h-[60vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-30">
          <ParallaxImage
            src="/banner/food.png"
            alt="Food For Thought Fest and South Asian gastronomy platform by Haute Services and SAAG"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Reveal>
            <nav className="mb-8">
              <Link
                href="/lifestyle"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />{" "}
                Back
              </Link>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
              Culinary{" "}
              <span className="italic font-light text-white/90 ml-2">
                Festivals
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
              Creating authoritative platforms for South Asian gastronomy, where
              heritage cuisines meet high-level industry discourse.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- FLAGSHIP: FOOD FOR THOUGHT FEST --- */}
      <section className="py-24 lg:py-40 max-w-screen-2xl mx-auto">
        <div className="px-6 lg:px-12 grid md:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          <div className="md:col-span-11 lg:col-span-8">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                Our Flagship Event
              </span>
              <h2 className="text-5xl lg:text-8xl font-serif text-charcoal mb-12 leading-tight">
                Food For <br />
                <span className="italic">Thought Fest</span>
              </h2>
              <p className="text-xl lg:text-3xl text-charcoal/80 font-serif leading-relaxed mb-12">
                "The defining platform for culinary unity and excellence across
                the South Asian subcontinent."
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-8 text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
                <p>
                  Founded in 2015 by SAAG (South Asian Association for
                  Gastronomy), Food For Thought Fest has evolved into the
                  authoritative platform for South Asian gastronomy. It is the
                  only event from the region to be featured four times by the{" "}
                  <strong>Associated Press (A.P.)</strong>.
                </p>
                <div className="py-12 bg-white flex flex-col items-center justify-center border border-charcoal/5 shadow-sm my-12 md:my-16 relative overflow-hidden group max-w-md mx-auto lg:mx-0">
                  <Image
                    src="/food/SAAGAWARD.avif"
                    alt="SAAG Food Festival of the Year 2019 award, National Gastronomy Recognition"
                    height={240}
                    width={240}
                    className="w-40 md:w-52 h-40 md:h-52 text-charcoal/20 mb-6 group-hover:scale-105 transition-transform duration-700"
                  />
                  <h4 className="text-lg md:text-xl font-serif mb-3 text-center text-charcoal">
                    "Food Festival of the Year 2019"
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-charcoal/50 uppercase tracking-[0.2em] font-bold">
                    National Gastronomy Recognition
                  </p>
                </div>
                <p>
                  It is more than a festival; it is a networking hub for
                  industry leaders, a knowledge repository for culinary
                  traditions, and a thought-leadership forum where culture meets
                  policy and innovation.
                </p>
                <a
                  href="https://www.fftfest.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 group text-charcoal border-b border-charcoal/20 pb-2 hover:border-charcoal transition-all uppercase tracking-widest text-xs font-bold mt-8"
                >
                  Visit Official FFTF Website
                  <Globe className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Legacy & Reach Cards */}
        <div className="px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-charcoal text-white py-16 px-6 md:p-16 lg:p-24 rounded-sm overflow-hidden relative mb-40">
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-serif mb-12">
                The Impact
              </h3>
              <div className="grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                {[
                  { val: "2015", label: "Inaugural Year" },
                  { val: "7+", label: "Editions Across India" },
                  { val: "50+", label: "Master Chefs" },
                  { val: "4x", label: "A.P. Features" },
                ].map((stat, i) => (
                  <div key={i}>
                    <span className="block text-4xl md:text-5xl lg:text-7xl font-light mb-3">
                      {stat.val}
                    </span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- TESTIMONIALS SECTION --- */}
        <div className="mb-40 px-6 lg:px-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-8 block">
              Voices of Excellence
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif mb-20 leading-tight">
              Legendary <span className="italic">Endorsements</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-24 lg:gap-32">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pt-20 border-t border-charcoal/10">
                  <div className="absolute -top-12 left-0 w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role}, testimonial for Food For Thought Fest`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Quote className="w-10 md:w-12 h-10 md:h-12 text-charcoal/10 mb-8" />
                  <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-charcoal/80">
                    "{t.quote}"
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-widest">
                      {t.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-charcoal/40 uppercase tracking-widest font-bold">
                      {t.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* REELS - MASONRY GRID */}
        {/* <div className="mb-40">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-px bg-charcoal/20" />
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/40">The Festival Pulse</span>
                        </div>
                    </Reveal>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {socialReels.map((reel, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <Link
                                    href={reel.url}
                                    target="_blank"
                                    className={`group relative ${reel.height} block bg-charcoal overflow-hidden rounded-sm shadow-xl break-inside-avoid`}
                                >
                                    
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                        <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                            {reel.platform === 'Facebook' && <Facebook className="w-3 h-3 text-white" />}
                                            {reel.platform === 'Instagram' && <Instagram className="w-3 h-3 text-white" />}
                                            {reel.platform === 'YouTube' && <Play className="w-3 h-3 text-white" />}
                                        </div>
                                        <span className="text-[8px] uppercase font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">{reel.platform}</span>
                                    </div>

                                    
                                    <Image
                                        src={reel.img}
                                        alt={reel.label}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />


                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl">
                                            <Play className="w-4 h-4 text-charcoal fill-charcoal" />
                                        </div>
                                    </div>

                                    
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h4 className="text-white text-xs lg:text-sm font-serif italic opacity-80 group-hover:opacity-100 transition-opacity">
                                            {reel.label}
                                        </h4>
                                    </div>
                                </Link>
                            </Reveal>
                        ))
                        }
                    </div >
                </div > */}

        {/* --- LITERARY & PRESS HIGHLIGHTS --- */}
        <div className="px-6 lg:px-12">
          <Reveal>
            <div className="flex items-baseline justify-between mb-20 border-b border-charcoal/10 pb-8">
              <h2 className="text-4xl lg:text-7xl font-serif leading-tight">
                Literary <span className="italic">Features</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">
            {magazines.map((mag, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group space-y-4 sm:space-y-10">
                  <div className="relative aspect-10/10 overflow-hidden rounded-sm shadow-lg sm:shadow-xl">
                    <Image
                      src={mag.img}
                      alt={`${mag.title} - ${mag.ref} ${mag.year}, Food For Thought Fest literary feature`}
                      fill
                      className="object-cover transition-all duration-150 group-hover:scale-105 hover:opacity-100"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-8">
                    <div className="space-y-1 sm:space-y-3">
                      <span className="text-[8px] sm:text-[11px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.4em] text-charcoal/30 block group-hover:text-charcoal transition-colors line-clamp-1">
                        {mag.ref}
                      </span>
                      <h3 className="text-sm sm:text-3xl lg:text-5xl font-serif text-charcoal leading-tight group-hover:italic transition-all duration-700 line-clamp-2 sm:line-clamp-none">
                        {mag.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-charcoal/60 font-light leading-relaxed max-w-2xl ">
                      {mag.desc}
                    </p>
                    <div className="pt-2 sm:pt-4 items-center gap-2 sm:gap-4 group-hover:gap-6 transition-all duration-500 opacity-0 group-hover:opacity-100 hidden sm:flex">
                      <div className="h-px w-8 sm:w-12 bg-charcoal/20 group-hover:w-16 sm:group-hover:w-20 group-hover:bg-charcoal transition-all" />
                      <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">
                        Read Detail
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

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
                  id: "3yjSjzWYwkk",
                  url: "https://youtube.com/shorts/3yjSjzWYwkk?si=fah6gZ825jCyA6kc",
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

              <div className="relative h-[40vh]  w-full mb-12 rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/food/imp/25.jpeg"
                  alt="Haute Services founder Maneesh Baheti with celebrity chef Vikas Khanna at Food For Thought Fest"
                  fill
                  className="h-full group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-2xl lg:text-4xl font-serif text-white/90 leading-tight">
                  "With the living legend, Chef{" "}
                  <span className="italic text-white">Vikas Khanna</span>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-charcoal">
          <div className="max-w-screen-2xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-16 lg:mb-24 text-center text-white">
                Gallery of Culinary Stars
              </h2>
            </Reveal>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {involvementHighlights.map((item, i) => (
                <Reveal key={i} delay={(i % 4) * 0.1}>
                  <div className="relative group overflow-hidden bg-white/5 rounded-sm break-inside-avoid shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={item}
                      alt="Food For Thought Fest culinary festival moment with chefs and dignitaries"
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

        {/* GLOBAL RECOGNITION SUMMARY */}
        <div className="px-6 lg:px-12">
          <div className="grid bg-charcoal text-white py-16 md:py-24 px-8 md:px-16 my-24 md:grid-cols-2 gap-12 lg:gap-16 items-center rounded-sm">
            <Reveal>
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-5xl font-serif leading-tight">
                  Global Impact
                </h3>
                <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed">
                  Food For Thought Fest remains the only South Asian festival
                  featured four times by the Associated Press (A.P.) global
                  wires, solidifying its place as a cultural milestone in the
                  region.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="hidden md:block p-10 lg:p-12 bg-white/5 border border-white/10 rounded-sm italic text-xl lg:text-2xl font-serif text-white/80">
                "More than just food, it's about the stories, the people, and
                the shared heritage that connects us all."
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- NEWS & PRESS COVERAGE --- */}
        <div className="mb-40 px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-charcoal/10 pb-12">
              <div>
                <h2 className="text-3xl lg:text-7xl font-serif leading-tight text-charcoal">
                  Broadcast
                  <span className="italic"> Excellence</span>
                </h2>
              </div>
              <div className="max-w-md lg:text-right">
                <p className="text-lg text-charcoal/60 font-light leading-relaxed">
                  A decade of Food For Thought Fest captured across South Asia's
                  leading national television networks and premier news
                  channels.
                </p>
              </div>
            </div>
          </Reveal>

          {/* VIDEO SECTION - YEARLY COVERAGE */}
          <div className="space-y-14 mb-40">
            {yearBlocks.map((yearBlock, i) => (
              <div key={i} className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
                  {yearBlock.videos.map((vid, j) => (
                    <Reveal key={j} delay={j * 0.1}>
                      <div
                        className="group cursor-pointer bg-white p-8 lg:p-12 border border-charcoal/5 hover:border-charcoal/10 transition-all duration-700 shadow-sm hover:shadow-2xl"
                        onClick={() => setSelectedVideo(vid.id)}
                      >
                        <div className="mb-10 space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-charcoal/40">
                              {vid.channel} Broadcast
                            </span>
                          </div>
                          <h4 className="text-2xl lg:text-3xl font-serif text-charcoal leading-tight group-hover:italic transition-all duration-500">
                            {vid.title}
                          </h4>
                        </div>

                        <div className="relative aspect-video overflow-hidden bg-charcoal rounded-sm shadow-inner transition-all duration-700">
                          <Image
                            src={`https://i.ytimg.com/vi/${vid.id}/hqdefault.jpg`}
                            alt={`${vid.title} - ${vid.channel} broadcast coverage of Food For Thought Fest`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/20 group-hover:bg-transparent transition-all duration-500">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-charcoal fill-white group-hover:fill-charcoal transition-all" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ADDITIONAL PRESS CLIPPINGS */}
          {/* <div className="grid lg:grid-cols-4 gap-8">
                        {[
                            { source: "The Times of India", date: "Dec 2019", text: "FFTF featured as the most anticipated culinary event of the year." },
                            { source: "India Today", date: "Nov 2018", text: "A celebration of subcontinental heritage food and thought." },
                            { source: "Hindustan Times", date: "Oct 2017", text: "Where gastronomy meets intellectual discourse in the capital." },
                            { source: "Associated Press", date: "Jan 2020", text: "Refining the South Asian culinary landscape for a global audience." }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-8 border border-charcoal/5 bg-white/50 hover:bg-white transition-all duration-500 h-full flex flex-col justify-between group shadow-sm hover:shadow-xl">
                                    <div className="space-y-6">
                                        <Newspaper className="w-8 h-8 text-charcoal/10 group-hover:text-charcoal/30 transition-colors" />
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40 block">{item.source}</span>
                                            <span className="text-[8px] uppercase tracking-widest font-bold text-charcoal/20 block">{item.date}</span>
                                        </div>
                                        <p className="text-sm text-charcoal/60 leading-relaxed italic border-l-2 border-charcoal/5 pl-4 group-hover:border-charcoal/20 transition-all">
                                            "{item.text}"
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-charcoal/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <span className="text-[10px] uppercase tracking-widest font-bold">View Article</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div> */}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight italic">
            Discuss Your Next Event
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to discuss your heritage culinary festivals,
            subcontinental diplomacy, or cultural curation.
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
