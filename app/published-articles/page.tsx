"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { publishedArticles } from "@/lib/publishedArticles";
import Reveal from "@/app/components/Reveal";

// Reveal is centralized in app/components/Reveal.tsx

export default function PublishedArticlesPage() {
  return (
    <main className="bg-white min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white">
      <section className="pt-12 lg:pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-4">
              Published <span className="italic font-light">Articles</span>
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-charcoal/60 font-light leading-relaxed">
              A curated archive of authored columns and essays across art,
              gastronomy, and cultural strategy—capturing three decades of
              perspective from Maneesh Baheti.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {publishedArticles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <article className="group flex flex-col h-full border border-charcoal/5 bg-cream/10 hover:bg-white rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="relative w-full aspect-video bg-charcoal/3 overflow-hidden">
                  {article.images && article.images.length > 1 ? (
                    <div className="grid w-full h-full grid-cols-2 gap-1">
                      {article.images.slice(0, 2).map((src, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative w-full h-full overflow-hidden bg-white"
                        >
                          <Image
                            src={src}
                            alt={`${article.title} - image ${
                              imgIndex + 1
                            } from ${article.publication} ${article.section || ""} ${
                              article.date
                            }, Haute Services published article`}
                            fill
                            className="object-contain transition-transform duration-1000 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={article.image}
                      alt={`${article.title} - ${article.publication} ${article.section || ""} ${article.date}, Haute Services published article`}
                      fill
                      className="object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6 lg:p-7 flex-1 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">
                    <span>
                      {article.publication}
                      {article.section && (
                        <span className="opacity-40">
                          {" "}
                          <span className="mx-1">|</span> {article.section}
                        </span>
                      )}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-charcoal leading-tight group-hover:text-charcoal/70 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

