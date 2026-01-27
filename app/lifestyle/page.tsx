'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Globe, Utensils, BookOpen, Music, Users, Award } from 'lucide-react';

// --- Shared Components ---

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
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

export default function LifestylePage() {
    return (
        <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex flex-col justify-end pb-24 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
                <div className="absolute inset-0 opacity-60">
                    <ParallaxImage
                        src="/images/lifestyle.png"
                        alt="Fine Dining Event"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/20 to-charcoal" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <Reveal>
                        {/* <nav className="mb-12">
                            <Link href="/" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
                            </Link>
                        </nav> */}
                        <span className="block text-white/50 uppercase tracking-[0.4em] text-xs font-bold mb-6">Curating Cultural Milestones</span>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white mb-10 leading-[0.85] tracking-tighter">
                            Lifestyle <br />
                            <span className="italic font-light text-white/90 pl-12 lg:pl-24">Events</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed border-l-2 border-white/20 pl-8 mt-12">
                            Pioneering the region's most ambitious gastronomy festivals and high-profile boutique launches for international culinary masters.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- FLAGSHIP INITIATIVE: FFTF --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">Flagship Initiative</span>
                            <h2 className="text-5xl lg:text-8xl font-serif text-charcoal mb-12 leading-tight">
                                Food For <br />
                                <span className="italic">Thought Fest</span>
                            </h2>
                            <p className="text-xl lg:text-3xl text-charcoal/80 font-serif leading-relaxed mb-12">
                                "Celebrating regional unity through culinary diversity."
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="space-y-8 text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
                                <p>
                                    Founded in 2015 by SAAG (South Asian Association for Gastronomy), Food For Thought Fest has evolved into the authoritative platform for South Asian gastronomy—the only event from the region to be featured four times by the <strong>Associated Press (A.P.)</strong>.
                                </p>
                                <div className="p-8 bg-cream border-l-4 border-charcoal my-10">
                                    <Award className="w-8 h-8 text-charcoal/30 mb-4" strokeWidth={1} />
                                    <h4 className="text-xl font-serif mb-2 text-charcoal">Awarded "Food Festival of the Year 2019"</h4>
                                    <p className="text-xs text-charcoal/40 uppercase tracking-[0.2em] font-bold">National Gastronomy Recognition</p>
                                </div>
                                <p>
                                    It is more than a festival; it is a networking hub for industry leaders, a knowledge repository for culinary traditions, and a thought-leadership forum where culture meets policy and innovation.
                                </p>
                                <Link
                                    href="https://www.fftfest.in"
                                    target="_blank"
                                    className="inline-flex items-center gap-4 group text-charcoal border-b border-charcoal/20 pb-2 hover:border-charcoal transition-all uppercase tracking-widest text-xs font-bold mt-8"
                                >
                                    Visit Official Website
                                    <Globe className="w-4 h-4 transition-transform group-hover:rotate-12" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* FFTF Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            title: "Food Fest",
                            icon: Utensils,
                            desc: "A curated culinary showcase featuring heritage cuisines from SAARC nations and luxury hotel pop-ups."
                        },
                        {
                            title: "Thought Fest",
                            icon: BookOpen,
                            desc: "High-level panel discussions with scholars, policy makers, and Michelin-starred chefs on sustainability and culture."
                        },
                        {
                            title: "Fun Fest",
                            icon: Music,
                            desc: "Evening cultural performances and curated family experiences that celebrate the spirit of South Asia."
                        }
                    ].map((pillar, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="p-12 bg-white border border-charcoal/5 rounded-sm hover:shadow-2xl transition-all duration-700 h-full">
                                <pillar.icon className="w-10 h-10 text-charcoal/20 mb-8" strokeWidth={1} />
                                <h3 className="text-2xl font-serif mb-6">{pillar.title}</h3>
                                <p className="text-charcoal/60 font-light leading-relaxed">{pillar.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Stats / Locations */}
                <div className="grid lg:grid-cols-2 gap-12 bg-charcoal text-white p-12 lg:p-24 rounded-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Users className="w-64 h-64" />
                    </div>
                    <Reveal>
                        <h3 className="text-3xl font-serif mb-12">Legacy & Reach</h3>
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <span className="block text-4xl lg:text-6xl font-light mb-2">2015</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">Inaugural Year</span>
                            </div>
                            <div>
                                <span className="block text-4xl lg:text-6xl font-light mb-2">7+</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">Global Editions</span>
                            </div>
                            <div>
                                <span className="block text-4xl lg:text-6xl font-light mb-2">2+</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">Host Cities</span>
                            </div>
                            <div>
                                <span className="block text-4xl lg:text-6xl font-light mb-2">50+</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">Master Chefs</span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="space-y-8 border-l border-white/10 pl-12 lg:pl-24">
                            <p className="text-white/60 font-light italic text-lg leading-relaxed">
                                "The festival has hosted legendary figures from Dr. Shashi Tharoor to Chef Vikas Khanna, fostering a dialogue that transcends borders."
                            </p>
                            <div className="space-y-2">
                                <div className="text-xs uppercase tracking-widest font-bold">Notable Locations:</div>
                                <p className="text-white/80 font-light">India Habitat Centre, Taj Palace, Sabarmati Riverfront.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* --- FFTF MEDIA COVERAGE --- */}
                <div className="mt-40">
                    <Reveal>
                        <h3 className="text-2xl lg:text-5xl font-serif mb-16 text-center text-charcoal">Global Media Coverage</h3>
                    </Reveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { source: "Associated Press", title: "South Asia's Culinary Identity", date: "Multiple Features", desc: "The only South Asian festival featured 4 times (2015-2024) by A.P. global wires." },
                            { source: "India Today", title: "Regional Unity Through Food", date: "Inaugural Feature", desc: "Extensive coverage of the first edition's impact on SAARC culinary diplomacy." },
                            { source: "YourStory", title: "Scaling Gastronomy", date: "Dec 2022", desc: "Profile on how FFTF convergence of professionals is redefining the hospitality landscape." },
                            { source: "NDTV Good Times", title: "Taste of Luxury", date: "Strategic Partner", desc: "Showcasing the Luxury Hotel Court and the artistry of South Asian master chefs." }
                        ].map((news, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="border-t border-charcoal/10 pt-8 group">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-3 block">{news.source}</span>
                                    <h4 className="text-xl font-serif mb-4 group-hover:text-charcoal/60 transition-colors leading-tight">{news.title}</h4>
                                    <p className="text-sm text-charcoal/50 font-light leading-relaxed">{news.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BOOK LAUNCHES SECTION --- */}
            <section className="bg-white py-24 lg:py-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <Reveal>
                        <div className="flex flex-col items-center text-center mb-24">
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-4 block">Strategic Curations</span>
                            <h2 className="text-4xl lg:text-7xl font-serif text-charcoal">Global Book Launches</h2>
                        </div>
                    </Reveal>

                    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-32">
                        {[
                            {
                                author: "Asma Khan",
                                book: "Ammu: Indian Home-Cooking to Nourish the Soul",
                                tag: "Chef, Darjeeling Express",
                                desc: "Strategic launch curation for the Netflix 'Chef's Table' star, celebrating the heritage of home cooking.",
                                image: "/images/books/asmakhan.jpg"
                            },
                            {
                                author: "Vicky Ratnani",
                                book: "Urban Desi",
                                tag: "Celebrity Chef & Author",
                                desc: "Conceptualized and executed the launch of Chef Vicky's modern take on global Indian cuisine.",
                                image: "/images/books/vickyratnani.jpg"
                            },
                            {
                                author: "Rukmini Rana",
                                book: "The Royal Nepali Table",
                                tag: "Cultural Historian",
                                desc: "Highlighting the royal culinary traditions of Nepal through a curated literary and gastronomic event.",
                                image: "/images/books/rukmini.jpg"
                            },
                            {
                                author: "Abhijit Saha",
                                book: "Avant-Garde & Beyond",
                                tag: "Pioneer of Modern Indian Gastronomy",
                                desc: "Launching the visual and narrative journey of one of India's most celebrated avant-garde chefs.",
                                image: "/images/books/abhijit.jpg"
                            }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group cursor-default">
                                    <div className="relative aspect-4/5 bg-charcoal/5 mb-10 overflow-hidden rounded-sm shadow-xl">
                                        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-all duration-700" />
                                        {/* Placeholder for actual image */}
                                        <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-serif italic text-4xl">
                                            Asset: {item.author}
                                        </div>
                                    </div>
                                    <div className="max-w-md">
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-3 block">{item.tag}</span>
                                        <h3 className="text-3xl font-serif mb-4 leading-tight">{item.author}</h3>
                                        <p className="text-xl font-serif italic mb-6 text-charcoal/60 leading-snug">"{item.book}"</p>
                                        <p className="text-charcoal/70 font-light leading-relaxed border-l-2 border-charcoal/10 pl-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 bg-charcoal text-white text-center">
                <Reveal>
                    <h2 className="text-4xl lg:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
                        Curating the <span className="italic">extraordinary</span>.
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto mb-16 font-light text-lg">
                        Connect with us to conceptualize your flagship festival, boutique book launch, or luxury cultural experience.
                    </p>
                    <a href="mailto:contact@hauteservices.in" className="inline-flex items-center gap-6 group bg-white text-charcoal px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-white/90 transition-all">
                        Work With Us
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </Reveal>
            </section>
        </main>
    );
}
