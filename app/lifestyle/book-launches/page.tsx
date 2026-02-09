"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  User,
  Quote,
  Star,
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
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default function BookLaunchesPage() {
  const authors = [
    {
      author: "Asma Khan",
      book: "Ammu: Indian Home-Cooking to Nourish the Soul",
      tag: "Chef, Darjeeling Express",
      desc: "Strategic launch curation for the Netflix 'Chef's Table' star, celebrating the heritage of home cooking and maternal legacy.",
      image: "/book/Asmaa.png",
      highlight: "Netflix Chef's Table Star",
    },
    {
      author: "Vicky Ratnani",
      book: "Urban Desi Non-Vegetarian",
      tag: "Celebrity Chef & Author",
      desc: "Conceptualized and executed the launch of Chef Vicky's modern take on global Indian cuisine, merging urban trends with traditional roots.",
      image: "/book/vicky.png",
      highlight: "Global Indian Gastronomy",
    },
    {
      author: "Rohini Rana",
      book: "The Rana Cookbook: Recipes from the Palaces of Nepal",
      tag: "Cultural Historian",
      desc: "Highlighting the royal culinary traditions of Nepal through a curated literary and gastronomic event that explored lost recipes.",
      image: "/book/rohini.png",
      highlight: "Royal Culinary Heritage",
    },
    {
      author: "Abhijit Saha",
      book: "The Caperberry Cookbook",
      tag: "Modern Indian Gastronomy Pioneer",
      desc: "Launching the visual and narrative journey of one of India's most celebrated avant-garde chefs, focusing on the intersection of art and food.",
      image: "/book/Abhijit.png",
      highlight: "Culinary Innovation",
    },
    {
      author: "Chris Gayle",
      book: "Six Machine",
      tag: "Cricket Legend Autobiography",
      desc: "Launched at The Roseate Hotels, coinciding with the debut of their now-iconic clover leaf logo. From a momentous book launch to a lasting friendship, Chris Gayle remains a close associate while playing the Legends Cup and meeting national leadership in India.",
      image: "/book/chris.png",
      highlight: "Global Sports Icon",
    },
  ];

  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 bg-charcoal overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-30">
          <ParallaxImage
            src="/book/banner.jpeg"
            alt="Literary Event Atmosphere"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-charcoal/40 to-charcoal" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Reveal>
            <nav className="mb-8">
              <Link
                href="/lifestyle"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[9px] font-bold group"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />{" "}
                Back
              </Link>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter">
              Book{" "}
              <span className="italic font-light text-white/90 ml-2">
                Launches
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed border-l border-white/20 pl-6 uppercase tracking-widest text-[10px]">
              Curating boutique literary experiences for international culinary
              masters and cultural historians.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-6 block">
                Strategic Curation
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif text-charcoal mb-12 leading-tight">
                Where Literature <br />{" "}
                <span className="italic">Meets Gastronomy</span>
              </h2>
              <p className="text-lg lg:text-2xl text-charcoal/70 font-light leading-relaxed mb-16">
                We specialize in launching culinary narratives. Our approach
                goes beyond a standard book signing; we create immersive events
                that allow the audience to taste the stories and traditions
                captured within the pages.
              </p>
            </Reveal>
          </div>
        </div>

        {/* --- AUTHORS GRID --- */}
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-32 mt-20">
          {authors.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group cursor-default">
                <div
                  className={`relative bg-charcoal/5 mb-10 overflow-hidden rounded-sm shadow-xl ${item.image === "/book/Asmaa.png" || item.image === "/book/rohini.png" ? "aspect-6/5" : "aspect-4/5"}`}
                >
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                  <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-serif italic text-4xl p-12 text-center">
                    Asset: {item.author}
                  </div>
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                  {item.image == "/book/chris.png" && (
                    <Image
                      src="/book/chris2.jpg"
                      alt={item.author}
                      width={400}
                      height={400}
                      className="absolute bottom-0 right-0 w-[40vw] h-[20vh] object-cover"
                    />
                  )}
                </div>
                <div className="max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-charcoal/20" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-4xl font-serif mb-4 leading-tight group-hover:italic transition-all duration-500">
                    {item.author}
                  </h3>
                  <p className="text-xl font-serif italic mb-6 text-charcoal/60 leading-snug">
                    "{item.book}"
                  </p>
                  <div className="relative pl-8 border-l-2 border-charcoal/10">
                    <Quote className="absolute -left-2 -top-2 w-4 h-4 text-charcoal/10" />
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <h3 className="text-3xl lg:text-5xl font-serif text-charcoal leading-tight italic mb-8">
              "Every cookbook is a legacy. Our role is to ensure that legacy is
              launched with the prestige it deserves."
            </h3>
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal/30">
              Haute Services | Literary Division
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight italic">
            Launch Your Narrative
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to ensure your literary legacy is launched with the
            prestige it deserves.
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
