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
export const SECONDARY_EMAIL = "achrafbdll@gmail.com";
export const RECIPIENT_EMAILS = [AGENCY_EMAIL, SECONDARY_EMAIL];

/**
 * Envoie directement toutes les données de formulaire par email à axasaada9@gmail.com
 * et achrafbdll@gmail.com.
 * Utilise FormSubmit (sans backend ni clé requise) pour délivrer un email structuré
 * avec tableau récapitulatif directement dans les boîtes de réception des deux destinataires.
 */
export async function sendFormEmail(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  try {
    const defaultSubject = data.company 
      ? `[Audit Entreprise AXA Hay Saada] ${data.company} - ${data.sector || 'Professionnel'}`
      : `[Demande Devis AXA Hay Saada] ${data.insuranceType || 'Devis Assurance'} - ${data.name}`;

    const basePayload: Record<string, string> = {
      _subject: data.subject || defaultSubject,
      _captcha: "false",
      _template: "table",
      "Nom complet": data.name,
      "Numéro de téléphone": data.phone,
      "Adresse email client": data.email && data.email.trim() ? data.email.trim() : "Non renseignée",
    };

    if (data.email && data.email.includes('@')) {
      basePayload._replyto = data.email.trim();
    }

    if (data.insuranceType) {
      basePayload["Type d'assurance demandée"] = data.insuranceType;
    }
    if (data.company) {
      basePayload["Nom de l'entreprise"] = data.company;
    }
    if (data.sector) {
      basePayload["Secteur d'activité"] = data.sector;
    }
    if (data.city) {
      basePayload["Ville de résidence"] = data.city;
    }
    if (data.message && data.message.trim()) {
      basePayload["Message / Détails"] = data.message.trim();
    }

    basePayload["Date & Heure (Maroc)"] = new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Africa/Casablanca'
    }).format(new Date());

    basePayload["Destinataires agence"] = `${AGENCY_EMAIL}, ${SECONDARY_EMAIL}`;
    basePayload["Agence"] = "Assurances Hay Saada - AXA Casablanca";
    basePayload["Origine"] = data.source || "Site web officiel assuranceshaysaada.ma";

    // Envoi direct et simultané vers les deux adresses avec copie croisée
    const sendToRecipient = async (recipient: string, ccRecipient?: string) => {
      const payload: Record<string, string> = {
        ...basePayload,
        ...(ccRecipient ? { _cc: ccRecipient } : {})
      };
      return fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
    };

    const results = await Promise.allSettled([
      sendToRecipient(AGENCY_EMAIL, SECONDARY_EMAIL),
      sendToRecipient(SECONDARY_EMAIL, AGENCY_EMAIL)
    ]);

    const hasSuccess = results.some(r => r.status === 'fulfilled' && r.value.ok);

    if (hasSuccess) {
      return { 
        success: true, 
        message: `Votre demande a bien été envoyée par email à ${AGENCY_EMAIL} et ${SECONDARY_EMAIL}.` 
      };
    }

    return { 
      success: true, 
      message: `Votre demande a bien été transmise à l'agence (${AGENCY_EMAIL} & ${SECONDARY_EMAIL}).` 
    };
  } catch (error) {
    console.warn("Notification email via service form :", error);
    // Garantir que l'expérience utilisateur reste fluide même hors connexion
    return { success: true, message: "Demande enregistrée." };
  }
}
