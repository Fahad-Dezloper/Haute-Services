'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Scissors, Users, ArrowUpRight } from 'lucide-react';

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

export default function FashionShowsPage() {
    const fashionWork = [
        {
            title: "Dreamers Are Achievers",
            role: "Producer / Partner",
            date: "Feb 2017",
            location: "Khubani, Andaz Hotel, Aerocity",
            desc: "Fashion show celebrating women achievers, collab with Sayali Bhagat, Rina Dhaka, and Liza Varma.",
            highlights: "Cultural + Fashion Crossover",
            tag: "Production",
            image: "/fashion/2023Khubani.jpg"
        },
        {
            title: "Audi e-tron Launch",
            role: "Partner / Curator",
            date: "26 Sep 2021",
            location: "New Delhi",
            desc: "Fashion integrated automotive launch featuring designers Charu & Arjun Parashar.",
            highlights: "Luxury Brand x Fashion",
            tag: "Luxury Launch",
            image: "/fashion/Audi.jpg"
        },
        {
            title: "Khubani Fashion Event",
            role: "Event Support",
            date: "6 Feb 2024",
            location: "Andaz Hotel, Aerocity",
            desc: "Boutique fashion show and after party with Skylark and Lakmé.",
            highlights: "Multi-brand Showcase",
            tag: "Lifestyle",
            image: "/fashion/Khubani.png"
        },
        {
            title: "Maison de Bose Fashion Week – Jury",
            role: "Jury & Advisory",
            date: "2024",
            location: "Alliance Française, Delhi",
            desc: "Jury for model selection alongside Maison de Bose team, evaluating talent and runway readiness.",
            highlights: "Talent Evaluation",
            tag: "Advisory",
            image: "/fashion/Maison.jpeg"
        },
        {
            title: "DFW Grand Finale – Showstopper",
            role: "Showstopper / Maison de Bose",
            date: "27–28 Dec 2025",
            location: "Mapple Gold, Radisson Blu, Paschim Vihar",
            desc: "Featured as the celebrity showstopper for the Maison de Bose Grand Finale showcase at Designer Fashion Week Edition 5.",
            highlights: "Grand Finale Showstopper",
            tag: "Runway",
            image: "/fashion/dfw2.png"
        }
    ];

    const scopeOfWork = [
        { title: "Production & Partnerships", icon: Sparkles, desc: "End-to-end fashion show production and strategic event partnering." },
        { title: "Jury & Advisory", icon: Users, desc: "Talent selection and industry advisory for fashion weeks and platforms." },
        { title: "Designer Collaborations", icon: Scissors, desc: "Runway showcases and collaborative curation with leading designers." },
        { title: "Luxury Brand Launches", icon: ArrowUpRight, desc: "Integrated launch events combining fashion, hospitality, and culture." }
    ];

    const involvementHighlights = [
        { title: "Talent Jury", ref: "Maison de Bose", year: "2024", aspect: "aspect-square" },
        { title: "Runway Production", ref: "Khubani", year: "2017", aspect: "aspect-[3/4]" },
        { title: "Luxury Launch", ref: "Audi India", year: "2021", aspect: "aspect-square" },
        { title: "Finale Curation", ref: "DFW Edition 5", year: "2025", aspect: "aspect-[4/5]" },
        { title: "Brand Support", ref: "Lakmé", year: "2024", aspect: "aspect-square" },
        { title: "Grand Finale", ref: "Radisson Blu", year: "2025", aspect: "aspect-[3/5]" }
    ];

    return (
        <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
                <div className="absolute inset-0 opacity-30">
                    <ParallaxImage
                        src="/fashion/banner.jpeg"
                        alt="High Fashion Atmosphere"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <Reveal>
                        <nav className="mb-8">
                            <Link href="/lifestyle" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back
                            </Link>
                        </nav>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
                            Fashion <span className="italic font-light text-white/90 ml-2">& Lifestyle</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
                            Curating high-impact showcases, launches, and cultural experiences for global brands and creative directors.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- FEATURED WORKS --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
                <Reveal>
                    <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-8 block">Featured Portfolio</span>
                    <h2 className="text-4xl lg:text-7xl font-serif text-charcoal mb-20 leading-tight">Industry <span className="italic">Showcases</span></h2>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {fashionWork.map((work, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group space-y-10">
                                <div className="relative h-fit w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-xl">
                                    {/* <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-all duration-700 z-10" /> */}
                                    {/* USER: PLACE IMAGE HERE */}
                                    {/* <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-serif italic text-2xl p-12 text-center">
                                        Asset: {work.title}
                                    </div> */}
                                    {/* <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-charcoal shadow-lg">
                                            {work.tag}
                                        </div>
                                    </div> */}


                                    <Image src={work.image} alt={work.title} width={400} height={400} className="w-full h-full object-cover" />
                                    {work.image == "/fashion/dfw2.png" && <Image src="/fashion/dfw.png" alt={work.title} width={400} height={400} className="absolute bottom-0 right-0 w-[40vw] h-[20vh] object-cover" />}
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-xs uppercase tracking-widest font-bold text-charcoal/40">{work.role}</span>
                                        <h3 className="text-2xl lg:text-4xl font-serif mt-2 leading-tight">{work.title}</h3>
                                    </div>
                                    <p className="text-charcoal/60 font-light leading-relaxed text-lg italic">
                                        {work.desc}
                                    </p>
                                    <div className="pt-6 border-t border-charcoal/5 grid grid-cols-2 gap-8">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 block mb-3">Highlights</span>
                                            <span className="text-xs font-medium text-charcoal/60 block">
                                                {work.highlights}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 block mb-3">Location & Date</span>
                                            <span className="text-xs font-medium text-charcoal/60 block">
                                                {work.location} <br />
                                                <span className="opacity-50 tracking-widest uppercase text-[9px]">{work.date}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>


            {/* --- SCOPE OF WORK --- */}
            <section className="py-24 lg:py-40 bg-white border-y border-charcoal/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8">
                    {scopeOfWork.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="space-y-6">
                                <item.icon className="w-8 h-8 text-charcoal/20" strokeWidth={1} />
                                <h3 className="text-xl font-serif leading-tight">{item.title}</h3>
                                <p className="text-sm text-charcoal/50 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* --- MASONRY GRID: INVOLVEMENT --- */}
            <section className="py-24 lg:py-40 bg-charcoal text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <Reveal>
                        <div className="mb-20">
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">The Visual Ledger</span>
                            <h2 className="text-4xl lg:text-7xl font-serif leading-tight">Involvement & <br /><span className="italic">Highlights</span></h2>
                        </div>
                    </Reveal>

                    <div className="columns-2 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {involvementHighlights.map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className={`relative group overflow-hidden bg-white/5 rounded-sm ${item.aspect}`}>
                                    <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0">
                                        {/* USER: PLACE MASONRY IMAGE HERE */}
                                        <div className="w-full h-full flex items-center justify-center text-white/10 font-serif italic text-xl p-8 text-center leading-tight">
                                            Highlight: <br /> {item.title}
                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-linear-to-t from-charcoal/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/50">{item.year} — {item.ref}</span>
                                        <h4 className="text-base sm:text-lg font-serif mt-1">{item.title}</h4>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            {/* --- CTA --- */}
            <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight italic">
                        Elevate Your Fashion Narrative
                    </h2>
                    <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
                        Connect with us to discuss high-impact runway productions or luxury brand launches.
                    </p>
                    <a href="mailto:maneesh@hauteservices.in" className="inline-block bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-colors font-serif italic text-xl">
                        Collaborate With Us
                    </a>
                </Reveal>
            </section>
        </main>
    );
}
