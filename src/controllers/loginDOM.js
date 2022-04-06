/* eslint-disable import/no-cycle */
import { loginFirebase, logInGoogle } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

export const showLogin = () => {
  // SignHere -> register
  const signUpHere = document.getElementById('signUpHere');
  signUpHere.addEventListener('click', () => {
    console.log('Hola');
    onNavigate('/register');
  });
  // Login button -> home
  const btnLogIn = document.getElementById('btnLogIn');
  btnLogIn.addEventListener('click', () => {
    const emailLogIn = document.querySelector('#emailLogIn').value;
    const passwordLogIn = document.querySelector('#passwordLogIn').value;
    if ((emailLogIn === '') || (passwordLogIn === '')) {
      console.log('Campos vacios');
      // e.preventDefault();
      const messageLogIn = document.querySelector('.messageLogIn');
      messageLogIn.innerHTML = 'Fill in the missing field';
    } else {
      loginFirebase(emailLogIn, passwordLogIn);
    }
    // onNavigate('/home');
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    logInGoogle();
  });
};
