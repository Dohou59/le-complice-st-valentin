DESIGN SYSTEM COMPLET - LANDING PAGE SAINT-VALENTIN
📐 SPÉCIFICATIONS GÉNÉRALES
Format & Dimensions
Desktop : 1440px largeur (max-width)

Tablet : 768px - 1023px

Mobile : 320px - 767px

Conteneur : max-width 1200px centré

Grid System
text
Desktop : 12 colonnes, gap 24px
Tablet : 8 colonnes, gap 16px
Mobile : 4 colonnes, gap 12px
🎨 PALETTE DE COULEURS (OBLIGATOIRE)
css
/* Primaires */
--rouge-vif: #FF0000
--rouge-passion: #DC143C

/* Secondaires */
--rose-valentine: #FF1493
--rose-romantique: #FF69B4

/* Neutres */
--blanc-pur: #FFFFFF
--blanc-casse: #F5F5F5

/* Texte */
--texte-principal: #1A1A1A
--texte-secondaire: #666666
📱 SECTION PAR SECTION - DESIGN DÉTAILLÉ
1️⃣ HEADER (Sticky - 80px height)
text
╔════════════════════════════════════════════════╗
║                                                ║
║  [LOGO] LoveForever        [BTN] Offrir ❤️    ║
║                                                ║
╚════════════════════════════════════════════════╝
Spécifications
Background : #FFFFFF avec box-shadow: 0 2px 8px rgba(220, 20, 60, 0.1)

Height : 80px

Padding horizontal : 48px (desktop), 24px (mobile)

Position : fixed top-0 z-50

Backdrop-blur : 8px quand scroll > 50px

Logo :

Font : Playfair Display, Bold

Size : 28px

Color : #DC143C

Position : left

CTA Button :

Background : linear-gradient(135deg, #DC143C, #FF0000)

Color : #FFFFFF

Padding : 12px 32px

Border-radius : 50px

Font-size : 16px, font-weight 600

Box-shadow : 0 4px 12px rgba(220, 20, 60, 0.3)

Hover : transform: translateY(-2px), shadow plus intense

2️⃣ HERO SECTION (100vh fullscreen)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║  ┌─────────────────────┐    ┌──────────────────┐     ║
║  │                     │    │                  │     ║
║  │  [TITRE H1]         │    │                  │     ║
║  │  Grande headline    │    │   [IMAGE]        │     ║
║  │  émotionnelle       │    │   Peluche        │     ║
║  │                     │    │   Mimi           │     ║
║  │  [SOUS-TITRE H2]    │    │                  │     ║
║  │  Valeur proposition │    │                  │     ║
║  │                     │    │                  │     ║
║  │  [CTA BUTTON]       │    │                  │     ║
║  │  Offrir maintenant  │    │                  │     ║
║  │                     │    │                  │     ║
║  │  [Micro-texte]      │    │   ❤️ ❤️ ❤️      │     ║
║  │  ✨ Édition limitée │    │   (flottants)    │     ║
║  │                     │    │                  │     ║
║  └─────────────────────┘    └──────────────────┘     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background :

css
background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%);
/* Ou avec overlay image pattern */
background-image: 
  linear-gradient(135deg, rgba(255, 105, 180, 0.95), rgba(255, 20, 147, 0.95)),
  url('pattern-hearts.svg');
Layout Desktop :

Grid 2 colonnes : 50% / 50%

Gap : 64px

Padding : 120px 48px

Colonne Gauche (Texte) :

H1 :

css
font-family: 'Playfair Display', serif;
font-size: 56px (desktop), 36px (mobile);
font-weight: 700;
line-height: 1.2;
color: #FFFFFF;
margin-bottom: 24px;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
Texte : "Elle ne veut pas de chocolat qui fond en 3 jours... Elle veut un cadeau qui reste pour toujours 💕"

H2 :

css
font-family: 'Inter', sans-serif;
font-size: 24px (desktop), 18px (mobile);
font-weight: 400;
color: #FFFFFF;
opacity: 0.95;
margin-bottom: 40px;
Texte : "Offrez-lui Mimi, la peluche exclusive qui dira 'Je t'aime' chaque jour"

CTA Button :

css
background: #FF0000;
color: #FFFFFF;
padding: 20px 48px;
border-radius: 50px;
font-size: 18px;
font-weight: 600;
box-shadow: 0 8px 24px rgba(255, 0, 0, 0.4);
cursor: pointer;
transition: all 0.3s ease;

/* Hover */
transform: translateY(-4px) scale(1.05);
box-shadow: 0 12px 32px rgba(255, 0, 0, 0.5);
Micro-texte :

