# Site de l'Agence Crescendo

Nouveau site statique (HTML/CSS/JS, sans WordPress ni base de données) qui remplace
l'ancien WordPress piraté. Le contenu a été repris de la dernière version archivée
du site (Wayback Machine, juin 2026).

## Fichiers

- `index.html` : toutes les pages (agence, concerts, projets, musiciens, médias, contact)
- `concerts.js` : l'agenda — c'est le seul fichier à modifier pour ajouter un concert
- `style.css` : la mise en page
- `main.js` : agenda, vidéos YouTube, menu mobile
- `assets/` : logo et affiches

## Ajouter un concert

Ouvrir `concerts.js`, copier un bloc `{ ... },`, changer la date (AAAA-MM-JJ), le lieu
et les artistes. Les concerts dont la date est passée basculent tout seuls dans
« Concerts passés ».

## Mise en ligne

Copier tout le dossier (sauf ce README) à la racine de l'hébergement, après avoir
supprimé l'ancien WordPress.
