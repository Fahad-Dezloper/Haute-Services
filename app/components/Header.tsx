"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Art Advisory", href: "/art" },
    {
      name: "Lifestyle Events",
      href: "/lifestyle",
      subLinks: [
        { name: "Culinary Festivals", href: "/lifestyle/culinary-festivals" },
        { name: "Book Launches", href: "/lifestyle/book-launches" },
        { name: "Fashion Shows", href: "/lifestyle/fashion-shows" },
        { name: "Film Festival", href: "/lifestyle/film-festival" },
      ],
    },
    {
      name: "About Us",
      href: "/about",
      subLinks: [
        { name: "Our Story", href: "/about" },
        { name: "Media Coverage", href: "/media-coverage" },
        { name: "Gallery", href: "/gallery" },
        { name: "Awards", href: "/awards" },
      ],
    },
  ];

  return (
    <>
      <header className="relative w-full z-50 py-6 lg:py-8 px-6 lg:px-12 bg-cream">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="group flex items-baseline gap-1">
            <Image
              src="/logo/MainLogo.jpeg"
              alt="Haute Services logo"
              width={180}
              height={180}
              className="w-[140px] lg:w-[180px] h-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/parent">
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.3em] font-bold text-charcoal/70 hover:text-charcoal transition-all duration-300 relative block py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-300 group-hover/parent:w-full" />
                </Link>

                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/parent:opacity-100 group-hover/parent:visible transition-all duration-300 z-50">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="bg-cream border border-charcoal/10 shadow-2xl p-6 min-w-[240px] flex flex-col gap-4"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/50 hover:text-charcoal hover:translate-x-2 transition-all duration-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="mailto:info@hauteservices.in"
              className="flex items-center gap-2 px-6 py-2.5 border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-3 -mr-2 text-charcoal hover:bg-charcoal/5 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl lg:hidden h-dvh"
          >
            <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <span className="text-[10px] uppercase tracking-[0.5em] text-charcoal/30 font-bold block mb-2 px-1">
                  Navigation
                </span>
                <div className="h-px w-full bg-charcoal/5" />
              </motion.div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-4xl text-charcoal active:italic transition-all duration-300 block py-1"
                      >
                        {link.name}
                      </Link>
                    </motion.div>

                    {link.subLinks && (
                      <div className="flex flex-col gap-4 mt-4 mb-2 pl-4 border-l border-charcoal/10">
                        {link.subLinks.map((sub, j) => (
                          <motion.div
                            key={sub.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                          >
                            <Link
                              href={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal/50 active:text-charcoal transition-all block py-1"
                            >
                              {sub.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-16 flex flex-col gap-10"
              >
                <Link
                  href="mailto:info@hauteservices.in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-between bg-charcoal text-white px-8 py-6 text-[10px] uppercase tracking-widest font-bold group rounded-sm"
                >
                  Start a Conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex flex-col gap-3 px-1">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal/30 font-bold">
                    Inquiries
                  </span>
                  <p className="text-sm text-charcoal/60 font-light underline decoration-charcoal/10">
                    info@hauteservices.in
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-auto pt-16 pb-8 flex items-center justify-between border-t border-charcoal/5"
              >
                <p className="text-[9px] text-charcoal/30 tracking-widest uppercase font-bold">
                  © 2024 Haute Services
                </p>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
