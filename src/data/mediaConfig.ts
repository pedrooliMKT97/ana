import heroDesktopDefault from '../assets/images/ana_hero_desktop_1789654161238.jpg';
import heroMobileDefault from '../assets/images/ana_hero_mobile_1789654176399.jpg';
import aboutPortraitDefault from '../assets/images/ana_about_portrait_1789654194273.jpg';
import leadershipDefault from '../assets/images/ana_leadership_1789654211181.jpg';
import nossoLarDefault from '../assets/images/clinica_nosso_lar_1789654224246.jpg';
import { MediaItem, MediaKey } from '../types';

export const DEFAULT_MEDIA_ITEMS: Record<MediaKey, MediaItem> = {
  'hero.desktop': {
    id: 'hero-desktop',
    key: 'hero.desktop',
    label: 'Hero Principal (Desktop)',
    section: 'Hero',
    description: 'Fotografia horizontal ampla com espaço negativo natural à esquerda para a tipografia.',
    url: heroDesktopDefault,
    defaultUrl: heroDesktopDefault,
    alt: 'Ana Bernardi em seu escritório executivo com laptop e iluminação acolhedora',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'hero.mobile': {
    id: 'hero-mobile',
    key: 'hero.mobile',
    label: 'Hero Principal (Mobile)',
    section: 'Hero',
    description: 'Fotografia vertical com Ana Bernardi e área escura na parte inferior para título centralizado e CTA.',
    url: heroMobileDefault,
    defaultUrl: heroMobileDefault,
    alt: 'Retrato executivo de Ana Bernardi sorrindo à mesa com laptop',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center 40%',
    recommendedDimensions: '1080x1440 ou 1080x1920 (9:16)',
  },
  'about.ana': {
    id: 'about-ana',
    key: 'about.ana',
    label: 'Retrato Sobre Ana',
    section: 'Sobre',
    description: 'Retrato editorial aproximado de Ana Bernardi em fundo bege acolhedor com tricot marrom.',
    url: aboutPortraitDefault,
    defaultUrl: aboutPortraitDefault,
    alt: 'Retrato de Ana Bernardi, empresária e consultora de gestão',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
    recommendedDimensions: '1000x1000 ou 1000x1200',
  },
  'leadership.main': {
    id: 'leadership-main',
    key: 'leadership.main',
    label: 'Liderança e Gestão (Negócios Humanos)',
    section: 'Liderança e Pessoas',
    description: 'Fotografia de Ana Bernardi em conversa de consultoria e liderança em ambiente corporativo.',
    url: leadershipDefault,
    defaultUrl: leadershipDefault,
    alt: 'Ana Bernardi conversando e prestando consultoria de gestão de pessoas',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'nossoLar.main': {
    id: 'nossoLar.main',
    key: 'nossoLar.main',
    label: 'Fachada Clínica Nosso Lar',
    section: 'Clínica Nosso Lar',
    description: 'Fotografia da fachada contemporânea da Clínica Nosso Lar em Mogi Guaçu.',
    url: nossoLarDefault,
    defaultUrl: nossoLarDefault,
    alt: 'Fachada iluminada da Clínica Nosso Lar em Mogi Guaçu - SP',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
    recommendedDimensions: '1600x900 (16:9)',
  },
};

const STORAGE_KEY = 'ana_bernardi_cms_media_v1';

export function getStoredMedia(): Record<MediaKey, MediaItem> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_MEDIA_ITEMS;
    const parsed = JSON.parse(data);
    return {
      ...DEFAULT_MEDIA_ITEMS,
      ...parsed,
    };
  } catch (err) {
    console.warn('Erro ao carregar mídia do CMS, usando padrão:', err);
    return DEFAULT_MEDIA_ITEMS;
  }
}

export function saveStoredMedia(items: Record<MediaKey, MediaItem>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('ana_media_updated'));
  } catch (err) {
    console.error('Erro ao salvar mídia no CMS:', err);
  }
}

export function resetMediaToDefault(): Record<MediaKey, MediaItem> {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('ana_media_updated'));
  } catch (err) {
    console.error('Erro ao resetar mídia:', err);
  }
  return DEFAULT_MEDIA_ITEMS;
}
