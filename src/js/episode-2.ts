export function executerEpisode2() {
  // 1. Créer un conteneur pour séparer ce bouton des suivants
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px'; // Espace vertical avec les prochains boutons

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 2 : Saluer';

  // 3. Ajouter l'action au clic
  bouton.addEventListener('click', () => {
    const nom = prompt('Quel est votre nom ?');
    if (nom) {
      alert(`Bonjour ${nom}`);
    }
  });

  // 4. Mettre le bouton dans son conteneur et l'ajouter à la page
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}