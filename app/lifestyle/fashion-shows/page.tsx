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
    const fashionEvents = [
        {
            title: "Heritage Luxury Showcase",
            client: "Shantanu & Nikhil",
            desc: "A boutique curation highlighting the intersection of regality and modern luxury retail standards.",
            image: "/news/shantanu.png",
            tag: "Luxury Retail"
        },
        {
            title: "Couture & Craft",
            client: "High-End Luxury Event",
            desc: "Organizing exclusive fashion experiences that prioritize craftsmanship and personalized audience engagement.",
            image: "/work/fashion1.jpg",
            tag: "Boutique Showcase"
        }
    ];

    return (
        <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] flex flex-col justify-end pb-24 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
                <div className="absolute inset-0 opacity-40">
                    <ParallaxImage
                        src="https://static.wixstatic.com/media/e86273_57cdee80347a45fa8d0d12a449a0768b~mv2.png?originWidth=1152&originHeight=832"
                        alt="High Fashion Atmosphere"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/20 to-charcoal" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <Reveal>
                        <nav className="mb-12">
                            <Link href="/lifestyle" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Lifestyle
                            </Link>
                        </nav>
                        <span className="block text-white/50 uppercase tracking-[0.4em] text-xs font-bold mb-6">Vertical 03</span>
                        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-white mb-8 leading-[0.85] tracking-tighter">
                            Fashion <br />
                            <span className="italic font-light text-white/90 pl-12 lg:pl-24">Shows</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed border-l-2 border-white/20 pl-8 mt-12">
                            Transforming the runway into a narrative medium for India's most prestigious couture and luxury brands.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- EXPERIENCE --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">The Haute Standard</span>
                            <h2 className="text-4xl lg:text-7xl font-serif text-charcoal mb-12 leading-tight">Curation of <br /> <span className="italic">Luxury Experiences</span></h2>
                            <p className="text-lg lg:text-2xl text-charcoal/70 font-light leading-relaxed mb-16">
                                We approach fashion not just as a display of garments, but as a strategic excellence project. From training teams on brand standards to organizing the event itself, we ensure every touchpoint reflects luxury.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* --- EVENTS GRID --- */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {fashionEvents.map((event, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group">
                                <div className="relative aspect-4/5 bg-charcoal/5 mb-10 overflow-hidden rounded-sm shadow-xl">
                                    <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-all duration-700 z-10" />
                                    {/* Placeholder if specific asset not found */}
                                    <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-serif italic text-4xl p-12 text-center">
                                        {event.title}
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal shadow-lg">
                                            {event.tag}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 block mb-2">{event.client}</span>
                                    <h3 className="text-3xl font-serif text-charcoal leading-tight group-hover:italic transition-all duration-500">{event.title}</h3>
                                    <p className="text-charcoal/60 font-light leading-relaxed max-w-md">
                                        {event.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* --- VALUES --- */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Brand Standards",
                                icon: Scissors,
                                desc: "Developing comprehensive manuals that define every aspect of the client experience."
                            },
                            {
                                title: "High-Profile Curation",
                                icon: Sparkles,
                                desc: "Selecting the right environments and audiences to elevate brand perception."
                            },
                            {
                                title: "Operational Excellence",
                                icon: Users,
                                desc: "Ensuring flawless execution through expert-led training and on-site management."
                            }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-12 border border-charcoal/5 bg-cream/20 hover:shadow-xl transition-all duration-700 h-full">
                                    <item.icon className="w-10 h-10 text-charcoal/20 mb-8" strokeWidth={1} />
                                    <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                                    <p className="text-charcoal/60 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 bg-charcoal text-white text-center">
                <Reveal>
                    <h2 className="text-4xl lg:text-6xl font-serif mb-12 italic">Elevate Your Brand Showcase</h2>
                    <Link href="mailto:contact@hauteservices.in" className="inline-flex items-center gap-6 group bg-white text-charcoal px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-white/90 transition-all">
                        Work With Us
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </Reveal>
            </section>
        </main>
    );
}
