# 📄 AutoFact – Application de gestion de factures automatisée

**AutoFact** est une application web moderne permettant de **créer, gérer et exporter des factures** de manière simple, rapide et conforme à la législation. Développée avec **Next.js**, **React**, **Prisma** et **PostgreSQL**, elle garantit une expérience utilisateur fluide, une sécurité renforcée et une architecture modulaire.

---

## 🚀 Fonctionnalités principales

- 🧾 Création de factures avec plusieurs lignes dynamiques
- 📊 Calcul automatique des montants HT, TVA et TTC
- 📂 Sauvegarde sécurisée des données utilisateur
- 🔐 Authentification avec **Clerk** et protection des routes
- 📄 Export des factures en format **PDF** professionnel
- 📈 Suivi des statuts de factures (brouillon, payée, impayée…)
- 🔎 Interface intuitive, responsive et compatible mobile

---

## 🛠️ Technologies utilisées

| Frontend        | Backend             | Base de données | Authentification | Autres outils          |
|-----------------|---------------------|------------------|-------------------|-------------------------|
| Next.js (App Router) | Server Actions (Next.js) | PostgreSQL         | Clerk.dev         | Prisma, TailwindCSS, jsPDF |

---

## 📦 Installation locale (sans Docker)

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-utilisateur/autofact.git
cd autofact

2. Installer les dépendances
npm install

3. Configurer les variables d’environnement
Créer un fichier .env :
DATABASE_URL=postgresql://user:password@localhost:5432/autofact
CLERK_SECRET_KEY=ta-clé-clerk
CLERK_PUBLISHABLE_KEY=ta-clé-publique

4. Générer la base avec Prisma
npx prisma generate
npx prisma migrate dev --name init

5. Lancer l’application
npm run dev
Puis ouvrir dans le navigateur : http://localhost:3000

🐳 Exécution avec Docker (optionnel)
1. Créer un fichier .env
DATABASE_URL=postgres://user:password@db:5432/autofact
2. Lancer Docker
docker-compose up --build
🧪 Tests
✅ Tests unitaires (calculs des totaux, création de facture)

🔁 Tests d’intégration via Postman

🧪 Tests manuels sur l’interface utilisateur (desktop et mobile)

⚙️ CI/CD avec GitHub Actions

🔐 Sécurité
Authentification sécurisée via Clerk (JWT)

Middleware Next.js pour protéger les routes

Vérification de l’identité utilisateur pour chaque action

Validation stricte des champs côté client et serveur

Aucune injection SQL possible grâce à Prisma

Données sensibles non exposées ni stockées en clair

👨‍💻 Auteur
Développé par Christophe Hov, dans le cadre de la certification professionnelle
🎓 Titre Professionnel Concepteur Développeur d’Applications (CDA)
🏢 En entreprise chez Phenix Innovation

📜 Licence
Ce projet est mis à disposition pour un usage pédagogique et personnel.
Pour toute utilisation commerciale, merci de me contacter.

🔗 Liens utiles
Documentation Next.js

Prisma ORM

Clerk.dev (authentification)

Tailwind CSS