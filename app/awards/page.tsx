'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trophy, Star, Award, ExternalLink } from 'lucide-react';

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

export default function AwardsPage() {
    const awards = [
        {
            title: "Delhiites Food & Nightlife Awards",
            organization: "Delhiites",
            year: "2022",
            desc: "Recognized for significant contributions to Delhi's vibrant culinary landscape and nightlife excellence.",
            image: "/awards/d&f.png",
            icon: Star
        },
        {
            title: "Hospitality Hope Ambassador",
            organization: "Hospitality Hope",
            // recipient: "Maneesh Epiqurist (Founder)",
            year: "2023",
            // location: "Soraia, Mumbai",
            desc: "Honoured as a Hospitality Hope Ambassador at Soraia Mumbai. A recognition of dedication to the industry, felicitated by Rashmi Uday Singh alongside legendary stalwarts like Camelia Punjabi and Rahul Akerkar.",
            // details: "A wonderful evening celebrating those who have devotedly stood by noble ventures in the hospitality sector.",
            image: "/awards/Hope.png",
            icon: Award
        },
        {
            title: "Gastronomy Event of the Year",
            organization: "Peaklife Gourmet Awards",
            // category: "Editor’s Choice",
            // event: "S.A.A.G – Food for Thought Fest",
            year: "2024",
            desc: "Honored with the 'Gastronomy Event of the Year' at the Peaklife Gourmet Awards for the S.A.A.G – Food for Thought Fest, celebrating innovation and excellence in the culinary arts.",
            image: "/awards/Peaklife.jpeg",
            icon: Trophy
        }
    ];

    return (
        <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <Reveal>
                        <nav className="mb-8">
                            <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to About
                            </Link>
                        </nav>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
                            Awards <span className="italic font-light text-white/90 ml-2">& Recognition</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
                            Celebrating excellence, innovation, and leadership in hospitality, luxury, and lifestyle.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* --- AWARDS LIST --- */}
            <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid gap-24 lg:gap-40">
                    {awards.map((award, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-charcoal/5 shadow-2xl">
                                        <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                        {/* Placeholder for now - I'll use the uploaded image for the first one */}
                                        <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-serif italic text-2xl p-12 text-center">
                                            {award.title}
                                        </div>
                                        {/* Once images are ready, use: <Image src={award.image} alt={award.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                                        <Image src={award.image} alt={award.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            {/* <award.icon className="w-5 h-5 text-charcoal/40" strokeWidth={1.5} /> */}
                                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-charcoal/40">{award.organization} {award.year && `— ${award.year}`}</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-serif leading-tight">{award.title}</h3>
                                        {/* {award.category && (
                                            <span className="inline-block px-4 py-1.5 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-charcoal/60">
                                                {award.category}
                                            </span>
                                        )} */}
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-lg text-charcoal/60 font-light leading-relaxed">
                                                {award.desc}
                                            </p>
                                            {/* {award.details && (
                                                <p className="text-sm text-charcoal/40 italic font-light leading-relaxed">
                                                    {award.details}
                                                </p>
                                            )} */}
                                        </div>

                                        <div className="pt-8 border-t border-charcoal/5 grid grid-cols-2 gap-8">
                                            {/* {award.event && (
                                                <div>
                                                    <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 block mb-2">Platform</span>
                                                    <span className="text-xs font-medium text-charcoal/60">{award.event}</span>
                                                </div>
                                            )}
                                            {award.recipient && (
                                                <div>
                                                    <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 block mb-2">Honoree</span>
                                                    <span className="text-xs font-medium text-charcoal/60">{award.recipient}</span>
                                                </div>
                                            )}
                                            {award.location && (
                                                <div>
                                                    <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 block mb-2">Location</span>
                                                    <span className="text-xs font-medium text-charcoal/60">{award.location}</span>
                                                </div>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* --- QUOTE SECTION --- */}
            <section className="py-24 lg:py-40 bg-white border-y border-charcoal/5 text-center px-6">
                <Reveal>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <Trophy className="w-12 h-12 text-charcoal/10 mx-auto" strokeWidth={1} />
                        <h2 className="text-3xl lg:text-5xl font-serif leading-tight italic text-charcoal/80">
                            "Excellence is not a destination, but a continuous journey of passion and precision."
                        </h2>
                        <div className="h-px w-20 bg-charcoal/10 mx-auto" />
                        <p className="text-xs uppercase tracking-[0.5em] font-bold text-charcoal/30">Haute Services Philosophy</p>
                    </div>
                </Reveal>
            </section>

            {/* --- FOOTER CTA --- */}
            <section className="py-24 lg:py-40 px-6 text-center">
                <Reveal>
                    <h2 className="text-4xl lg:text-6xl font-serif text-charcoal mb-12">Crafting <span className="italic">award-winning</span> narratives.</h2>
                    <a href="mailto:maneesh@hauteservices.in" className="inline-flex items-center gap-4 bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-all font-serif italic text-xl group">
                        Work With Us
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </Reveal>
            </section>
        </main>
    );
}
