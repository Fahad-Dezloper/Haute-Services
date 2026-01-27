'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Art Advisory', href: '/art' },
        { name: 'Lifestyle Events', href: '/lifestyle' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <>
            <header className="relative w-full z-50 py-8 px-12">
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="group flex items-baseline gap-1">
                        <Image src="/logo.png" alt="Logo" width={200} height={200} />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] uppercase tracking-[0.3em] font-bold text-charcoal/70 hover:text-charcoal transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="mailto:contact@hauteservices.in"
                            className="flex items-center gap-2 px-6 py-2.5 border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.2em] font-bold"
                        >
                            Let&apos;s Talk
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-charcoal hover:bg-charcoal/5 rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-cream flex flex-col p-8 lg:hidden shadow-2xl"
                    >
                        <div className="mt-20 flex flex-col gap-10">
                            <span className="text-xs uppercase tracking-[0.4em] text-charcoal/40 font-bold border-b border-charcoal/10 pb-4">
                                Navigation
                            </span>
                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="font-serif text-5xl text-charcoal hover:italic transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12"
                            >
                                <Link
                                    href="mailto:contact@hauteservices.in"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex items-center gap-4 bg-charcoal text-white px-8 py-5 text-sm uppercase tracking-widest font-bold group"
                                >
                                    Get in Touch
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Footer in mobile menu */}
                        <div className="mt-auto pb-12">
                            <p className="text-xs text-charcoal/40 tracking-widest uppercase font-bold">
                                © 2024 Haute Services
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
