/* eslint-disable import/no-cycle */
import { cerrar } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    cerrar();
    onNavigate('/');
  });
};
