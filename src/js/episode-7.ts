export function executerEpisode7() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 7 : Test de majorité';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Conversion de la saisie en nombre
    const age = +prompt('Saisissez votre âge :')!;

    // Condition pour vérifier la majorité
    if (age >= 18) {
      alert('Vous êtes majeur');
    } else {
      alert('Vous êtes mineur');
    }
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}