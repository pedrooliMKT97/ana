import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { MediaItem } from '../types';
import { PROFILE_DATA } from '../data/profile';

interface HeroProps {
  desktopMedia: MediaItem;
  mobileMedia: MediaItem;
  onOpenContact: () => void;
}

export function Hero({ desktopMedia, mobileMedia, onOpenContact }: HeroProps) {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Início"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-[#2B1A14]"
    >
      {/* 
        NO GRADIENT OVERLAY RULE:
        We render the original full-bleed photograph without artificial linear-gradient,
        radial-gradient, black fade or brown fade overlays.
        Desktop displays the horizontal photograph, mobile displays the vertical photograph.
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Desktop Image */}
        <img
          src={desktopMedia.url}
          alt={desktopMedia.alt}
          referrerPolicy="no-referrer"
          className="hidden md:block w-full h-full object-cover"
          style={{ objectPosition: desktopMedia.objectPositionDesktop || 'center center' }}
        />
        {/* Mobile Image */}
        <img
          src={mobileMedia.url}
          alt={mobileMedia.alt}
          referrerPolicy="no-referrer"
          className="block md:hidden w-full h-full object-cover"
          style={{ objectPosition: mobileMedia.objectPositionMobile || 'center center' }}
        />
      </div>

      {/* Spacer for Floating Navbar */}
      <div className="w-full h-24 sm:h-28" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        {/* ================= DESKTOP CONTENT (LEFT ALIGNED, MAX-W 620px) ================= */}
        <div className="hidden md:flex flex-col items-start max-w-[620px] text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-2.5 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#C7A06A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D8C4]/90">
              {PROFILE_DATA.heroEyebrow}
            </span>
          </motion.div>

          {/* H1 Headline with Masked Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="font-editorial text-4xl lg:text-5xl xl:text-[54px] font-normal leading-[1.12] tracking-tight text-[#FBF8F3]"
            >
              {PROFILE_DATA.heroHeadline}
            </motion.h1>
          </div>

          {/* Supporting Subtitle (Desktop only!) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base lg:text-lg text-[#E8D8C4]/90 font-light leading-relaxed mb-8 max-w-[540px]"
          >
            {PROFILE_DATA.heroSubtitle}
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#2B1A14] bg-gradient-to-r from-[#D9B77A] to-[#C7A06A] hover:from-[#E8D8C4] hover:to-[#D9B77A] shadow-[0_4px_20px_rgba(199,160,106,0.25)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(199,160,106,0.4)] active:scale-95"
            >
              <span>{PROFILE_DATA.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* ================= MOBILE CONTENT (CENTERED, TITLE + CTA ONLY) ================= */}
        <div className="flex md:hidden flex-col items-center text-center w-full max-w-sm mx-auto mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-editorial text-3xl sm:text-4xl font-normal leading-[1.2] text-[#FBF8F3] mb-6 drop-shadow-md"
          >
            {PROFILE_DATA.heroHeadline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full flex justify-center"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center gap-2.5 w-full max-w-[280px] py-3.5 px-7 rounded-full text-sm font-semibold tracking-wide text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] shadow-lg transition-transform active:scale-95"
            >
              <span>{PROFILE_DATA.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Sub-bar & Scroll Cue */}
      <div className="relative z-10 w-full border-t border-[#C7A06A]/15 bg-[#231510]/50 backdrop-blur-sm py-4 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wider uppercase text-[#E8D8C4]/75">
          {/* Desktop Roles Summary */}
          <div className="hidden md:flex items-center gap-3">
            <span>Empresária</span>
            <span className="text-[#C7A06A]">•</span>
            <span>Consultoria de Gestão de Pessoas e Negócios</span>
            <span className="text-[#C7A06A]">•</span>
            <span>Diretora da Clínica Nosso Lar</span>
          </div>

          {/* Interactive Scroll Cue */}
          <button
            onClick={scrollToAbout}
            aria-label="Rolar para a próxima seção"
            className="w-full md:w-auto flex items-center justify-center gap-2 text-[#E8D8C4]/80 hover:text-[#D9B77A] transition-colors py-1 group"
          >
            <span className="text-[11px] font-medium tracking-[0.2em]">Scroll para explorar</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
