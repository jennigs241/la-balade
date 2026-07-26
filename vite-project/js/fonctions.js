/**
 * --- ÉPISODE 1 : ADRESSE E-MAIL ---
 * Demande une adresse e-mail et valide sa structure.
 * @returns {void}
 */
export function executerEpisode1() {
  const email = prompt("Épisode 1 - Veuillez saisir votre adresse e-mail :");

  if (!email || email.trim() === "") {
    alert("Erreur : Aucune adresse e-mail n'a été saisie !");
    return;
  }

  const emailTrimmed = email.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(emailTrimmed)) {
    alert("Succès : Adresse e-mail valide !");
  } else {
    alert("Erreur : L'adresse e-mail saisie n'est pas valide !");
  }
}

/**
 * --- ÉPISODE 2 : CHOISIS UN MOT DE PASSE ---
 * Demande un mot de passe (8 car. min, 1 majuscule, 1 chiffre).
 * @returns {void}
 */
export function executerEpisode2() {
  const mdp = prompt("Épisode 2 - Choisis un mot de passe (8 caractères min, 1 majuscule, 1 chiffre) :");

  if (!mdp) {
    alert("Erreur : Aucun mot de passe n'a été saisi !");
    return;
  }

  const aLongueurMin = mdp.length >= 8;
  const aMajuscule = /[A-Z]/.test(mdp);
  const aChiffre = /[0-9]/.test(mdp);

  if (aLongueurMin && aMajuscule && aChiffre) {
    alert("Succès : Votre mot de passe est valide !");
  } else {
    alert("Erreur : Le mot de passe doit faire au moins 8 caractères, contenir une majuscule et un chiffre.");
  }
}

/**
 * --- ÉPISODE 3 : AU PLURIEL ---
 * Demande le nom et le nombre d'enfants puis affiche un résumé gérant le pluriel.
 * @returns {void}
 */
export function executerEpisode3() {
  const nom = prompt("Épisode 3 - Saisissez votre nom :");
  if (!nom || nom.trim() === "") {
    alert("Erreur : Nom non renseigné.");
    return;
  }

  const nbEnfantsSaisi = prompt("Combien d'enfants avez-vous ?");
  const nbEnfants = parseInt(nbEnfantsSaisi, 10);

  if (isNaN(nbEnfants) || nbEnfants < 0) {
    alert("Erreur : Veuillez entrer un nombre d'enfants valide.");
    return;
  }

  if (nbEnfants === 0) {
    alert(`${nom.trim()}, vous n’avez pas d’enfant.`);
  } else if (nbEnfants === 1) {
    alert(`${nom.trim()}, vous avez 1 enfant.`);
  } else {
    alert(`${nom.trim()}, vous avez ${nbEnfants} enfants.`);
  }
}

/**
 * --- ÉPISODE 4 : DIS-MOI, QUAND ES-TU NÉ ? ---
 * Vérifie si la date saisie est au format JJ/MM/AAAA.
 * @returns {void}
 */
export function executerEpisode4() {
  const dateSaisie = prompt("Épisode 4 - Saisissez votre date de naissance (JJ/MM/AAAA) :");

  if (!dateSaisie) {
    alert("Erreur : Aucune date saisie.");
    return;
  }

  const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (regexDate.test(dateSaisie.trim())) {
    alert("Succès : La date respecte le format JJ/MM/AAAA.");
  } else {
    alert("Erreur : Format invalide ! Exemple attendu : 13/05/2020");
  }
}

/**
 * --- ÉPISODE 5 : FICHE DE RENSEIGNEMENT ---
 * Stocke les infos utilisateur dans un objet et l'affiche en console.
 * @returns {void}
 */
