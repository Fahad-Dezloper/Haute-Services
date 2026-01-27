import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <h2 className="font-serif text-5xl lg:text-7xl mb-8 leading-none">
                            Haute <br />
                            <span className="italic font-light text-white/60">Services</span>
                        </h2>
                        <p className="text-white/60 max-w-sm leading-relaxed mb-12">
                            A boutique consultancy dedicated to creating exceptional experiences in the lifestyle and art sectors.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-charcoal transition-all"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="lg:col-span-3 lg:col-start-7">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Sitemap</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-lg hover:text-white/60 transition-colors">Home</Link></li>
                            <li><Link href="/art" className="text-lg hover:text-white/60 transition-colors">Art Advisory</Link></li>
                            <li><Link href="/lifestyle" className="text-lg hover:text-white/60 transition-colors">Lifestyle Events</Link></li>
                            <li><Link href="/about" className="text-lg hover:text-white/60 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Contact</h3>
                        <ul className="space-y-4">
                            <li className="text-white/80">
                                <span className="block text-white/40 text-xs mb-1">Email</span>
                                <a href="mailto:contact@hauteservices.in" className="hover:text-white/60 transition-colors">contact@hauteservices.in</a>
                            </li>
                            <li className="text-white/80">
                                <span className="block text-white/40 text-xs mb-1">Location</span>
                                New Delhi, India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-widest">
                    <p>&copy; {currentYear} Haute Services. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
