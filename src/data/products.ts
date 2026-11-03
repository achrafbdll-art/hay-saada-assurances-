export interface Formule {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  isPopular?: boolean;
  features: string[];
}

export interface Guarantee {
  title: string;
  description: string;
  isIncluded: boolean;
  coverageLimit?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductData {
  id: string;
  slug: string;
  category: 'particulier' | 'entreprise';
  subcategory: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  startingPrice: string;
  period: string;
  heroHighlight: string;
  formules: Formule[];
  keyGuarantees: Guarantee[];
  options: string[];
  advantages: string[];
  documentsRequired: string[];
  faq: FAQItem[];
  simulationType: 'auto' | 'habitation' | 'sante' | 'retraite' | 'rcpro' | 'flotte' | 'mrp' | 'standard';
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    "id": "auto",
    "slug": "assurance-auto",
    "category": "particulier",
    "subcategory": "Mobilité & Véhicules",
    "title": "Solution Auto & Fidelity by AXA",
    "tagline": "Des offres qui répondent à vos besoins avec le programme exclusif Fidelity by AXA",
    "shortDescription": "Accédez à une assurance auto avant tout pensée pour vous : packs Tiers, Tiers+, Accident ou Tous Risques, avec programme exclusif Fidelity by AXA et réductions multi-véhicules.",
    "fullDescription": "Avec AXA, accédez à une assurance auto pensée pour vous et qui s'adapte à vos besoins réels. Choisissez parmi les packs Tiers, Tiers+, Accident ou Tous Risques selon votre véhicule, votre budget et le niveau de couverture souhaité, ou composez vous-même votre formule sur-mesure. Vous avez une conduite responsable et êtes fidèle à AXA au Maroc : chaque année sans sinistre, le programme « Fidelity by AXA » vous offre une baisse sur vos garanties annexes et un capital fidélité cumulable dès la Responsabilité Civile pour réparer votre véhicule en cas de sinistre responsable ou racheter votre franchise. Bénéficiez également de l'offre Pack Auto Fonctionnaires avec mensualisation sans frais CNT et de la Solution Cyclomoteurs.",
    "iconName": "Car",
    "badge": "Programme Fidelity by AXA",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Programme exclusif Fidelity by AXA & Assistance routière 24/7 partout au Maroc",
    "formules": [
      {
        "id": "tiers-simple",
        "name": "Formule Tiers Éco",
        "tagline": "L'essentiel légal avec l'assistance AXA incluse",
        "priceNote": "Sur devis personnalisé sans engagement",
        "isPopular": false,
        "features": [
          "Responsabilité Civile obligatoire au Maroc",
          "Défense et Recours avec prise en charge des frais d'avocat",
          "Assistance dépannage et remorquage 24h/24 7j/7",
          "Éligibilité immédiate au programme Fidelity by AXA",
          "Protection Juridique de base"
        ]
      },
      {
        "id": "tiers-etendu",
        "name": "Formule Tiers+ & Éléments",
        "tagline": "Protection renforcée contre les aléas majeurs",
        "priceNote": "Étude sur-mesure selon votre véhicule",
        "isPopular": true,
        "features": [
          "Toutes les garanties de la formule Tiers Éco",
          "Garantie Vol total, partiel et détériorations consécutives",
          "Garantie Incendie et explosion offerte si souscription Vol",
          "Bris de glaces sans franchise (pare-brise, vitres latérales, lunette arrière)",
          "Dommages collision avec tiers identifié",
          "Véhicule de remplacement en cas d'accident ou de vol"
        ]
      },
      {
        "id": "tous-risques",
        "name": "Formule Tous Risques Sérénité",
        "tagline": "La couverture intégrale maximale avec valeur à neuf",
        "priceNote": "Recommandée pour véhicules neufs et récents",
        "isPopular": false,
        "features": [
          "Dommages tous accidents sans tiers identifié requis",
          "Indemnisation en valeur à neuf sur véhicules récents",
          "Perte Financière pour les véhicules neufs",
          "Protection Familiale, Conducteur et Passagers (PFCP jusqu'à 30 000 DH)",
          "Capital fidélité jusqu'à 5 000 DH cumulable chaque année",
          "Assistance VIP 0 km avec véhicule de courtoisie étendu"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Programme Fidelity by AXA",
        "description": "Baisse annuelle sur vos garanties annexes et capital fidélité cumulable dès la Responsabilité Civile pour réparer votre véhicule ou racheter votre franchise en cas de sinistre responsable.",
        "isIncluded": true,
        "coverageLimit": "Programme Fidélité AXA"
      },
      {
        "title": "Responsabilité Civile & Défense Recours",
        "description": "Couvre l'indemnisation des dommages corporels et matériels causés à des tiers et assure la prise en charge des frais d'avocat en cas de litige suite à accident.",
        "isIncluded": true,
        "coverageLimit": "Obligatoire illimitée"
      },
      {
        "title": "Pack Spécial Auto Fonctionnaires",
        "description": "Possibilité de règlement en plusieurs mensualités sans frais pour toute souscription d'un an (paie prise en charge par le CNT). Garanties Défense & Recours, PFCP et Perte Financière offertes.",
        "isIncluded": true,
        "coverageLimit": "Mensualisation sans frais"
      },
      {
        "title": "Solution Deux-Roues & Cyclomoteurs",
        "description": "Contrat dédié deux-roues et cyclomoteurs comprenant la Responsabilité Civile obligatoire et l'option Individuelle Accidents.",
        "isIncluded": true,
        "coverageLimit": "Sur devis personnalisé"
      },
      {
        "title": "Assistance Dépannage & Véhicule de Remplacement",
        "description": "Remorquage express partout au Maroc et mise à disposition d'un véhicule de courtoisie dès la Responsabilité Civile.",
        "isIncluded": true,
        "coverageLimit": "24h/24 7j/7 Maroc"
      }
    ],
    "options": [
      "Réduction Famille : Remise importante sur la prime du 2ème et 3ème véhicule du foyer (conjoint ou enfant)",
      "Réduction Couplée : Jusqu'à -20% sur garanties annexes auto si détention d'un contrat MRP ou Individuelle Accidents",
      "Remise Habitation : -10% immédiat sur votre contrat Habitassur pour tout client auto",
      "Rachat total de franchise en cas de collision",
      "Protection bagages et objets personnels transportés"
    ],
    "advantages": [
      "Programme exclusif Fidelity by AXA avec capital fidélité cumulable",
      "Offre spéciale Fonctionnaires mensualisée sans frais (paie CNT)",
      "Réduction multi-véhicules pour les familles",
      "Réseau étendu de garages conventionnés AXA sans avance de frais",
      "Prise en charge immédiate à l'agence Assurances Hay Saada à Casablanca"
    ],
    "documentsRequired": [
      "Carte grise originale du véhicule (ou récépissé de mutation)",
      "Permis de conduire valide du conducteur principal",
      "Attestation d'assurance précédente ou relevé d'informations (bonus/malus CRM)",
      "Attestation de travail / état d'engagement CNT (pour le tarif Fonctionnaires)"
    ],
    "faq": [
      {
        "question": "Comment fonctionne le capital fidélité « Fidelity by AXA » ?",
        "answer": "Chaque année passée sans sinistre responsable chez AXA vous donne droit à une réduction sur vos garanties annexes ainsi qu'à un capital fidélité cumulable. En cas de sinistre responsable ultérieur, ce capital vous permet de régler vos réparations, racheter votre franchise ou augmenter le plafond de garantie."
      },
      {
        "question": "Qui peut bénéficier de l'offre Auto Fonctionnaires ?",
        "answer": "Tous les fonctionnaires et agents publics dont le salaire est géré par le Centre National des Traitements (CNT). Vous bénéficiez d'une mensualisation sur 12 mois sans aucun frais additionnel, avec plusieurs garanties offertes."
      },
      {
        "question": "Puis-je assurer un cyclomoteur ou une moto ?",
        "answer": "Oui, AXA propose la Solution Cyclomoteurs incluant la Responsabilité Civile et la défense des droits, avec possibilité d'ajouter la garantie Individuelle Accidents."
      }
    ],
    "simulationType": "auto"
  },
  {
    "id": "habitation",
    "slug": "assurance-habitation",
    "category": "particulier",
    "subcategory": "Foyer & Patrimoine",
    "title": "Habitassur",
    "tagline": "Protégez votre foyer, vos biens et votre famille contre les imprévus du quotidien",
    "shortDescription": "Que vous soyez locataire ou propriétaire, l'assurance Habitassur vous protège contre l'incendie, les dégâts des eaux, le vol et les bris de glaces avec l'assistance AXA.",
    "fullDescription": "Que vous soyez locataire, propriétaire occupant ou propriétaire non-occupant, l'assurance multirisque habitation Habitassur vous propose des solutions complètes pour vous prémunir contre tous les événements qui peuvent survenir dans votre logement : incendies et risques annexes, dégâts des eaux avec recherche de fuites et refoulement des égouts, vol et actes de vandalisme (y compris détériorations immobilières, vol dans dépendances séparées, serrures et frais de gardiennage), bris de glaces et miroirs (vitrages portes, fenêtres, marquises et vérandas), perte d'usage des locaux et recours des voisins et des tiers.",
    "iconName": "Home",
    "badge": "Contrat Habitassur AXA",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Protection complète de votre logement, bâtiment et mobilier",
    "formules": [
      {
        "id": "habitassur-locataire",
        "name": "Formule Habitassur Locataire",
        "tagline": "Garanties risques locatifs et protection du mobilier",
        "priceNote": "Tarif économique adapté à votre bail",
        "isPopular": false,
        "features": [
          "Risques locatifs (incendie, explosion, dégâts des eaux)",
          "Mobilier assuré jusqu'à 40% de la valeur totale déclarée",
          "Recours des voisins et des tiers",
          "Frais de déblai, démolition et relogement temporaire",
          "Défense et recours en cas de litige"
        ]
      },
      {
        "id": "habitassur-confort",
        "name": "Formule Habitassur Propriétaire Confort",
        "tagline": "La formule équilibrée pour appartements et villas",
        "priceNote": "La formule Habitassur de référence",
        "isPopular": true,
        "features": [
          "Bâtiment, jardin et clôtures couverts en valeur intégrale",
          "Dégâts des eaux incluant frais de recherche de fuites et refoulement égouts",
          "Vol avec effraction, détériorations immobilières et remplacement serrures",
          "Bris de glaces, miroirs, vitrages, fenêtres et vérandas",
          "Perte d'usage des locaux et indemnité de relogement temporaire",
          "Recours des voisins et des tiers"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Incendie, Risques Annexes & Dégâts des Eaux",
        "description": "Couvre les bâtiments, embellissements, agencements, mobilier et objets précieux. Prise en charge des frais de recherche de fuites, refoulement des égouts et frais de déblai/démolition.",
        "isIncluded": true,
        "coverageLimit": "Valeur à neuf déclarée"
      },
      {
        "title": "Vol & Actes de Vandalisme",
        "description": "Indemnisation du mobilier dérobé, détériorations immobilières causées par les cambrioleurs, réparation des serrures fracturées, frais de gardiennage et vol dans les dépendances séparées.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 100% valeur mobilier"
      },
      {
        "title": "Bris de Glaces, Vitrages & Vérandas",
        "description": "Remplacement des vitrages des portes, fenêtres, marquises, baies vitrées et miroirs intérieurs.",
        "isIncluded": true,
        "coverageLimit": "Frais réels"
      },
      {
        "title": "Recours des Voisins & des Tiers",
        "description": "Prise en charge des dommages matériels causés aux logements voisins suite à un incendie ou un dégât des eaux prenant naissance chez vous.",
        "isIncluded": true,
        "coverageLimit": "Inclus"
      }
    ],
    "options": [
      "Remise client Auto : -10% sur votre contrat Habitassur si vous êtes déjà assuré auto chez AXA",
      "Extension bijoux et objets de valeur au-delà du barème standard",
      "Perte d'usage des locaux et indemnité de relogement d'urgence"
    ],
    "advantages": [
      "Habitassur : le standard de référence de l'assurance habitation au Maroc",
      "Assistance serrurerie, plomberie et urgence à domicile 24/7",
      "Protection complète de vos biens mobiliers et immobiliers",
      "Démarche simple et indemnisation rapide en agence"
    ],
    "documentsRequired": [
      "Copie de la CIN du souscripteur",
      "Adresse exacte du logement et justificatif de résidence",
      "Contrat de bail pour les locataires",
      "Estimation globale de la valeur du mobilier et des équipements"
    ],
    "faq": [
      {
        "question": "Quels sont les biens couverts par l'assurance Habitassur ?",
        "answer": "Habitassur couvre l'ensemble de votre bâtiment (murs, toiture, clôtures) ainsi que tout votre mobilier personnel, appareils électroménagers et équipements intérieurs contre les dommages majeurs."
      },
      {
        "question": "Comment estimer la valeur de mon mobilier ?",
        "answer": "Faites la somme de vos meubles, appareils électroménagers, vêtements, électroniques et literie. Nos conseillers à l'agence Assurances Hay Saada vous aident à établir une déclaration juste pour éviter toute sous-assurance en cas de sinistre."
      }
    ],
    "simulationType": "habitation"
  },
  {
    "id": "epargne-retraite",
    "slug": "epargne-retraite",
    "category": "particulier",
    "subcategory": "Épargne & Avenir",
    "title": "Futuris Individuel II & Educatis II",
    "tagline": "Constitution progressive d'un capital retraite ou d'études pour vos enfants avec avantage fiscal",
    "shortDescription": "Solution d'épargne retraite souple avec déductibilité totale de l'Impôt sur le Revenu (IR) et formule Éducation Educatis II pour financer les études supérieures de vos enfants.",
    "fullDescription": "Futuris Individuel II est une solution d'épargne retraite qui allie simplicité et souplesse : constituez progressivement votre capital retraite en choisissant librement la périodicité de vos cotisations selon votre budget actuel et vos besoins futurs.",
    "iconName": "TrendingUp",
    "badge": "Produits Phares Futuris & Educatis",
    "startingPrice": "Sur devis personnalisé",
    "period": "cotisations personnalisées",
    "heroHighlight": "Déductibilité fiscale 100% de l'IR & Épargne modulable sans engagement",
    "formules": [
      {
        "id": "futuris-retraite",
        "name": "Futuris Individuel II",
        "tagline": "Plan épargne retraite souple et défiscalisé",
        "priceNote": "Cotisations modulables selon vos objectifs",
        "isPopular": true,
        "features": [
          "Cotisations régulières personnalisées selon votre budget",
          "Versements libres supplémentaires à votre convenance",
          "Déduction fiscale totale de vos cotisations de l'Impôt sur le Revenu (IR)",
          "Taux de rentabilité annuel performant et garanti",
          "Capital complémentaire décès/invalidité",
          "Bonus fidélité contractuel au terme des périodes prévues"
        ]
      },
      {
        "id": "educatis-etudes",
        "name": "Educatis II (Épargne Études)",
        "tagline": "Financement des études supérieures de vos enfants",
        "priceNote": "Plan d'épargne études personnalisé",
        "isPopular": false,
        "features": [
          "Épargne au profit de votre enfant jusqu'à ses 25 ans",
          "Exonération fiscale totale sur le rendement de l'épargne",
          "Assurance décès-invalidité du parent souscripteur",
          "Bonus fidélité contractuel",
          "Sortie en rente éducation annuelle ou capital unique"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Déduction Fiscale Exceptionnelle de l'IR",
        "description": "Vos cotisations de retraite Futuris sont 100% déductibles de votre assiette d'Impôt sur le Revenu, vous permettant de générer une économie d'impôt immédiate chaque mois.",
        "isIncluded": true,
        "coverageLimit": "Déductibilité 100% IR"
      },
      {
        "title": "Capital Complémentaire Décès / Invalidité",
        "description": "Paiement d'un capital complémentaire immédiat en cas de décès ou d'invalidité absolue et définitive avant 65 ans (50% des cotisations versées des 12 derniers mois).",
        "isIncluded": true,
        "coverageLimit": "50% des cotisations annuelles"
      },
      {
        "title": "Bonus Fidélité 6ème et 8ème Année",
        "description": "Versement automatique d'une bonification fidélité à la fin de la 6ème année et de la 8ème année sur vos cotisations périodiques (plafond 1 000 000 DH).",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 1 000 000 DH"
      },
      {
        "title": "Disponibilité & Rachats d'Urgence",
        "description": "Possibilité de demander une avance sur votre épargne ou d'effectuer un rachat partiel ou total après trois années de cotisations.",
        "isIncluded": true,
        "coverageLimit": "Avances & Rachats"
      }
    ],
    "options": [
      "Choix des modalités de sortie : Capital unique, rente viagère réversible ou panachage",
      "Indexation automatique des cotisations pour contrer l'inflation",
      "Garantie d'exonération des primes en cas d'incapacité temporaire de travail"
    ],
    "advantages": [
      "Accessible à tous les budgets et modulable à tout moment",
      "Rendement sécurisé et supérieur aux placements bancaires traditionnels",
      "Double gain : constitution de capital et économie d'impôt sur le revenu",
      "Conseil patrimonial sur-mesure à l'agence Assurances Hay Saada"
    ],
    "documentsRequired": [
      "Copie de la CIN du souscripteur",
      "RIB bancaire pour la mise en place du prélèvement automatique",
      "Extrait d'acte de naissance ou livret de famille pour l'enfant bénéficiaire (Educatis II)"
    ],
    "faq": [
      {
        "question": "Comment fonctionne l'avantage fiscal avec Futuris ?",
        "answer": "En souscrivant Futuris Individuel II, le montant de vos cotisations est déduit de votre revenu global imposable. Votre taux effectif d'imposition baisse, et vous récupérez cette économie sur votre fiche de paie ou lors de votre déclaration annuelle d'IR."
      },
      {
        "question": "Puis-je modifier mes versements au fil du temps ?",
        "answer": "Oui, Futuris vous offre une flexibilité totale : vous pouvez à tout moment augmenter, diminuer ou suspendre vos versements périodiques, ou effectuer des versements libres complémentaires selon vos capacités."
      }
    ],
    "simulationType": "retraite"
  },
  {
    "id": "sante",
    "slug": "assurance-sante",
    "category": "particulier",
    "subcategory": "Santé & Bien-être",
    "title": "Prévoyance Santé : Sehassur & Sehassur Plus International",
    "tagline": "Solutions santé complètes au Maroc avec Sehassur et à l'international avec Sehassur Plus International",
    "shortDescription": "Une couverture santé sur-mesure au Maroc avec Sehassur et une protection médicale mondiale haut de gamme avec Sehassur Plus International : soins ambulatoires, examens et hospitalisation.",
    "fullDescription": "La gamme Prévoyance Santé d'AXA vous apporte une protection médicale complète et haut de gamme. Avec Sehassur, bénéficiez d'une prise en charge de vos consultations médicales, examens, actes chirurgicaux, pharmacies, soins optiques et dentaires au Maroc, avec un accès direct aux meilleures cliniques conventionnées. Avec Sehassur Plus International, vous disposez d'une couverture médicale d'exception au Maroc et à l'étranger pour vos hospitalisations dans les plus grands centres hospitaliers mondiaux et la prise en charge des pathologies lourdes.",
    "iconName": "HeartPulse",
    "badge": "Offres Officielles Sehassur AXA",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Tiers payant direct en clinique, soins au Maroc et couverture médicale internationale",
    "formules": [
      {
        "id": "sehassur-national",
        "name": "Sehassur (Santé Maroc)",
        "tagline": "Assurance santé complète individuelle et familiale au Maroc",
        "priceNote": "Formule sur mesure au Maroc",
        "isPopular": true,
        "features": [
          "Remboursement des consultations de généralistes et spécialistes",
          "Prise en charge des soins ambulatoires, examens et analyses médicales",
          "Hospitalisation médicale et chirurgicale en cliniques conventionnées",
          "Pharmacie, médicaments prescrits et soins d'urgence",
          "Forfaits optique (verres, montures) et soins/prothèses dentaires"
        ]
      },
      {
        "id": "sehassur-plus-international",
        "name": "Sehassur Plus International",
        "tagline": "Protection santé haut de gamme au Maroc et dans le monde entier",
        "priceNote": "Couverture internationale d'excellence",
        "isPopular": false,
        "features": [
          "Couverture santé complète au Maroc, en Europe et à l'International",
          "Accès aux meilleurs centres hospitaliers et cliniques de pointe dans le monde",
          "Plafonds de remboursement élevés pour interventions et pathologies lourdes"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Hospitalisation Médicale & Chirurgicale",
        "description": "Prise en charge directe en clinique conventionnée au Maroc et en milieu hospitalier international sans avance de frais.",
        "isIncluded": true,
        "coverageLimit": "Tiers Payant direct"
      },
      {
        "title": "Soins Ambulatoires & Consultations",
        "description": "Remboursement rapide des consultations spécialistes, bilans, radiologie, biologie médicale et pharmacie.",
        "isIncluded": true,
        "coverageLimit": "Selon barème souscrit"
      },
      {
        "title": "Couverture Mondiale Sehassur Plus",
        "description": "Accès direct aux hôpitaux et centres hospitaliers de référence à l'étranger pour les pathologies lourdes.",
        "isIncluded": true,
        "coverageLimit": "Plafonds internationaux majeurs"
      },
      {
        "title": "Dentaire, Optique & Maternité",
        "description": "Forfaits renforcés pour les soins dentaires, prothèses, montures et verres correcteurs, ainsi que les frais d'accouchement.",
        "isIncluded": true,
        "coverageLimit": "Forfaits dédiés"
      }
    ],
    "options": [
      "Extension Monde Entier sans franchise pour Sehassur Plus International",
      "Renfort Médecine Douce et Cures Thermales",
      "Assistance aide à domicile pendant la convalescence"
    ],
    "advantages": [
      "Choix entre couverture nationale ciblée (Sehassur) ou prestige international (Sehassur Plus)",
      "Accès aux meilleures cliniques au Maroc et aux hôpitaux d'excellence à l'étranger",
      "Gestion humaine et réactive à l'agence Assurances Hay Saada",
      "Complémentarité parfaite avec l'AMO"
    ],
    "documentsRequired": [
      "Copie de la CIN du souscripteur",
      "Livret de famille pour le rattachement des ayants droit",
      "Questionnaire médical simplifié"
    ],
    "faq": [
      {
        "question": "Quelle est la différence entre Sehassur et Sehassur Plus International ?",
        "answer": "Sehassur assure une couverture santé complète au Maroc (consultations, pharmacie, hospitalisations en cliniques privées). Sehassur Plus International étend cette protection à l'échelle mondiale avec prise en charge directe dans les plus grands hôpitaux internationaux, plafonds très élevés et rapatriement médical."
      }
    ],
    "simulationType": "sante"
  },
  {
    "id": "voyage",
    "slug": "assurance-voyage",
    "category": "particulier",
    "subcategory": "Mobilité & Voyage",
    "title": "Globale Assistance Voyage",
    "tagline": "Attestation Visa Schengen immédiate conforme (30 000 €) et assistance médicale dans le monde entier",
    "shortDescription": "Pour répondre aux exigences des consulats de l'espace Schengen (30 000 € de couverture médicale), Globale Assistance Voyage vous protège ainsi que votre famille partout dans le monde et au Maroc.",
    "fullDescription": "Pour répondre aux exigences des consulats de l'espace Schengen (couverture médicale minimale de 30 000 €), la Globale Assistance Voyage est une couverture complète qui permet à l'assuré ainsi qu'à sa famille d'être protégés partout dans le monde, y compris au Maroc, avec prise en charge des frais médicaux d'urgence et rapatriement sanitaire.",
    "iconName": "Plane",
    "badge": "Conforme Consulat Schengen 30 000 €",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Attestation Visa Schengen délivrée immédiatement en agence",
    "formules": [
      {
        "id": "schengen-court",
        "name": "Formule Court Séjour Schengen",
        "tagline": "Idéale pour vacances, missions et démarches consulaires",
        "priceNote": "Délivrance immédiate en agence",
        "isPopular": true,
        "features": [
          "Attestation officielle avec QR Code pour le consulat",
          "Couverture médicale minimale de 30 000 € (conforme exigences UE)",
          "Rapatriement sanitaire médicalisé d'urgence"
        ]
      },
      {
        "id": "monde-annuel",
        "name": "Formule Multivoyages Monde Entier",
        "tagline": "Pour voyageurs fréquents et voyages d'affaires",
        "priceNote": "Valable 365 jours dans tous les pays",
        "isPopular": false,
        "features": [
          "Tous les voyages de l'année couverts dans le monde entier et au Maroc",
          "Plafond médical relevé jusqu'à 30 000 € (USA, Canada, Asie)",
          "Rapatriement sanitaire médicalisé d'urgence partout dans le monde"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Frais Médicaux & Hospitalisation Schengen (30 000 €)",
        "description": "Prise en charge des consultations, examens et soins d'urgence dans tous les hôpitaux et cliniques de l'espace Schengen.",
        "isIncluded": true,
        "coverageLimit": "30 000 € minimum légal"
      },
      {
        "title": "Rapatriement Sanitaire d'Urgence",
        "description": "Organisation et prise en charge intégrale du transport médicalisé vers le Maroc ou l'établissement hospitalier le plus approprié.",
        "isIncluded": true,
        "coverageLimit": "Frais réels 100%"
      }
    ],
    "options": [
      "Garantie annulation de voyage imprévue",
      "Assurance sports d'hiver et activités de plein air",
      "Option couverture USA, Canada et pays sans convention"
    ],
    "advantages": [
      "Attestation acceptée à 100% par tous les consulats de l'espace Schengen",
      "Délivrance immédiate en main propre à l'agence Assurances Hay Saada",
      "Plateforme d'assistance multilingue accessible 24/7 dans le monde entier"
    ],
    "documentsRequired": [
      "Copie du passeport en cours de validité",
      "Dates exactes de séjour et pays de destination",
      "Formulaire de demande consulaire (le cas échéant)"
    ],
    "faq": [
      {
        "question": "L'attestation est-elle acceptée pour les Visas Schengen ?",
        "answer": "Oui, sans aucune exception. L'attestation délivrée par AXA répond point par point au règlement communautaire européen (couverture médicale minimale de 30 000 €, rapatriement sanitaire, validité sur tous les États membres)."
      }
    ],
    "simulationType": "standard"
  },
  {
    "id": "loisirs-chasse",
    "slug": "plaisance-chasse",
    "category": "particulier",
    "subcategory": "Loisirs & Passions",
    "title": "Plaisance, Jet Ski & RC Chasse",
    "tagline": "Vivez votre passion nautique et cynégétique en toute conformité et sérénité",
    "shortDescription": "Assurance modulaire pour navires de plaisance, bateaux à moteur, jet-skis et scooters de mer, ainsi que le contrat obligatoire de Responsabilité Civile Chasse pour pratiquer en toute sécurité.",
    "fullDescription": "Bénéficiez d'une couverture modulaire qui vous permet d'avoir une assurance adaptée à votre pratique de loisirs : voilier, bateau à moteur, hors-bord, jet-ski ou scooter de mer. La garantie Responsabilité Civile couvre les dommages corporels et matériels causés à autrui par le navire. En complément, bénéficiez de garanties contre la perte totale, le délaissement, le vol total ou des accessoires, les avaries matérielles (incendie, abordage, naufrage, collision, vice caché) et d'une protection individuelle accidents pour les personnes transportées. Pour les passionnés de chasse, la RC Chasse AXA est un contrat simple et rapide qui vous protège contre les conséquences financières de la responsabilité civile encourue en raison des dommages causés à des tiers par vos armes de chasse lors d'actions licites.",
    "iconName": "ShieldCheck",
    "badge": "Plaisance & Chasse Agréée",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Attestation Chasse immédiate & Couverture multirisque plaisance",
    "formules": [
      {
        "id": "plaisance-pack",
        "name": "Pack Plaisance & Jet Ski",
        "tagline": "Pour bateaux, voiliers, jet-skis et scooters marins",
        "priceNote": "Selon puissance et type d'embarcation",
        "isPopular": true,
        "features": [
          "Responsabilité Civile maritime obligatoire",
          "Défense et recours avec frais d'avocat et d'expert",
          "Perte totale, sauvetage et délaissement du navire",
          "Vol du navire, des annexes et des accessoires",
          "Individuelle personnes transportées (frais médicaux, décès, invalidité)"
        ]
      },
      {
        "id": "chasse-pack",
        "name": "Pack RC Chasse Officiel",
        "tagline": "Obligatoire pour l'obtention et le renouvellement du permis",
        "priceNote": "Délivrance immédiate de l'attestation",
        "isPopular": false,
        "features": [
          "Attestation officielle pour la Fédération et les Eaux & Forêts",
          "Responsabilité Civile dommages corporels et matériels causés par armes",
          "Couverture des chiens de chasse en action de chasse",
          "Défense et recours juridique suite à incident de tir",
          "Validité sur l'ensemble du territoire national marocain"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Responsabilité Civile Navire & Chasse",
        "description": "Couvre l'assuré contre les conséquences pécuniaires des dommages matériels et corporels involontairement causés à des tiers lors de la navigation ou de la chasse.",
        "isIncluded": true,
        "coverageLimit": "Illimitée"
      },
      {
        "title": "Pertes & Dommages Matériels du Bateau",
        "description": "Indemnisation des avaries partielles ou totales subies par le navire suite à incendie, abordage, naufrage, tempête ou collision.",
        "isIncluded": true,
        "coverageLimit": "Valeur agréée"
      },
      {
        "title": "Individuelle Accidents Personnes Transportées",
        "description": "Capital en cas de décès ou d'invalidité et remboursement des frais médicaux pour l'assuré et les passagers montant ou descendant du navire.",
        "isIncluded": true,
        "coverageLimit": "Contractuelle"
      },
      {
        "title": "Frais de Sauvetage & Retrait d'Épave",
        "description": "Prise en charge des frais de remorquage en mer, sauvetage et renflouement exigés par les autorités portuaires.",
        "isIncluded": true,
        "coverageLimit": "Frais réels"
      }
    ],
    "options": [
      "Garantie vol des équipements électroniques de bord (GPS, sondeur)",
      "Couverture remorque porte-bateau sur la route",
      "Extension responsabilité civile chiens de chasse de race"
    ],
    "advantages": [
      "Attestation de chasse délivrée immédiatement pour votre permis",
      "Contrats sur-mesure pour jet-ski et moteurs hors-bord de toute puissance",
      "Accompagnement de proximité par des conseillers spécialisés à Casablanca",
      "Assistance remorquage nautique et sauvetage en mer"
    ],
    "documentsRequired": [
      "Copie de la CIN du souscripteur",
      "Titre de navigation ou acte de francisation (pour les bateaux)",
      "Permis de chasse ou carnet de tir (pour la RC Chasse)"
    ],
    "faq": [
      {
        "question": "L'attestation RC Chasse est-elle valable pour valider mon permis ?",
        "answer": "Oui, l'attestation délivrée par notre agence est conforme à toutes les exigences de l'Agence Nationale des Eaux et Forêts (ANEF) et de la Fédération Royale Marocaine de Chasse."
      }
    ],
    "simulationType": "standard"
  },
  {
    "id": "accidents-travail",
    "slug": "accidents-travail",
    "category": "entreprise",
    "subcategory": "Protection Salariés",
    "title": "Accidents du Travail & Maladies Pro (AT/MP)",
    "tagline": "Conformité légale stricte (Loi 18-12) et protection globale de vos collaborateurs et apprentis",
    "shortDescription": "La couverture obligatoire Accidents du Travail et Maladies Professionnelles a pour finalité de préserver et protéger vos collaborateurs : indemnités journalières, soins, rentes d'invalidité et reclassement.",
    "fullDescription": "La couverture Accidents du Travail et Maladies Professionnelles a pour finalité de préserver et de protéger vos collaborateurs en toute circonstance. Obligatoire selon la loi marocaine n° 18-12, elle vous garantit le versement des indemnités journalières en cas d'arrêt de travail temporaire, le remboursement intégral des frais médicaux, chirurgicaux, pharmaceutiques et d'hospitalisation, le service de rentes d'invalidité permanente ou de pensions aux ayants droit en cas de décès accidentel, ainsi que la prise en charge des frais de réadaptation fonctionnelle, de rééducation et de reclassement professionnel. Assurances Hay Saada est votre interlocuteur privilégié pour sécuriser votre entreprise et garantir la paix sociale au sein de vos équipes.",
    "iconName": "Users",
    "badge": "Obligation Légale Loi 18-12",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "100% conforme à la loi 18-12 & Prise en charge médicale sans avance",
    "formules": [
      {
        "id": "at-conforme",
        "name": "Formule Conformité Légale 18-12",
        "tagline": "Conformité légale totale pour l'ensemble de vos effectifs",
        "priceNote": "Calculée sur la masse salariale déclarée",
        "isPopular": true,
        "features": [
          "Prise en charge intégrale des accidents du travail et de trajet",
          "Indemnités journalières versées en cas d'arrêt temporaire",
          "Remboursement des frais médicaux, chirurgicaux et pharmaceutiques",
          "Rentes d'incapacité permanente partielle ou totale",
          "Pensions aux veufs/veuves et orphelins en cas de décès accidentel",
          "Frais funéraires et de transport de corps"
        ]
      },
      {
        "id": "at-etendue",
        "name": "Formule AT Étendue & Cadres",
        "tagline": "Prestations complémentaires pour valoriser vos équipes",
        "priceNote": "Optimisation de la couverture sociale",
        "isPopular": false,
        "features": [
          "Toutes les garanties de la formule légale 18-12",
          "Majoration des capitaux d'indemnisation pour les cadres",
          "Prise en charge des dépassements d'honoraires en clinique",
          "Frais de réadaptation fonctionnelle et de reconversion professionnelle",
          "Assistance psychologique post-traumatique pour les salariés"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Indemnités Journalières de Travail",
        "description": "Maintien du revenu légal du salarié en arrêt d'activité prescrit médicalement suite à un accident du travail ou de trajet.",
        "isIncluded": true,
        "coverageLimit": "Conforme barème légal"
      },
      {
        "title": "Frais Médicaux, Chirurgicaux & d'Hospitalisation",
        "description": "Prise en charge directe en clinique conventionnée ou remboursement intégral sans franchise des actes médicaux et médicaments.",
        "isIncluded": true,
        "coverageLimit": "Frais réels 100%"
      },
      {
        "title": "Rentes d'Invalidité & Pensions Ayants Droit",
        "description": "Constitution et service des rentes viagères d'incapacité permanente (IPP) ou pensions aux conjoints et enfants mineurs.",
        "isIncluded": true,
        "coverageLimit": "Rente viagère légale"
      },
      {
        "title": "Réadaptation & Reclassement Professionnel",
        "description": "Financement des appareillages, prothèses, séances de rééducation et formations pour réinsérer le collaborateur.",
        "isIncluded": true,
        "coverageLimit": "Inclus"
      }
    ],
    "options": [
      "Garantie accidents de trajet élargie pour travailleurs nomades",
      "Prise en charge du personnel temporaire, stagiaires et intérimaires",
      "Assistance juridique de l'employeur devant le tribunal social"
    ],
    "advantages": [
      "Conformité absolue aux contrôles de l'Inspection du Travail",
      "Déclaration simplifiée des bordereaux de paie trimestriels",
      "Accompagnement dédié pour la gestion des dossiers de sinistre à Casablanca",
      "Réseau conventionné de cliniques et centres de traumatologie"
    ],
    "documentsRequired": [
      "Copie du Registre de Commerce (RC) et statut juridique",
      "Déclaration de la masse salariale brute globale (CNSS)",
      "Liste nominative du personnel ou effectif global par catégorie"
    ],
    "faq": [
      {
        "question": "L'assurance Accidents du Travail est-elle obligatoire ?",
        "answer": "Oui, la loi marocaine n° 18-12 impose à tout employeur, quelle que soit la taille ou la forme juridique de son entreprise, de souscrire une assurance AT/MP sous peine de lourdes sanctions pénales et financières."
      }
    ],
    "simulationType": "standard"
  },
  {
    "id": "sante-collective",
    "slug": "prevoyance-sante-entreprise",
    "category": "entreprise",
    "subcategory": "Protection Salariés",
    "title": "Prévoyance Santé Entreprise",
    "tagline": "Assurance maladie complémentaire collective modulable pour valoriser et protéger votre personnel",
    "shortDescription": "Prévoyance Santé Entreprise est une assurance maladie pour tous, que vous bénéficiiez ou non de l'AMO : libre choix des taux de remboursement (TNR), tiers payant et couverture prévoyance.",
    "fullDescription": "Prévoyance Santé Entreprise est une assurance maladie pour tous vos salariés, que votre structure bénéficie de l'Assurance Maladie Obligatoire (AMO) ou souhaite un régime autonome. Plusieurs niveaux de couverture sont disponibles, de la solution basique à la solution la plus optimale incluant des prestations haut de gamme. Vous bénéficiez d'une complémentaire à la carte en fonction de votre budget, d'un libre choix entre différentes options de remboursement (sur la base du Tarif National de Référence TNR ou des frais réels), et d'un réseau de tiers payant en clinique. Prévoyance Santé Entreprise vous couvre également en cas de décès, d'incapacité totale temporaire (ITT) ou d'invalidité permanente de vos collaborateurs.",
    "iconName": "HeartPulse",
    "badge": "Santé Collective Modulable",
    "startingPrice": "Sur devis personnalisé",
    "period": "mensualisé ou annuel",
    "heroHighlight": "Tiers Payant Clinique & Libre choix des taux de remboursement (TNR)",
    "formules": [
      {
        "id": "sante-pro-base",
        "name": "Formule Complémentaire AMO",
        "tagline": "Comble le ticket modérateur de l'AMO au meilleur coût",
        "priceNote": "Idéale pour PME et effectifs nombreux",
        "isPopular": true,
        "features": [
          "Remboursement du ticket modérateur restant à la charge du salarié",
          "Tiers payant hospitalier en clinique conventionnée",
          "Prise en charge des médicaments ambulatoires",
          "Capital décès accidentel garanti pour la famille"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Tiers Payant en Clinique Privée",
        "description": "Accès sans avance de frais d'hospitalisation dans toutes les cliniques conventionnées AXA à Casablanca et dans tout le Royaume.",
        "isIncluded": true,
        "coverageLimit": "Prise en charge directe"
      },
      {
        "title": "Soins Ambulatoires & Médicaments",
        "description": "Remboursement rapide des consultations médicales, ordonnances pharmaceutiques, examens radiologiques et analyses de laboratoire.",
        "isIncluded": true,
        "coverageLimit": "Selon taux contractuel"
      },
      {
        "title": "Prévoyance Décès & Incapacité Totale (ITT)",
        "description": "Versement d'un capital substantiel aux ayants droit en cas de décès du salarié et versement d'indemnités journalières en cas d'incapacité.",
        "isIncluded": true,
        "coverageLimit": "Multiple de salaire annuel"
      },
      {
        "title": "Rente Éducation & Conjoint",
        "description": "Versement d'une rente d'éducation aux enfants mineurs du collaborateur disparu pour garantir la continuité de leurs études.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 21 ans"
      }
    ],
    "options": [
      "Couverture des ascendants (parents à charge des salariés)",
      "Évacuation sanitaire d'urgence vers l'étranger",
      "Assistance médicale à domicile pour les salariés"
    ],
    "advantages": [
      "Cotisations patronales déductibles à 100% de l'Impôt sur les Sociétés (IS)",
      "Outil majeur d'attractivité et de fidélisation de vos collaborateurs",
      "Remboursements accélérés sur dossier en agence sous 48 à 72h",
      "Application mobile pour le suivi des remboursements"
    ],
    "documentsRequired": [
      "Registre de commerce et statuts de la société",
      "Liste du personnel avec âges, statuts familiaux et catégories professionnelles",
      "Niveau de couverture et options souhaitées"
    ],
    "faq": [
      {
        "question": "Puis-je souscrire si mon entreprise est déjà assujettie à l'AMO ?",
        "answer": "Oui, tout à fait. Prévoyance Santé Entreprise agit comme une excellente sur-complémentaire, prenant en charge le reste à payer laissé par l'AMO et offrant le tiers payant en clinique."
      }
    ],
    "simulationType": "sante"
  },
  {
    "id": "flotte-auto",
    "slug": "flotte-automobile",
    "category": "entreprise",
    "subcategory": "Mobilité Entreprise",
    "title": "Flotte Automobile Entreprise",
    "tagline": "Dédiée aux parcs supérieurs à 5 véhicules avec garanties innovantes et gestion unifiée",
    "shortDescription": "L'offre Flotte Auto d'AXA est dédiée aux entreprises ayant un parc de véhicules supérieur à 5 (tous usages confondus) : indemnisation en valeur à neuf, aménagements professionnels et assistance 24/7.",
    "fullDescription": "L'offre Flotte Auto d'AXA est spécialement dédiée aux entreprises disposant d'un parc de véhicules supérieur à 5 (tous usages confondus : véhicules utilitaires, camionnettes, berlines de direction, engins de livraison). Elle vous permet de maximiser la couverture de vos véhicules grâce à des garanties innovantes : Responsabilité Civile, Défense et Recours, indemnisation en valeur à neuf pour les véhicules récents, et une grande exclusivité AXA : la garantie Aménagements Professionnels pour protéger vos caissons frigorifiques, étagères d'artisans et équipements montés. Vous profitez d'une gestion simplifiée avec une échéance unique, d'une possibilité de fractionnement de la prime, d'une tarification dégressive et d'une assistance routière prioritaire 24h/24.",
    "iconName": "Truck",
    "badge": "Exclusivité Aménagements Pro AXA",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Exclusivité AXA : Garantie Aménagements Professionnels & Échéance unique",
    "formules": [
      {
        "id": "flotte-eco",
        "name": "Flotte Tiers & Assistance",
        "tagline": "Contrat cadre pour véhicules utilitaires et commerciaux",
        "priceNote": "Tarification dégressive par tranche de parc",
        "isPopular": false,
        "features": [
          "Responsabilité Civile pour tous conducteurs mandatés",
          "Défense et Recours avec avocat dédié",
          "Assistance dépannage et remorquage 24/7 partout au Maroc",
          "Gestion globale avec échéance de renouvellement unique",
          "Inclusion / retrait de véhicules par simple avenant"
        ]
      },
      {
        "id": "flotte-complete",
        "name": "Flotte Tous Risques & Aménagements Pro",
        "tagline": "La protection maximale de votre outil de travail roulant",
        "priceNote": "Recommandée pour véhicules récents et équipés",
        "isPopular": true,
        "features": [
          "Dommages tous accidents, collision, renversement",
          "Garantie exclusive AXA : Aménagements Professionnels",
          "Indemnisation en valeur à neuf sur véhicules récents",
          "Garantie Vol, Incendie et Bris de glaces sans franchise",
          "Véhicule de remplacement utilitaire ou berline",
          "Protection corporelle des conducteurs salariés"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Garantie Exclusive AXA : Aménagements Professionnels",
        "description": "Couvre la valeur réelle des équipements techniques installés à bord : rayonnages métalliques, caissons isothermes, hayons élévateurs, groupes frigorifiques et outillage fixe.",
        "isIncluded": true,
        "coverageLimit": "Valeur déclarée"
      },
      {
        "title": "Indemnisation en Valeur à Neuf",
        "description": "En cas de perte totale ou de vol non retrouvé d'un véhicule récent, remboursement sur la base du prix d'achat à neuf sans décote de vétusté.",
        "isIncluded": true,
        "coverageLimit": "Valeur facture"
      },
      {
        "title": "Assistance Routière Pro 24h/24 7j/7",
        "description": "Dépannage express sur place, remorquage prioritaire 0 km partout au Maroc et rapatriement des chauffeurs et marchandises.",
        "isIncluded": true,
        "coverageLimit": "Maroc 24/7"
      },
      {
        "title": "Protection Conducteurs Salariés",
        "description": "Indemnité forfaitaire en cas de blessures, hospitalisation ou décès du chauffeur salarié lors d'un accident de la circulation.",
        "isIncluded": true,
        "coverageLimit": "Contractuelle"
      }
    ],
    "options": [
      "Garantie des marchandises et matériels transportés dans les véhicules",
      "Extension géographique pour missions internationales",
      "Rachat total de vétusté sur pièces mécaniques et carrosserie"
    ],
    "advantages": [
      "Unicité des échéances et facturation centralisée simplifiée",
      "Possibilité de fractionnement de prime sans alourdir la trésorerie",
      "Tarifs dégressifs très attractifs selon la taille de votre flotte",
      "Interlocuteur dédié à l'agence Assurances Hay Saada à Casablanca"
    ],
    "documentsRequired": [
      "Liste de l'ensemble des véhicules (immatriculations, marques, modèles, usages)",
      "Copies des cartes grises de l'ensemble du parc",
      "Historique des sinistres sur les 36 derniers mois délivré par votre assureur précédent"
    ],
    "faq": [
      {
        "question": "À partir de combien de véhicules puis-je souscrire une Flotte ?",
        "answer": "L'offre Flotte Auto AXA est accessible à partir de 5 véhicules, qu'il s'agisse de véhicules légers, de véhicules utilitaires, de camions ou d'engins professionnels."
      }
    ],
    "simulationType": "flotte"
  },
  {
    "id": "mrp",
    "slug": "multirisque-professionnelle",
    "category": "entreprise",
    "subcategory": "Biens & Locaux Pro",
    "title": "Multi PME/PMI, Multi Pharma & Hébergement",
    "tagline": "Couverture sur-mesure des risques liés à votre activité professionnelle, vos stocks et vos locaux",
    "shortDescription": "La multirisque professionnelle Multi PME-PMI vous garantit contre l'incendie, les dégâts des eaux, le vol, les bris de glaces, bris de machines, informatique et perte d'exploitation, avec des déclinaisons Pharma et Hôtellerie.",
    "fullDescription": "La multirisque professionnelle Multi PME-PMI vous garantit au titre des risques liés à votre activité professionnelle. La garantie de base obligatoire couvre l'Incendie, l'explosion et les risques annexes. En complément, vous avez la possibilité de choisir au moins 2 garanties optionnelles parmi un large éventail : Dégâts des eaux, Bris de glaces et enseignes, Vol et vandalisme, Bris de matériel informatique et bureautique, Bris de machines, et Responsabilité Civile Exploitation. AXA propose également des offres sectorielles sur-mesure : « Multi Pharma » spécialement conçu pour les pharmacies (avec détérioration des médicaments en réfrigérateur sous température dirigée suite à coupure d'électricité et vol de stupéfiants) et « Multi Hébergement » dédié aux hôtels 1 à 3 étoiles, maisons d'hôtes et riads (incluant vol des biens clients et intoxication alimentaire).",
    "iconName": "Building2",
    "badge": "Pack Modulable PME & Spécialisés",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Packs spécialisés Multi Pharma, Multi Hébergement & Perte d'Exploitation",
    "formules": [
      {
        "id": "pme-standard",
        "name": "Multi PME/PMI Modulable",
        "tagline": "Pour ateliers, commerces, prestataires de services et bureaux",
        "priceNote": "Composée sur-mesure selon vos priorités",
        "isPopular": true,
        "features": [
          "Garantie de base : Incendie, explosion, foudre et risques annexes",
          "Dégâts des eaux et infiltrations dans les locaux professionnels",
          "Bris de glaces, vitrines commerciales et enseignes lumineuses",
          "Vol avec effraction et actes de vandalisme sur stocks et matériel",
          "Bris de matériel informatique et bureautique",
          "Responsabilité Civile Exploitation"
        ]
      },
      {
        "id": "multi-pharma",
        "name": "Pack Multi Pharma (Officines)",
        "tagline": "Conçu sur-mesure pour les exigences des pharmaciens",
        "priceNote": "Solution de référence pour officines au Maroc",
        "isPopular": false,
        "features": [
          "Toutes les garanties de base incendie, vol et dégâts des eaux",
          "Détérioration des médicaments thermosensibles en chambre froide/frigo",
          "Vol d'espèces, de produits de parapharmacie et de stupéfiants",
          "Bris des automates de dispensation et terminaux de gestion",
          "RC Professionnelle et exploitation du pharmacien titulaire"
        ]
      },
      {
        "id": "multi-hebergement",
        "name": "Pack Multi Hébergement (Hôtels & Riads)",
        "tagline": "Pour hôtels 1 à 3 étoiles, maisons d'hôtes et riads",
        "priceNote": "Couverture globale du bâti et de l'accueil clients",
        "isPopular": false,
        "features": [
          "Bâtiments historiques, agencements, décoration et mobilier hôtelier",
          "Vol des effets et objets personnels des clients (chambres et coffres)",
          "Garantie intoxication alimentaire et bris de vaisselle",
          "Bris de machines (climatisation centrale, ascenseurs, groupes électrogènes)",
          "RC Exploitation hôtelière et recours des clients"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Incendie, Explosion & Risques Annexes (Base)",
        "description": "Couvre les bâtiments professionnels, les installations techniques, le mobilier de bureau, les machines et l'intégralité des stocks de marchandises.",
        "isIncluded": true,
        "coverageLimit": "Valeur déclarée"
      },
      {
        "title": "Bris de Matériel Informatique & Machines",
        "description": "Indemnisation des pannes soudaines, surtensions électriques, chutes accidentelles et bris internes touchant vos serveurs, ordinateurs et équipements de production.",
        "isIncluded": true,
        "coverageLimit": "Valeur de remplacement"
      },
      {
        "title": "Perte d'Exploitation Après Sinistre",
        "description": "Maintien du chiffre d'affaires et versement d'une indemnité compensatoire couvrant vos charges fixes (salaires, loyers, amortissements) le temps des réparations.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 12 mois de marge brute"
      },
      {
        "title": "Détérioration sous Froid (Spécial Pharma & Restauration)",
        "description": "Remboursement des pertes de produits pharmaceutiques ou denrées périssables suite à panne fortuite de réfrigérateur ou coupure de courant prolongée.",
        "isIncluded": true,
        "coverageLimit": "Valeur d'achat HT"
      }
    ],
    "options": [
      "Garantie vol de fonds en caisse et pendant le transport à la banque",
      "Couverture des terrasses et enseignes lumineuses extérieures",
      "Assistance d'urgence pour sécurisation provisoire des locaux 24/7"
    ],
    "advantages": [
      "Produits modulables : composez exactement les garanties nécessaires à votre métier",
      "Packs sectoriels exclusifs : Multi Pharma et Multi Hébergement",
      "Réduction couplée de 20% sur votre contrat automobile si vous détenez une MRP",
      "Prise en charge réactive à Casablanca pour éviter toute interruption d'activité"
    ],
    "documentsRequired": [
      "Registre de commerce et statuts de la société",
      "Description de l'activité exercée et plan des locaux",
      "Inventaire chiffré des stocks de marchandises et liste du matériel"
    ],
    "faq": [
      {
        "question": "La garantie Perte d'Exploitation est-elle indispensable ?",
        "answer": "Absolument. Si un incendie ou un dégât des eaux paralyse votre outil de production, réparer les murs ne suffit pas : vos charges fixes (salaires, emprunts, loyers) continuent de courir. La garantie perte d'exploitation comble cette perte financière."
      }
    ],
    "simulationType": "mrp"
  },
  {
    "id": "multirisque-industrielle",
    "slug": "multirisque-industrielle",
    "category": "entreprise",
    "subcategory": "Industrie & Usines",
    "title": "Multirisque Industrielle",
    "tagline": "Couverture totale pour la protection intégrale de l'outil industriel et de la pérennité du chef d'entreprise",
    "shortDescription": "L'Assurance Multirisque Industrielle est une couverture totale permettant au dirigeant de sécuriser usines, machines, stocks, vol de fonds, bris de machines, perte d'exploitation et RC industrielle.",
    "fullDescription": "L'Assurance Multirisque Industrielle est une couverture totale qui permet au chef d'entreprise une protection complète de son outil industriel et de son personnel. Garantie de base : Incendie, explosions, foudre et risques annexes. Les atouts du contrat résident dans un tarif compétitif, un produit à la carte qui s'adapte aux spécificités de chaque site manufacturier, et un large choix d'extensions : vol, transport de fonds et détournement, dégâts des eaux, bris de glaces et enseignes lumineuses, bris de machines de production, pertes d'exploitation après sinistre et Responsabilité Civile Industrielle.",
    "iconName": "Building2",
    "badge": "Couverture Industrielle Intégrale",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Protection complète : Usines, lignes de production & transport de fonds",
    "formules": [
      {
        "id": "industrie-standard",
        "name": "Multirisque Industrielle Sur-Mesure",
        "tagline": "Pour unités de fabrication, entrepôts logistiques et usines",
        "priceNote": "Établie suite à visite de risque par nos experts",
        "isPopular": true,
        "features": [
          "Bâtiments d'usine, hangars et entrepôts industriels",
          "Machines-outils, lignes de production et robots industriels",
          "Stocks de matières premières, produits semi-finis et finis",
          "Vol avec effraction, agression et détournement de fonds",
          "Dégâts des eaux et inondations des zones de stockage",
          "Perte d'exploitation consécutive pour préserver la marge brute"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Incendie, Explosion & Foudre",
        "description": "Couverture maximale des structures d'usines, charpentes métalliques, transformateurs électriques et produits stockés.",
        "isIncluded": true,
        "coverageLimit": "Capitaux industriels"
      },
      {
        "title": "Bris de Machines de Production",
        "description": "Garantit les dommages internes soudains et imprévus affectant les machines de production (court-circuit, défaillance mécanique, erreur d'exploitation).",
        "isIncluded": true,
        "coverageLimit": "Valeur de remplacement"
      },
      {
        "title": "Vol, Transport de Fonds & Détournement",
        "description": "Protection des espèces et valeurs en coffre-fort fortifié, pendant les transferts de fonds vers la banque et en cas de détournement.",
        "isIncluded": true,
        "coverageLimit": "Plafonds négociés"
      },
      {
        "title": "Perte d'Exploitation Industrielle",
        "description": "Versement de l'indemnité compensatoire de marge brute pour maintenir les salaires et remboursements bancaires pendant l'arrêt d'usine.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 18 mois"
      }
    ],
    "options": [
      "Garantie contamination ou altération des matières premières",
      "Assurance des installations photovoltaïques industrielles",
      "Responsabilité Civile Atteinte à l'Environnement"
    ],
    "advantages": [
      "Tarif hautement compétitif négocié avec la direction des risques industriels AXA",
      "Audit technique préalable réalisé par des ingénieurs préventionnistes",
      "Gestion dédiée des dossiers d'indemnisation avec avance sur sinistre"
    ],
    "documentsRequired": [
      "Rapport de visite ou descriptif détaillé des installations industrielles",
      "Bilan comptable chiffrant les immobilisations et stocks",
      "Descriptif des moyens de protection incendie (sprinklers, extincteurs, RIA)"
    ],
    "faq": [
      {
        "question": "Comment est fixée la prime d'une multirisque industrielle ?",
        "answer": "La prime dépend de la nature des produits manufacturés, des capitaux déclarés (bâtiments, machines, stocks) et de la qualité des dispositifs de prévention incendie et sécurité en place sur le site."
      }
    ],
    "simulationType": "mrp"
  },
  {
    "id": "rc-pro",
    "slug": "responsabilite-civile-professionnelle",
    "category": "entreprise",
    "subcategory": "Sécurité Juridique",
    "title": "Responsabilité Civile Exploitation & Pro",
    "tagline": "Garantie des conséquences pécuniaires des dommages causés à des tiers dans le cadre de votre activité",
    "shortDescription": "L'assurance RC Exploitation garantit votre entreprise contre les conséquences pécuniaires de dommages causés à des tiers du fait de vos salariés, matériels, installations ou marchandises.",
    "fullDescription": "L'assurance Responsabilité Civile Exploitation a pour objet de vous garantir contre les conséquences pécuniaires de la responsabilité civile que vous pourriez encourir en raison des dommages corporels, matériels et immatériels causés à des tiers dans le cadre de l'exercice de votre activité. Sont notamment couverts les dommages résultant du fait : de l'assuré lui-même, de ses employés, préposés, salariés, apprentis ou stagiaires, du mobilier, matériel, outillage, installation et marchandises de l'entreprise, ou des animaux. Notre offre inclut également la Responsabilité Civile Professionnelle pour les fautes, erreurs, omissions ou manquements dans la délivrance de prestations intellectuelles ou techniques, ainsi que la prise en charge des frais de justice et d'expertise.",
    "iconName": "ShieldCheck",
    "badge": "Bouclier Juridique Entreprise",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Couverture des préjudices corporels, matériels et immatériels causés aux tiers",
    "formules": [
      {
        "id": "rc-exploitation",
        "name": "RC Exploitation Générale",
        "tagline": "Pour commerces, prestataires, PME et structures de services",
        "priceNote": "Calculée selon le chiffre d'affaires annuel",
        "isPopular": true,
        "features": [
          "Dommages corporels causés à des clients dans vos locaux",
          "Dommages matériels survenus pendant des interventions chez des tiers",
          "Faits imputables à vos employés, stagiaires et préposés",
          "Dommages causés par vos équipements, outillages et machines",
          "Frais de défense pénale et recours civil"
        ]
      },
      {
        "id": "rc-professions-liberales",
        "name": "RC Professionnelle Spécialisée",
        "tagline": "Pour experts, consultants, professions de santé et prestataires IT",
        "priceNote": "Plafonds adaptés aux risques immatériels",
        "isPopular": false,
        "features": [
          "Erreurs de conception, fautes de conseil et omissions",
          "Retard dans la livraison de prestations intellectuelles",
          "Pertes financières pures subies par le client",
          "Divulgation involontaire de données confidentielles",
          "Prise en charge des frais d'expertise amiable ou judiciaire"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Dommages Corporels Causés aux Tiers",
        "description": "Prise en charge intégrale des indemnités dues à une victime blessée dans vos locaux ou par suite de vos opérations commerciales.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 10 000 000 DH"
      },
      {
        "title": "Dommages Matériels & Immatériels Consécutifs",
        "description": "Remboursement des détériorations causées aux biens confiés ou aux installations de vos clients lors de vos travaux ou livraisons.",
        "isIncluded": true,
        "coverageLimit": "Selon barème choisi"
      },
      {
        "title": "Défense Pénale & Recours",
        "description": "Prise en charge complète des frais d'avocats, d'experts judiciaires et des dépens devant toutes les juridictions marocaines.",
        "isIncluded": true,
        "coverageLimit": "Frais réels"
      },
      {
        "title": "Faute Inexcusable de l'Employeur",
        "description": "Garantie spécifique protégeant les dirigeants en cas de recours d'un salarié victime d'un accident du travail pour faute de sécurité.",
        "isIncluded": true,
        "coverageLimit": "Contractuelle"
      }
    ],
    "options": [
      "Garantie Responsabilité Civile Après Livraison / Produits Défectueux",
      "Couverture pollution accidentelle et soudaine",
      "Responsabilité civile des mandataires sociaux (RCMS)"
    ],
    "advantages": [
      "Protection indispensable pour préserver la trésorerie de votre entreprise",
      "Attestation de Responsabilité Civile délivrée pour répondre aux appels d'offres",
      "Défense assurée par le réseau d'avocats experts AXA Assurance Maroc",
      "Tarification personnalisée selon votre secteur d'activité"
    ],
    "documentsRequired": [
      "Copie du Registre de Commerce et statuts",
      "Chiffre d'affaires annuel réalisé (ou prévisionnel pour les créations)",
      "Descriptif détaillé des prestations et activités exercées"
    ],
    "faq": [
      {
        "question": "Pourquoi souscrire une RC Exploitation si j'ai déjà une assurance de locaux ?",
        "answer": "L'assurance des locaux couvre vos murs et vos biens matériels. La RC Exploitation couvre quant à elle les dettes de responsabilité : si un client glisse dans vos locaux ou si un collaborateur détruit un équipement chez un client, les dommages réclamés peuvent se chiffrer en millions de dirhams."
      }
    ],
    "simulationType": "rcpro"
  },
  {
    "id": "trc-decennale",
    "slug": "tous-risques-chantier",
    "category": "entreprise",
    "subcategory": "Construction & BTP",
    "title": "Tous Risques Chantier (TRC) & Décennale",
    "tagline": "Couverture la plus complète des dommages pouvant affecter l'ouvrage en cours de construction",
    "shortDescription": "Maître d'ouvrage, entrepreneur, maître d'œuvre, sous-traitant et professionnel du bâtiment : TRC est une « Tous Risques » offrant la protection totale de l'ouvrage, la RC tiers et la RC croisée.",
    "fullDescription": "Maître d'ouvrage, entrepreneur, maître d'œuvre, sous-traitant et professionnel du bâtiment, l'assurance Tous Risques Chantier (TRC) répond précisément à vos impératifs sur les chantiers. TRC est une formule « Tous Risques » qui vous offre la couverture la plus complète des dommages pouvant affecter l'ouvrage : dommages causés par un incendie, une explosion, un vol de matériaux, un dégât des eaux, un accident, une erreur de montage ou des événements naturels (tempête, inondation, séisme). Elle inclut la Responsabilité Civile vis-à-vis des tiers, la Responsabilité Civile Croisée entre les différents intervenants du chantier, et la garantie de maintenance (visite, constructeur). Nous vous accompagnons également dans la souscription de votre Responsabilité Civile Décennale obligatoire.",
    "iconName": "HardHat",
    "badge": "Standard de Référence BTP",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Couverture ouvrage, Responsabilité Civile Tiers & RC Croisée inter-entreprises",
    "formules": [
      {
        "id": "trc-complete",
        "name": "Pack TRC Intégral Chantier",
        "tagline": "De l'ouverture des fouilles jusqu'à la réception des travaux",
        "priceNote": "Calculé sur le coût total de la construction",
        "isPopular": true,
        "features": [
          "Dommages matériels à l'ouvrage (gros œuvre, second œuvre, équipements)",
          "Événements naturels (tempête, inondation, affaissement de terrain)",
          "Vol avec effraction de matériaux et équipements intégrés",
          "Responsabilité Civile Tiers pour désordres causés aux avoisinants",
          "Responsabilité Civile Croisée entre les entreprises du chantier",
          "Période de maintenance de 12 à 24 mois après réception"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Dommages Matériels à l'Ouvrage",
        "description": "Couvre l'effondrement partiel ou total, les fissures majeures, l'incendie, les dégâts des eaux et les erreurs humaines survenant pendant les travaux.",
        "isIncluded": true,
        "coverageLimit": "Valeur totale du marché"
      },
      {
        "title": "Responsabilité Civile Tiers & Dommages aux Avoisinants",
        "description": "Indemnisation des fissures, tassements ou dégradations causés aux immeubles riverains et voiries du fait des travaux de terrassement ou fondations.",
        "isIncluded": true,
        "coverageLimit": "Jusqu'à 20 000 000 DH"
      },
      {
        "title": "Responsabilité Civile Croisée",
        "description": "Garantit les dommages corporels ou matériels que les différents corps de métier intervenant sur le chantier peuvent se causer mutuellement.",
        "isIncluded": true,
        "coverageLimit": "Inclus"
      },
      {
        "title": "Garantie de Maintenance Post-Réception",
        "description": "Couvre les réparations nécessaires pendant la période de garantie de parfait achèvement (maintenance visite et maintenance étendue constructeur).",
        "isIncluded": true,
        "coverageLimit": "12 à 24 mois"
      }
    ],
    "options": [
      "Garantie des engins et matériels de chantier (grues, pelles, échafaudages)",
      "Prise en charge des honoraires d'experts et architectes",
      "Assurance RC Décennale obligatoire pour la solidité de l'ouvrage"
    ],
    "advantages": [
      "Exigée par tous les maîtres d'ouvrages publics et privés pour valider les ordres de service",
      "Évite les litiges entre corps d'état grâce à la RC croisée intégrée",
      "Souscription rapide avec délivrance immédiate de l'attestation officielle",
      "Expertise technique BTP par les équipes spécialisées AXA à Casablanca"
    ],
    "documentsRequired": [
      "Cahier des Clauses Administratives et Techniques Particulières (CCAP/CCTP)",
      "Devis estimatif chiffré des travaux et planning prévisionnel",
      "Rapport d'étude de sol géotechnique et plans de masse"
    ],
    "faq": [
      {
        "question": "Qui doit souscrire la police TRC ?",
        "answer": "La police peut être souscrite par le maître d'ouvrage pour le compte de tous les intervenants (solution recommandée pour éviter les doublons), ou par l'entreprise générale titulaire du marché principal."
      }
    ],
    "simulationType": "standard"
  },
  {
    "id": "transport-marchandises",
    "slug": "marchandises-transportees",
    "category": "entreprise",
    "subcategory": "Logistique & Transit",
    "title": "Marchandises Transportées (Facultés & Cargo)",
    "tagline": "Couverture adéquate lors du transport routier, maritime, aérien ou ferroviaire de vos biens",
    "shortDescription": "L'assurance Marchandises Transportées offre la couverture adéquate lors du transit de vos marchandises : accidents caractérisés, événements majeurs, vol avec agression et avaries communes.",
    "fullDescription": "L'assurance Marchandises Transportées est un contrat qui offre la couverture adéquate lors du transport de vos marchandises, que vous soyez importateur, exportateur, distributeur ou logisticien. Elle garantit vos expéditions contre les accidents caractérisés (accident de circulation, collision, incendie, explosion, écroulement d'ouvrages d'art), les événements majeurs (éboulements, foudre, inondations, débordement de fleuves ou rivières), le vol de marchandises consécutif à un accident ou commis par agression à main armée / effraction sur véhicules entièrement fermés, ainsi que la contribution aux avaries communes lors des trajets maritimes portuaires.",
    "iconName": "Truck",
    "badge": "Protection Cargo & Transit",
    "startingPrice": "Sur devis personnalisé",
    "period": "selon vos besoins",
    "heroHighlight": "Couverture accidents de la route, vol avec effraction & avaries maritimes",
    "formules": [
      {
        "id": "cargo-abonnement",
        "name": "Police d'Abonnement Flottante",
        "tagline": "Pour importateurs, distributeurs et flux réguliers",
        "priceNote": "Alimentée par déclarations périodiques d'expéditions",
        "isPopular": true,
        "features": [
          "Tous vos flux de marchandises couverts automatiquement toute l'année",
          "Accidents caractérisés, collision, renversement et incendie",
          "Vol avec agression à main armée ou effraction sur véhicule bâché/fermé",
          "Couverture des transports portuaires (Casablanca, Tanger Med) et aéroportuaires",
          "Régularisation simplifiée sur chiffre d'affaires ou déclarations"
        ]
      },
      {
        "id": "cargo-voyage",
        "name": "Police au Voyage Spécifique",
        "tagline": "Pour expéditions ponctuelles ou cargaisons de haute valeur",
        "priceNote": "Tarif calculé sur la valeur facture de l'envoi",
        "isPopular": false,
        "features": [
          "Couverture spécifique sur un trajet porte-à-porte défini",
          "Tous Risques Facultés (All Risks)",
          "Opérations de chargement, déchargement et transbordement",
          "Contribution aux avaries communes en fret maritime",
          "Attestation d'assurance délivrée pour les banques (crédit documentaire L/C)"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Accidents Caractérisés de Circulation",
        "description": "Indemnisation de la valeur réelle des marchandises endommagées ou détruites lors de collisions, tonneaux, incendies ou accidents routiers.",
        "isIncluded": true,
        "coverageLimit": "Valeur facture HT"
      },
      {
        "title": "Vol par Effraction ou Agression",
        "description": "Couvre le vol de la marchandise transportée commis suite à accident caractérisé, ou par agression armée ou effraction sur véhicule fermé.",
        "isIncluded": true,
        "coverageLimit": "Selon valeur déclarée"
      },
      {
        "title": "Catastrophes Naturelles & Événements Majeurs",
        "description": "Prise en charge des avaries consécutives à des inondations, tempêtes, éboulements rocheux ou foudre pendant le transit.",
        "isIncluded": true,
        "coverageLimit": "Frais réels"
      },
      {
        "title": "Contribution aux Avaries Communes (Maritime)",
        "description": "Remboursement des frais réclamés à l'armateur en cas de sacrifice de cargaison pour sauver le navire.",
        "isIncluded": true,
        "coverageLimit": "100% contribution légale"
      }
    ],
    "options": [
      "Garantie chaîne du froid pour denrées périssables en transit",
      "Assurance des conteneurs maritimes et emballages consignés",
      "Extension séjour temporaire en entrepôt d'attente"
    ],
    "advantages": [
      "Certificat d'assurance conforme aux exigences des crédits documentaires (Credoc)",
      "Expertise maritime et routière immédiate au Port de Casablanca et à Tanger Med",
      "Remboursement accéléré pour préserver votre fonds de roulement",
      "Tarifs négociés au plus juste selon la nature des marchandises"
    ],
    "documentsRequired": [
      "Facture commerciale d'achat des marchandises (valeur déclarée)",
      "Lettre de voiture (CMR), connaissement maritime (B/L) ou LTA aérienne",
      "Itinéraire prévu et mode de transport retenu"
    ],
    "faq": [
      {
        "question": "La responsabilité du transporteur routier ne suffit-elle pas ?",
        "answer": "Non, les transporteurs bénéficient légalement de limitations de responsabilité très basses (au kilo) et de nombreuses causes d'exonération (force majeure, accident non responsable). Seule une assurance Marchandises Transportées vous indemnise sur la valeur réelle."
      }
    ],
    "simulationType": "standard"
  },
  {
    "id": "domaines-activite",
    "slug": "solutions-domaines-activite",
    "category": "entreprise",
    "subcategory": "Packs Métiers",
    "title": "Solutions par Domaine d'Activité",
    "tagline": "Packs sur-mesure pour Artisans, Commerçants, Professionnels de Santé, Hôtels & Cafés",
    "shortDescription": "Des solutions d'assurance tout-en-un packagées spécifiquement pour chaque corps de métier : Artisans & Commerçants, Professionnels de Santé, Cafés, Hôtels & Restaurants, et Professions Libérales.",
    "fullDescription": "Chaque métier a ses réalités et ses risques spécifiques. C'est pourquoi notre agence propose des contrats packagés dédiés : « Artisans et Commerçants » (couvrant magasins, ateliers, stocks, vitrines et responsabilité civile commerçant), « Professionnels de Santé » pour médecins, dentistes, cliniques et laboratoires (intégrant la RC médicale et le bris de matériel médical de pointe), « Cafés, Hôtels, Restaurants » (avec garanties intoxication alimentaire, terrasses, marchandises en frigo et bris de vaisselle), et « Professions Libérales » pour avocats, notaires, comptables et consultants.",
    "iconName": "Briefcase",
    "badge": "Packs Métiers Tout-en-Un",
    "startingPrice": "Sur devis personnalisé",
    "period": "contrat annuel",
    "heroHighlight": "Garanties adaptées aux spécificités de chaque corporation professionnelle",
    "formules": [
      {
        "id": "domaine-commerce",
        "name": "Pack Artisans & Commerçants",
        "tagline": "Pour boutiques, grossistes, ateliers et commerces de détail",
        "priceNote": "Couverture complète clé en main",
        "isPopular": true,
        "features": [
          "Vitrines, enseignes lumineuses et devantures de magasin",
          "Stocks de marchandises et tiroir-caisse",
          "RC Exploitation vis-à-vis des clients et fournisseurs",
          "Dégâts des eaux et vol avec effraction",
          "Perte d'exploitation pour maintenir vos revenus"
        ]
      },
      {
        "id": "domaine-sante",
        "name": "Pack Professionnels de Santé",
        "tagline": "Pour médecins, dentistes, opticiens, kinés et cliniques",
        "priceNote": "Protection civile et matérielle sur-mesure",
        "isPopular": false,
        "features": [
          "Responsabilité Civile Professionnelle Médicale et Paramédicale",
          "Bris de machines et matériel de radiologie / fauteuils / automates",
          "Perte de réactifs et vaccins sous température dirigée",
          "Défense et protection juridique ordinale",
          "Couverture des locaux de consultation"
        ]
      },
      {
        "id": "domaine-chr",
        "name": "Pack Cafés, Hôtels & Restaurants",
        "tagline": "Pour restaurants, cafés, salons de thé et snacks",
        "priceNote": "Sécurité totale de l'accueil de votre clientèle",
        "isPopular": false,
        "features": [
          "Garantie intoxication alimentaire des clients",
          "Détérioration des denrées périssables en chambre froide",
          "Bris de vaisselle, miroiterie et mobilier de terrasse",
          "Incendie en cuisine (friteuses, fours, hottes)",
          "RC Exploitation hôtelière et restauration"
        ]
      }
    ],
    "keyGuarantees": [
      {
        "title": "Protection des Locaux & Outils de Travail",
        "description": "Sécurise votre lieu d'exercice professionnel et tous vos équipements spécifiques contre les risques majeurs.",
        "isIncluded": true,
        "coverageLimit": "Valeur à neuf déclarée"
      },
      {
        "title": "Responsabilité Civile Spécifique Métier",
        "description": "Couvre les préjudices liés directement aux prestations et actes délivrés à vos clients ou patients.",
        "isIncluded": true,
        "coverageLimit": "Adaptée à votre profession"
      },
      {
        "title": "Assistance Rapide Sinistre",
        "description": "Intervention d'urgence en moins de 2 heures pour vous permettre de rouvrir votre établissement sans délai.",
        "isIncluded": true,
        "coverageLimit": "24h/24"
      }
    ],
    "options": [
      "Assurance cyber-attaques pour la protection des fichiers clients et patients",
      "Prévoyance du chef d'entreprise (garantie homme clé)",
      "Couverture du matériel nomade (ordinateurs portables et tablettes)"
    ],
    "advantages": [
      "Un seul contrat clair réunissant toutes vos obligations professionnelles",
      "Tarif préférentiel packagé beaucoup plus économique que des contrats séparés",
      "Conseiller de proximité dédié aux entreprises à Casablanca",
      "Interlocuteur unique pour tous vos renouvellements et sinistres"
    ],
    "documentsRequired": [
      "Registre de Commerce (ou autorisation d'exercer de l'Ordre pour les professions médicales)",
      "Superficie et caractéristiques des locaux professionnels",
      "Estimation globale des aménagements et des stocks"
    ],
    "faq": [
      {
        "question": "Comment choisir entre une MRP classique et un Pack Domaine d'Activité ?",
        "answer": "Le Pack Domaine d'Activité intègre d'emblée des garanties spécifiques à votre corporation (ex: intoxication alimentaire pour un restaurateur, ou bris de matériel médical pour un médecin) sans avoir à payer des extensions superflues."
      }
    ],
    "simulationType": "rcpro"
  }
];
