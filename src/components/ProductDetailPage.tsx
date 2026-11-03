import React, { useState } from 'react';
import { 
  ArrowLeft, 
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
  CheckCircle2, 
  Phone, 
  Mail, 
  Shield, 
  Sparkles,
  MessageCircle,
  ChevronDown,
  FileText,
  HelpCircle
} from 'lucide-react';
import { ProductData } from '../data/products';

interface ProductDetailPageProps {
  product: ProductData;
  onBack: () => void;
  onNavigateCategory: (category: 'particulier' | 'entreprise') => void;
  onOpenQuoteModal: (productTitle: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onNavigateCategory,
  onOpenQuoteModal
}) => {
  const [selectedFormuleId, setSelectedFormuleId] = useState<string>(
    product.formules.find(f => f.isPopular)?.id || product.formules[0]?.id || ''
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Build WhatsApp URL with contextual message
  const getWhatsAppUrl = (extraText = '') => {
    let msg = `Bonjour Assurances Hay Saada, je souhaite un devis personnalisé sans engagement pour l'offre : *${product.title}*.`;
    if (extraText) {
      msg += ` ${extraText}`;
    }
    return `https://wa.me/212661180422?text=${encodeURIComponent(msg)}`;
  };

  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-8 h-8 text-white" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-white" />;
      case 'Home': return <Home className="w-8 h-8 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-white" />;
      case 'Users': return <Users className="w-8 h-8 text-white" />;
      case 'Plane': return <Plane className="w-8 h-8 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-white" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-white" />;
      case 'Truck': return <Truck className="w-8 h-8 text-white" />;
      case 'HardHat': return <HardHat className="w-8 h-8 text-white" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-white" />;
      default: return <Briefcase className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb & Action bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-500 overflow-x-auto whitespace-nowrap min-w-0">
            <button 
              onClick={onBack}
              className="hover:text-[#001f5c] transition-colors flex items-center gap-1 font-bold text-gray-700 shrink-0"
            >
              <ArrowLeft size={15} />
              <span>Accueil</span>
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigateCategory(product.category)}
              className="hover:text-[#001f5c] transition-colors font-semibold shrink-0"
            >
              {product.category === 'particulier' ? 'Particuliers' : 'Entreprises'}
            </button>
            <span>/</span>
            <span className="text-[#001f5c] font-extrabold truncate max-w-[120px] sm:max-w-none">
              {product.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200"
              aria-label="WhatsApp Devis"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(product.title)}
              className="bg-[#ff0000] hover:bg-[#d60000] text-white px-3 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Devis</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#001438] via-[#001f5c] to-[#002b80] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="absolute top-0 right-1/4 w-3 h-56 bg-gradient-to-b from-[#ff0000] to-transparent transform -skew-x-[16deg] opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wider bg-[#ff0000] px-3 py-1 rounded-md shadow-sm">
                  Assurances Hay Saada • Agent Général AXA Casablanca
                </span>
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  {product.subcategory}
                </span>
                <span className="text-xs font-bold text-red-200 uppercase tracking-wider bg-red-500/20 px-3 py-1 rounded-md border border-red-500/30">
                  {product.badge}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg">
                  {getProductIcon(product.iconName)}
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    {product.title}
                  </h1>
                  <p className="text-blue-100/90 text-sm sm:text-base font-semibold mt-1">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl mt-6 font-normal">
                {product.fullDescription}
              </p>

              {/* Main Action CTAs : WhatsApp & Contact Modal */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 text-center"
                >
                  <MessageCircle size={18} />
                  <span>Demander un devis sur WhatsApp</span>
                </a>
                
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(product.title)}
                  className="w-full sm:w-auto bg-[#ff0000] hover:bg-[#d60000] text-white px-6 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 text-center cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Demande de devis en ligne</span>
                </button>

                <a
                  href="tel:+212522630268"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Phone size={16} />
                  <span>05 22 63 02 68</span>
                </a>
              </div>
            </div>

            {/* Quick Action & Agency Card (NO PRICE) */}
            <div className="lg:col-span-4">
              <div className="bg-white text-gray-900 rounded-3xl p-7 shadow-2xl border-t-4 border-[#ff0000]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#001f5c] text-xs font-black uppercase tracking-wider mb-3">
                  <Shield size={14} className="text-[#ff0000]" />
                  <span>Étude Gratuite & Sur-Mesure</span>
                </div>

                <h3 className="text-2xl font-black text-[#001f5c] mb-2 leading-tight">
                  Devis Sur-Mesure & Conseil
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-5">
                  Aucun tarif standard préétabli : nos conseillers évaluent précisément votre situation pour vous proposer la formule la plus avantageuse sans engagement.
                </p>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 mb-6 flex items-start gap-3">
                  <Sparkles size={18} className="text-[#001f5c] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-[#001f5c] leading-snug">
                    {product.heroHighlight}
                  </p>
                </div>

                {/* Primary WhatsApp Action Button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 mb-3"
                >
                  <MessageCircle size={17} />
                  <span>Contacter sur WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal(product.title)}
                  className="w-full bg-[#001f5c] hover:bg-[#002b80] text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Formulaire d'inscription & Devis</span>
                </button>

                <div className="space-y-2 pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Réponse immédiate sous 2 heures ouvrées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Agence physique à Hay Mohammadi, Casablanca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Formules & Niveaux de Garantie */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#001f5c] text-xs font-black uppercase tracking-wider mb-2">
              <ShieldCheck size={14} className="text-[#ff0000]" />
              <span>Gamme & Couvertures Disponibles</span>
            </div>
            <h2 className="text-3xl font-black text-[#001f5c] mb-3">
              Choisissez la formule adaptée à vos besoins
            </h2>
            <p className="text-gray-600 text-sm">
              Toutes nos formules bénéficient de l'assistance et des garanties AXA Maroc avec accompagnement personnalisé par l'agence Assurances Hay Saada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {product.formules.map((formule) => {
              const isSelected = selectedFormuleId === formule.id;
              const formuleWhatsAppUrl = getWhatsAppUrl(`(Intéressé par la formule : ${formule.name})`);

              return (
                <div
                  key={formule.id}
                  onClick={() => setSelectedFormuleId(formule.id)}
                  className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 transition-all relative cursor-pointer ${
                    isSelected 
                      ? 'border-[#001f5c] shadow-xl ring-2 ring-[#001f5c]/10' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {formule.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                      Formule Recommandée
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{formule.name}</h3>
                    <p className="text-xs text-gray-500 font-medium mb-4">{formule.tagline}</p>
                    
                    <div className="text-xs font-black text-[#001f5c] uppercase tracking-wider mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-gray-400 font-bold">Proposition :</span>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                        <MessageCircle size={12} className="text-[#25D366]" />
                        Devis gratuit sur mesure
                      </span>
                    </div>

                    <div className="space-y-3">
                      {formule.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-2">
                    <a
                      href={formuleWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={15} />
                      <span>Demander sur WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(`${product.title} - ${formule.name}`);
                      }}
                      className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    >
                      Formulaire de contact
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Garanties Incluses & Documents Requis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Garanties Clés */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#001f5c] flex items-center justify-center font-bold">
                <ShieldCheck size={20} className="text-[#ff0000]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#001f5c]">
                  Garanties Clés & Engagements AXA
                </h3>
                <p className="text-xs text-gray-500">
                  Couverture garantie par les conditions générales AXA Assurance Maroc
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {product.keyGuarantees.map((guarantee, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-gray-900">
                          {guarantee.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                    {guarantee.coverageLimit && (
                      <span className="text-[10px] font-bold text-[#001f5c] bg-blue-100/60 px-2 py-0.5 rounded shrink-0">
                        {guarantee.coverageLimit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pièces à fournir pour la souscription */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff0000] flex items-center justify-center font-bold">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#001f5c]">
                    Pièces & Justificatifs
                  </h3>
                  <p className="text-xs text-gray-500">
                    Documents à présenter à l'agence ou par WhatsApp
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {product.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-[#001f5c] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-gray-700 leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <span className="text-xs font-black text-[#001f5c] block mb-1">
                Souscription Express en Agence
              </span>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-3">
                Envoyez vos photos de documents par WhatsApp : votre conseiller prépare votre contrat avant votre passage à l'agence de Hay Mohammadi.
              </p>
              <a
                href={getWhatsAppUrl("(Envoi des justificatifs pour souscription)")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle size={14} />
                <span>Transmettre mes pièces sur WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenQuoteModal(`Formulaire d'inscription - ${product.title}`)}
                className="w-full mt-2 bg-[#001f5c] hover:bg-[#002b80] text-white py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Mail size={14} />
                <span>Formulaire d'inscription par email (axasaada9@gmail.com)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Questions Fréquentes (FAQ) */}
        {product.faq && product.faq.length > 0 && (
          <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#001f5c] flex items-center justify-center font-bold">
                <HelpCircle size={20} className="text-[#001f5c]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#001f5c]">
                  Questions Fréquentes sur {product.title}
                </h3>
                <p className="text-xs text-gray-500">
                  Tout ce que vous devez savoir avant de souscrire auprès de votre agent général AXA
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {product.faq.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/60 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {item.question}
                      </span>
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#001f5c]' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#001f5c] to-[#002b80] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Prêt à souscrire ou besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-blue-100 text-sm font-medium mb-8">
              Nos conseillers vous accueillent du lundi au vendredi à l'agence de Hay Mohammadi ou répondent instantanément par WhatsApp et téléphone.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Conseiller</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal(product.title)}
                className="bg-[#ff0000] hover:bg-[#d60000] text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
              >
                Formulaire de Devis
              </button>
              <a
                href="tel:+212522630268"
                className="bg-white text-[#001f5c] hover:bg-gray-100 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-[#ff0000]" />
                <span>05 22 63 02 68</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
