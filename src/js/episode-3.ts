export function executerEpisode3() {
  // 1. Créer le conteneur avec la marge pour séparer du bouton précédent
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 3 : Somme de deux nombres';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Le + devant prompt permet de convertir la chaîne de caractères saisie en nombre
    const premierNombre = +prompt('Entrez le premier nombre :')!;
    const deuxiemeNombre = +prompt('Entrez le deuxième nombre :')!;

    const somme = premierNombre + deuxiemeNombre;

    alert(`La somme de ${premierNombre} et ${deuxiemeNombre} est : ${somme}`);
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}