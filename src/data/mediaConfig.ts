import { MediaItem, MediaKey } from '../types';

/**
 * =========================================================================
 * FOTOGRAFIAS DO SITE ANA BERNARDI
 * =========================================================================
 * Para trocar as fotos do site, basta colocar suas imagens diretamente na pasta:
 * 📁 /public/images/
 * 
 * Nomes padrão dos arquivos:
 * - hero-desktop.jpg -> Foto principal em tela cheia para COMPUTADOR (Desktop)
 * - hero-mobile.jpg  -> Foto principal vertical para CELULAR (Mobile)
 * - about.jpg        -> Foto da seção "Sobre Ana"
 * - leadership.jpg   -> Foto da seção "Liderança e Gestão"
 * - nosso-lar.jpg    -> Foto da "Clínica Nosso Lar"
 * 
 * Se você usar outro formato (ex: .png ou .webp), basta alterar a extensão abaixo!
 * =========================================================================
 */

export const MEDIA_ITEMS: Record<MediaKey, MediaItem> = {
  'hero.desktop': {
    id: 'hero-desktop',
    key: 'hero.desktop',
    label: 'Hero Principal (Desktop)',
    section: 'Hero',
    description: 'Fotografia horizontal ampla para computadores (16:9). Salve em /public/images/hero-desktop.png',
    url: '/images/hero-desktop.png',
    defaultUrl: '/images/hero-desktop.png',
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
    description: 'Fotografia vertical para celulares (9:16). Salve em /public/images/hero-mobile.png',
    url: '/images/hero-mobile.png',
    defaultUrl: '/images/hero-mobile.png',
    alt: 'Retrato executivo de Ana Bernardi sorrindo à mesa com laptop',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center 35%',
    recommendedDimensions: '1080x1440 ou 1080x1920 (9:16)',
  },
  'about.ana': {
    id: 'about-ana',
    key: 'about.ana',
    label: 'Retrato Sobre Ana',
    section: 'Sobre',
    description: 'Retrato de Ana Bernardi. Salve em /public/images/about.jpg',
    url: '/images/about.jpg',
    defaultUrl: '/images/about.jpg',
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
    description: 'Fotografia de liderança e consultoria. Salve em /public/images/leadership.jpg',
    url: '/images/leadership.jpg',
    defaultUrl: '/images/leadership.jpg',
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
    description: 'Fotografia da Clínica Nosso Lar. Salve em /public/images/nosso-lar.jpg',
    url: '/images/nosso-lar.jpg',
    defaultUrl: '/images/nosso-lar.jpg',
    alt: 'Fachada iluminada da Clínica Nosso Lar em Mogi Guaçu - SP',
    objectPositionDesktop: 'center center',
    objectPositionMobile: 'center center',
    recommendedDimensions: '1600x900 (16:9)',
  },
};

export function getStoredMedia(): Record<MediaKey, MediaItem> {
  return MEDIA_ITEMS;
}