export function executerEpisode5() {
  const nom = prompt("Épisode 5 - Saisissez votre nom :");
  const prenom = prompt("Saisissez votre prénom :");
  const sexe = prompt("Saisissez votre sexe (M ou F) :");

  if (!nom || !prenom || !sexe) {
    alert("Erreur : Toutes les informations n'ont pas été renseignées.");
    return;
  }

  const sexeClean = sexe.trim().toUpperCase();

  const utilisateur = {
    nom: nom.trim(),
    prenom: prenom.trim(),
    sexe: sexeClean
  };

  if (sexeClean === "M" || sexeClean === "MASCULIN") {
    utilisateur.titre = "M";
  } else if (sexeClean === "F" || sexeClean === "FEMININ") {
    utilisateur.titre = "Mme";
  } else {
    utilisateur.titre = "M / Mme";
  }

  console.log("Fiche de renseignement (Épisode 5) :", utilisateur);
  alert("Fiche de renseignement enregistrée ! Consultez la console du navigateur (F12).");
}

/**
 * --- ÉPISODE 6 : QUEL JOUR SOMMES-NOUS ? ---
 * Renvoie le jour correspondant au numéro saisi (stockés dans un tableau).
 * @returns {void}
 */
export function executerEpisode6() {
  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  const numSaisi = prompt("Épisode 6 - Saisissez le numéro d'un jour (1 pour Lundi, 7 pour Dimanche) :");
  const index = parseInt(numSaisi, 10);

  if (isNaN(index) || index < 1 || index > 7) {
    alert("Erreur : Le numéro doit être compris entre 1 et 7.");
    return;
  }

  alert(`Sortie : ${jours[index - 1]}`);
}

/**
 * --- ÉPISODE 7 : ADMIS OU RECALÉ ---
 * Demande les notes de Maths, les stocke dans un tableau et calcule la moyenne.
 * @returns {void}
 */
export function executerEpisode7() {
  const notes = [];
  let continuer = true;

  while (continuer) {
    const saisie = prompt("Épisode 7 - Entrez une note de Mathématiques (0 à 20) ou 'stop' pour calculer :");

    if (saisie === null || saisie.trim().toLowerCase() === "stop") {
      continuer = false;
    } else {
      const note = parseFloat(saisie);
      if (!isNaN(note) && note >= 0 && note <= 20) {
        notes.push(note);
      } else {
        alert("Note invalide ! Veuillez saisir un nombre entre 0 et 20.");
      }
    }
  }

  if (notes.length === 0) {
    alert("Aucune note n'a été saisie.");
    return;
  }

  const somme = notes.reduce((acc, curr) => acc + curr, 0);
  const moyenne = (somme / notes.length).toFixed(2);

  alert(`Vos notes : [${notes.join(", ")}]\nVotre moyenne en Mathématiques est de : ${moyenne}/20`);
}

/**
 * --- ÉPISODE 8 : PROCLAMATION ---
 * Recherche le premier de la classe (nom + moyenne) sans nombre d'élèves connu d'avance.
 * @returns {void}
 */
export function executerEpisode8() {
  let nomPremier = "";
  let meilleureMoyenne = -1;
  let ajouterEncore = true;

  while (ajouterEncore) {
    const nom = prompt("Épisode 8 - Entrez le nom de l'élève (ou 'stop' pour terminer) :");

    if (!nom || nom.trim().toLowerCase() === "stop") {
      ajouterEncore = false;
    } else {
      const moySaisie = prompt(`Entrez la moyenne de ${nom.trim()} (0 à 20) :`);
      const moyenne = parseFloat(moySaisie);

      if (!isNaN(moyenne) && moyenne >= 0 && moyenne <= 20) {
        if (moyenne > meilleureMoyenne) {
          meilleureMoyenne = moyenne;
          nomPremier = nom.trim();
        }
      } else {
        alert("Moyenne invalide. Élève non comptabilisé.");
      }
    }
  }

  if (meilleureMoyenne === -1) {
    alert("Aucun élève enregistré.");
  } else {
    alert(`🏆 Le premier de la classe est ${nomPremier} avec une moyenne de ${meilleureMoyenne}/20 !`);
  }
}

/**
 * --- ÉPISODE 9 : A TABLE ! ---
 * Affiche la table de multiplication d'un nombre dans la console.
 * @param {number} nbr - Le nombre pour la table.
 * @returns {void}
 */
