import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-16 mb-24 ">

                    {/* Brand Column */}
                    <div className="">
                        <Image src="/logo/MainLogo.jpeg" alt="Logo" width={200} height={200} className="mb-12 bg-white" />
                        <p className="text-white/60 max-w-xs leading-relaxed mb-12">
                            A boutique consultancy dedicated to creating exceptional experiences in the lifestyle and art sectors.
                        </p>
                        <div className="flex md:flex-row flex-col gap-4 ">

                            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs uppercase w-fit tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-charcoal transition-all"
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
                            <li><Link href="/media-coverage" className="text-lg hover:text-white/60 transition-colors">Media Coverage</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Contact</h3>
                        <ul className="space-y-6">
                            <li className="text-white/80">
                                <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Founder</span>
                                <span className="text-lg font-serif">Maneesh Baheti</span>
                            </li>
                            <li className="text-white/80">
                                <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Email</span>
                                <a href="mailto:maneesh@hauteservices.in" className="hover:text-white/60 transition-colors">maneesh@hauteservices.in</a>
                            </li>
                            <li className="text-white/80">
                                <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Phone</span>
                                <a href="tel:+919871035511" className="hover:text-white/60 transition-colors">+91 9871 0355 11</a>
                            </li>
                            <li className="text-white/80">
                                <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Location</span>
                                T-14/7, DLF City Phase III, <br />
                                Gurgaon, Haryana
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
