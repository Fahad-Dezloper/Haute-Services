'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


import { mediaCoverage } from '@/lib/data';

const news = mediaCoverage.slice(0, 6);


// --- Components ---

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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

const ParallaxImage2 = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[140%] bg-[#C5B151] -mt-[5%]">
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
        <div className="relative w-full px-6 lg:px-12 xl:px-24 mb-16 lg:mb-8">
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-[85vh] w-full rounded-sm overflow-hidden bg-charcoal/5">
            <ParallaxImage
              src="https://static.wixstatic.com/media/e86273_57cdee80347a45fa8d0d12a449a0768b~mv2.png?originWidth=1152&originHeight=832"
              alt="Elegant lifestyle event setting"
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-cream/20 to-transparent pointer-events-none" />
          </div>

          <motion.div className="absolute -bottom-8 sm:-bottom-12 right-6 sm:right-12 lg:right-24 w-[45vw] sm:w-[35vw] md:w-[25vw] max-w-sm aspect-6/5 shadow-2xl z-20 group"
          >
            <div className="w-full h-full border-2 border-white bg-white overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/e86273_3cf2a07072524c97affc88166c70e75d~mv2.png?originWidth=1152&originHeight=832"
                alt="Artistic detail"
                fill
                className="object-cover grayscale-10 border-8"
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
                    Boutique Consultancy Since 2014
                  </span>
                </div>
              </Reveal>

              <div className='flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-12 lg:gap-0'>

                <Reveal delay={0.1}>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-serif text-charcoal leading-[0.9] lg:leading-[0.85] tracking-tighter">
                    Haute <br />
                    <span className="italic font-light text-charcoal/90 pl-2 sm:pl-4 lg:pl-12 xl:pl-20">Services</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-col items-start gap-8">
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-xs">
                      Specializing in international gastronomy, turnkey art advisory services, and bespoke brand strategy for discerning clients.
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
                    Transforming the landscape of luxury through expert art advisory and
                    sophisticated lifestyle events. We bridge the gap between cultural heritage and modern excellence.
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
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif mb-6">Who We Are</h2>
              <div className="h-px w-24 bg-charcoal/20 mb-10 lg:mb-6" />
              <p className="text-charcoal/80 leading-relaxed text-sm lg:text-base xl:text-lg hidden lg:block">
                Established as a premier boutique consultancy for discerning clients.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <Reveal delay={0.2}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-snug lg:leading-tight text-charcoal/90">
                "We don’t just offer services—we build ecosystems around ideas, heritage, and value."
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-base lg:text-lg text-charcoal/70 leading-relaxed">
                <div>
                  <p className="mb-6">
                    Haute Services is a boutique consultancy firm specializing in lifestyle events and art advisory. With over a decade of experience, we operate in two distinct but culturally rich verticals—food and art.
                  </p>
                  <p>
                    We are the Founders of S.A.A.G – South Asian Association for Gastronomy, and its flagship initiative, Food For Thought Fest.
                  </p>
                </div>
                <div>
                  <p className="mb-6">
                    Whether creating immersive culinary festivals or curating investment-grade art portfolios, our work celebrates culture, community, and creative expression.
                  </p>
                  <Link href="/about" className="text-charcoal underline underline-offset-4 decoration-charcoal/20 hover:decoration-charcoal transition-all">
                    Read more about us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-charcoal text-white py-20 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="lg:flex justify-between items-end mb-12 lg:mb-16">
              <h2 className="text-4xl lg:text-6xl font-serif mb-6 lg:mb-0">Our Philosophy</h2>
              <p className="text-white/60 max-w-sm lg:text-right font-light">Guided by principles that ensure exceptional results for every client.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-16">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-serif mb-4 text-cream">Excellence</h3>
              <p className="text-white/60 leading-relaxed font-light">
                We maintain the highest standards in everything we do, ensuring results that do not just meet but exceed expectations.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="text-2xl font-serif mb-4 text-cream">Authenticity</h3>
              <p className="text-white/60 leading-relaxed font-light">
                We believe in genuine connections. Whether in art or events, we prioritize experiences that resonate deeply with audiences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <h3 className="text-2xl font-serif mb-4 text-cream">Innovation</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Continuously exploring new ideas and approaches to create unique, memorable moments that stand the test of time.
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
                  <h3 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">Art Advisory</h3>
                  <p className="text-lg lg:text-xl text-charcoal/80 mb-12 leading-relaxed max-w-xl">
                    Comprehensive advisory for collectors, investors, and spaces. We provide a bridge between the creator and the connoisseur, ensuring every acquisition is a legacy in the making.
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                    {['Strategic Acquisition', 'Portfolio Management', 'Restoration & Valuation', 'Corporate Curations'].map((item) => (
                      <li key={item} className="flex items-center gap-4 text-sm uppercase tracking-widest text-charcoal/60">
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
                      alt="Art Advisory"
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
                  <h3 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">Lifestyle Events</h3>
                  <p className="text-lg lg:text-xl text-charcoal/80 mb-12 leading-relaxed max-w-xl">
                    Curating high-impact festivals, book launches, and luxury F&B experiences. Our events are more than gatherings—they are cultural milestones that celebrate regional heritage and culinary excellence.
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                    {['Culinary Festivals', 'Book Launches', 'Fashion Shows', 'Film Festival'].map((item) => (
                      <li key={item} className="flex items-center gap-4 text-sm uppercase tracking-widest text-charcoal/60">
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
                  <div className="relative h-[250px] w-full bg-charcoal/5 rounded-sm overflow-hidden shadow-2xl">
                    <ParallaxImage
                      src="/lifestyle.avif"
                      alt="Lifestyle Events"
                      className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRESS & RECOGNITION --- */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl font-serif mb-16 text-center">Legacy & Recognition</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 xl:gap-24">
          {news.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-3/2 w-full bg-charcoal/5 rounded-sm overflow-hidden mb-6">
                  {/* Image Placeholder - User mentioned they will add links later */}
                  <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-full object-fill" />
                  {/* <div className="abso?lute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" /> */}
                  {/* <div className="w-full h-full bg-linear-to-t from-charcoal/20 to-transparent absolute inset-0" /> */}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif text-charcoal leading-snug group-hover:text-charcoal/70 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed ">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/media-coverage"
              className="inline-flex items-center gap-6 group"
            >
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-charcoal border-b border-charcoal/20 pb-1 group-hover:border-charcoal transition-colors">
                View All Media Coverage
              </span>
              <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* --- MISSION / FOOTER TEASER --- */}
      <section className="py-20 lg:py-40 px-6 lg:px-12 bg-white text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">
            Ready to elevate your experience?
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light">
            Connect with us to discuss your art portfolio or upcoming lifestyle event.
          </p>
          <a href="mailto:maneesh@hauteservices.in" className="inline-block bg-charcoal text-white px-10 py-5 hover:bg-charcoal/80 transition-colors font-serif italic text-xl">
            Get in Touch
          </a>
        </Reveal>
      </section>

    </main>
  );
}
