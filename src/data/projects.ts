export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  categoryFilter: string;
  year: string;
  description: string;
  challenge: string;
  direction: string;
  deliverables: string[];
  colors: string[];
  accentColor: string;
  pattern: 'circles' | 'blocks' | 'stripes' | 'grid' | 'diagonal' | 'dots';
}

export const projects: Project[] = [
  {
    id: 'louder-studio',
    number: '01',
    name: 'LOUDER / STUDIO',
    category: 'Brand Identity',
    categoryFilter: 'identity',
    year: '2024',
    description: 'Identity system with expressive typography and a confrontational graphic language.',
    challenge: 'Create a visual identity that refuses to blend in. The studio needed a system that communicates confidence and creative ambition without relying on conventional agency aesthetics.',
    direction: 'We built a modular identity system around oversized typography, hard geometry, and deliberate contrast. The logo functions as both a mark and a typographic statement. Color is used sparingly but decisively.',
    deliverables: ['Logo System', 'Typography Guidelines', 'Color System', 'Stationery Suite', 'Brand Book', 'Digital Templates'],
    colors: ['#111111', '#D7FF00', '#F5F4EC'],
    accentColor: '#D7FF00',
    pattern: 'circles'
  },
  {
    id: 'public-good',
    number: '02',
    name: 'PUBLIC GOOD',
    category: 'Campaigns',
    categoryFilter: 'campaigns',
    year: '2024',
    description: 'Campaign concept built around a strong social message and poster-based art direction.',
    challenge: 'Design a campaign system that communicates urgency and purpose without resorting to visual clichés. The message needed to be clear, direct, and visually arresting.',
    direction: 'We developed a poster-driven campaign using bold typography, limited color palette, and strong photographic treatments. Each piece functions independently while contributing to a cohesive system.',
    deliverables: ['Campaign Concept', 'Poster Series', 'Social Media System', 'Print Collateral', 'Outdoor Installations'],
    colors: ['#FF3B30', '#111111', '#F5F4EC'],
    accentColor: '#FF3B30',
    pattern: 'stripes'
  },
  {
    id: 'new-forms',
    number: '03',
    name: 'NEW FORMS',
    category: 'Digital Experiences',
    categoryFilter: 'digital',
    year: '2024',
    description: 'Experimental digital identity exploring modular layouts and geometric compositions.',
    challenge: 'Build a digital presence that reflects experimental thinking while remaining functional and navigable. The identity needed to push boundaries without sacrificing usability.',
    direction: 'We created a modular digital system using geometric compositions, asymmetric grids, and dynamic typography. The interface responds to content while maintaining a strong visual voice.',
    deliverables: ['Website Design', 'Interaction System', 'Component Library', 'Motion Guidelines', 'CMS Templates'],
    colors: ['#244CFF', '#111111', '#D7FF00'],
    accentColor: '#244CFF',
    pattern: 'grid'
  },
  {
    id: 'offcut',
    number: '04',
    name: 'OFFCUT',
    category: 'Packaging',
    categoryFilter: 'packaging',
    year: '2023',
    description: 'Packaging concept inspired by material reuse, bold labels, and unconventional color combinations.',
    challenge: 'Design packaging that communicates sustainability without looking like every other eco-brand. The system needed to feel raw, honest, and visually distinctive on shelf.',
    direction: 'We built a packaging system using bold labels, limited ink colors, and raw material textures. Each variant uses a different color combination while maintaining system coherence.',
    deliverables: ['Packaging System', 'Label Design', 'Material Specifications', 'Print Production Files', 'Brand Guidelines'],
    colors: ['#D7FF00', '#111111', '#C8C8C0'],
    accentColor: '#D7FF00',
    pattern: 'blocks'
  },
  {
    id: 'noise-department',
    number: '05',
    name: 'NOISE DEPARTMENT',
    category: 'Art Direction',
    categoryFilter: 'identity',
    year: '2023',
    description: 'Editorial and campaign system combining oversized typography with raw photographic treatments.',
    challenge: 'Create an editorial identity that captures the energy and attitude of independent culture while maintaining editorial clarity across multiple formats.',
    direction: 'We developed a typographic-first system using oversized headlines, raw image treatments, and a strict grid. The identity adapts across editorial, digital, and environmental applications.',
    deliverables: ['Editorial System', 'Typography Suite', 'Photography Direction', 'Layout Templates', 'Digital Extensions'],
    colors: ['#111111', '#FF3B30', '#F5F4EC'],
    accentColor: '#FF3B30',
    pattern: 'diagonal'
  },
  {
    id: 'common-ground',
    number: '06',
    name: 'COMMON GROUND',
    category: 'Brand Identity',
    categoryFilter: 'identity',
    year: '2023',
    description: 'A visual identity exploring community, public space, and everyday culture.',
    challenge: 'Design an identity for a cultural platform that feels inclusive without being generic. The visual system needed to represent diversity and shared experience.',
    direction: 'We created a flexible identity system using modular geometric forms, warm typography, and a layered color palette. The system generates unique compositions while maintaining brand recognition.',
    deliverables: ['Identity System', 'Logo Variations', 'Color System', 'Application Guidelines', 'Digital Toolkit'],
    colors: ['#244CFF', '#D7FF00', '#111111'],
    accentColor: '#244CFF',
    pattern: 'dots'
  }
];

export const categories = [
  { id: 'all', label: 'ALL WORK' },
  { id: 'identity', label: 'IDENTITY' },
  { id: 'digital', label: 'DIGITAL' },
  { id: 'campaigns', label: 'CAMPAIGNS' },
  { id: 'packaging', label: 'PACKAGING' },
];

export const services = [
  {
    id: 'brand-identity',
    number: '01',
    name: 'Brand Identity',
    description: 'Naming exploration, identity systems, typography, color systems, and brand applications.',
    deliverables: ['Logo Design', 'Typography System', 'Color Palette', 'Brand Guidelines', 'Stationery', 'Applications'],
    filterCategory: 'identity'
  },
  {
    id: 'digital-experiences',
    number: '02',
    name: 'Digital Experiences',
    description: 'Websites, digital art direction, interaction design, and expressive interface systems.',
    deliverables: ['Website Design', 'Interaction Design', 'Component Systems', 'Motion Design', 'CMS Setup'],
    filterCategory: 'digital'
  },
  {
    id: 'campaigns',
    number: '03',
    name: 'Campaigns & Art Direction',
    description: 'Campaign concepts, graphic systems, launch visuals, and creative direction.',
    deliverables: ['Campaign Strategy', 'Visual Systems', 'Launch Assets', 'Creative Direction', 'Media Planning'],
    filterCategory: 'campaigns'
  },
  {
    id: 'packaging-print',
    number: '04',
    name: 'Packaging & Print',
    description: 'Packaging concepts, editorial layouts, posters, printed collateral, and production-ready artwork.',
    deliverables: ['Packaging Design', 'Print Production', 'Editorial Layout', 'Poster Design', 'Collateral'],
    filterCategory: 'packaging'
  },
  {
    id: 'experiments',
    number: '05',
    name: 'Creative Experiments',
    description: 'Exploratory work, unusual formats, prototypes, and unconventional creative ideas.',
    deliverables: ['Concept Development', 'Prototypes', 'Installations', 'Experimental Formats', 'Research'],
    filterCategory: 'all'
  }
];
