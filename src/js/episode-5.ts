export function executerEpisode5() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 5 : Calcul du double';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Le '+' permet de convertir la saisie texte en nombre
    const nombre = +prompt('Saisissez un nombre :')!;

    // Calcul du double
    const double = nombre * 2;

    // Affichage dans l'alerte
    alert(`Le double de ${nombre} est : ${double}`);
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}