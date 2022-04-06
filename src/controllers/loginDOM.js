/* eslint-disable import/no-cycle */
import { loginFirebase, logInGoogle, getDates } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

export const showLogin = () => {
  // lINK que dirige al Registro
  const signUpHere = document.getElementById('signUpHere');
  signUpHere.addEventListener('click', () => {
    console.log('Hola');
    onNavigate('/register');
  });
  const btnLogIn = document.getElementById('btnLogIn');
  const messageLogIn = document.querySelector('.messageLogIn');
  // BOTON LOGIN
  btnLogIn.addEventListener('click', () => {
    const emailLogIn = document.querySelector('#emailLogIn').value;
    const passwordLogIn = document.querySelector('#passwordLogIn').value;
    if ((emailLogIn === '') || (passwordLogIn === '')) {
      messageLogIn.innerHTML = 'Fill in the missing field';
    } else {
      loginFirebase(emailLogIn, passwordLogIn)
        .then((userCredential) => {
          onNavigate('/home');
          console.log(userCredential);
        })
        .catch((error) => {
          const errorCode2 = error.code;
          console.log(errorCode2);
          const errorMessage2 = error.message;
          messageLogIn.innerHTML = errorMessage2;
          // alert(errorMessage);
        });
      // eslint-disable-next-line no-use-before-define
      getDates();
    }
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    logInGoogle();
  });
};
