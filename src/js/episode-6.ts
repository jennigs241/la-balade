export function executerEpisode6() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 6 : Moyenne de trois nombres';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Récupération des trois nombres avec conversion en valeurs numériques (+)
    const n1 = +prompt('Entrez le premier nombre :')!;
    const n2 = +prompt('Entrez le deuxième nombre :')!;
    const n3 = +prompt('Entrez le troisième nombre :')!;

    // Calcul de la moyenne
    const moyenne = (n1 + n2 + n3) / 3;

    // Affichage dans l'alerte
    alert(`La moyenne de ${n1}, ${n2} et ${n3} est : ${moyenne}`);
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}