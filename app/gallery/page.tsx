"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

// Manual image configuration - reorder images by changing their position in these arrays
// SEO-optimized alt text for all images

const galleryImages = {
  newspaper: [
    // 2003 - Oldest
    { src: "/gallery/newspaper/11.jpeg", alt: "Delhi Times newspaper clipping from September 3, 2003 titled ART & SOUL covering Fair & Furious art show at India Habitat Centre, featuring event host Sunaina Anand, curator Sushma Bahl, and guests including Yuriko Lochan, Rajeev Lochan, Sonali Sood, M Fitzpatrick, Anjolie Ela Menon, Manu Parekh, and Gayatri Sinha" },
    // 2005
    { src: "/gallery/newspaper/21.jpeg", alt: "Newspaper clipping featuring Haute Services art advisory and investment-grade art portfolios" },
    // 2018
    { src: "/gallery/newspaper/20.jpeg", alt: "Society Magazine March 2018 cover featuring Prem Chopra, with interior spread covering Food For Thought Fest hosted by Haute Services founders Maneesh Baheti and Sonali Anand at Chi Ni, Roseate Hotels & Resorts Delhi, featuring guests including Nawab Kazim Ali Khan, Ria, Amit GT, Ankur Bhatia, Sunil Sethi, Charu, Anupam Prashar, Paras Anand, Suresh Raina, Vikramjit Singh Sawhney, and Bishen Singh Bedi" },
    // Undated clippings (arranged by context - older events/initiatives first)
    { src: "/gallery/newspaper/1.jpeg", alt: "Newspaper clipping featuring Haute Services coverage in leading publication" },
    { src: "/gallery/newspaper/4.jpeg", alt: "Newspaper clipping featuring Haute Services art advisory and cultural events" },
    { src: "/gallery/newspaper/8.jpeg", alt: "Newspaper article covering Haute Services art curation and cultural footprint" },
    { src: "/gallery/newspaper/13.jpeg", alt: "Newspaper article featuring Haute Services art advisory and contemporary Indian art" },
    { src: "/gallery/newspaper/18.jpeg", alt: "Magazine clipping featuring Haute Services art shows and curatorial expertise" },
    { src: "/gallery/newspaper/25.jpeg", alt: "Newspaper clipping documenting Haute Services art restoration and portfolio management" },
    { src: "/gallery/newspaper/28.jpeg", alt: "Magazine article on Haute Services art curation and contemporary Indian masters" },
    { src: "/gallery/newspaper/32.jpeg", alt: "Magazine clipping documenting Haute Services art advisory and boutique consultancy" },
    { src: "/gallery/newspaper/36.jpeg", alt: "Newspaper clipping featuring Haute Services art shows and cultural footprint" },
    { src: "/gallery/newspaper/2.jpeg", alt: "Magazine article covering Haute Services lifestyle events and gastronomy initiatives" },
    { src: "/gallery/newspaper/3.jpeg", alt: "Press coverage of Haute Services founder Maneesh Baheti and Food For Thought Fest" },
    { src: "/gallery/newspaper/5.jpeg", alt: "Editorial coverage of Haute Services hospitality consultancy and luxury brand strategy" },
    { src: "/gallery/newspaper/6.jpeg", alt: "Magazine feature on Haute Services founder Maneesh Baheti and S.A.A.G initiatives" },
    { src: "/gallery/newspaper/7.jpeg", alt: "Press clipping documenting Haute Services culinary festivals and lifestyle events" },
    { src: "/gallery/newspaper/10.jpeg", alt: "Magazine clipping featuring Haute Services founder Maneesh Baheti and gastronomy expertise" },
    { src: "/gallery/newspaper/12.jpeg", alt: "Press coverage of Haute Services lifestyle events and cultural milestones" },
    { src: "/gallery/newspaper/14.jpeg", alt: "Magazine feature on Haute Services founder Maneesh Baheti and hospitality excellence" },
    { src: "/gallery/newspaper/16.jpeg", alt: "Press clipping documenting Haute Services book launches and literary curation" },
    { src: "/gallery/newspaper/17.jpeg", alt: "Newspaper article on Haute Services luxury brand strategy and cultural heritage" },
    { src: "/gallery/newspaper/19.jpeg", alt: "Press coverage of Haute Services founder Maneesh Baheti and culinary innovation" },
    { src: "/gallery/newspaper/22.jpeg", alt: "Editorial feature on Haute Services lifestyle events and cultural curation" },
    { src: "/gallery/newspaper/23.jpeg", alt: "Press article covering Haute Services founder Maneesh Baheti and hospitality consulting" },
    { src: "/gallery/newspaper/26.jpeg", alt: "Press coverage of Haute Services founder Maneesh Baheti and luxury experiences" },
    { src: "/gallery/newspaper/27.jpeg", alt: "Newspaper clipping covering Zeruco by Zilli restaurant launch in Delhi, featuring Haute Services founder Manish Kumar Baheyti with celebrity Chef Aldo Zilli and Kashif Farooq, along with guests including fashion designer Rohit Bal, Ramola Bachchan, Subir Arora, Roopam, Thenny Mejia, Rajan Madhu, Arjun Amla, and Ala Madhu" },
    { src: "/gallery/newspaper/29.jpeg", alt: "Newspaper clipping featuring article A do celebrating Indian weaves with photo of Haute Services founder Maneesh Baheti, along with Neelam Pratap Rudy, Veera Singh, and artisans at an event celebrating Indian textile art and preservation of traditional weaves" },
    { src: "/gallery/newspaper/30.jpeg", alt: "Press clipping featuring Haute Services founder Maneesh Baheti and S.A.A.G initiatives" },
    { src: "/gallery/newspaper/31.jpeg", alt: "Newspaper coverage of Haute Services lifestyle events and cultural milestones" },
    { src: "/gallery/newspaper/33.jpeg", alt: "Press article on Haute Services hospitality excellence and luxury brand positioning" },
    { src: "/gallery/newspaper/35.jpeg", alt: "Editorial coverage of Haute Services founder Maneesh Baheti and gastronomy thought leadership" },
  ] as GalleryImage[],
  podcast: [
    // 2020 - Chronological order (oldest to newest)
    { src: "/gallery/newspaper/15.jpeg", alt: "Editorial coverage of Haute Services Food For Thought Fest and South Asian gastronomy" },
    { src: "/gallery/newspaper/9.jpeg", alt: "Editorial feature on Haute Services boutique consultancy and heritage preservation" },
    { src: "/gallery/podcast/4.jpeg", alt: "Promotional poster for Gourmet Conversations - Future Decoded webinar by PEAKLIFE gourmet & SAAG, telecast on NewsX May 28, 2020, featuring speakers Maneesh Baheti (Founder S.A.A.G), Megha Sharma (NewsX), Ankur Bhatia (Bird Group), Vicky Ratnani (Celebrity Chef), Riyaaz Amlani (Impresario), Malini Agarwal (MissMalini), Charu Parashar (Fashion Designer), and Parineeta Sethi (Chief Editor & Publisher)" },
    { src: "/gallery/podcast/6.jpeg", alt: "Promotional poster for Instagram Live session of TRAVELJINGLES featuring Haute Services founder Maneesh Baheti, Founder & Director of South Asian Association for Gastronomy (SAAG), and Hitasha Mehra, Founder & Editor of TravelJingles Magazine, presented by The Embassy Magazine on July 9th at 6 PM" },
    { src: "/gallery/podcast/3.jpeg", alt: "Promotional poster for Instagram Live event featuring influencer and home chef Arati Thapa of Boju's Kitchen alongside Haute Services founder Maneesh Baheti, Founder Director of S.A.A.G, scheduled for August 7, 2020 at 7 PM" },
    { src: "/gallery/podcast/1.jpeg", alt: "Promotional poster for Friday Live @ Five with Insia Instagram Live event on September 4 featuring Insia and Haute Services founder Maneesh Baheti, founder of S.A.A.G (South Asian Association for Gastronomy) and Food For Thought Fest, discussing The Future of Street Food in India" },
    { src: "/gallery/newspaper/34.jpeg", alt: "The Times of India newspaper clipping from January 11, 2005 covering AOI's starry night Indian art exhibition at Visual Arts Gallery India Habitat Centre, featuring curator Alka Pande, artist Paresh Maity, Raghavendra Singh of Kotak Private, danseuse Shalu Jindal, Brazilian Ambassador Kenneth Da Nobrega, and young artist Anida Sarma with Krishen Khanna's iconic Bandwalla sculpture" },
    { src: "/gallery/podcast/8.jpeg", alt: "Promotional graphic for Instagram live chat #ChatWithKaren featuring Food Writer and Consultant Karen Anand and Haute Services founder Maneesh Baheti, Founder Director of S.A.A.G, discussing How we can help to revive the food industry on Tuesday, September 8th at 5:30 PM" },
    // Undated (likely 2020 or later)
    { src: "/gallery/podcast/2.jpeg", alt: "Podcast promotional poster featuring Haute Services founder Maneesh Baheti discussing gastronomy and hospitality industry insights" },
    { src: "/gallery/podcast/5.jpeg", alt: "Promotional poster for The F&B Podcast featuring Food Blogger Mr. Karan Marwah and Haute Services founder Maneesh Baheti, Founder Director S.A.A.G, discussing change-makers in the F&B industry in India with hashtag SaveStreetfood, scheduled for Saturday at 5 PM" },
    { src: "/gallery/podcast/7.jpeg", alt: "Broadcast promotional graphic featuring Haute Services founder Maneesh Baheti discussing hospitality industry trends and Food For Thought Fest" },
  ] as GalleryImage[],
  celebs: [
    // Photos with specific context/events (arranged by likely chronological order)
    { src: "/gallery/celebs/9.jpeg", alt: "Haute Services founder Maneesh Baheti with a dignitary or notable personality at Rashtrapati Bhavan, New Delhi, India" },
    { src: "/gallery/celebs/7.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with Indian cricket legend Virender Sehwag at an evening event" },
    { src: "/gallery/celebs/1.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a celebrity at an elegant evening event featuring digital displays and sophisticated event space" },
    { src: "/gallery/celebs/2.jpeg", alt: "Haute Services founder Maneesh Baheti with a notable personality at a high-profile cultural gathering" },
    { src: "/gallery/celebs/3.jpeg", alt: "Haute Services founder Maneesh Baheti image with a celebrity at an upscale hospitality event" },
    { src: "/gallery/celebs/4.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a distinguished guest at a luxury lifestyle event" },
    { src: "/gallery/celebs/5.jpeg", alt: "Haute Services founder Maneesh Baheti with a celebrity at a cultural or hospitality industry event" },
    { src: "/gallery/celebs/6.jpeg", alt: "Haute Services founder Maneesh Baheti image with a notable personality celebrating cultural collaborations" },
    { src: "/gallery/celebs/8.jpeg", alt: "Haute Services founder Maneesh Baheti with a celebrity at a prestigious gathering" },
    { src: "/gallery/celebs/10.jpeg", alt: "Haute Services founder Maneesh Baheti with a celebrity and notable personality at a formal cultural or lifestyle event" },
    { src: "/gallery/celebs/11.jpeg", alt: "Group of well-dressed attendees including Haute Services founder Maneesh Baheti with celebrities and notable personalities at an upscale evening event" },
    { src: "/gallery/celebs/12.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a celebrity at a luxury hospitality gathering" },
    { src: "/gallery/celebs/13.jpeg", alt: "Haute Services founder Maneesh Baheti with a notable personality at a cultural or gastronomy event" },
    { src: "/gallery/celebs/14.jpeg", alt: "Haute Services founder Maneesh Baheti image with a celebrity celebrating culinary excellence and hospitality" },
    { src: "/gallery/celebs/15.jpeg", alt: "Haute Services founder Maneesh Baheti with a distinguished guest at an art or lifestyle event" },
    { src: "/gallery/celebs/16.jpeg", alt: "Group photo of distinguished gentlemen including Haute Services founder Maneesh Baheti with celebrities at an upscale evening event" },
    { src: "/gallery/celebs/17.jpeg", alt: "Haute Services founder Maneesh Baheti with notable personalities at a high-profile cultural gathering" },
    { src: "/gallery/celebs/18.jpeg", alt: "Group of prominent individuals including Haute Services founder Maneesh Baheti with celebrities at an elegant event" },
    { src: "/gallery/celebs/19.jpeg", alt: "Group photo of seven distinguished gentlemen including Haute Services founder Maneesh Baheti with celebrities and notable personalities at an upscale evening event" },
    { src: "/gallery/celebs/20.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a celebrity at a luxury lifestyle or hospitality event" },
    { src: "/gallery/celebs/21.jpeg", alt: "Haute Services founder Maneesh Baheti with a notable personality celebrating cultural collaborations" },
    { src: "/gallery/celebs/22.jpeg", alt: "Haute Services founder Maneesh Baheti image with a celebrity at an art or gastronomy gathering" },
    { src: "/gallery/celebs/23.jpeg", alt: "Haute Services founder Maneesh Baheti with a distinguished guest at a prestigious cultural event" },
    { src: "/gallery/celebs/24.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a celebrity at an upscale hospitality or lifestyle event" },
    { src: "/gallery/celebs/25.jpeg", alt: "Haute Services founder Maneesh Baheti with a notable personality at a luxury brand or cultural gathering" },
    { src: "/gallery/celebs/26.jpeg", alt: "Haute Services founder Maneesh Baheti image with a celebrity celebrating excellence in hospitality and gastronomy" },
    { src: "/gallery/celebs/27.jpeg", alt: "Haute Services founder Maneesh Baheti with a distinguished guest at a high-profile cultural or art event" },
    { src: "/gallery/celebs/28.jpeg", alt: "Haute Services founder Maneesh Baheti pictured with a celebrity at an elegant evening gathering" },
  ] as GalleryImage[],
};

