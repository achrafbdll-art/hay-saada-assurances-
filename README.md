# Assurances Hay Saada — Agent Général Agréé AXA Assurance Maroc

Site web officiel responsive (Mobile & PC 100% opérationnel) de l'agence **Assurances Hay Saada**, intermédiaire d'assurance agréé par l'ACAPS pour le compte d'AXA Assurance Maroc.

📍 **Adresse :** 271, Certificat Bloc 17, Hay Mohammadi, Casablanca, Maroc  
📞 **Téléphone Fixe :** 05 22 63 02 68  
📱 **Mobile & WhatsApp :** 06 61 18 04 22 (+212 6 61 18 04 22)  
✉️ **Email :** axasaada9@gmail.com  

---

## 🚀 Déploiement via GitHub & Vercel (100% Opérationnel)

Ce projet est configuré avec **Vite**, **React 19**, **Tailwind CSS**, et inclut un fichier `vercel.json` pré-configuré pour un déploiement direct sans aucune configuration manuelle supplémentaire.

### Étape 1 : Pousser le projet sur GitHub

Si le dépôt n'est pas encore initialisé localement :

```bash
# 1. Initialiser git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Premier commit
git commit -m "feat: site officiel Assurances Hay Saada - AXA Maroc (version mobile et PC 100% opérationnelle)"

# 4. Définir la branche principale
git branch -M main

# 5. Lier votre dépôt GitHub (remplacez par votre URL)
git remote add origin https://github.com/VOTRE_UTILISATEUR/assurances-hay-saada-axa.git

# 6. Pousser vers GitHub
git push -u origin main
```

---

### Étape 2 : Déployer sur Vercel

1. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte **GitHub**.
2. Cliquez sur **« Add New... »** puis **« Project »**.
3. Sélectionnez le dépôt GitHub **`assurances-hay-saada-axa`** et cliquez sur **« Import »**.
4. Vercel détecte automatiquement la configuration :
   - **Framework Preset :** `Vite`
   - **Root Directory :** `./`
   - **Build Command :** `npm run build`
   - **Output Directory :** `dist`
   - **Install Command :** `npm install`
5. Cliquez sur **« Deploy »**.
6. Votre site est instantanément en ligne avec HTTPS, CDN mondial ultra-rapide et certificat SSL automatique !

> ℹ️ **Routage SPA garanti :** Le fichier `vercel.json` redirige automatiquement toutes les routes vers `/index.html` pour éviter toute erreur 404 lors du rechargement de la page.

---

## 📱 Optimisations Version Mobile & PC (100%)

- **En-tête & Barre de navigation fluide :**
  - Mobile : Menu tiroir responsive complet, actions directes d'appel rapide, lien WhatsApp et réseaux sociaux (Facebook, LinkedIn, Instagram).
  - PC : Navigation étendue pleine largeur (`w-full`), alignement des liens, réseaux sociaux et bouton *Devis Gratuit* calés à droite.
- **Rubriques & Garanties AXA :**
  - **Assistance 24h/24 :** Dépannage 0 km et remorquage express en cas de panne ou d'accident.
  - **Règlement Rapide :** Prise en charge simplifiée et remboursement accéléré des sinistres.
  - **Conseil de Proximité :** Une agence dédiée à Casablanca animée par des conseillers qualifiés.
  - **Garantie AXA Maroc :** La puissance d'un groupe leader au service de vos intérêts quotidiens.
- **Gammes Particuliers & Entreprises :**
  - Particuliers : Auto & Moto, Multirisque Habitation (MRH), Complémentaire Santé & Famille, Épargne & Retraite, Assurance Voyage.
  - Entreprises : Responsabilité Civile Professionnelle (RC Pro), Multirisque Professionnelle (MRP), Flotte Automobile, Santé Collective, Accidents du Travail (Loi 18-12).
- **Formulaire interactif de devis :**
  - Modal responsive de demande de devis instantanée avec sélection de solution et intégration WhatsApp.
- **Géolocalisation & Contact :**
  - Intégration Google Maps interactive pour situer l'agence à Hay Mohammadi, Casablanca.

---

## 🛠️ Commandes Locales

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local (port 3000)
npm run dev

# Tester la compilation de production
npm run build

# Prévisualiser le build
npm run preview

# Vérification TypeScript
npm run lint
```

---

© 2026 Assurances Hay Saada — Intermédiaire Agréé AXA Assurance Maroc. Conforme ACAPS.
