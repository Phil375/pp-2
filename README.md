# Licence Économie & Gestion - UBO Brest

Page interactive pour valoriser les débouchés et les portraits d'anciens étudiants de la Licence Économie & Gestion de l'Université de Bretagne Occidentale.

## 📋 Contenu

La page comprend trois sections principales :

### 1. **Accueil**
- Présentation courte de la licence
- Phrases d'accroche pour donner envie
- Deux boutons d'appel à l'action vers les débouchés et les portraits

### 2. **Débouchés Master**
- 6 débouchés avec icônes et descriptions
- Cartes interactives avec effet au survol
- Animations au scroll

### 3. **Portraits d'Anciens Étudiants**
- 7 portraits (modifiables)
- Témoignages inspirants
- Design élégant avec espace pour les photos

## 🎨 Design

- **Police** : Poppins (Google Fonts)
- **Couleurs** : 
  - Noir (#000000)
  - Blanc (#ffffff)
  - Rose/Magenta (#de416d) - couleur principale
  - Gris clair (#f5f5f5)
- **Responsive** : Adapté pour mobile, tablette et desktop

## 🚀 Comment utiliser

### Navigation basique
1. Ouvrir `index.html` dans un navigateur
2. Les liens du menu navigent automatiquement vers les sections
3. Smooth scroll activé à chaque clic

### Modifier les données

#### **Débouchés** (remplacer les icônes et textes)

Dans `index.html`, section "DÉBOUCHÉS", modifier chaque `.debuche-card` :
```html
<div class="debuche-card">
    <div class="card-icon">ICONE_EMOJI</div>
    <h3>Titre du poste</h3>
    <p>Description du débouché</p>
</div>
```

#### **Portraits** (ajouter les vrais étudiants)

Dans `index.html`, section "PORTRAITS", modifier chaque `.portrait-card` :
```html
<div class="portrait-card">
    <div class="portrait-image" style="background-color: #de416d;">
        <!-- Remplacer par une vraie image -->
        <img src="chemin/vers/photo.jpg" alt="Nom de la personne">
    </div>
    <div class="portrait-content">
        <h3>Nom Prénom</h3>
        <p class="promo">Promotion 20XX</p>
        <p class="poste">Titre du poste / Entreprise</p>
        <p class="testimonial">"La citation inspirante"</p>
    </div>
</div>
```

Pour associer un PDF à chaque portrait :

- Créez un dossier `pdfs/` à la racine du projet.
- Nommez vos fichiers `portrait1.pdf`, `portrait2.pdf`, etc. (correspondant à l'ordre des cartes) ou mettez à jour les liens dans `index.html`.
- Les liens s'ouvrent dans un nouvel onglet quand on clique sur la carte.

Exemple : placez `pdfs/portrait1.pdf` pour la première carte.

## 📝 Fichiers

- `index.html` - Structure HTML
- `styles.css` - Styles et responsive design
- `script.js` - Interactivité (animations, navigation active, etc.)

## ✨ Fonctionnalités

✅ Navigation sticky avec mise en évidence active
✅ Smooth scroll automatique
✅ Animations au survol des cartes
✅ Effet d'apparition au scroll
✅ Responsive design (mobile-first)
✅ Transitions fluides
✅ Code couleur cohérent

## 🔧 Customisation

Tous les styles peuvent être modifiés dans `styles.css` via les variables CSS en haut du fichier.

Prêt à accueillir les données réelles ! 🎓