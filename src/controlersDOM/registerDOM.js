import { register } from '../templates/register.js';
import { onNavigate } from '../main.js';

export const registerDOM = () => {
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => onNavigate('/'));
  console.log(register);
};