// Curated images for hero collage (one from each section for variety)
const heroCollageImages = [
  galleryImages.newspaper[0]?.src,
  galleryImages.newspaper[2]?.src,
  galleryImages.podcast[0]?.src,
  galleryImages.podcast[3]?.src,
  galleryImages.celebs[0]?.src,
  galleryImages.celebs[1]?.src,
  galleryImages.newspaper[5]?.src,
  galleryImages.celebs[4]?.src,
  galleryImages.podcast[5]?.src,
].filter(Boolean) as string[];

function Section({
  id,
  eyebrow,
  title,
  description,
  images,
  objectFit = "contain",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
  objectFit?: "cover" | "contain";
}) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section id={id} className="py-20 lg:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-charcoal/20" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/40">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-charcoal leading-tight">
              {title}
            </h2>
            {/* <p className="text-sm sm:text-base lg:text-lg text-charcoal/60 font-light leading-relaxed max-w-3xl mt-4">
              {description}
            </p> */}
          </div>

          {images.length === 0 ? (
            <div className="border border-charcoal/10 bg-white/60 p-10 text-center text-sm text-charcoal/60">
              No images configured. Add images to the <span className="font-mono">galleryImages.{id}</span> array.
            </div>
          ) : (
            <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
              {images.map((img, index) => (
                <div
                  key={`${img.src}-${index}`}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative overflow-hidden rounded-sm bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 border border-charcoal/10">
                    <img
                      src={img.src.split('/').map((part, i) => i === 0 ? part : encodeURIComponent(part)).join('/')}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-auto object-${objectFit} group-hover:scale-[1.01] transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mobile Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 lg:hidden"
            />

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.src.split('/').map((part, i) => i === 0 ? part : encodeURIComponent(part)).join('/')}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Caption */}
                {/* {selectedImage.alt && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/80 font-light px-4">
                      {selectedImage.alt}
                    </p>
                  </div>
                )} */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen text-charcoal font-sans selection:bg-charcoal selection:text-white overflow-hidden pb-12">
      {/* --- HERO: collage of gallery images --- */}
      <section className="relative min-h-[40vh] h-fit flex flex-col justify-end pb-12 px-6 lg:px-12 overflow-hidden pt-12">
        {/* Collage: 3x3 grid of gallery images */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 sm:gap-1">
          {heroCollageImages.map((src, i) => (
            <div
              key={`hero-${i}-${src}`}
              className="relative overflow-hidden bg-charcoal"
            >
              <img
                src={src}
                alt="Haute Services gallery archive, press clippings and cultural moments"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-linear-to-b from-charcoal/50 via-charcoal/75 to-charcoal"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tighter drop-shadow-lg">
            Press, Posters{" "}
            <span className="italic font-light text-white/90 ml-2">
              & People
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed border-l border-white/30 pl-6 uppercase tracking-widest text-[10px] drop-shadow-md">
            Where our work meets the world—coverage, conversations, and the
            faces that have shaped our journey.
          </p>
        </div>
      </section>

      {/* --- SECTIONS --- */}
      <Section
        id="newspaper"
        eyebrow="Press"
        title="Editorial Legacy"
        description="Curated coverage from leading publications, documenting our journey through the worlds of gastronomy, art, and luxury hospitality."
        images={galleryImages.newspaper}
        objectFit="contain"
      />

      <Section
        id="podcast"
        eyebrow="Media"
        title="Conversations & Broadcasts"
        description="Visual narratives from our dialogues with industry leaders, cultural voices, and thought leaders shaping the future of hospitality and art."
        images={galleryImages.podcast}
        objectFit="contain"
      />

      <Section
        id="celebs"
        eyebrow="Celebrities & Notables"
        title="In the Company of Stars"
        description="Photos with celebrities, dignitaries, and notable personalities from hospitality, cricket, arts, and culture—moments that capture our shared heritage."
        images={galleryImages.celebs}
        objectFit="cover"
      />
    </main>
  );
}