css
font-size: 14px;
color: #FFFFFF;
opacity: 0.9;
margin-top: 16px;
Texte : "✨ Édition limitée - Livraison offerte avant le 14 février"

Colonne Droite (Image) :

Container :

css
position: relative;
display: flex;
align-items: center;
justify-content: center;
Image peluche :

css
width: 500px (desktop), 300px (mobile);
height: auto;
filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
animation: float 3s ease-in-out infinite;
Cœurs flottants :

css
position: absolute;
width: 30px;
height: 30px;
opacity: 0.3;
animation: float-hearts 4s ease-in-out infinite;
/* Placer 10-15 cœurs à différentes positions */
3️⃣ POURQUOI SECTION (Padding 100px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║          [TITRE H2 CENTRÉ]                            ║
║     "Pourquoi Mimi sera le cadeau dont..."            ║
║                                                        ║
║  ┌───────────┐    ┌───────────┐    ┌───────────┐    ║
║  │   ❤️      │    │    ✨     │    │    🎁     │    ║
║  │           │    │           │    │           │    ║
║  │  Titre 1  │    │  Titre 2  │    │  Titre 3  │    ║
║  │           │    │           │    │           │    ║
║  │  Texte    │    │  Texte    │    │  Texte    │    ║
║  │  expl...  │    │  expl...  │    │  expl...  │    ║
║  │           │    │           │    │           │    ║
║  └───────────┘    └───────────┘    └───────────┘    ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background : #FFFFFF

Titre Section :

css
font-family: 'Playfair Display', serif;
font-size: 42px (desktop), 32px (mobile);
font-weight: 700;
color: #DC143C;
text-align: center;
margin-bottom: 64px;
Layout Cards :

Grid 3 colonnes égales (desktop)

Gap : 32px

Stack vertical (mobile)

Card Design :

css
background: #FFFFFF;
border: 2px solid #FF69B4;
border-radius: 16px;
padding: 40px 32px;
text-align: center;
box-shadow: 0 4px 16px rgba(255, 20, 147, 0.1);
transition: all 0.3s ease;

/* Hover */
transform: translateY(-8px);
box-shadow: 0 12px 32px rgba(255, 20, 147, 0.2);
border-color: #FF1493;
Icône :

css
font-size: 64px;
margin-bottom: 24px;
Titre Card :

css
font-family: 'Inter', sans-serif;
font-size: 22px;
font-weight: 600;
color: #DC143C;
margin-bottom: 16px;
Texte Card :

css
font-size: 16px;
line-height: 1.6;
color: #666666;
4️⃣ PRÉSENTATION PELUCHE (Padding 120px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║  ┌──────────────────┐    ┌──────────────────────┐    ║
║  │                  │    │                      │    ║
║  │  [IMAGE 1]       │    │  [TITRE H2]          │    ║
║  │  Grande photo    │    │  "Découvrez Mimi..." │    ║
║  │                  │    │                      │    ║
║  ├──────┬───────────┤    │  [Description]       │    ║
║  │ IMG2 │   IMG3    │    │  Texte poétique      │    ║
║  ├──────┼───────────┤    │                      │    ║
║  │ IMG4 │   IMG5    │    │  Caractéristiques:   │    ║
║  └──────┴───────────┘    │  ✓ Matière...        │    ║
║                          │  ✓ Dimensions...     │    ║
║                          │  ✓ Poids...          │    ║
║                          │                      │    ║
║                          │  [🌟][♻️][❤️][🇫🇷]  │    ║
║                          │  Badges qualité      │    ║
║                          └──────────────────────┘    ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background :

css
background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
Layout :

Grid 2 colonnes : 45% / 55%

Gap : 64px

Galerie Images (Gauche) :

Image principale :

css
width: 100%;
aspect-ratio: 1/1;
border-radius: 16px;
overflow: hidden;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
margin-bottom: 16px;
Thumbnails (Grid 2x2) :

css
width: 100%;
aspect-ratio: 1/1;
border-radius: 8px;
border: 2px solid transparent;
cursor: pointer;
transition: all 0.3s;

/* Hover */
border-color: #FF1493;
transform: scale(1.05);
Colonne Droite (Contenu) :

Titre :

css
font-family: 'Playfair Display', serif;
font-size: 38px;
font-weight: 700;
color: #DC143C;
margin-bottom: 24px;
Description :

css
font-size: 18px;
line-height: 1.7;
color: #666666;
margin-bottom: 32px;
font-style: italic;
Liste Caractéristiques :

css
/* Item */
display: flex;
align-items: center;
margin-bottom: 16px;

/* Icône check */
color: #FF1493;
font-size: 20px;
margin-right: 12px;

/* Texte */
font-size: 16px;
color: #1A1A1A;
Badges Qualité (Grid 2x2) :

css
/* Container */
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
margin-top: 32px;

/* Badge */
background: #FFF;
border: 1px solid #FF69B4;
border-radius: 12px;
padding: 16px;
text-align: center;
font-size: 14px;
font-weight: 500;
color: #DC143C;
5️⃣ BÉNÉFICES ÉMOTIONNELS (Padding 100px vertical)
text
╔════════════════════════════════════════════════════════╗
║          [TITRE CENTRÉ]                               ║
║                                                        ║
║  ┌────────────┐  ┌──────────────────────────────┐    ║
║  │            │  │  🌙 Titre bénéfice 1         │    ║
║  │  [IMAGE]   │  │  Description émotionnelle    │    ║
║  │            │  │  sur 2-3 lignes...           │    ║
║  └────────────┘  └──────────────────────────────┘    ║
║                                                        ║
║  ┌──────────────────────────────┐  ┌────────────┐    ║
║  │  💪 Titre bénéfice 2         │  │            │    ║
║  │  Description émotionnelle    │  │  [IMAGE]   │    ║
║  │  sur 2-3 lignes...           │  │            │    ║
║  └──────────────────────────────┘  └────────────┘    ║
║                                                        ║
║  [... 4 autres bénéfices en alternance ...]          ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background :

css
background: rgba(255, 105, 180, 0.05);
Layout :

Alternance gauche/droite (zigzag)

Chaque bloc : Grid 2 colonnes 40% / 60%

Margin-bottom : 80px entre blocs

Bloc Bénéfice :

css
display: flex;
align-items: center;
gap: 48px;
Icône :

css
font-size: 48px;
margin-bottom: 16px;
Titre :

css
font-family: 'Inter', sans-serif;
font-size: 28px;
font-weight: 600;
color: #DC143C;
margin-bottom: 16px;
Description :

css
font-size: 17px;
line-height: 1.7;
color: #666666;
Image illustrative :

css
width: 100%;
aspect-ratio: 16/9;
border-radius: 16px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
6️⃣ PRIX ET OFFRE (Padding 100px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║              [TITRE SECTION]                          ║
║                                                        ║
║        ┌────────────────────────────────┐             ║
║        │                                │             ║
║        │  L'OFFRE SAINT-VALENTIN 2026  │             ║
║        │                                │             ║
║        │  [29,99 €]  ← barré           │             ║
║        │  24,99 €    ← GROS            │             ║
║        │  Vous économisez 5€            │             ║
║        │                                │             ║
║        │  ✅ Mimi la peluche           │             ║
║        │  ✅ Livraison offerte         │             ║
║        │  ✅ Emballage cadeau          │             ║
║        │  ✅ Carte message             │             ║
║        │  ✅ Garantie 30 jours         │             ║
║        │                                │             ║
║        │  [⏰ BADGE URGENCE]           │             ║
║        │  Plus que 47 exemplaires      │             ║
║        │                                │             ║
║        │  [GROS CTA BUTTON]            │             ║
║        │  Oui, je veux offrir Mimi 💕  │             ║
║        │                                │             ║
║        │  🔒 Paiement sécurisé         │             ║
║        │                                │             ║
║        └────────────────────────────────┘             ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background : #FFFFFF

Prix Box :

css
max-width: 600px;
margin: 0 auto;
background: #FFFFFF;
border: 4px solid #FF1493;
border-radius: 24px;
padding: 48px 40px;
box-shadow: 0 16px 48px rgba(255, 20, 147, 0.2);
text-align: center;
Titre Box :

css
font-size: 24px;
font-weight: 700;
color: #DC143C;
margin-bottom: 32px;
text-transform: uppercase;
letter-spacing: 1px;
Prix Barré :

css
font-size: 24px;
color: #999999;
text-decoration: line-through;
margin-bottom: 8px;
Prix Actuel :

css
font-size: 64px;
font-weight: 900;
color: #FF0000;
margin-bottom: 16px;
line-height: 1;
Badge Économie :

css
display: inline-block;
background: #10B981;
color: #FFFFFF;
padding: 8px 20px;
border-radius: 50px;
font-size: 14px;
font-weight: 600;
margin-bottom: 32px;
Liste Inclusions :

css
text-align: left;
margin: 32px 0;

/* Item */
display: flex;
align-items: center;
margin-bottom: 12px;
font-size: 16px;
color: #1A1A1A;

/* Icône */
color: #10B981;
margin-right: 12px;
font-size: 20px;
Badge Urgence :

css
background: #F59E0B;
color: #FFFFFF;
padding: 16px 24px;
border-radius: 12px;
font-size: 16px;
font-weight: 600;
margin: 24px 0;
animation: pulse 2s infinite;
CTA Button :

css
width: 100%;
background: linear-gradient(135deg, #FF0000, #DC143C);
color: #FFFFFF;
padding: 24px 48px;
border-radius: 50px;
font-size: 20px;
font-weight: 700;
box-shadow: 0 8px 24px rgba(255, 0, 0, 0.4);
cursor: pointer;
transition: all 0.3s;
margin: 32px 0 24px 0;

/* Hover */
transform: scale(1.05);
box-shadow: 0 12px 32px rgba(255, 0, 0, 0.5);
7️⃣ RÉASSURANCE (Padding 80px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐  ║
║  │  🚚    │   │  🔒    │   │  ↩️    │   │  💬    │  ║
║  │        │   │        │   │        │   │        │  ║
║  │Livraison│  │Paiement│  │ Retour │  │Support │  ║
║  │rapide  │   │sécurisé│  │14 jours│  │ 24/7   │  ║
║  │        │   │        │   │        │   │        │  ║
║  └────────┘   └────────┘   └────────┘   └────────┘  ║
║                                                        ║
║     [VISA] [MASTERCARD] [PAYPAL] [APPLE PAY]         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background : #F5F5F5

Layout : Grid 4 colonnes égales

Item Réassurance :

css
text-align: center;
padding: 24px 16px;

/* Icône */
font-size: 48px;
color: #DC143C;
margin-bottom: 16px;

/* Titre */
font-size: 16px;
font-weight: 600;
color: #1A1A1A;
margin-bottom: 8px;

/* Texte */
font-size: 14px;
color: #666666;
Logos Paiement :

css
display: flex;
justify-content: center;
gap: 24px;
margin-top: 32px;
filter: grayscale(100%);
opacity: 0.6;
transition: all 0.3s;

/* Hover */
filter: grayscale(0%);
opacity: 1;
8️⃣ AVIS CLIENTS (Padding 100px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║          [TITRE] "Elles ont adoré..."                 ║
║                                                        ║
║               ⭐⭐⭐⭐⭐ 4.9/5                         ║
║            "Basé sur 127 avis"                        ║
║                                                        ║
║  ┌────────────┐  ┌────────────┐  ┌────────────┐     ║
║  │ ⭐⭐⭐⭐⭐   │  │ ⭐⭐⭐⭐⭐   │  │ ⭐⭐⭐⭐⭐   │     ║
║  │            │  │            │  │            │     ║
║  │ "Texte     │  │ "Texte     │  │ "Texte     │     ║
║  │ témoignage"│  │ témoignage"│  │ témoignage"│     ║
║  │            │  │            │  │            │     ║
║  │ - Sarah M. │  │ - Thomas R.│  │ - Emma L.  │     ║
║  │ [Photo]    │  │ [Photo]    │  │ [Photo]    │     ║
║  │            │  │            │  │            │     ║
║  └────────────┘  └────────────┘  └────────────┘     ║
║                                                        ║
║  [3 autres avis en dessous...]                        ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background : #FFFFFF

Note Globale :

css
text-align: center;
margin-bottom: 64px;

/* Étoiles */
font-size: 48px;
color: #F59E0B;

/* Note */
font-size: 56px;
font-weight: 700;
color: #DC143C;
margin: 16px 0;

/* Sous-texte */
font-size: 16px;
color: #666666;
Layout Avis : Grid 3 colonnes (desktop), 1 colonne (mobile)

Card Avis :

css
background: #FFFFFF;
border: 1px solid #E5E5E5;
border-radius: 16px;
padding: 32px 24px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

/* Étoiles */
color: #F59E0B;
font-size: 20px;
margin-bottom: 16px;

/* Témoignage */
font-size: 15px;
line-height: 1.6;
color: #666666;
font-style: italic;
margin-bottom: 20px;

/* Nom */
font-weight: 600;
color: #1A1A1A;
font-size: 14px;
margin-bottom: 12px;

/* Photo */
width: 48px;
height: 48px;
border-radius: 50%;
border: 2px solid #FF69B4;
9️⃣ CTA FINAL (Padding 120px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║                                                        ║
║           [GRAND TITRE H2 BLANC]                      ║
║      "Prêt à lui faire le plus beau                   ║
║           des cadeaux ? 😊"                           ║
║                                                        ║
║        [Sous-titre blanc]                             ║
║     "Plus que 7 jours avant la                        ║
║         Saint-Valentin"                               ║
║                                                        ║
║          [COUNTDOWN optionnel]                        ║
║      ⏰ 14h 23min pour livraison                      ║
║                                                        ║
║        [CTA XXL BLANC SUR ROUGE]                      ║
║     Oui, je commande Mimi maintenant 🎁              ║
║                                                        ║
║      🔒 Paiement sécurisé                            ║
║      ✅ Garantie satisfait                           ║
║      💌 Carte message offerte                        ║
║      🚚 Livraison suivie                             ║
║                                                        ║
║   "2,847 personnes ont déjà offert                   ║
║          leur amour avec Mimi ❤️"                     ║
║                                                        ║
║                  ❤️ ❤️ ❤️                            ║
║              (cœurs flottants)                        ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background :

css
background: linear-gradient(135deg, #DC143C 0%, #FF1493 100%);
position: relative;
overflow: hidden;
Titre Principal :

css
font-family: 'Playfair Display', serif;
font-size: 52px (desktop), 36px (mobile);
font-weight: 700;
color: #FFFFFF;
text-align: center;
margin-bottom: 24px;
text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
Sous-titre :

css
font-size: 22px;
color: #FFFFFF;
opacity: 0.95;
text-align: center;
margin-bottom: 32px;
CTA XXL :

css
display: inline-block;
background: #FFFFFF;
color: #DC143C;
padding: 28px 64px;
border-radius: 50px;
font-size: 24px;
font-weight: 700;
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
cursor: pointer;
transition: all 0.3s;
margin: 32px 0;

/* Hover */
transform: scale(1.08);
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
animation: pulse 2s infinite;
Bullet Points :

css
display: flex;
justify-content: center;
gap: 32px;
flex-wrap: wrap;
margin: 32px 0;
font-size: 16px;
color: #FFFFFF;
Cœurs flottants :

css
position: absolute;
width: 40px;
height: 40px;
opacity: 0.2;
animation: float-up 6s ease-in-out infinite;
/* Scatter multiple hearts across section */
🔟 FOOTER (Padding 60px vertical)
text
╔════════════════════════════════════════════════════════╗
║                                                        ║
║  ┌────────────┐  ┌────────────┐  ┌────────────┐     ║
║  │[LOGO]      │  │ Liens      │  │ Contact    │     ║
║  │LoveForever │  │ - CGV      │  │ Email      │     ║
║  │            │  │ - Mentions │  │ Tel        │     ║
║  │Made with ❤️│  │ - FAQ      │  │ Instagram  │     ║
║  └────────────┘  └────────────┘  └────────────┘     ║
║                                                        ║
║  ────────────────────────────────────────────────    ║
║                                                        ║
║       © 2026 LoveForever. Fait avec amour ❤️         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
Spécifications
Background : #DC143C

Texte : #FFFFFF

Layout : Grid 4 colonnes (3 colonnes + newsletter optionnelle)

Liens :

css
color: #FFFFFF;
opacity: 0.9;
font-size: 14px;
text-decoration: none;
transition: opacity 0.3s;

/* Hover */
opacity: 1;
text-decoration: underline;
Copyright :

css
text-align: center;
border-top: 1px solid rgba(255, 255, 255, 0.2);
padding-top: 24px;
margin-top: 40px;
font-size: 14px;
opacity: 0.8;
🎨 ANIMATIONS CSS
css
/* Float animation (Hero image) */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Pulse animation (CTAs urgence) */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Float hearts */
@keyframes float-hearts {
  0% { 
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% { 
    transform: translateY(-100px) rotate(45deg);
    opacity: 0;
  }
}

/* Fade in up (sections) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
📱 RESPONSIVE RULES
Mobile (< 768px)
Stack toutes colonnes verticalement

Padding : 24px horizontal

Font sizes : -30% à -40%

Hero : 80vh au lieu de 100vh

Boutons : full width

Grid 3 colonnes → 1 colonne

Tablet (768px - 1023px)
Grid 3 colonnes → 2 colonnes

Padding : 32px horizontal

Font sizes : -20%

🎯 CHECKLIST DESIGN
✅ Couleurs strictes : Rouge/Rose/Blanc uniquement
✅ 8 sections présentes et dans l'ordre
✅ Responsive : Mobile, Tablet, Desktop
✅ CTA multiples bien visibles
✅ Hiérarchie visuelle claire
✅ Espacement cohérent (système 8pt)
✅ Éléments émotionnels : cœurs, gradient, texte romantique
✅ Preuve sociale : avis, note, compteur
✅ Urgence/rareté : stock limité, countdown
✅ Réassurance : badges, garanties, paiement sécurisé

