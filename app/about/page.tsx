"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { mediaCoverage } from "@/lib/data";
import Link from "next/link";

// --- Shared Components ---

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

export default function AboutPage() {
  const clients = [
    "Seasons Group",
    "Tabasko Hospitality",
    "Delhi Art Gallery",
    "Four Seasons Damascus",
    "Destination Hotel Kandaghat",
    "Usha- Lexus Hotels and Resorts",
    "Shantanu and Nikhil",
    "Sanspareils Greenlands",
    "Penguin books",
    "Wrap art & Design Pvt. Ltd.",
    "Urban Pind",
    "Shantie Shakhti Goa",
    "Sinclairs Hotels Andaman",
    "South Asian Association for Gastronomy",
    "Embassy of Sri Lanka",
    "Embassy of Indonesia",
    "Anglow, Delhi",
    "Crowne Plaza - G. Noida",
    "GMR Delhi Airport",
    "Art for Concern",
  ];

  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">
      <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage
            src="/images/about.png"
            alt="Antique Architectural Detail"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
              About{" "}
              <span className="italic font-light text-white/90 ml-2">
                Haute
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
              A boutique consultancy founded on three decades of hospitality
              excellence and artistic passion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- OUR IDENTITY --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal/40 mb-12 flex items-center gap-4">
                <div className="h-px w-8 bg-charcoal/20" /> Our Heritage
              </h2>
              <p className="text-3xl lg:text-5xl font-serif text-charcoal leading-tight mb-16">
                We bridge the gap between{" "}
                <span className="italic underline decoration-charcoal/10">
                  luxury operations
                </span>{" "}
                and cultural storytelling.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="prose prose-xl text-charcoal/70 font-light leading-relaxed">
                <p>
                  Haute Services is a unique multi-vertical consultancy. We
                  operate at the intersection of Art Advisory and Lifestyle
                  Events, leveraging a specialized background in high-end hotel
                  management and marketing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP: MANEESH BAHETI --- */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                  Managing Director & Founder
                </span>
                <h2 className="text-4xl lg:text-6xl font-serif mb-10">
                  Maneesh Baheti
                </h2>
                <div className="space-y-6 text-lg text-charcoal/70 font-light leading-relaxed mb-12">
                  <p>
                    Maneesh is a career hotelier whose expertise is built on the
                    foundations of <strong>The Oberoi Group</strong>. As a
                    management trainee, he mastered every facet of hotel
                    operations—from Housekeeping to Food & Beverage—later
                    serving as the General Manager responsible for the
                    successful turnaround of Trident Hilton Bhubaneswar.
                  </p>
                  <p>
                    His strategic lens was further sharpened as the Director of
                    Marketing for <strong>Hyatt Regency Delhi</strong>. Beyond
                    operations, Maneesh is a dedicated educator, having taught
                    CRM at NIFT Delhi and Entrepreneurial Management at FHRAI
                    Institute.
                  </p>
                  <p>
                    As the Founder Director of the{" "}
                    <strong>
                      South Asian Association for Gastronomy (SAAG)
                    </strong>
                    , he has created a common platform for the subcontinent's
                    culinary legacy.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-charcoal/5">
                  <div className="flex items-start gap-4">
                    {/* <Building2 className="w-5 h-5 text-charcoal/30 mt-1" /> */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-1">
                        Oberoi Group
                      </span>
                      <span className="text-sm text-charcoal/50">
                        Management Trainee
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {/* <GraduationCap className="w-5 h-5 text-charcoal/30 mt-1" /> */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-1">
                        MBA
                      </span>
                      <span className="text-sm text-charcoal/50">
                        Dual D.H.M Diplomas
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <Reveal delay={0.2}>
                <div className="relative aspect-3/4 bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl">
                  {/* Asset Space for Maneesh Portrait */}
                  <Image
                    src="/founder/Manish.jpeg"
                    alt="Manish Baheti"
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center text-8xl font-serif text-charcoal/5 italic">M.B</div>
                                    <div className="absolute bottom-10 left-10 text-white z-10">
                                        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">Since 1990</p>
                                        <p className="text-2xl font-serif italic text-charcoal/40">Hospitality Visionary</p>
                                    </div> */}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP: SONALI ANAND --- */}
      <section className="py-24 lg:py-40 bg-cream/30">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                  Director & Partner
                </span>
                <h2 className="text-4xl lg:text-6xl font-serif mb-10">
                  Sonali Anand
                </h2>
                <div className="space-y-6 text-lg text-charcoal/70 font-light leading-relaxed mb-12">
                  <p>
                    Sonali brings a global, cross-sector perspective to Haute
                    Services. Her career spans a decade across International
                    Banking, Software Sales, and Social Development.
                  </p>
                  <p>
                    With dual international master's degrees from{" "}
                    <strong>Bournemouth University (UK)</strong> and{" "}
                    <strong>Euromed Marseille (France)</strong>, she possesses a
                    rare blend of tourism governance and NGO management
                    expertise.
                  </p>
                  <p>
                    Her diverse experience includes serving as Country Sales
                    Manager for Malaysia-based{" "}
                    <strong>FCS Computer Systems</strong> and acting as a
                    consultant for the <strong>United Nations</strong>.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-charcoal/5">
                  <div className="flex items-start gap-4">
                    {/* <Globe className="w-5 h-5 text-charcoal/30 mt-1" /> */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-1">
                        Global Governance
                      </span>
                      <span className="text-sm text-charcoal/50">
                        United Nations Consultant
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {/* <GraduationCap className="w-5 h-5 text-charcoal/30 mt-1" /> */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-1">
                        M.Sc & M.A
                      </span>
                      <span className="text-sm text-charcoal/50">
                        UK & France Degrees
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative aspect-3/4 bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl">
                  {/* Asset Space for Sonali Portrait */}
                  <Image
                    src="/founder/Sonali3.jpg"
                    alt="Manish Baheti"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl font-serif text-charcoal/5 italic">
                    S.A
                  </div>
                  <div className="absolute bottom-10 left-10 text-charcoal/40 z-10">
                    <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">
                      Strategy & Sales
                    </p>
                    <p className="text-2xl font-serif italic">
                      Global Perspective
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CLIENTS --- */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-24">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                Our Network
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif leading-none italic">
                Trusted By
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-12 border-l border-charcoal/5 pl-6 md:pl-12">
            {clients.map((client, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group cursor-default">
                  <p className="text-lg lg:text-xl font-serif text-charcoal/60 group-hover:text-charcoal group-hover:italic transition-all duration-300 transform group-hover:translate-x-2">
                    {client}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECOGNITION & PRESS --- */}
      <section className="py-24 lg:py-40 bg-cream/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="text-3xl lg:text-5xl font-serif mb-24 text-center">
              Recognition & Media
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {mediaCoverage.slice(0, 3).map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 border border-charcoal/5 bg-white group hover:border-charcoal/20 transition-all duration-500 rounded-sm shadow-sm flex flex-col h-full">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40 block mb-2">
                    {item.source}
                  </span>
                  <h3 className="text-2xl font-serif mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 line-clamp-3 mb-6 font-light">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-charcoal/5 flex items-center justify-between">
                    <span className="text-[10px] text-charcoal/40 uppercase tracking-widest">
                      {item.date}
                    </span>
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-charcoal hover:translate-x-1 transition-transform"
                      >
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
              <Link
                href="/media-coverage"
                className="text-xs uppercase tracking-[0.3em] font-bold text-charcoal border-b border-charcoal/20 pb-1 hover:border-charcoal transition-all"
              >
                View Full Press Archive
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight italic">
            Collaborate With Us
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to discuss heritage culinary festivals, high-fashion
            showcases, or architectural art curation.
          </p>
          <a
            href="mailto:info@hauteservices.in"
            className="inline-block bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-colors font-serif italic text-xl"
          >
            Get in Touch
          </a>
        </Reveal>
      </section>
    </main>
  );
}
