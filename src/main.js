/* eslint-disable import/no-cycle */
import { home } from './templates/home.js';
import { register } from './templates/register.js';
import { registerFirebase, registerGoogle, loginFirebase } from './lib/firebase.js';
import { login } from './templates/login.js';

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
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  loadPage();
};
// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };
onNavigate('/');
export function registerToHome() {
  onNavigate('/home');
}

function showRegister() {
  // btn LogIn, from Register to Log in
  const btnUp = document.getElementById('btnUp');
  btnUp.addEventListener('click', () => {
    onNavigate('/');
    // eslint-disable-next-line no-use-before-define
    showLogin();
  });
  // SignUp button -> LogIn
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => {
    const email = document.querySelector('#emailSignUp').value;
    const password = document.querySelector('#passwordSignUp').value;
    registerFirebase(email, password);
  });
  // Button Google
  const btnSignUpGoogle = document.getElementById('btnSignUpGoogle');
  btnSignUpGoogle.addEventListener('click', () => {
    registerGoogle();
    onNavigate('/');
  });
  // document.querySelector('btnSignUpGoogle').addEventListener('click', () => {
  //   registerGoogle();
  // });
}

function showLogin() {
  // SignHere -> register
  const btnSign = document.getElementById('btnSign');
  btnSign.addEventListener('click', () => {
    console.log('Hola');
    onNavigate('/register');
    showRegister();
  });
  // Login button -> home
  const btnLogIn = document.getElementById('btnLogIn');
  btnLogIn.addEventListener('click', () => {
    const emailLogIn = document.querySelector('#emailLogIn').value;
    const passwordLogIn = document.querySelector('#passwordLogIn').value;
    loginFirebase(emailLogIn, passwordLogIn);
    // onNavigate('/home');
    showRegister();
  });
}

showLogin();

// function homepage() {
//   const btnLogOut = document.getElementById('btnLogOut');
//   btnLogOut.addEventListener('click', () => {
//     onNavigate('/register');
//   });
// }
