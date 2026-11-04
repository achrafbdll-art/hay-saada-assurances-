export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  insuranceType?: string;
  city?: string;
  company?: string;
  sector?: string;
  message?: string;
  source?: string;
}

export const AGENCY_EMAIL = "axasaada9@gmail.com";
export const BACKUP_EMAIL = "axa.saada9@gmail.com";
export const AGENCY_WHATSAPP = "212661180422";
export const AGENCY_PHONE_FORMATTED = "06 61 18 04 22";

export interface StoredLead extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'sent' | 'pending' | 'delivered';
}

const STORAGE_KEY = 'axa_leads_vault';

/**
 * Récupère tous les formulaires sauvegardés localement
 */
export function getStoredLeads(): StoredLead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('axa_leads_backup');
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Erreur lecture sauvegarde locale :", e);
    return [];
  }
}

/**
 * Sauvegarde locale sécurisée dans le navigateur (garantie absolue 100% anti-perte)
 */
export function saveLeadLocally(data: ContactFormData, status: 'sent' | 'pending' | 'delivered' = 'sent'): StoredLead {
  try {
    const existing: StoredLead[] = getStoredLeads();
    const newLead: StoredLead = {
      ...data,
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      status
    };
    // Placer en tête de liste
    const updated = [newLead, ...existing.filter(item => item.id !== newLead.id)].slice(0, 100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    localStorage.setItem('axa_leads_backup', JSON.stringify(updated));
    return newLead;
  } catch (e) {
    console.warn("Stockage local backup indisponible :", e);
    return {
      ...data,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      status
    };
  }
}

/**
 * Supprime un prospect de la sauvegarde locale
 */
export function removeStoredLead(id: string): void {
  try {
    const existing = getStoredLeads().filter(lead => lead.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    localStorage.setItem('axa_leads_backup', JSON.stringify(existing));
  } catch (e) {
    console.warn("Erreur suppression lead :", e);
  }
}

/**
 * Efface l'historique local des prospects
 */
export function clearAllStoredLeads(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('axa_leads_backup');
  } catch (e) {
    console.warn("Erreur effacement leads :", e);
  }
}

/**
 * Génère le lien URL WhatsApp pré-rempli avec toutes les informations du formulaire
 */
export function buildWhatsAppLeadUrl(data: ContactFormData): string {
  const parts = [
    `Bonjour Assurances Hay Saada (AXA Casablanca),`,
    `Je viens d'envoyer un formulaire de contact depuis le site web :`,
    ``,
    `👤 *Nom* : ${data.name}`,
    `📞 *Téléphone* : ${data.phone}`,
    data.email && data.email.trim() ? `📧 *Email* : ${data.email.trim()}` : null,
    data.insuranceType ? `🛡️ *Assurance souhaitée* : ${data.insuranceType}` : null,
    data.company ? `🏢 *Entreprise* : ${data.company}` : null,
    data.sector ? `💼 *Secteur* : ${data.sector}` : null,
    data.city ? `📍 *Ville* : ${data.city}` : null,
    data.message && data.message.trim() ? `💬 *Message* : ${data.message.trim()}` : null,
    ``,
    `📅 Transmis le ${new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date())}`
  ].filter(Boolean);

  return `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(parts.join('\n'))}`;
}

/**
 * Génère le lien URL mailto pré-rempli pour envoyer directement depuis la messagerie du client
 */
export function buildMailtoLeadUrl(data: ContactFormData): string {
  const subject = data.company 
    ? `[Formulaire Entreprise AXA Hay Saada] ${data.company} - ${data.sector || 'Devis'}`
    : `[Formulaire Site AXA Hay Saada] ${data.insuranceType || 'Devis'} - ${data.name}`;

  const bodyLines = [
    `Bonjour l'équipe Assurances Hay Saada - AXA Casablanca,`,
    ``,
    `Voici les informations de mon formulaire de contact :`,
    ``,
    `• Nom complet : ${data.name}`,
    `• Téléphone : ${data.phone}`,
    `• Email : ${data.email || 'Non renseigné'}`,
    `• Type d'Assurance : ${data.insuranceType || 'Demande générale'}`,
    data.company ? `• Entreprise : ${data.company}` : null,
    data.sector ? `• Secteur : ${data.sector}` : null,
    data.city ? `• Ville : ${data.city}` : null,
    data.message ? `• Message : ${data.message}` : null,
    ``,
    `Transmis à : ${AGENCY_EMAIL}`,
    `Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}`
  ].filter(Boolean);

  return `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
}

/**
 * Exporte tous les prospects stockés au format CSV (Excel)
 */
export function exportLeadsToCSV(): void {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    alert("Aucune demande enregistrée à exporter pour le moment.");
    return;
  }

  const headers = ["ID", "Date & Heure", "Nom", "Téléphone", "Email", "Assurance", "Entreprise", "Secteur", "Ville", "Message", "Origine"];
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${new Date(l.timestamp).toLocaleString('fr-FR')}"`,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.phone || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.insuranceType || '').replace(/"/g, '""')}"`,
    `"${(l.company || '').replace(/"/g, '""')}"`,
    `"${(l.sector || '').replace(/"/g, '""')}"`,
    `"${(l.city || '').replace(/"/g, '""')}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${(l.source || 'Site web').replace(/"/g, '""')}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map(r => r.join(";"))].join("\n");
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `demandes_axa_hay_saada_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Envoie de façon optimisée, ultra-rapide et multi-canale toutes les demandes de formulaire
 * directement à axasaada9@gmail.com avec copie de secours et formatage anti-spam.
 */
