// Importation des 11 fonctions d'un seul coup depuis fonctions.js
import {
  executerEpisode1,
  executerEpisode2,
  executerEpisode3,
  executerEpisode4,
  executerEpisode5,
  executerEpisode6,
  executerEpisode7,
  executerEpisode8,
  executerEpisode9,
  executerEpisode10,
  executerEpisode11
} from './fonctions.js';

document.addEventListener('DOMContentLoaded', () => {

  // Épisode 1 : Adresse e-mail
  const btnEp1 = document.getElementById('btn-ep1');
  if (btnEp1) {
    btnEp1.addEventListener('click', executerEpisode1);
  }

  // Épisode 2 : Choisis un mot de passe
  const btnEp2 = document.getElementById('btn-ep2');
  if (btnEp2) {
    btnEp2.addEventListener('click', executerEpisode2);
  }

  // Épisode 3 : Au pluriel
  const btnEp3 = document.getElementById('btn-ep3');
  if (btnEp3) {
    btnEp3.addEventListener('click', executerEpisode3);
  }

  // Épisode 4 : Dis-moi, quand es-tu né ?
  const btnEp4 = document.getElementById('btn-ep4');
  if (btnEp4) {
    btnEp4.addEventListener('click', executerEpisode4);
  }

  // Épisode 5 : Fiche de renseignement
  const btnEp5 = document.getElementById('btn-ep5');
  if (btnEp5) {
    btnEp5.addEventListener('click', executerEpisode5);
  }

  // Épisode 6 : Quel jour sommes-nous ?
  const btnEp6 = document.getElementById('btn-ep6');
  if (btnEp6) {
    btnEp6.addEventListener('click', executerEpisode6);
  }

  // Épisode 7 : Admis ou recalé
  const btnEp7 = document.getElementById('btn-ep7');
  if (btnEp7) {
    btnEp7.addEventListener('click', executerEpisode7);
  }

  // Épisode 8 : Proclamation
  const btnEp8 = document.getElementById('btn-ep8');
  if (btnEp8) {
    btnEp8.addEventListener('click', executerEpisode8);
  }

  // Épisode 9 : A table !
  const btnEp9 = document.getElementById('btn-ep9');
  if (btnEp9) {
    btnEp9.addEventListener('click', executerEpisode9);
  }

  // Épisode 10 : Pair ou impair ?
  const btnEp10 = document.getElementById('btn-ep10');
  if (btnEp10) {
    btnEp10.addEventListener('click', executerEpisode10);
  }

  // Épisode 11 : Le boss
  const btnEp11 = document.getElementById('btn-ep11');
  if (btnEp11) {
    btnEp11.addEventListener('click', executerEpisode11);
  }

});