export type MediaKey =
  | 'hero.desktop'
  | 'hero.mobile'
  | 'about.ana'
  | 'leadership.main'
  | 'nossoLar.main';

export interface MediaItem {
  id: string;
  key: MediaKey;
  label: string;
  section: string;
  description: string;
  url: string;
  defaultUrl: string;
  alt: string;
  objectPositionDesktop: string;
  objectPositionMobile: string;
  recommendedDimensions: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Users' | 'TrendingUp' | 'Lightbulb' | 'Heart';
}

export interface ProfileData {
  name: string;
  publicTitle: string;
  positioning: string[];
  locationCity: string;
  locationState: string;
  whatsappFormatted: string;
  whatsappRaw: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  linkedin: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  aboutLabel: string;
  aboutHeadline: string;
  aboutBioDesktop: string;
  aboutBioMobile: string;
  aboutQuote: string;
  aboutSignature: string;
  aboutHighlights: string[];
  activityLabel: string;
  activityHeadline: string;
  leadershipLabel: string;
  leadershipHeadline: string;
  leadershipCopyDesktop: string;
  leadershipCopyMobile: string;
  leadershipQuote: string;
  nossoLarLabel: string;
  nossoLarHeadline: string;
  nossoLarDescription: string;
  nossoLarBadge: string;
  contactLabel: string;
  contactHeadline: string;
  contactSubtitle: string;
}
