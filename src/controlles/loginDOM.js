/* eslint-disable import/no-cycle */
import { onNavigate, registerToHome } from '../main.js';
import { showRegister } from './registerDOM.js';
import { loginFirebase, registerAndLoginGoogle, getData } from '../lib/firebase.js';
import { login } from '../templates/login.js';

export function showLogin() {
  // SignHere -> register
  login();
  const signUpHere = document.getElementById('signUpHere');
  signUpHere.addEventListener('click', () => {
    console.log('Hola');
    onNavigate('/register');
    showRegister();
  });
  // BOTON LOGIN
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
      registerToHome();
    }
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then(() => {
        registerToHome();
        getData();
      });
  });
}
