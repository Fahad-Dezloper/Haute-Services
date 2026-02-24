"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { mediaCoverage } from "@/lib/data";

const latestNews = mediaCoverage.slice(0, 3);

// Top 6 all-time featured news — curate by picking indices from mediaCoverage
const legacyNews = [
  mediaCoverage[5], // Times of India – Art of India's Starry Night
  mediaCoverage[15], // Power Creator Travel Awards
  mediaCoverage[7], // Fortune Exchange Magazine
  mediaCoverage[9], // Outlook India
  mediaCoverage[16], // The Print – Cuba Beyond Postcards
  mediaCoverage[10], // Shantanu & Nikhil
];

// --- Helpers ---
const getYouTubeId = (url: string): string | null => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([-\w]+)/,
  );
  return match ? match[1] : null;
};

// --- Components ---

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
      <motion.div style={{ y }} className="w-full h-fit">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain md:object-cover"
        />
      </motion.div>
    </div>
  );
};

const ParallaxImage2 = ({
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
      <motion.div
        style={{ y }}
        className="w-full h-[140%] bg-[#C5B151] -mt-[5%]"
      >
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="bg-cream min-h-screen  text-charcoal font-sans selection:bg-charcoal selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center overflow-hidden">
        <div className="relative w-full px-6 lg:px-12 xl:px-24 mb-24 lg:mb-8">
          <div className="relative h-[45vh] md:h-[60vh] lg:h-[60vh] xl:h-[65vh] w-full rounded-sm overflow-hidden bg-charcoal/5">
            {/* Vertical image for small screens */}
            <ParallaxImage
              src="/hero/big2.jpeg"
              alt="Haute Services luxury hospitality and lifestyle event setting, boutique consultancy"
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000 md:hidden"
            />
            {/* Horizontal image for medium and large screens */}
            <ParallaxImage
              src="/hero/big.jpeg"
              alt="Haute Services luxury hospitality and lifestyle event setting, boutique consultancy"
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000 hidden md:block"
            />
            {/* <div className="absolute inset-0 bg-linear-to-t from-cream/20 to-transparent pointer-events-none" /> */}
          </div>

          <motion.div className="absolute -bottom-21 sm:-bottom-12 right-6 sm:right-12 lg:right-24 w-[40vw] h-[25vh] sm:w-[35vw] sm:h-[30vh] md:w-[25vw] md:h-[40vh] lg:h-[45vh] shadow-2xl z-20 group">
            <div className="w-full h-full bg-white  overflow-hidden shadow-lg">
              <Image
                src="/hero/small2.jpeg"
                alt="Haute Services art advisory and lifestyle curation"
                fill
                className="object-cover md:object-contain grayscale-10 border-8"
              />
            </div>
          </motion.div>
        </div>

        {/* --- Text Content Layer --- */}
        <div className="container mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 w-full gap-12">
            <div className="lg:col-span-12 w-full ">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-charcoal/30" />
                  <span className="text-charcoal/80 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold">
                    Boutique Consultancy Since 2009
                  </span>
                </div>
              </Reveal>

              <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-12 lg:gap-0">
                <Reveal delay={0.1}>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-serif text-charcoal leading-[0.9] lg:leading-[0.85] tracking-tighter">
                    Haute <br />
                    <span className="italic font-light text-charcoal/90 pl-2 sm:pl-4 lg:pl-12 xl:pl-20">
                      Services
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-col items-start gap-8">
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-xs">
                      The portfolio of services include hospitality consultancy,
                      lifestyle events and art advisory services with a focus on
                      strategic advice.
                    </p>
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-6 text-charcoal hover:text-charcoal/70 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
                    >
                      <span className="border-b border-charcoal/30 pb-1 group-hover:border-charcoal transition-colors">
                        Discover Our Heritage
                      </span>
                      <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:mt-24">
                <Reveal delay={0.2}>
                  <p className="text-lg lg:text-xl xl:text-2xl text-charcoal/80 leading-relaxed font-light xl:max-w-2xl">
                    Transforming the landscape of luxury through expert art
                    advisory and sophisticated lifestyle events. We bridge the
                    gap between cultural heritage and modern excellence.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif mb-6">
                Who We Are
              </h2>
              <div className="h-px w-24 bg-charcoal/20 mb-10 lg:mb-6" />
              <p className="text-charcoal/80 leading-relaxed text-sm lg:text-base xl:text-lg hidden lg:block">
                Established as a premier boutique consultancy for discerning
                clients.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <Reveal delay={0.2}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-snug lg:leading-tight text-charcoal/90">
                "We don’t just offer services—we build ecosystems around ideas,
                heritage, and value."
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-base lg:text-lg text-charcoal/70 leading-relaxed">
                <div>
                  <p className="mb-6">
                    Haute Services is a boutique consultancy with over three
                    decades of experience, we operate in three distinct
                    verticals-Hospitality Consulting, Lifestyle Events and Art
                    Advisory.
                  </p>
                  <p>
                    We are the Founders of S.A.A.G – South Asian Association for
                    Gastronomy, and its flagship initiative, Food For Thought
                    Fest.
                  </p>
                </div>
                <div>
                  <p className="mb-6">
                    Whether creating immersive culinary festivals or curating
                    investment-grade art portfolios, our work celebrates
                    culture, community, and creative expression.
                  </p>
                  <Link
                    href="/about"
                    className="text-charcoal underline underline-offset-4 decoration-charcoal/20 hover:decoration-charcoal transition-all"
                  >
                    Read more about us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- CORPORATE FILM --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-charcoal/20" />
                <span className="text-charcoal/60 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold">
                  Our Story
                </span>
                <div className="h-px w-12 bg-charcoal/20" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-charcoal mb-4 leading-tight">
                Haute Services
                <span className="italic font-light"> Corporate Film</span>
              </h2>
              <p className="text-base lg:text-lg text-charcoal/60 font-light max-w-2xl mx-auto">
                Discover our journey, values, and vision through our corporate
                narrative.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-video w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl group">
              <iframe
                src="https://www.youtube.com/embed/TYLm4aYFtSo"
                title="Haute Services Corporate Film"
                allow="autoplay; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-charcoal text-white py-20 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="lg:flex justify-between items-end mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-6xl font-serif mb-6 lg:mb-0">
                Our Philosophy
              </h2>
              <p className="text-white/60 max-w-sm lg:text-right font-light">
                Guided by principles that ensure exceptional results for every
                client.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-16">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-serif mb-4 text-cream">
                Excellence
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                We maintain the highest standards in everything we do, ensuring
                results that do not just meet but exceed expectations.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="text-2xl font-serif mb-4 text-cream">
                Authenticity
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                We believe in genuine connections. Whether in art or events, we
                prioritize experiences that resonate deeply with audiences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <h3 className="text-2xl font-serif mb-4 text-cream">
                Innovation
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                Continuously exploring new ideas and approaches to create
                unique, memorable moments that stand the test of time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="">
        {/* Art Service Section */}
        <div className="relative border-b border-charcoal/5">
          <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6 lg:order-2">
                <Reveal>
                  {/* <span className="text-charcoal/50 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold mb-6 block">Service Vertical 01</span> */}
                  <h3 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">
                    Art Advisory
                  </h3>
                  <p className="text-lg lg:text-xl text-charcoal/80 mb-12 leading-relaxed max-w-xl">
                    Comprehensive advisory for collectors, investors, and
                    spaces. We provide a bridge between the creator and the
                    connoisseur, ensuring every acquisition is a legacy in the
                    making.
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                    {[
                      "Strategic Acquisition",
                      "Portfolio Management",
                      "Restoration & Valuation",
                      "Corporate Curations",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-4 text-sm uppercase tracking-widest text-charcoal/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/art"
                    className="group inline-flex items-center gap-4 bg-charcoal text-white px-10 py-5 hover:bg-charcoal/90 transition-all font-serif italic text-lg"
                  >
                    Explore Art Services
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <Reveal delay={0.2}>
                  <div className="relative aspect-square w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl">
                    <ParallaxImage2
                      src="/services/art.jpg"
                      alt="Haute Services Art Advisory, curation and collection management for collectors and corporations"
                      className="w-full h-full grayscale-20 transition-all duration-1000"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Service Section */}
        <div className="relative bg-cream/30">
          <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6">
                <Reveal>
                  {/* <span className="text-charcoal/50 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold mb-6 block">Service Vertical 02</span> */}
                  <h3 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">
                    Lifestyle Events
                  </h3>
                  <p className="text-lg lg:text-xl text-charcoal/80 mb-12 leading-relaxed max-w-xl">
                    Curating high-impact festivals, book launches, and luxury
                    F&B experiences. Our events are more than gatherings—they
                    are cultural milestones that celebrate regional heritage and
                    culinary excellence.
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                    {[
                      "Culinary Festivals",
                      "Book Launches",
                      "Fashion Shows",
                      "Film Festival",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-4 text-sm uppercase tracking-widest text-charcoal/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/lifestyle"
                    className="group inline-flex items-center gap-4 bg-charcoal text-white px-10 py-5 hover:bg-charcoal/90 transition-all font-serif italic text-lg"
                  >
                    Explore Events
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal delay={0.2}>
                  <div className="relative h-fit w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl">
                    <ParallaxImage
                      src="/lifestyle.avif"
                      alt="Haute Services Lifestyle Events, culinary festivals and cultural experiences"
                      className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STOP PRESS (Latest News) --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-charcoal/20" />
            <span className="text-charcoal/60 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold">
              Latest
            </span>
            <div className="h-px w-12 bg-charcoal/20" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-16 text-center">
            Stop Press
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24">
          {latestNews.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-3/2 w-full bg-charcoal/5 rounded-sm overflow-hidden mb-6">
                  {item.link && getYouTubeId(item.link) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(item.link)}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.source} ${item.date}, Haute Services media coverage`}
                      width={400}
                      height={400}
                      className="w-full h-full object-fill"
                    />
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif text-charcoal leading-snug group-hover:text-charcoal/70 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/media-coverage"
              className="inline-flex items-center gap-6 group"
            >
              <span className="text-xs uppercase whitespace-nowrap tracking-[0.4em] font-bold text-charcoal border-b border-charcoal/20 pb-1 group-hover:border-charcoal transition-colors">
                View All Media Coverage
              </span>
              <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* --- LEGACY & RECOGNITION (Top 6 All-Time) --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-charcoal/20" />
              <span className="text-charcoal/60 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-bold">
                All-Time
              </span>
              <div className="h-px w-12 bg-charcoal/20" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif mb-16 text-center">
              Legacy & Recognition
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24">
            {legacyNews.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-3/2 w-full bg-charcoal/5 rounded-sm overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.source} ${item.date}, Haute Services media coverage`}
                      width={400}
                      height={400}
                      className="w-full h-full object-fill"
                    />
                    {item.image === "/art/news/toi1.jpeg" && (
                      <Image
                        src="/art/news/toi2.jpeg"
                        alt="Times of India coverage of Art of India exhibition by Haute Services"
                        width={300}
                        height={200}
                        className="absolute bottom-0 right-0 w-[45%] h-[55%] object-cover shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-2 border-white/90 z-10"
                      />
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif text-charcoal leading-snug group-hover:text-charcoal/70 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <div className="mt-20 flex justify-center">
              <Link
                href="/media-coverage"
                className="inline-flex items-center gap-6 group"
              >
                <span className="text-xs uppercase whitespace-nowrap tracking-[0.4em] font-bold text-charcoal border-b border-charcoal/20 pb-1 group-hover:border-charcoal transition-colors">
                  View All Media Coverage
                </span>
                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- MISSION / FOOTER TEASER --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
            Ready to elevate your experience?
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to discuss your art portfolio or upcoming lifestyle
            event.
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
