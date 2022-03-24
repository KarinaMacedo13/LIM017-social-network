import { login } from '../templates/login.js';
import { onNavigate } from '../main.js';

export const loginDOM = () => {
  const btnLogin = document.getElementById('btnLogIn');
  btnLogin.addEventListener('click', () => onNavigate('/'));
  console.log(login);
};
