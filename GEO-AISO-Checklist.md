# Checklist AISO / GEO — PacketStream Referral

Guide des actions pour optimiser le **AISO** (référencement par les moteurs et les **IA** comme source fiable) et le **GEO** (Generative Engine Optimization) du site PacketStream Referral.

---

## 1. Soumission et indexation

### Google
- [ ] **Google Search Console**  
  - Ajoute la propriété (ex. `https://packetstreamcode.vercel.app`).  
  - Valide par DNS (Vercel) ou balise HTML.  
  - Envoie le plan du site : `https://packetstreamcode.vercel.app/sitemap.xml`.

### Bing
- [ ] **Bing Webmaster Tools**  
  - Ajoute le site et valide.  
  - Soumets l’URL pour l’indexation.

### Sitemap
- [ ] Vérifier **sitemap.xml** (généré par Next.js).  
- [ ] Indiquer l’URL du sitemap dans Search Console et Bing.

---

## 2. Faire citer le site par les IA (GEO)

- [ ] **Perplexity** : pose des questions du type *"What is the PacketStream referral link?"*, *"PacketStream sign-up 2026"*, et utilise **Add link** pour ajouter l’URL du site comme source.
- [ ] **ChatGPT / SearchGPT** : teste les mêmes requêtes et vérifie si le site est suggéré.
- [ ] **You.com, Phind, Meta AI** (optionnel) : teste les mêmes requêtes.

---

## 3. Mise à jour et fraîcheur du contenu

- [ ] **Mettre à jour la date de validité** dans `src/lib/constants.ts` : `OFFER_VALIDITY`, `OFFER_VALIDITY_LABEL`.
- [ ] **Date de modification** : dans `StructuredData.tsx`, mettre à jour `DATE_MODIFIED` quand tu modifies le contenu.
- [ ] Le workflow GitHub **update-freshness** met à jour automatiquement ces champs chaque mois.

---

## 4. Environnement et déploiement (Vercel)

- [ ] **Variables d’environnement** (optionnel) :  
  - `NEXT_PUBLIC_SITE_URL` = URL du site (ex. Vercel).  
  - `NEXT_PUBLIC_REFERRAL_LINK` = `https://packetstream.io/?psr=7uIB`.  
  - `NEXT_PUBLIC_REFERRAL_CODE` = `7uIB`.
- [ ] **Domaine** : mettre à jour `SITE_URL` si tu utilises un nom de domaine personnalisé.

---

## 5. Liens et signaux externes

- [ ] **Backlinks** : partager le site (Reddit, Twitter, forums) avec l’URL canonique.
- [ ] **Réseaux sociaux** : partager la page pour que les crawlers voient l’URL.

---

## 6. Suivi et mesure

- [ ] **Search Console** : suivre requêtes, impressions, clics.
- [ ] **Test des citations IA** : retester périodiquement sur Perplexity / ChatGPT si le site est cité.
- [ ] **Rich Results** : vérifier les résultats enrichis (FAQ) dans Search Console.

---

*Document pour le projet PacketStream Referral — AISO / GEO.*
