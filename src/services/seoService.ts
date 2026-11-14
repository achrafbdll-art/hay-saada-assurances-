import { PRODUCTS_DATA, ProductData } from '../data/products';
import { AGENCY_EMAIL } from './emailService';

const SITE_URL = 'https://assuranceshaysaada.ma';
const PHONE_FIXE_INTL = '+212522630268';
const PHONE_MOBILE_INTL = '+212661180422';
const WHATSAPP_URL = 'https://wa.me/212661180422';
const DEFAULT_IMAGE = `${SITE_URL}/assets/slide-1-expertise.jpg`;

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
}

/**
 * Met à jour dynamiquement les balises SEO (<title>, meta description, keywords, canonical, OpenGraph, Twitter)
 * sans aucun impact visuel sur l'interface.
 */
export function applyPageSEO(config: SEOConfig): void {
  if (typeof document === 'undefined') return;

  const {
    title,
    description,
    keywords,
    canonicalPath = '/',
    ogType = 'website'
  } = config;

  document.title = title;

  const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const canonicalUrl = `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  setMeta('meta[name="description"]', 'name', 'description', description);
  if (keywords) {
    setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
  }

  setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
}

/**
 * Injecte ou met à jour les données structurées Schema.org dynamiques (JSON-LD)
 * pour la page active (Produit, Catégorie ou Accueil) afin de maximiser les résultats enrichis Google.
 */
export function updateDynamicJsonLd(
  mode: 'home' | 'particuliers' | 'entreprises' | 'product-detail' | 'contact',
  product?: ProductData | null
): void {
  if (typeof document === 'undefined') return;

  const scriptId = 'axa-dynamic-jsonld';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const agencyRef = { '@id': `${SITE_URL}/#agency` };
  let graph: Record<string, unknown>[] = [];

  if (mode === 'product-detail' && product) {
    const productUrl = `${SITE_URL}/produits/${product.slug}`;
    const categoryLabel = product.category === 'particulier' ? 'Assurance Particuliers' : 'Assurance Entreprises';
    const categoryUrl = `${SITE_URL}/${product.category === 'particulier' ? 'particuliers' : 'entreprises'}`;

    const serviceSchema: Record<string, unknown> = {
      '@type': 'Service',
      '@id': `${productUrl}#service`,
      name: `${product.title} — Assurance AXA Casablanca & Maroc`,
      serviceType: product.subcategory,
      category: categoryLabel,
      description: product.fullDescription,
      url: productUrl,
      provider: agencyRef,
      brand: {
        '@type': 'Brand',
        name: 'AXA Assurance Maroc'
      },
      areaServed: [
        { '@type': 'City', name: 'Casablanca' },
        { '@type': 'AdministrativeArea', name: 'Casablanca-Settat' },
        { '@type': 'Country', name: 'Maroc' }
      ],
      availableChannel: [
        {
          '@type': 'ServiceChannel',
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: PHONE_FIXE_INTL,
            contactType: 'sales',
            availableLanguage: ['French', 'Arabic']
          },
          serviceUrl: `${SITE_URL}/#contact`
        },
        {
          '@type': 'ServiceChannel',
          serviceUrl: `${WHATSAPP_URL}?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis pour ${product.title}`)}`,
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: PHONE_MOBILE_INTL,
            contactType: 'customer service'
          }
        }
      ],
      offers: product.formules.map((f) => ({
        '@type': 'Offer',
        name: f.name,
        description: f.tagline,
        priceCurrency: 'MAD',
        availability: 'https://schema.org/InStock',
        url: productUrl,
        seller: agencyRef
      }))
    };

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Assurance AXA Casablanca', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: categoryLabel, item: categoryUrl },
        { '@type': 'ListItem', position: 3, name: product.title, item: productUrl }
      ]
    };

    graph = [serviceSchema, breadcrumbSchema];

    if (product.faq && product.faq.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: product.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      });
    }
  } else if (mode === 'particuliers' || mode === 'entreprises') {
    const isPart = mode === 'particuliers';
    const catProducts = PRODUCTS_DATA.filter((p) => p.category === (isPart ? 'particulier' : 'entreprise'));
    const pageUrl = `${SITE_URL}/${mode}`;

    graph = [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: isPart
          ? 'Assurance Particuliers Casablanca & Maroc | AXA Assurances Hay Saada'
          : 'Assurance Entreprises & Professionnels Casablanca & Maroc | AXA Assurances Hay Saada',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: agencyRef,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: catProducts.length,
          itemListElement: catProducts.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.title,
            url: `${SITE_URL}/produits/${p.slug}`
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: isPart ? 'Assurance Particuliers Casablanca' : 'Assurance Entreprises Casablanca',
            item: pageUrl
          }
        ]
      }
    ];
  } else {
    graph = [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'Assurance AXA Casablanca | Assurance Casablanca & Maroc – Assurances Hay Saada',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: agencyRef,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: DEFAULT_IMAGE
        },
        inLanguage: 'fr-MA'
      }
    ];
  }

  scriptEl.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
}

export type ResolvedRoute =
  | { view: 'product-detail'; product: ProductData }
  | { view: 'particuliers' }
  | { view: 'entreprises' }
  | { view: 'home'; sectionId?: string };

/**
 * Résout la route depuis le pathname propre OU le hash (#) afin que les URLs indexables
 * (/particuliers, /entreprises, /produits/assurance-auto, /assurance-casablanca, etc.)
 * fonctionnent en parallèle des ancres existantes sans rien casser.
 */
export function resolveRouteFromUrl(pathname: string, hash: string): ResolvedRoute {
  const cleanPath = pathname.replace(/\/+$/, '').toLowerCase();

  // 1. Priorité aux hash explicites existants
  if (hash.startsWith('#produit-')) {
    const slug = hash.replace('#produit-', '');
    const found = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
    if (found) return { view: 'product-detail', product: found };
  }
  if (hash === '#particuliers') return { view: 'particuliers' };
  if (hash === '#entreprises') return { view: 'entreprises' };
  if (hash === '#services' || hash === '#professionnels' || hash === '#contact' || hash === '#faq' || hash === '#apropos') {
    return { view: 'home', sectionId: hash.replace('#', '') };
  }

  // 2. Résolution par pathname propre (pour Googlebot & liens directs SEO)
  if (cleanPath.startsWith('/produits/') || cleanPath.startsWith('/produit/')) {
    const slug = cleanPath.split('/').pop() || '';
    const found = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
    if (found) return { view: 'product-detail', product: found };
  }

  const directSlug = cleanPath.replace(/^\//, '');
  if (directSlug) {
    const foundDirect = PRODUCTS_DATA.find((p) => p.slug === directSlug || p.id === directSlug);
    if (foundDirect) return { view: 'product-detail', product: foundDirect };
  }

  if (cleanPath === '/particuliers' || cleanPath === '/assurance-particuliers-casablanca') {
    return { view: 'particuliers' };
  }
  if (cleanPath === '/entreprises' || cleanPath === '/assurance-entreprise-casablanca') {
    return { view: 'entreprises' };
  }
  if (cleanPath === '/contact' || cleanPath === '/devis-assurance-casablanca') {
    return { view: 'home', sectionId: 'contact' };
  }
  if (cleanPath === '/faq') {
    return { view: 'home', sectionId: 'faq' };
  }

  // Pages de destination SEO locales (/assurance-casablanca, /assurance-axa-casablanca, /assurance-maroc)
  return { view: 'home' };
}

/**
 * Enregistre silencieusement les intentions de conversion (Appels, WhatsApp, Emails)
 * et déclenche gtag / dataLayer si présents sans modifier l'interface.
 */
export function initConversionTracking(): () => void {
  if (typeof document === 'undefined') return () => {};

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest('a') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href') || '';
    let channel: 'phone_call' | 'whatsapp_message' | 'email_click' | null = null;

    if (href.startsWith('tel:')) channel = 'phone_call';
    else if (href.includes('wa.me') || href.includes('whatsapp.com')) channel = 'whatsapp_message';
    else if (href.startsWith('mailto:')) channel = 'email_click';

    if (!channel) return;

    try {
      const statsRaw = localStorage.getItem('axa_conversion_intents');
      const stats = statsRaw ? JSON.parse(statsRaw) : { phone_call: 0, whatsapp_message: 0, email_click: 0 };
      stats[channel] = (stats[channel] || 0) + 1;
      stats.lastUpdated = new Date().toISOString();
      localStorage.setItem('axa_conversion_intents', JSON.stringify(stats));

      const win = window as unknown as {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
      };

      if (Array.isArray(win.dataLayer)) {
        win.dataLayer.push({
          event: 'lead_contact_intent',
          contact_channel: channel,
          contact_target: href.slice(0, 80),
          page_path: window.location.pathname + window.location.hash
        });
      }
      if (typeof win.gtag === 'function') {
        win.gtag('event', channel, {
          event_category: 'lead_generation',
          event_label: anchor.textContent?.trim() || href,
          agency_email: AGENCY_EMAIL
        });
      }
    } catch {
      // Silencieux en cas de restriction navigateur
    }
  };

  document.addEventListener('click', handleDocumentClick, { passive: true });
  return () => document.removeEventListener('click', handleDocumentClick);
}
