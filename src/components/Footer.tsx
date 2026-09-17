import { Instagram, Linkedin, Shield } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface FooterProps {
  onOpenAdmin: () => void;
}

export function Footer({ onOpenAdmin }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer aria-label="Rodapé" className="bg-[#1D110C] text-[#E8D8C4] border-t border-[#C7A06A]/15 py-14 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-12 border-b border-[#C7A06A]/10 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-editorial text-3xl text-[#FBF8F3] tracking-tight mb-2">
              {PROFILE_DATA.name}
            </span>
            <p className="text-xs sm:text-sm text-[#C7A06A]/80 font-light max-w-md">
              Empresária | Consultora de Gestão de Pessoas e Negócios | Diretora da Clínica Nosso Lar
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#E8D8C4]/80">
            <button onClick={() => scrollTo('#hero')} className="hover:text-[#D9B77A] transition-colors">
              Início
            </button>
            <button onClick={() => scrollTo('#sobre')} className="hover:text-[#D9B77A] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollTo('#atuacao')} className="hover:text-[#D9B77A] transition-colors">
              Atuação
            </button>
            <button onClick={() => scrollTo('#clinica')} className="hover:text-[#D9B77A] transition-colors">
              Clínica Nosso Lar
            </button>
            <button onClick={() => scrollTo('#contato')} className="hover:text-[#D9B77A] transition-colors">
              Contato
            </button>
          </div>

          {/* Socials & Admin */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#2B1A14] border border-[#C7A06A]/20 flex items-center justify-center text-[#E8D8C4] hover:text-[#D9B77A] hover:border-[#C7A06A]/50 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#2B1A14] border border-[#C7A06A]/20 flex items-center justify-center text-[#E8D8C4] hover:text-[#D9B77A] hover:border-[#C7A06A]/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenAdmin}
              aria-label="Acessar Painel de Gestão de Imagens (CMS)"
              title="Gerenciador de Mídia e Imagens"
              className="w-9 h-9 rounded-full bg-[#2B1A14] border border-[#C7A06A]/20 flex items-center justify-center text-[#C7A06A]/60 hover:text-[#C7A06A] hover:border-[#C7A06A]/50 transition-all"
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B61]">
          <span>© {new Date().getFullYear()} Ana Bernardi. Todos os direitos reservados. Mogi Guaçu - SP.</span>
          <span className="uppercase tracking-[0.2em] text-[10px] text-[#C7A06A]/70 font-semibold">
            PESSOAS TRANSFORMAM NEGÓCIOS
          </span>
        </div>
      </div>
    </footer>
  );
}
