/* eslint-disable import/no-cycle */
import { loginFirebase, registerAndLoginGoogle } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

export const showLogin = () => {
  // lINK que dirige al Registro
  const signUpHere = document.getElementById('signUpHere');
  signUpHere.addEventListener('click', () => {
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
          const user = userCredential.user;
          // getData();
          localStorage.setItem('user', JSON.stringify(user.email));
          onNavigate('/home');
          console.log(userCredential);
        })
        .catch((error) => {
          const errorMessage = error.message;
          messageLogIn.innerHTML = errorMessage;
        });
    }
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then(() => {
        onNavigate('/home');
        // getData();
      });
  });
};
