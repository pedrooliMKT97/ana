import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingHeaderProps {
  onOpenContact: () => void;
  onOpenAdmin?: () => void;
}

export function FloatingHeader({ onOpenContact, onOpenAdmin }: FloatingHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Clínica Nosso Lar', href: '#clinica' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <header
        id="navbar-floating-header"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center sm:justify-start px-3 sm:px-8 pt-3 sm:pt-5 pointer-events-none"
      >
        <motion.div
          layout
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 32,
            mass: 0.75,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`pointer-events-auto rounded-full flex items-center justify-between shadow-2xl backdrop-blur-md border ${
            isScrolled
              ? 'bg-[#231510]/95 border-[#C7A06A]/35 py-2 sm:py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
              : 'bg-[#2B1A14]/90 border-[#C7A06A]/25 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          } ${
            isHovered
              ? 'px-5 sm:px-7 gap-5 sm:gap-8'
              : 'px-4 sm:px-5 gap-3 sm:gap-5'
          }`}
        >
          {/* Brand Name */}
          <motion.a
            layout="position"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <span className="font-editorial text-xl sm:text-[23px] tracking-tight text-[#FBF8F3] group-hover:text-[#D9B77A] transition-colors whitespace-nowrap">
              Ana Bernardi
            </span>
            {/* Subtle indicator hint when closed */}
            <span
              className={`hidden sm:inline-flex items-center text-[#C7A06A]/50 transition-all duration-300 ${
                isHovered ? 'opacity-0 w-0 -mr-2 overflow-hidden' : 'opacity-100 w-auto'
              }`}
              title="Passe o mouse para expandir o menu"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>

          {/* Stretched Navigation Links (Revealed on Hover on Desktop) */}
          <AnimatePresence mode="popLayout">
            {isHovered && (
              <motion.nav
                layout
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(3px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(3px)' }}
                transition={{
                  opacity: { duration: 0.22, ease: 'easeOut' },
                  scale: { duration: 0.22, ease: 'easeOut' },
                  filter: { duration: 0.18 },
                  layout: { type: 'spring', stiffness: 380, damping: 32 },
                }}
                className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm tracking-wide text-[#E8D8C4]/90 whitespace-nowrap px-1"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#FBF8F3] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C7A06A] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Desktop "Fale comigo" CTA Button */}
          <motion.div layout="position" className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#2B1A14] bg-gradient-to-r from-[#D9B77A] to-[#C7A06A] hover:from-[#E8D8C4] hover:to-[#D9B77A] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>Fale comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Mobile Controls */}
          <motion.div layout="position" className="flex items-center gap-2 md:hidden flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2B1A14] bg-[#C7A06A] active:scale-95 transition-transform whitespace-nowrap"
            >
              Fale comigo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="p-1.5 text-[#E8D8C4] hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#231510]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <span className="text-xs uppercase tracking-widest text-[#C7A06A]/70 font-medium">
                Navegação
              </span>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-editorial text-2xl text-[#FBF8F3] hover:text-[#C7A06A] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#C7A06A]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full text-center text-sm font-medium text-[#2B1A14] bg-[#C7A06A] active:scale-98 transition-transform shadow-md"
              >
                Fale comigo no WhatsApp
              </button>

              <div className="flex items-center justify-between text-xs text-[#7A6B61] pt-2">
                <span>Mogi Guaçu - SP</span>
                {onOpenAdmin && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAdmin();
                    }}
                    className="flex items-center gap-1 text-[#C7A06A]/80 hover:text-[#C7A06A]"
                  >
                    <Shield className="w-3 h-3" />
                    <span>Painel Admin</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
