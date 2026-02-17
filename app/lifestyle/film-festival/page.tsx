"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Film,
  Globe,
  MessageSquare,
  Target,
  ArrowUpRight,
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

export default function FilmFestivalPage() {
  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">
      <section className="relative min-h-[40vh] lg:min-h-[60vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-30">
          <ParallaxImage
            src="/SAFACH.jpg"
            alt="SAFACH South Asia Forum for Art and Creative Heritage, cinematography and cultural storytelling"
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
              Film{" "}
              <span className="italic font-light text-white/90 ml-2">
                Festival
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
              Exploring cultural storytelling through the lens of gastronomy and
              South Asian heritage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- SAFACH COMMITMENT --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                Advisory Role
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif text-charcoal mb-12 leading-tight">
                SAFACH (South Asia Forum for Art & Creative Heritage)
              </h2>
              <p className="text-lg lg:text-2xl text-charcoal/70 font-light leading-relaxed mb-8">
                The founder serves on the advisory board of{" "}
                <strong className="font-bold text-charcoal">
                  SAFACH (South Asia Forum for Art & Creative Heritage)
                </strong>
                , playing a key role in shaping the forum’s engagement with
                culinary cinema and cultural storytelling.
              </p>
              <Link
                href="http://safach.com/advisors/"
                target="_blank"
                className="inline-flex items-center gap-3 text-charcoal hover:translate-x-1 transition-all duration-500 uppercase tracking-[0.3em] text-[10px] font-bold border-b border-charcoal/20 pb-2 mb-12"
              >
                SAFACH Advisors <ArrowUpRight className="w-3 h-3" />
              </Link>
            </Reveal>
            <Reveal>
              <Image
                src="/film/safach.png"
                alt="SAFACH South Asia Forum for Art and Creative Heritage, culinary cinema and cultural heritage advisory"
                width={500}
                height={500}
                className="w-full h-full  mb-12 object-cover"
              />
            </Reveal>
            <Reveal>
              <div className="prose prose-xl font-light text-charcoal/80 space-y-8">
                <p>
                  With extensive experience curating conversations around food,
                  heritage, and identity, he brings a nuanced understanding of
                  how culinary traditions are represented through film and
                  visual media.
                </p>
                <p>
                  His work supports films and discussions that explore food as a
                  lens to understand history, communities, and shared South
                  Asian narratives.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- CONTRIBUTIONS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {[
            {
              title: "Curating Culinary Cinema",
              icon: Film,
              desc: "Selecting culinary-focused films and documentaries that resonate with regional heritage.",
            },
            {
              title: "Cultural Heritage",
              icon: Globe,
              desc: "Guiding discussions around food as a living monument of South Asian culture.",
            },
            {
              title: "Filmmaker Support",
              icon: Target,
              desc: "Assisting directors in exploring gastronomy, identity, and tradition through visual narratives.",
            },
            {
              title: "Cross-Cultural Dialogue",
              icon: MessageSquare,
              desc: "Strengthening connections between borders through the universal language of food and film.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-10 bg-white border border-charcoal/5 rounded-sm hover:shadow-xl transition-all duration-700 h-full">
                <h3 className="text-xl font-serif mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/50 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* --- VISION --- */}
        <div className="bg-charcoal text-white p-12 lg:p-24 rounded-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <Reveal>
              <h3 className="text-3xl lg:text-5xl font-serif mb-8 italic">
                The Vision
              </h3>
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/80 border-l border-white/20 pl-8">
                "Our involvement reinforces SAFACH’s vision of cinema as a
                medium that preserves culture, stimulates dialogue, and connects
                communities across borders."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
            Explore Cultural Collaborations
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to discuss international film festivals, diplomacy
            events, and artistic heritage projects.
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
