export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'particulier' | 'professionnel';
}

export const SERVICES: Service[] = [
  {
    id: 'auto',
    title: 'Solution Auto & Fidelity by AXA',
    description: 'Programme Fidelity avec avantages fidélité dès la RC, packs Fonctionnaires et Cyclomoteurs.',
    icon: 'Car',
    category: 'particulier'
  },
  {
    id: 'habitation',
    title: 'Habitassur (Habitation)',
    description: 'Protection multirisque habitation complète contre l\'incendie, les dégâts des eaux, le vol et les bris de glaces.',
    icon: 'Home',
    category: 'particulier'
  },
  {
    id: 'epargne-retraite',
    title: 'Futuris II & Educatis II',
    description: 'Épargne retraite avec déductibilité 100% de l\'IR et plan épargne études pour vos enfants.',
    icon: 'TrendingUp',
    category: 'particulier'
  },
  {
    id: 'sante',
    title: 'Prévoyance Santé : Sehassur & Sehassur Plus International',
    description: 'Couverture santé Sehassur au Maroc et Sehassur Plus International avec tiers payant hospitalier mondial.',
    icon: 'HeartPulse',
    category: 'particulier'
  },
  {
    id: 'voyage',
    title: 'Globale Assistance Voyage',
    description: 'Conforme exigences visas espace Schengen (30 000 €), partout dans le monde et au Maroc avec assistance médicale et rapatriement.',
    icon: 'Plane',
    category: 'particulier'
  },
  {
    id: 'loisirs-chasse',
    title: 'Plaisance, Jet Ski & RC Chasse',
    description: 'Assurance navires, jet-skis, scooters de mer et contrat RC Chasse obligatoire avec attestation immédiate.',
    icon: 'ShieldCheck',
    category: 'particulier'
  }
];

export interface ProService {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const PRO_SERVICES: ProService[] = [
  {
    title: 'Accidents du Travail (Loi 18-12)',
    description: 'Conformité obligatoire stricte, indemnités journalières, soins sans avance et rentes viagères d\'invalidité.',
    icon: 'Users',
    features: ['Indemnités journalières', 'Soins médicaux 100%', 'Rentes d\'incapacité', 'Reclassement pro']
  },
  {
    title: 'Flotte Automobile Entreprise',
    description: 'Dédiée aux parcs dès 5 véhicules avec l\'exclusivité AXA de garantie des Aménagements Professionnels.',
    icon: 'Truck',
    features: ['Aménagements Pro exclusifs', 'Indemnisation valeur à neuf', 'Assistance prioritaire 24/7', 'Échéance unique']
  },
  {
    title: 'Multi PME/PMI, Pharma & Hébergement',
    description: 'Protection globale de votre activité, de vos locaux et stocks avec des packs sectoriels dédiés.',
    icon: 'Building2',
    features: ['Incendie & Explosion', 'Dégâts des eaux & Vol', 'Bris de machines & IT', 'Perte d\'exploitation']
  },
  {
    title: 'Prévoyance Santé Entreprise',
    description: 'Assurance maladie collective pour tous vos collaborateurs avec libre choix des taux TNR et tiers payant.',
    icon: 'HeartPulse',
    features: ['Tiers payant clinique', 'Formule à la carte', 'Garantie décès & ITT', 'Déductible 100% IS']
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amine Benjelloun',
    role: 'Chef d\'entreprise',
    company: 'Tech Solutions Casa',
    content: 'Un accompagnement exceptionnel pour la mise en place de notre assurance flotte. L\'équipe est réactive et comprend parfaitement les enjeux des PME à Casablanca.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '2',
    name: 'Sara El Mansouri',
    role: 'Particulier',
    content: 'J\'ai souscrit à mon assurance auto et habitation en quelques minutes. Le service client est impeccable et les garanties sont très claires.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '3',
    name: 'Youssef Alami',
    role: 'Professionnel Libéral',
    content: 'La RC Pro proposée par AXA Casablanca est la plus complète que j\'ai trouvée. Un grand merci pour les conseils avisés lors de la souscription.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    rating: 4
  }
];

export const CONTACT_INFO = {
  phoneFixe: "05 22 63 02 68",
  phoneFixeRaw: "0522630268",
  phoneFixeTel: "+212522630268",
  phoneMobile: "06 61 18 04 22",
  phoneMobileRaw: "0661180422",
  phoneMobileTel: "+212661180422",
  whatsappNumber: "212661180422",
  whatsappLink: "https://wa.me/212661180422",
  email: "axasaada9@gmail.com",
  address: "271, Boulevard Chouhada, Bloc 17, Casablanca 20320",
};

export const getWhatsAppUrl = (text?: string) => {
  if (!text) return "https://wa.me/212661180422";
  return `https://wa.me/212661180422?text=${encodeURIComponent(text)}`;
};

