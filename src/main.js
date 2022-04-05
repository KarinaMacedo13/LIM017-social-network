/* eslint-disable import/no-cycle */
import { home } from './templates/home.js';
import { register } from './templates/register.js';
import { loginFirebase, logInGoogle, cerrar } from './lib/firebase.js';
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
// const component = routes[window.location.pathname]; // sale ruta
// window.onpopstate = () => {
//   rootDiv.appendChild(component());
// };
// rootDiv.appendChild(component());

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]();
};
onNavigate('/');

export function registerToHome() {
  onNavigate('/home');
  // eslint-disable-next-line no-use-before-define
  showHome();
}

// function showRegister() {
//   // btn LogIn, from Register to Log in
//   const logInHere = document.getElementById('logInHere');
//   const name = document.querySelector('#name');
//   const lastName = document.querySelector('#lastName');
//   name.addEventListener('keyup', (e) => {
//     const valorName = e.target.value;
//     console.log(valorName);
//     name.value = valorName.replace(/\d/g, '');// no permite números y letras mayúsculas
//   });
//   lastName.addEventListener('keyup', (e) => {
//     const valorLastName = e.target.value;
//     console.log(valorLastName);
//     lastName.value = valorLastName.replace(/\d/g, '');// no permite números y letras mayúsculas
//   });
//   logInHere.addEventListener('click', () => {
//     onNavigate('/');
//     // eslint-disable-next-line no-use-before-define
//     showLogin();
//   });
//   // SignUp button -> LogIn
//   const btnRegister = document.getElementById('btnRegister');
//   btnRegister.addEventListener('click', () => {
//     const email = document.querySelector('#emailSignUp').value;
//     console.log(email);
//     const password = document.querySelector('#passwordSignUp').value;
//     // validar espacios
//     if ((name.value === '') || (lastName.value === '') || (email === '') || (password === '')) {
//       console.log('Campos vacios');
//       // e.preventDefault();
//       const messageSignUpError = document.querySelector('.messageSignUpError');
//       messageSignUpError.innerHTML = 'Fill in the missing field';
//     } else {
//       registerFirebase(email, password);
//     }
//   });
//   // Button Google
//   const btnSignUpGoogle = document.getElementById('btnSignUpGoogle');
//   btnSignUpGoogle.addEventListener('click', () => {
//     registerGoogle();
//     // onNavigate('/');
//   });
// }

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
    // onNavigate('/home');
    // showRegister();
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    logInGoogle();
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

// function homepage() {
//   const btnLogOut = document.getElementById('btnLogOut');
//   btnLogOut.addEventListener('click', () => {
//     onNavigate('/register');
//   });
// }
