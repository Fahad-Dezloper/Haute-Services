"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Newspaper,
  Mic2,
  Award,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MediaItem } from "@/lib/data";

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const getIcon = (category?: string) => {
  switch (category) {
    case "Interview":
      return <Mic2 className="w-5 h-5" />;
    case "Award":
      return <Award className="w-5 h-5" />;
    case "Expert Opinion":
      return <Lightbulb className="w-5 h-5" />;
    default:
      return <Newspaper className="w-5 h-5" />;
  }
};

export default function MediaClient({
  mediaCoverage,
}: {
  mediaCoverage: MediaItem[];
}) {
  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-12 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-cream/30" />
              <span className="text-cream/80 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold">
                Press & Recognition
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8">
              Media
              <span className="italic font-light text-cream/90 pl-2 lg:pl-12">
                Coverage
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* --- MEDIA GRID --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32">
          {mediaCoverage.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group flex flex-col h-full border-b border-charcoal/10 pb-12">
                <div className="relative h-full w-full bg-charcoal/5 overflow-hidden mb-8 rounded-sm">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-cover h-full transition-all duration-700"
                  />
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                        {getIcon(item.category)}
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal">{item.category || 'Press'}</span>
                                    </div> */}
                </div>

                <div className="grow space-y-4">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </div>

                  <h2 className="text-2xl lg:text-4xl font-serif text-charcoal leading-tight group-hover:text-charcoal/70 transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-base lg:text-lg text-charcoal/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8">
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-charcoal hover:gap-5 transition-all"
                    >
                      Read Full Article <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/30">
                      Print Edition / Featured Insight
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- EXPERT VOICE SECTION --- */}
      <section className="bg-charcoal text-white py-24 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl lg:text-6xl font-serif mb-12 italic">
                The Voice of Expertise
              </h2>
              <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-12 border-l border-white/20 pl-8">
                "Our goal is to bring a global standard of excellence to the
                Indian hospitality and art landscape, creating spaces where
                culture and commerce coexist beautifully."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white/20">
                  <Image
                    src="/founder/Maneesh.jpeg"
                    alt="Maneesh Baheti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold">Maneesh Baheti</p>
                  <p className="text-sm text-white/50 uppercase tracking-widest">
                    Founder, Haute Services
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="relative">
              <Reveal delay={0.2}>
                <div className="aspect-square bg-white/5 rounded-sm p-12 flex flex-col justify-center border border-white/10">
                  <blockquote className="text-3xl font-serif italic mb-8 text-cream">
                    "A visionary in lifestyle consultancy & gastronomy."
                  </blockquote>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      Featured in
                    </span>
                    <span className="text-lg font-serif">Outlook India</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
            For Media Inquiries
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-12 font-light text-lg">
            For interviews, expert commentary, or press details regarding Haute
            Services or Maneesh Baheti, please reach out to our media relations
            team.
          </p>
          <a
            href="mailto:info@hauteservices.in"
            className="inline-block bg-charcoal text-white px-12 py-6 hover:bg-charcoal/80 transition-colors font-serif italic text-xl"
          >
            info@hauteservices.in
          </a>
        </Reveal>
      </section>
    </main>
  );
}
