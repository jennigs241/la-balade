export function executerEpisode9() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 9 : Mention de la moyenne';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Récupération de la moyenne et conversion en nombre
    const moyenne = +prompt('Entrez la moyenne de l\'élève (entre 0 et 20) :')!;

    // Vérification de la validité de la note
    if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
      alert('Veuillez entrer une moyenne valide comprise entre 0 et 20.');
      return;
    }

    // Détermination de la mention selon le barème
    let mention = '';

    if (moyenne >= 18) {
      mention = 'Excellent';
    } else if (moyenne >= 16) {
      mention = 'Très bien';
    } else if (moyenne >= 14) {
      mention = 'Bien';
    } else if (moyenne >= 12) {
      mention = 'Assez-bien';
    } else if (moyenne >= 10) {
      mention = 'Passable';
    } else {
      mention = 'Insuffisant (Pas de mention)';
    }

    // Affichage du résultat
    alert(`Moyenne : ${moyenne}/20\nMention : ${mention}`);
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}
