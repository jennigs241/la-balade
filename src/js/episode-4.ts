export function executerEpisode4() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 4 : Permutation de variables';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Demande des deux valeurs initiales
    let a = prompt('Entrez la valeur de A :');
    let b = prompt('Entrez la valeur de B :');

    console.log(`--- Avant permutation ---`);
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);

    // Technique de permutation avec une variable temporaire
    const temp = a; // On sauvegarde la valeur de A
    a = b;          // A prend la valeur de B
    b = temp;       // B prend l'ancienne valeur de A (sauvegardée dans temp)

    console.log(`--- Après permutation ---`);
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);

    alert('Permutation effectuée ! Ouvrez la console (F12) pour voir les résultats.');
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}