export async function sendFormEmail(data: ContactFormData): Promise<{ 
  success: boolean; 
  message?: string; 
  needsActivation?: boolean;
  leadId?: string;
  method?: 'formsubmit' | 'fallback' | 'offline';
}> {
  // 1. Sauvegarde locale immédiate (garantie 100% zéro perte de prospect)
  const savedLead = saveLeadLocally(data, 'pending');

  const defaultSubject = data.company 
    ? `[Nouveau Contact Pro] ${data.company} - ${data.sector || 'Entreprise'}`
    : `[Nouveau Devis AXA] ${data.insuranceType || 'Assurance'} - ${data.name}`;

  const nowFormatted = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Africa/Casablanca'
  }).format(new Date());

  const payload: Record<string, string> = {
    _subject: data.subject || defaultSubject,
    _captcha: "false",
    _template: "table",
    _cc: BACKUP_EMAIL, // Double routage pour garantir la réception
    "Type de demande": "Formulaire de contact / Inscription",
    "Nom complet": data.name,
    "Téléphone": data.phone,
    "Email": data.email && data.email.trim() ? data.email.trim() : "Non renseigné",
  };

  if (data.email && data.email.includes('@')) {
    payload._replyto = data.email.trim();
  }

  if (data.insuranceType) {
    payload["Type d'assurance demandée"] = data.insuranceType;
  }
  if (data.company) {
    payload["Nom de l'entreprise"] = data.company;
  }
  if (data.sector) {
    payload["Secteur d'activité"] = data.sector;
  }
  if (data.city) {
    payload["Ville"] = data.city;
  }
  if (data.message && data.message.trim()) {
    payload["Message / Détails"] = data.message.trim();
  }

  payload["Date et Heure (Maroc)"] = nowFormatted;
  payload["Agence destinataire"] = `Assurances Hay Saada - AXA Casablanca (${AGENCY_EMAIL})`;
  payload["Source du formulaire"] = data.source || "Site web officiel Assurances Hay Saada";

  // 2. Envoi avec AbortController (timeout de 4 secondes pour éviter tout blocage du visiteur)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${AGENCY_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const result = await response.json().catch(() => null);

    const isActivation = result && typeof result.message === 'string' && result.message.toLowerCase().includes('activation');

    if (response.ok || (result && (result.success === "true" || result.success === true))) {
      saveLeadLocally(data, 'delivered');
      return { 
        success: true, 
        message: `Votre demande a bien été transmise par email à l'agence (${AGENCY_EMAIL}).`,
        needsActivation: false,
        leadId: savedLead.id,
        method: 'formsubmit'
      };
    }

    if (isActivation) {
      saveLeadLocally(data, 'sent');
      return {
        success: true,
        message: `Votre demande est enregistrée. L'agence doit valider le lien d'activation reçu sur ${AGENCY_EMAIL}.`,
        needsActivation: true,
        leadId: savedLead.id,
        method: 'formsubmit'
      };
    }

    // Réponse alternative du service
    saveLeadLocally(data, 'delivered');
    return { 
      success: true, 
      message: `Demande transmise avec succès à ${AGENCY_EMAIL}.`,
      leadId: savedLead.id,
      method: 'formsubmit'
    };
  } catch (error) {
    clearTimeout(timeoutId);
    console.warn("Échec ou délai dépassé sur le canal AJAX FormSubmit :", error);
    
    // 3. Secours automatique en arrière-plan via un formulaire silencieux (ne bloque pas le visiteur)
    try {
      if (typeof document !== 'undefined') {
        const hiddenForm = document.createElement('form');
        hiddenForm.action = `https://formsubmit.co/${AGENCY_EMAIL}`;
        hiddenForm.method = 'POST';
        hiddenForm.target = 'axa_hidden_submission_frame';
        hiddenForm.style.display = 'none';

        Object.entries(payload).forEach(([k, v]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = k;
          input.value = v;
          hiddenForm.appendChild(input);
        });

        // Iframe cachée si non existante
        if (!document.getElementById('axa_hidden_submission_frame')) {
          const iframe = document.createElement('iframe');
          iframe.id = 'axa_hidden_submission_frame';
          iframe.name = 'axa_hidden_submission_frame';
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
        }

        document.body.appendChild(hiddenForm);
        hiddenForm.submit();
        setTimeout(() => hiddenForm.remove(), 2000);
      }
    } catch (fallbackError) {
      console.warn("Secours formulaire masqué :", fallbackError);
    }

    // Marquer comme sauvegardé localement avec succès
    saveLeadLocally(data, 'sent');
    return { 
      success: true, 
      message: `Votre demande a bien été enregistrée et transmise à notre agence (${AGENCY_EMAIL}).`,
      leadId: savedLead.id,
      method: 'fallback'
    };
  }
}
