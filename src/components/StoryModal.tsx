import { X, ArrowRight, Heart, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profile';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function StoryModal({ isOpen, onClose, onOpenContact }: StoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FBF8F3] border border-[#C7A06A]/40 p-6 sm:p-9 shadow-2xl relative text-[#2B1A14]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#7A6B61] hover:text-[#2B1A14] p-1.5 rounded-lg transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5F43]">
            Trajetória & Posicionamento
          </span>
          <h3 className="font-editorial text-3xl text-[#2B1A14] mt-1">
            Gestão com Essência Humana
          </h3>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#5A382A] font-light leading-relaxed mb-8">
          <p>
            Ana Bernardi atua conectando duas dimensões que frequentemente caminham separadas no meio corporativo: a solidez dos processos de negócios e o cuidado genuíno com as pessoas.
          </p>
          <p>
            Como empresária e consultora em Mogi Guaçu - SP, sua abordagem parte do princípio de que negócios sustentáveis são formados por pessoas claras em seus papéis, lideranças conscientes e uma cultura onde o trabalho tem sentido.
          </p>
          <p>
            Na direção da Clínica Nosso Lar, essa visão é aplicada diariamente em uma instituição voltada à saúde emocional e ao acolhimento humano, demonstrando que sensibilidade e governança executiva se complementam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="p-4 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] text-center">
            <Heart className="w-5 h-5 text-[#C7A06A] mx-auto mb-2" />
            <span className="font-editorial text-lg text-[#2B1A14] block">Pessoas</span>
            <span className="text-xs text-[#7A6B61]">Cuidado e engajamento</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] text-center">
            <Sparkles className="w-5 h-5 text-[#C7A06A] mx-auto mb-2" />
            <span className="font-editorial text-lg text-[#2B1A14] block">Estratégia</span>
            <span className="text-xs text-[#7A6B61]">Processos e clareza</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F6EFE6] border border-[#E8D8C4] text-center">
            <Building2 className="w-5 h-5 text-[#C7A06A] mx-auto mb-2" />
            <span className="font-editorial text-lg text-[#2B1A14] block">Gestão</span>
            <span className="text-xs text-[#7A6B61]">Liderança de impacto</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-[#E8D8C4]">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#7A6B61] hover:text-[#2B1A14] transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#2B1A14] bg-[#C7A06A] hover:bg-[#D9B77A] transition-transform active:scale-95 shadow-sm"
          >
            <span>Conversar com Ana</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
