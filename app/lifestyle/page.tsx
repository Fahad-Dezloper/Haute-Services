'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { mediaCoverage } from '@/lib/data';

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

export default function LifestylePage() {
    const categories = [
        {
            title: "Culinary Festivals",
            subtitle: "Food For Thought Fest",
            desc: "South Asia's definitive platform for gastronomy, recognized four times by the Associated Press.",
            href: "/lifestyle/culinary-festivals",
            img: "/images/lifestyle.png",
        },
        {
            title: "Book Launches",
            subtitle: "Strategic Literary Curation",
            desc: "Launching the narratives of global culinary masters, from Netflix stars to royal historians.",
            href: "/lifestyle/book-launches",
            img: "/work/bigArt.jpg",
        },
        {
            title: "Fashion Shows",
            subtitle: "Luxury Excellence",
            desc: "Organizing luxury events and brand standard excellence projects for elite couture brands.",
            href: "/lifestyle/fashion-shows",
            img: "https://static.wixstatic.com/media/e86273_57cdee80347a45fa8d0d12a449a0768b~mv2.png?originWidth=1152&originHeight=832",
        },
        {
            title: "Film Festival",
            subtitle: "Cultural Storytelling",
            desc: "Advising at SAFACH to shape the future of South Asian culinary cinema and heritage through film.",
            href: "/lifestyle/film-festival",
            img: "/images/about.png",
        }
    ];

    return (
        <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">

            <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
                <div className="absolute inset-0 opacity-40">
                    <ParallaxImage
                        src="/images/lifestyle.png"
                        alt="Stunning Lifestyle Event"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
                            Lifestyle <span className="italic font-light text-white/90 ml-2">Events</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
                            Curating extraordinary experiences that bridge the gap between cultural heritage and modern luxury.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- CATEGORIES GRID --- */}
            <section className="py-20 lg:py-40 px-6 lg:px-12 max-w-screen-2xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-x-16 gap-y-24 lg:gap-y-32">
                    {categories.map((cat, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <Link href={cat.href} className="group block">
                                <div className="relative aspect-16/10 overflow-hidden mb-10 bg-charcoal/5 rounded-sm shadow-xl">
                                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-all duration-700 z-10" />
                                    <Image
                                        src={cat.img}
                                        alt={cat.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transform group-hover:rotate-45 transition-transform duration-500">
                                            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-charcoal" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                                        <div className="px-4 py-2 bg-white/95 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-charcoal shadow-sm">
                                            0{i + 1}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-charcoal/5 pb-6">
                                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30">
                                            {cat.subtitle}
                                        </span>
                                        <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30 group-hover:text-charcoal transition-colors">
                                                Explore
                                            </span>
                                            <div className="h-px w-6 bg-charcoal/10 group-hover:w-12 group-hover:bg-charcoal transition-all duration-500" />
                                        </div>
                                    </div>
                                    <div className="max-w-xl">
                                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal mb-6 group-hover:italic transition-all duration-700">
                                            {cat.title}
                                        </h3>
                                        <p className="text-base sm:text-lg text-charcoal/50 font-light leading-relaxed">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* --- MISSION --- */}
            <section className="py-24 lg:py-40 bg-charcoal text-white text-center">
                <Reveal>
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-serif mb-12 italic leading-tight">"We don't just host events, we create cultural milestones."</h2>
                        <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">Haute Lifestyle Division</p>
                    </div>
                </Reveal>
            </section>

            {/* --- MEDIA & PRESS --- */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                    <Reveal>
                        <h2 className="text-3xl lg:text-5xl font-serif mb-24 text-center">Press & Recognition</h2>
                    </Reveal>
                    <div className="grid md:grid-cols-3 gap-12">
                        {mediaCoverage.filter(item => item.category === 'Interview' || item.category === 'Award' || item.source.includes('Outlook') || item.source.includes('Fortune')).slice(0, 3).map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-10 border border-charcoal/5 bg-cream/20 group hover:border-charcoal/20 transition-all duration-500 rounded-sm shadow-sm flex flex-col h-full">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40 block mb-2">{item.source}</span>
                                    <h3 className="text-2xl font-serif mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-charcoal/60 line-clamp-3 mb-6 font-light">{item.description}</p>
                                    <div className="mt-auto pt-6 border-t border-charcoal/5 flex items-center justify-between">
                                        <span className="text-[10px] text-charcoal/40 uppercase tracking-widest">{item.date}</span>
                                        {item.link && (
                                            <Link href={item.link} target="_blank" className="text-charcoal hover:translate-x-1 transition-transform">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.4}>
                        <div className="mt-16 text-center">
                            <Link href="/media-coverage" className="text-xs uppercase tracking-[0.3em] font-bold text-charcoal border-b border-charcoal/20 pb-1 hover:border-charcoal transition-all">
                                View Full Media Archive
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
                        Ready to elevate your experience?
                    </h2>
                    <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
                        Connect with us to discuss your upcoming lifestyle event, book launch, or cultural curation.
                    </p>
                    <a href="mailto:maneesh@hauteservices.in" className="inline-block bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-colors font-serif italic text-xl">
                        Get in Touch
                    </a>
                </Reveal>
            </section>
        </main>
    );
}