export function afficherTableMultiplication(nbr) {
  console.log(`--- Table de multiplication de ${nbr} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${nbr} x ${i} = ${nbr * i}`);
  }
}

export function executerEpisode9() {
  const saisie = prompt("Épisode 9 - Saisissez un nombre pour voir sa table de multiplication :");
  const nombre = parseFloat(saisie);

  if (isNaN(nombre)) {
    alert("Erreur : Veuillez saisir un nombre valide.");
    return;
  }

  afficherTableMultiplication(nombre);
  alert(`La table de ${nombre} a été affichée dans la console (Touche F12) !`);
}

/**
 * --- ÉPISODE 10 : PAIR OU IMPAIR ? ---
 * Teste si un nombre est pair.
 * @param {number} nbr - Le nombre à tester.
 * @returns {boolean} True si pair, False si impair.
 */
export function estPair(nbr) {
  return nbr % 2 === 0;
}

export function executerEpisode10() {
  const saisie = prompt("Épisode 10 - Saisissez un nombre entier :");
  const nombre = parseInt(saisie, 10);

  if (isNaN(nombre)) {
    alert("Erreur : Nombre invalide.");
    return;
  }

  const resultat = estPair(nombre);
  alert(`Le nombre ${nombre} est-il pair ? -> ${resultat}`);
}

/**
 * --- ÉPISODE 11 : LE BOSS ---
 * Les épisodes 1, 2, 4, 6 et 7 transformés en pure fonctions réutilisables.
 */

/**
 * Équivalent Épisode 1 en fonction pure.
 * @param {string} email - L'email à valider.
 * @returns {boolean} True si valide.
 */
export function validerEmailBoss(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

/**
 * Équivalent Épisode 2 en fonction pure.
 * @param {string} mdp - Le mot de passe à tester.
 * @returns {boolean} True si respecte les 3 critères.
 */
export function validerMotDePasseBoss(mdp) {
  return mdp.length >= 8 && /[A-Z]/.test(mdp) && /[0-9]/.test(mdp);
}

/**
 * Équivalent Épisode 4 en fonction pure.
 * @param {string} dateStr - La date en chaîne de caractères.
 * @returns {boolean} True si au format JJ/MM/AAAA.
 */
export function validerDateNaissanceBoss(dateStr) {
  return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dateStr.trim());
}

/**
 * Équivalent Épisode 6 en fonction pure.
 * @param {number} numeroJour - Le numéro du jour (1 à 7).
 * @returns {string} Le nom du jour ou un message d'erreur.
 */
export function obtenirJourBoss(numeroJour) {
  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  if (numeroJour < 1 || numeroJour > 7) return "Numéro invalide";
  return jours[numeroJour - 1];
}

/**
 * Équivalent Épisode 7 en fonction pure (prend un tableau en paramètre).
 * @param {number[]} notes - Tableau de notes.
 * @returns {number} La moyenne calculée.
 */
export function calculerMoyenneBoss(notes) {
  if (!Array.isArray(notes) || notes.length === 0) return 0;
  const somme = notes.reduce((acc, curr) => acc + curr, 0);
  return parseFloat((somme / notes.length).toFixed(2));
}

/**
 * Démonstration globale de l'Épisode 11.
 * @returns {void}
 */
export function executerEpisode11() {
  // Test des 5 fonctions créées pour l'Épisode 11
  const testEmail = validerEmailBoss("test@domaine.com");
  const testMdp = validerMotDePasseBoss("MonMdp2026");
  const testDate = validerDateNaissanceBoss("15/08/2000");
  const testJour = obtenirJourBoss(3);
  const testMoyenne = calculerMoyenneBoss([12, 15, 18, 10]);

  const rapport = `--- DÉMO ÉPISODE 11 (LE BOSS) ---
1. Email ("test@domaine.com") : ${testEmail}
2. Mot de Passe ("MonMdp2026") : ${testMdp}
4. Date ("15/08/2000") : ${testDate}
6. Jour numéro 3 : ${testJour}
7. Moyenne du tableau [12, 15, 18, 10] : ${testMoyenne}/20`;

  alert(rapport);
  console.log(rapport);
}