export function executerEpisode10() {
  // 1. Créer le conteneur avec la marge d'espacement
  const conteneur = document.createElement('div');
  conteneur.style.marginBottom = '15px';

  // 2. Créer le bouton
  const bouton = document.createElement('button');
  bouton.textContent = 'Épisode 10 : Calcul avec remise';

  // 3. Ajouter la logique au clic
  bouton.addEventListener('click', () => {
    // Récupération du montant et conversion en nombre
    const montant = +prompt('Entrez le montant de la facture (en F) :')!;

    // Vérification de la saisie
    if (isNaN(montant) || montant < 0) {
      alert('Veuillez entrer un montant valide.');
      return;
    }

    let totalAPayer = montant;
    let messageRemise = 'Aucune remise (montant inférieur ou égal à 40 000 F).';

    // Application de la condition : si le montant dépasse 40 000 F
    if (montant > 40000) {
      const reduction = montant * 0.10; // Calcul de 10%
      totalAPayer = montant - reduction;
      messageRemise = `Remise de 10% appliquée (-${reduction} F).`;
    }

    // Affichage du résultat dans l'alerte
    alert(`Montant initial : ${montant} F\n${messageRemise}\nTotal à payer : ${totalAPayer} F`);
  });

  // 4. Injecter dans le DOM
  conteneur.appendChild(bouton);
  document.querySelector<HTMLDivElement>('#app')?.appendChild(conteneur);
}