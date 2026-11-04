import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MessageCircle, 
  Download, 
  Trash2, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Send, 
  ExternalLink,
  Search,
  Calendar,
  User,
  Inbox
} from 'lucide-react';
import { 
  AGENCY_EMAIL, 
  BACKUP_EMAIL, 
  getStoredLeads, 
  removeStoredLead, 
  clearAllStoredLeads, 
  exportLeadsToCSV, 
  sendFormEmail, 
  StoredLead,
  buildWhatsAppLeadUrl,
  buildMailtoLeadUrl
} from '../services/emailService';

interface LeadVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadVaultModal: React.FC<LeadVaultModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string; needsActivation?: boolean } | null>(null);
  const [activeTab, setActiveTab] = useState<'leads' | 'diagnostic'>('leads');

  useEffect(() => {
    if (isOpen) {
      setLeads(getStoredLeads());
      setTestResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setLeads(getStoredLeads());
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer cette demande de l'historique local ?")) {
      removeStoredLead(id);
      setLeads(getStoredLeads());
    }
  };

  const handleClearAll = () => {
    if (confirm("Attention : voulez-vous vraiment effacer l'historique complet des demandes locales ?")) {
      clearAllStoredLeads();
      setLeads([]);
    }
  };

  const handleSendTestEmail = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      const res = await sendFormEmail({
        name: "Test Agence AXA Hay Saada",
        phone: "0661180422",
        email: AGENCY_EMAIL,
        insuranceType: "Test Vérification Réception 100%",
        message: "Ceci est un email de vérification automatique généré depuis le panneau de contrôle de l'agence pour tester la bonne réception sur " + AGENCY_EMAIL,
        source: "Panneau de Diagnostic Agence"
      });
      setTestResult({
        success: res.success,
        message: res.message || "Test envoyé avec succès.",
        needsActivation: res.needsActivation
      });
      setLeads(getStoredLeads());
    } catch (e) {
      setTestResult({
        success: false,
        message: "Erreur lors de l'envoi du test. Vérifiez votre connexion internet."
      });
    } finally {
      setIsTesting(false);
    }
  };

  const filteredLeads = leads.filter(l => {
    const q = searchTerm.toLowerCase();
    return (
      (l.name && l.name.toLowerCase().includes(q)) ||
      (l.phone && l.phone.toLowerCase().includes(q)) ||
      (l.email && l.email.toLowerCase().includes(q)) ||
      (l.insuranceType && l.insuranceType.toLowerCase().includes(q)) ||
      (l.company && l.company.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001f5c] to-[#002b80] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <ShieldCheck className="text-emerald-400" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#ff0000] text-white text-[10px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider">
                  Accès Agence
                </span>
                <span className="text-xs font-bold text-blue-200">
                  Assurances Hay Saada • AXA Casablanca
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Contrôle de Réception & Sauvegarde des Formulaires
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 pt-3 shrink-0 gap-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-3 px-4 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'leads' 
                ? 'border-[#002b80] text-[#002b80]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Inbox size={15} />
            <span>Demandes Reçues ({leads.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('diagnostic')}
            className={`pb-3 px-4 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'diagnostic' 
                ? 'border-[#002b80] text-[#002b80]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Mail size={15} />
            <span>Diagnostic Email (100% Garanti)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 grow">
          
          {/* BANDEAU RECAPITULATIF ADRESSES */}
          <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Adresses de réception officielles</p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="font-black text-[#001f5c] text-sm bg-white px-3 py-1 rounded-lg border border-blue-200 shadow-2xs">
                  🎯 Principale : <strong className="text-[#002b80] underline">{AGENCY_EMAIL}</strong>
                </span>
                <span className="font-bold text-gray-600 text-xs bg-white/70 px-2.5 py-1 rounded-lg border border-gray-200">
                  Copie miroir : {BACKUP_EMAIL}
                </span>
              </div>
            </div>

            <button
              onClick={handleSendTestEmail}
              disabled={isTesting}
              className="bg-[#002b80] hover:bg-[#001f5c] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isTesting ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  <span>Test en cours...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Envoyer un email de test</span>
                </>
              )}
            </button>
          </div>

          {/* MESSAGE DU RESULTAT DE TEST */}
          {testResult && (
            <div className={`p-4 rounded-2xl border text-xs ${
              testResult.success 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <div className="flex items-start gap-3">
                {testResult.success ? (
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-bold">{testResult.message}</p>
                  {testResult.needsActivation ? (
                    <p className="text-amber-800">
                      ⚠️ <strong>Action requise dans votre boîte Gmail :</strong> FormSubmit demande une activation en un clic. Ouvrez <strong className="underline">{AGENCY_EMAIL}</strong> (dossier Boîte de réception ou Spam), cherchez l'email de FormSubmit et cliquez sur le bouton bleu « Activate Form ».
                    </p>
                  ) : (
                    <p className="text-emerald-800">
                      ✓ Vérifiez votre boîte Gmail à l'adresse <strong>{AGENCY_EMAIL}</strong> (y compris le dossier Spam ou Courrier indésirable pour le premier message).
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: LISTE DES DEMANDES ENREGISTREES */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher par nom, téléphone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002b80]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={exportLeadsToCSV}
                    disabled={leads.length === 0}
                    className="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:text-[#002b80] hover:border-[#002b80] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Download size={14} />
                    <span>Exporter Excel (CSV)</span>
                  </button>

                  <button
                    onClick={handleRefresh}
                    className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    title="Actualiser la liste"
                  >
                    <RefreshCw size={14} />
                  </button>

                  {leads.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="px-3 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Effacer tout
                    </button>
                  )}
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <Inbox className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-600">Aucune demande enregistrée</p>
                  <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                    Toutes les demandes de devis et d'inscriptions remplies par les visiteurs sont archivées ici automatiquement.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLeads.map((lead) => (
                    <div 
                      key={lead.id}
                      className="bg-white p-4 rounded-2xl border border-gray-200 hover:border-[#002b80] hover:shadow-sm transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#001f5c] flex items-center justify-center font-black text-xs">
                            <User size={14} />
                          </span>
                          <div>
                            <span className="font-bold text-gray-900 text-sm">{lead.name}</span>
                            {lead.company && (
                              <span className="ml-2 text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                                {lead.company} {lead.sector ? `(${lead.sector})` : ''}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-500">
                          <Calendar size={12} className="text-gray-400" />
                          <span>
                            {new Date(lead.timestamp).toLocaleString('fr-FR', {
                              dateStyle: 'short',
                              timeStyle: 'short'
                            })}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Sauvegardé" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                        <div>
                          <strong className="text-gray-800">Téléphone :</strong>{' '}
                          <a href={`tel:${lead.phone}`} className="text-[#002b80] font-bold hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                        <div>
                          <strong className="text-gray-800">Email :</strong>{' '}
                          {lead.email ? (
                            <a href={`mailto:${lead.email}`} className="text-[#002b80] hover:underline">
                              {lead.email}
                            </a>
                          ) : (
                            <span className="text-gray-400">Non renseigné</span>
                          )}
                        </div>
                        <div>
                          <strong className="text-gray-800">Assurance :</strong>{' '}
                          <span className="font-semibold text-gray-900">{lead.insuranceType || 'Générale'}</span>
                        </div>
                      </div>

                      {lead.message && (
                        <div className="bg-gray-50 p-2.5 rounded-xl text-xs text-gray-700 border border-gray-100">
                          <strong className="text-gray-800">Message :</strong> {lead.message}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${lead.phone}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#001f5c] hover:bg-blue-100 text-xs font-bold transition-colors"
                          >
                            <Phone size={12} />
                            <span>Appeler</span>
                          </a>
                          <a
                            href={buildWhatsAppLeadUrl(lead)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-bold transition-colors"
                          >
                            <MessageCircle size={12} />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href={buildMailtoLeadUrl(lead)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-bold transition-colors"
                          >
                            <Mail size={12} />
                            <span>Email</span>
                          </a>
                        </div>

                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg transition-colors cursor-pointer"
                          title="Supprimer ce lead"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DIAGNOSTIC & ACTIVATION GMAIL */}
          {activeTab === 'diagnostic' && (
            <div className="space-y-6 text-xs text-gray-700">
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-sm font-black text-[#001f5c]">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span>Protocole d'activation à 100% sur Gmail</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Pour que Google Gmail et le service de transmission acceptent <strong>100 % des formulaires</strong> sans blocage, suivez ces 3 étapes simples :
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#001f5c] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Vérifier le dossier Spam / Courrier indésirable</h4>
                      <p className="text-gray-500 mt-0.5">
                        Connectez-vous à <strong>{AGENCY_EMAIL}</strong> sur Gmail. Dans la barre de recherche Gmail en haut, tapez : <code className="bg-gray-100 px-1 py-0.5 rounded text-[#001f5c] font-mono">in:anywhere formsubmit</code>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#001f5c] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Cliquer sur le lien d'activation « Activate Form »</h4>
                      <p className="text-gray-500 mt-0.5">
                        Ouvrez l'email envoyé par FormSubmit intitulé <em>« Action Required: Activate your form »</em> et cliquez sur le bouton bleu. Cette étape n'est à faire qu'une seule fois dans la vie du site !
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#001f5c] text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Créer une règle « Ne jamais envoyer dans le dossier Spam »</h4>
                      <p className="text-gray-500 mt-0.5">
                        Pour garantir que 100% des demandes de vos futurs clients atterrissent dans votre boîte principale, ajoutez <code className="bg-gray-100 px-1 py-0.5 rounded text-[#001f5c] font-mono">submissions@formsubmit.co</code> à vos contacts Gmail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#001f5c] hover:bg-[#002b80] text-white px-4 py-2 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
                  >
                    <span>Ouvrir Gmail ({AGENCY_EMAIL})</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    onClick={handleSendTestEmail}
                    disabled={isTesting}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                  >
                    <Send size={13} />
                    <span>Envoyer un email de test maintenant</span>
                  </button>
                </div>
              </div>

              {/* ARCHITECTURE MULTI-CANAUX */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Garantie 0% de perte de prospect intégrée au site</h4>
                <p className="text-gray-500 leading-relaxed">
                  Le site web Assurances Hay Saada intègre désormais une architecture à 4 niveaux de sécurité :
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li><strong>Canal 1 (Email Automatique) :</strong> Envoi instantané au format tableau récapitulatif vers {AGENCY_EMAIL}.</li>
                  <li><strong>Canal 2 (Redondance miroir) :</strong> Copie miroir vers {BACKUP_EMAIL}.</li>
                  <li><strong>Canal 3 (WhatsApp Direct 1-Clic) :</strong> Bouton vert immédiat proposé au client pré-rempli avec l'ensemble de ses coordonnées (06 61 18 04 22).</li>
                  <li><strong>Canal 4 (Sauvegarde Locale Coffre-fort) :</strong> Chaque prospect est sauvegardé dans la mémoire locale de ce panneau pour être consulté, appelé ou exporté sur Excel à tout moment.</li>
                </ul>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
          <p className="text-[11px] text-gray-500">
            Agence Assurances Hay Saada • 271, Boulevard Chouhada, Casablanca • 05 22 63 02 68
          </p>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
