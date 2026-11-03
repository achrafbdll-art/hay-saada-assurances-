import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Car, 
  HeartPulse, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Building2, 
  Truck, 
  HardHat, 
  Laptop, 
  Plane,
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Sparkles,
  Shield,
  MessageCircle
} from 'lucide-react';
import { ProductData, PRODUCTS_DATA } from '../data/products';

interface CatalogPageProps {
  category: 'particulier' | 'entreprise';
  onBack: () => void;
  onSelectProduct: (product: ProductData) => void;
  onSwitchCategory: (category: 'particulier' | 'entreprise') => void;
  onOpenQuoteModal: (productTitle?: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  category,
  onBack,
  onSelectProduct,
  onSwitchCategory,
  onOpenQuoteModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');

  const allProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => p.category === category);
  }, [category]);

  const subcategories = useMemo(() => {
    const list = Array.from(new Set(allProducts.map(p => p.subcategory)));
    return ['all', ...list];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchSearch = searchTerm.trim() === '' || 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.keyGuarantees.some(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchSub = selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;
      return matchSearch && matchSub;
    });
  }, [allProducts, searchTerm, selectedSubcategory]);

  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-6 h-6 text-[#001f5c]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#001f5c]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#001f5c]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#001f5c]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#001f5c]" />;
      case 'Plane': return <Plane className="w-6 h-6 text-[#001f5c]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#001f5c]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#001f5c]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#001f5c]" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#001f5c]" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-[#001f5c]" />;
      default: return <Briefcase className="w-6 h-6 text-[#001f5c]" />;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20">
      {/* Sticky Subnav Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-600 min-w-0">
            <button 
              onClick={onBack}
              className="hover:text-[#001f5c] transition-colors flex items-center gap-1 font-bold text-gray-800 shrink-0"
            >
              <ArrowLeft size={15} />
              <span>Accueil</span>
            </button>
            <span>/</span>
            <span className="text-[#001f5c] font-black truncate max-w-[120px] sm:max-w-none">
              {category === 'particulier' ? 'Particuliers' : 'Entreprises'}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex p-0.5 bg-gray-100 rounded-lg text-xs font-bold">
              <button
                onClick={() => {
                  onSwitchCategory('particulier');
                  setSelectedSubcategory('all');
                }}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors text-[11px] sm:text-xs ${
                  category === 'particulier' 
                    ? 'bg-white text-[#001f5c] shadow-xs' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Particuliers
              </button>
              <button
                onClick={() => {
                  onSwitchCategory('entreprise');
                  setSelectedSubcategory('all');
                }}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors text-[11px] sm:text-xs ${
                  category === 'entreprise' 
                    ? 'bg-white text-[#001f5c] shadow-xs' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Entreprises
              </button>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex bg-[#ff0000] hover:bg-[#d60000] text-white px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors shadow-xs"
            >
              Devis Gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#001438] via-[#001f5c] to-[#002b80] text-white py-14 sm:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1 rounded-md bg-black/35 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white mb-4 shadow-sm">
              <span className="px-1.5 py-0.5 bg-[#ff0000] text-white font-black text-[10px] rounded tracking-wider shadow-xs">AXA</span>
              <span>Assurances Hay Saada • <span className="text-[#ff4d4d] font-black">Agent Général AXA</span> Casablanca</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              {category === 'particulier' 
                ? 'Assurances Particuliers & Familles' 
                : 'Solutions Entreprises & Professionnels'}
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
              {category === 'particulier'
                ? 'Découvrez nos 7 solutions complètes dédiées à la protection de votre véhicule, de votre logement, de votre santé et de l\'avenir financier de vos enfants.'
                : 'Sécurisez votre outil de production, vos locaux, votre flotte de véhicules et la responsabilité juridique de votre entreprise avec l\'expertise de notre agence agréée AXA.'}
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-80 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher une garantie, formule..."
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none">
            {subcategories.map((sub) => {
              const isActive = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-[#001f5c] text-white shadow-sm' 
                      : 'bg-slate-100 text-gray-600 hover:bg-slate-200 hover:text-gray-900'
                  }`}
                >
                  {sub === 'all' ? 'Toutes les solutions' : sub}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {filteredProducts.length} {filteredProducts.length > 1 ? 'produits disponibles' : 'produit disponible'}
          </p>
          <span className="text-xs text-gray-500 font-medium">
            Conditions et garanties conformes aux normes ACAPS Maroc
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-gray-500 text-sm font-semibold">
              Aucun produit ne correspond à votre recherche « {searchTerm} ».
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSubcategory('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-50 text-[#001f5c] rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#001f5c] hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#001f5c] flex items-center justify-center transition-colors shadow-xs">
                      {getProductIcon(prod.iconName)}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                      {prod.subcategory}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#001f5c] transition-colors mb-2 tracking-tight">
                    {prod.title}
                  </h3>

                  <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6 line-clamp-3">
                    {prod.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {prod.keyGuarantees.slice(0, 3).map((g, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span className="font-semibold truncate">{g.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/212661180422?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis personnalisé pour : ${prod.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#001f5c] group-hover:text-[#ff0000] group-hover:translate-x-1 transition-all">
                    <span>Fiche & Devis</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#001f5c] text-white flex items-center justify-center shrink-0">
              <Shield size={24} className="text-[#ff0000]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-gray-900">
                Vous hésitez entre plusieurs formules ?
              </h4>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                Passez à l'agence de Hay Mohammadi ou demandez à être rappelé par un conseiller dédié.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/212661180422?text=Bonjour%20Assurances%20Hay%20Saada,%20je%20souhaite%20un%20conseil%20personnalis%C3%A9%20sur%20vos%20offres%20d%27assurance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none text-center bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="tel:+212522630268"
              className="flex-1 md:flex-none text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
            >
              05 22 63 02 68
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex-1 md:flex-none text-center bg-[#001f5c] hover:bg-[#ff0000] text-white px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Formulaire d'inscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
