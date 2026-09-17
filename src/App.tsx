import { useState, useEffect } from 'react';
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
import { AdminLogin } from './components/admin/AdminLogin';
import { MediaManager } from './components/admin/MediaManager';
import { getStoredMedia } from './data/mediaConfig';
import { MediaItem, MediaKey } from './types';

export default function App() {
  const [media, setMedia] = useState<Record<MediaKey, MediaItem>>(getStoredMedia());
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isMediaManagerOpen, setIsMediaManagerOpen] = useState(false);

  // Sync media on CMS updates
  useEffect(() => {
    const handleMediaUpdate = () => {
      setMedia(getStoredMedia());
    };
    window.addEventListener('ana_media_updated', handleMediaUpdate);

    // Check if user navigated to #admin or /admin
    const checkAdminRoute = () => {
      if (window.location.hash === '#admin' || window.location.pathname.includes('/admin')) {
        setIsAdminLoginOpen(true);
      }
    };
    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);

    return () => {
      window.removeEventListener('ana_media_updated', handleMediaUpdate);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  const handleMediaChange = () => {
    setMedia(getStoredMedia());
  };

  const handleAdminSuccess = () => {
    setIsAdminLoginOpen(false);
    setIsMediaManagerOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FBF8F3] text-[#2B211C] font-sans antialiased selection:bg-[#C7A06A]/30 selection:text-[#2B1A14]">
      {/* 1. Floating Sticky Navbar */}
      <FloatingHeader
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAdmin={() => setIsAdminLoginOpen(true)}
      />

      <main>
        {/* 2. Full-bleed Hero with natural negative space & no artificial gradients */}
        <Hero
          desktopMedia={media['hero.desktop']}
          mobileMedia={media['hero.mobile']}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 3. Sobre Ana Section */}
        <AboutAna
          media={media['about.ana']}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenStoryModal={() => setIsStoryOpen(true)}
        />

        {/* 4. Minha Atuação (Areas of Activity) */}
        <ActivityAreas onOpenContact={() => setIsContactOpen(true)} />

        {/* 5. Liderança e Pessoas (Negócios mais humanos) */}
        <Leadership
          media={media['leadership.main']}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Clínica Nosso Lar */}
        <NossoLar media={media['nossoLar.main']} />

        {/* 7. Contato Direct Section */}
        <ContactCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 8. Rodapé (Footer) */}
      <Footer onOpenAdmin={() => setIsAdminLoginOpen(true)} />

      {/* Modals & Protected CMS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <AdminLogin
        isOpen={isAdminLoginOpen}
        onClose={() => {
          setIsAdminLoginOpen(false);
          if (window.location.hash === '#admin') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        onSuccess={handleAdminSuccess}
      />

      {isMediaManagerOpen && (
        <MediaManager
          onClose={() => {
            setIsMediaManagerOpen(false);
            if (window.location.hash === '#admin') {
              window.history.replaceState(null, '', window.location.pathname);
            }
          }}
          onMediaChanged={handleMediaChange}
        />
      )}
    </div>
  );
}
