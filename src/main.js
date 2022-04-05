/* eslint-disable import/no-cycle */
import { home } from './templates/home.js';
import { register } from './templates/register.js';
import {
  loginFirebase, cerrar, registerAndLoginGoogle, getData,
} from './lib/firebase.js';
import { login } from './templates/login.js';
import { showRegister } from './controlles/registerDOM.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};
function loadPage() {
  const component = window.location.pathname;
  rootDiv.innerHTML = routes[component]();
}
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  loadPage();
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]();
};
onNavigate('/');

export function registerToHome() {
  onNavigate('/home');
  // eslint-disable-next-line no-use-before-define
  showHome();
}

export function showLogin() {
  // SignHere -> register
  const signUpHere = document.getElementById('signUpHere');
  signUpHere.addEventListener('click', () => {
    console.log('Hola');
    onNavigate('/register');
    showRegister();
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
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then((result) => {
        registerToHome();
        getData();
      });
  });
}

showLogin();

function showHome() {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    cerrar();
    onNavigate('/');
    // eslint-disable-next-line no-use-before-define
    showLogin();
  });
}
