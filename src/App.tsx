import { useState } from 'react';
import { FloatingHeader } from './components/FloatingHeader';
import { Hero } from './components/Hero';
import { AboutAna } from './components/AboutAna';
import { ActivityAreas } from './components/ActivityAreas';
import { Leadership } from './components/Leadership';
import { NossoLar } from './components/NossoLar';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { StoryModal } from './components/StoryModal';
import { MEDIA_ITEMS } from './data/mediaConfig';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FBF8F3] text-[#2B211C] font-sans antialiased selection:bg-[#C7A06A]/30 selection:text-[#2B1A14]">
      {/* 1. Floating Sticky Navbar */}
      <FloatingHeader
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        {/* 2. Full-bleed Hero with natural negative space & no artificial gradients */}
        <Hero
          desktopMedia={MEDIA_ITEMS['hero.desktop']}
          mobileMedia={MEDIA_ITEMS['hero.mobile']}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 3. Sobre Ana Section */}
        <AboutAna
          media={MEDIA_ITEMS['about.ana']}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenStoryModal={() => setIsStoryOpen(true)}
        />

        {/* 4. Minha Atuação (Areas of Activity) */}
        <ActivityAreas onOpenContact={() => setIsContactOpen(true)} />

        {/* 5. Liderança e Pessoas (Negócios mais humanos) */}
        <Leadership
          media={MEDIA_ITEMS['leadership.main']}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Clínica Nosso Lar */}
        <NossoLar media={MEDIA_ITEMS['nossoLar.main']} />

        {/* 7. Contato Direct Section */}
        <ContactCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 8. Rodapé (Footer) */}
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
