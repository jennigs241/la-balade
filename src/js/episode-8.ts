export function executerEpisode8() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 8 : Salutation selon le sexe';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    const nom = prompt('Quel est votre nom ?');
    const sexe = prompt('Quel est votre sexe ? (M ou F)')?.trim().toUpperCase();

    if (sexe === 'M') {
      alert(`Bonjour monsieur ${nom}`);
    } else if (sexe === 'F') {
      alert(`Bonjour madame ${nom}`);
    } else {
      alert(`Bonjour ${nom}`);
    }
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}
