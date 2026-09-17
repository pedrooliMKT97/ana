import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MediaItem } from '../types';
import { PROFILE_DATA } from '../data/profile';

interface AboutAnaProps {
  media: MediaItem;
  onOpenContact: () => void;
  onOpenStoryModal: () => void;
}

export function AboutAna({ media, onOpenContact, onOpenStoryModal }: AboutAnaProps) {
  return (
    <section id="sobre" aria-label="Sobre Ana Bernardi" className="py-20 sm:py-28 lg:py-36 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(43,26,20,0.12)] border border-[#E8D8C4] group">
              <img
                src={media.url}
                alt={media.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: media.objectPositionDesktop || 'center center' }}
              />
              {/* Subtle architectural frame accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#C7A06A]/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8A5F43]">
                {PROFILE_DATA.aboutLabel}
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] text-[#2B1A14] mb-6">
              {PROFILE_DATA.aboutHeadline}
            </h2>

            {/* Desktop Bio Paragraph */}
            <p className="hidden sm:block text-base lg:text-[17px] leading-relaxed text-[#5A382A] font-light mb-6 max-w-xl">
              {PROFILE_DATA.aboutBioDesktop}
            </p>

            {/* Mobile Bio Paragraph (Concise) */}
            <p className="block sm:hidden text-sm leading-relaxed text-[#5A382A] font-light mb-5">
              {PROFILE_DATA.aboutBioMobile}
            </p>

            {/* Highlights (Desktop only) */}
            <div className="hidden sm:grid grid-cols-2 gap-3 mb-8 w-full max-w-lg">
              {PROFILE_DATA.aboutHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs lg:text-sm text-[#2B1A14] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A06A] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Editorial Quote & Signature (Matching image.png) */}
            <div className="relative pl-5 py-2 mb-8 border-l-2 border-[#C7A06A]/40 max-w-lg">
              <p className="font-signature text-xl sm:text-2xl text-[#3A241C] leading-snug mb-2 font-normal">
                {PROFILE_DATA.aboutQuote}
              </p>
              <span className="block font-editorial italic text-base text-[#8A5F43]">
                — {PROFILE_DATA.aboutSignature}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenStoryModal}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#2B1A14] bg-[#E8D8C4] hover:bg-[#D9B77A] transition-all duration-300 active:scale-95"
              >
                <span>Conheça minha trajetória</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#5A382A] hover:text-[#2B1A14] hover:underline underline-offset-4 transition-colors"
              >
                Fale comigo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
