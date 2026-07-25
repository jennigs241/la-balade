// Importation depuis le dossier js
import message from './js/episode-1';

// 1. Affichage dans la console
console.log(message);

// 2. Affichage directement sur la page HTML !
const appDiv = document.querySelector<HTMLDivElement>('#app');

if (appDiv) {
  appDiv.innerHTML = `<h1>${message}</h1>`;
}

import { executerEpisode2 } from './js/episode-2.ts';

// Lancement de l'épisode 2
executerEpisode2();

import { executerEpisode3 } from './js/episode-3.ts';

// Lancement de l'épisode 3
executerEpisode3();

import { executerEpisode4 } from './js/episode-4.ts';

// Lancement de l'épisode 4
executerEpisode4();

import { executerEpisode5 } from './js/episode-5.ts';

// Lancement de l'épisode 5
executerEpisode5();

import { executerEpisode6 } from './js/episode-6.ts';

// Lancement de l'épisode 6
executerEpisode6();


import { executerEpisode7 } from './js/episode-7';

// Lancement de l'épisode 7
executerEpisode7();

import { executerEpisode8} from './js/episode-8';

// Lancement de l'épisode 8
executerEpisode8();

import { executerEpisode9} from './js/episode-9';

// Lancement de l'épisode 9
executerEpisode9();

import { executerEpisode10} from './js/episode-10';

// Lancement de l'épisode 10
executerEpisode10();

// 1. TOUTES LES IMPORTATIONS EN HAUT DU FICHIER
import message from './js/episode-1';
import { executerEpisode2 } from './js/episode-2';
import { executerEpisode3 } from './js/episode-3';
import { executerEpisode4 } from './js/episode-4';
import { executerEpisode5 } from './js/episode-5';
import { executerEpisode6 } from './js/episode-6';
import { executerEpisode7 } from './js/episode-7';
import { executerEpisode8 } from './js/episode-8';
import { executerEpisode9 } from './js/episode-9';
import { executerEpisode10 } from './js/episode-10';

// 2. EXÉCUTION DU CODE ET DES ÉPISODES

// Affichage dans la console du premier message
console.log(message);

// Affichage directement sur la page HTML
const appDiv = document.querySelector<HTMLDivElement>('#app');

if (appDiv) {
  appDiv.innerHTML = `<h1>${message}</h1>`;
}

// Lancement séquentiel de tous les épisodes
executerEpisode2();
executerEpisode3();
executerEpisode4();
executerEpisode5();
executerEpisode6();
executerEpisode7();
executerEpisode8();
executerEpisode9();
executerEpisode10();