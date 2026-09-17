import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MediaItem } from '../types';
import { PROFILE_DATA } from '../data/profile';

interface LeadershipProps {
  media: MediaItem;
  onOpenContact: () => void;
}

export function Leadership({ media, onOpenContact }: LeadershipProps) {
  return (
    <section id="lideranca" aria-label="Liderança e Pessoas" className="py-20 sm:py-28 lg:py-36 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8A5F43]">
                {PROFILE_DATA.leadershipLabel}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] text-[#2B1A14] mb-6">
              {PROFILE_DATA.leadershipHeadline}
            </h2>

            {/* Desktop Copy */}
            <p className="hidden sm:block text-base lg:text-[17px] leading-relaxed text-[#5A382A] font-light mb-6">
              {PROFILE_DATA.leadershipCopyDesktop}
            </p>

            {/* Mobile Copy (Concise) */}
            <p className="block sm:hidden text-sm leading-relaxed text-[#5A382A] font-light mb-5">
              {PROFILE_DATA.leadershipCopyMobile}
            </p>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
            >
              <span>Fale comigo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Large Photo with Quote Overlay (Matching image.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(43,26,20,0.12)] border border-[#E8D8C4] aspect-[16/10] sm:aspect-[16/9] group">
              <img
                src={media.url}
                alt={media.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: media.objectPositionDesktop || 'center center' }}
              />

              {/* Callout Quote Overlay Badge on image */}
              <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 max-w-[280px] sm:max-w-xs p-4 sm:p-5 rounded-xl bg-[#231510]/85 backdrop-blur-md border border-[#C7A06A]/30 text-right">
                <p className="font-signature text-base sm:text-lg text-[#FBF8F3] leading-snug font-normal mb-1">
                  {PROFILE_DATA.leadershipQuote}
                </p>
                <span className="block font-editorial italic text-xs text-[#D9B77A]">
                  — Ana Bernardi
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
