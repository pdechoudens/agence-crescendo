// Agenda des concerts.
// Pour ajouter un concert : copier un bloc { ... }, changer les infos, garder la virgule.
// Les concerts passés passent automatiquement dans « Concerts passés ».
// date : AAAA-MM-JJ   ·   programme : facultatif (une ligne par œuvre)
// passe: true  →  range le concert dans « Concerts passés » même si sa date n'est pas encore passée
const CONCERTS = [
  {
    date: "2026-11-13",
    heure: "15h30",
    lieu: "EMS Les Pins",
    artistes: "Josefa Ibarra et Céline Chalande — piano et chant",
  },
  {
    date: "2026-11-07",
    heure: "15h30",
    lieu: "EMS La Providenza",
    artistes: "Josefa Ibarra et Céline Chalande — piano et chant",
  },
  {
    date: "2026-07-11",
    lieu: "EMS La Providenza",
    artistes: "Vincent Forestier — piano",
  },
  {
    date: "2026-05-15",
    lieu: "EMS Les Pins",
    artistes: "Vincent Forestier — piano",
  },
  {
    date: "2025-10-12",
    lieu: "Bernex",
    artistes: "Trio à cordes",
    programme: [
      "F. Schubert : Triosatz D. 471",
      "L. Boccherini : Trio à cordes op. 14 n° 4",
      "F. Schubert : Erlkönig, arrangement pour violon et alto",
      "G.-F. Haendel : Passacaille pour violon et violoncelle",
      "L. van Beethoven : Trio en do mineur op. 9",
    ],
  },
  {
    date: "2025-10-11",
    lieu: "EMS Les Pins",
    artistes: "Beatriz Raimundo — violoncelle · Josefa Silva — piano",
  },
  {
    date: "2025-10-04",
    lieu: "EMS La Providenza",
    artistes: "Beatriz Raimundo — violoncelle · Josefa Silva — piano",
  },
  {
    date: "2025-06-14",
    lieu: "EMS Les Pins",
    artistes: "Seat Byeol Choi — violon · Philippe Boaron — piano",
  },
  {
    date: "2025-05-17",
    lieu: "EMS La Providenza",
    artistes: "Vincent Forestier — piano",
  },
  {
    date: "2025-05-10",
    lieu: "Versoix, Les Caves",
    artistes: "Jeunes pianistes",
    programme: [
      "Darii Krasylych : J. Brahms, Ballade op. 10 n° 1",
      "Jiacheng Ye : R. Schumann, Variations Abegg",
      "Alice Joy Nixon : F. Mendelssohn, Rondo capriccioso op. 14 et Romances op. 19",
      "Albert Degollar : J. Brahms, Intermezzos n° 1, 2 et 3 op. 118",
    ],
  },
  {
    date: "2025-03-29",
    lieu: "Versoix, Les Caves",
    artistes: "Jeunes pianistes — Mozart",
    programme: [
      "Michaël Marques : Allegro en si bémol majeur KV 3",
      "Yonaël Samuel : Sonatine viennoise n° 2 en la majeur KV 439b",
      "Emma Muto : Variations « Ah, vous dirai-je, Maman » KV 265",
      "Laurène Ndzana Ndzomo : Rondo KV 511",
    ],
  },
];
