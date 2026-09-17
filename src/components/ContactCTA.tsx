import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profile';

interface ContactCTAProps {
  onOpenContact: () => void;
}

export function ContactCTA({ onOpenContact }: ContactCTAProps) {
  return (
    <section id="contato" aria-label="Contato" className="py-20 sm:py-28 lg:py-36 bg-[#2B1A14] text-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C7A06A]">
                {PROFILE_DATA.contactLabel}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[50px] font-normal leading-[1.15] text-[#FBF8F3] mb-6">
              {PROFILE_DATA.contactHeadline}
            </h2>

            <p className="text-base lg:text-lg leading-relaxed text-[#E8D8C4]/80 font-light mb-8 max-w-xl">
              {PROFILE_DATA.contactSubtitle}
            </p>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#2B1A14] bg-gradient-to-r from-[#D9B77A] to-[#C7A06A] hover:from-[#E8D8C4] hover:to-[#D9B77A] shadow-[0_4px_24px_rgba(199,160,106,0.25)] hover:shadow-[0_6px_32px_rgba(199,160,106,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Fale comigo agora</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Direct Contact Info Blocks (Matching image.png) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col space-y-6 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#C7A06A]/20 pt-8 lg:pt-0"
          >
            {/* WhatsApp Block */}
            <a
              href={`https://wa.me/${PROFILE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá Ana, gostaria de conversar sobre gestão e negócios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl bg-[#231510]/60 hover:bg-[#231510] border border-[#C7A06A]/15 hover:border-[#C7A06A]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#3A241C] flex items-center justify-center flex-shrink-0 text-[#C7A06A] group-hover:bg-[#C7A06A] group-hover:text-[#2B1A14] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#C7A06A]/80 font-medium mb-0.5">
                  WhatsApp Profissional
                </span>
                <span className="font-editorial text-xl text-[#FBF8F3] group-hover:text-[#D9B77A] transition-colors">
                  {PROFILE_DATA.whatsappFormatted}
                </span>
              </div>
            </a>

            {/* Email Block */}
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="group flex items-start gap-4 p-4 rounded-xl bg-[#231510]/60 hover:bg-[#231510] border border-[#C7A06A]/15 hover:border-[#C7A06A]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#3A241C] flex items-center justify-center flex-shrink-0 text-[#C7A06A] group-hover:bg-[#C7A06A] group-hover:text-[#2B1A14] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#C7A06A]/80 font-medium mb-0.5">
                  E-mail
                </span>
                <span className="text-sm sm:text-base text-[#FBF8F3] group-hover:text-[#D9B77A] transition-colors break-all">
                  {PROFILE_DATA.email}
                </span>
              </div>
            </a>

            {/* Location Block */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#231510]/60 border border-[#C7A06A]/15">
              <div className="w-10 h-10 rounded-lg bg-[#3A241C] flex items-center justify-center flex-shrink-0 text-[#C7A06A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#C7A06A]/80 font-medium mb-0.5">
                  Localização & Atendimento
                </span>
                <span className="block text-sm sm:text-base text-[#FBF8F3]">
                  {PROFILE_DATA.locationCity} - {PROFILE_DATA.locationState}
                </span>
                <span className="block text-xs text-[#E8D8C4]/60 font-light mt-0.5">
                  Atendimento presencial e online
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
