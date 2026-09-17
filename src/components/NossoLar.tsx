import { useState } from 'react';
import { ArrowRight, MapPin, Building2, HeartHandshake, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MediaItem } from '../types';
import { PROFILE_DATA } from '../data/profile';

interface NossoLarProps {
  media: MediaItem;
}

export function NossoLar({ media }: NossoLarProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="clinica" aria-label="Clínica Nosso Lar" className="py-20 sm:py-28 lg:py-36 bg-[#F6EFE6] border-y border-[#E8D8C4]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Directive Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8A5F43]">
                {PROFILE_DATA.nossoLarLabel}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] text-[#2B1A14] mb-6">
              {PROFILE_DATA.nossoLarHeadline}
            </h2>

            <p className="text-base lg:text-[17px] leading-relaxed text-[#5A382A] font-light mb-8">
              {PROFILE_DATA.nossoLarDescription}
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
            >
              <span>Conheça a Clínica</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Facade Photo with Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(43,26,20,0.12)] border border-[#E8D8C4] aspect-[16/10] sm:aspect-[16/9] group">
              <img
                src={media.url}
                alt={media.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: media.objectPositionDesktop || 'center center' }}
              />

              {/* Architectural Badge in Bottom Right Corner (as in image.png) */}
              <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 px-4 py-3 rounded-xl bg-[#231510]/85 backdrop-blur-md border border-[#C7A06A]/30 text-right">
                <span className="font-editorial text-sm sm:text-base text-[#FBF8F3] tracking-wide block">
                  {PROFILE_DATA.nossoLarBadge}
                </span>
                <span className="text-[11px] text-[#C7A06A] uppercase tracking-wider block">
                  Mogi Guaçu - SP
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Modal on Clinica Nosso Lar */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-lg rounded-2xl bg-[#FBF8F3] border border-[#C7A06A]/30 p-7 sm:p-9 shadow-2xl relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-[#7A6B61] hover:text-[#2B1A14] p-1.5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5F43]">
                  Diretoria Executiva
                </span>
              </div>

              <h3 className="font-editorial text-3xl text-[#2B1A14] mb-4">
                Clínica Nosso Lar
              </h3>

              <p className="text-sm text-[#5A382A] font-light leading-relaxed mb-6">
                Instituição de referência dedicada ao cuidado, acolhimento e desenvolvimento da saúde emocional em Mogi Guaçu. Sob a direção de Ana Bernardi, a gestão prioriza a valorização do ser humano, infraestrutura acolhedora e excelência de processos.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-[#3A241C]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C7A06A]" />
                  <span>Localização: Mogi Guaçu - SP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#C7A06A]" />
                  <span>Direção e governança institucional: Ana Bernardi</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartHandshake className="w-4 h-4 text-[#C7A06A]" />
                  <span>Cuidado humanizado e desenvolvimento contínuo da equipe</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E8D8C4]">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] transition-transform active:scale-95"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
