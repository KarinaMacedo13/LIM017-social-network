/* eslint-disable import/no-cycle */
import { home } from './templates/home.js';
import { register } from './templates/register.js';
import { login } from './templates/login.js';
// import { homeDOM } from './controlersDOM/homeDOM.js';
// import { registerDOM } from './controlersDOM/registerDOM.js';
// import { loginDOM } from './controlersDOM/loginDOM.js';

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
  console.log('entro', pathname);
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
function showRegister() {
  // Login -> home
  const btnUp = document.getElementById('btnUp');
  btnUp.addEventListener('click', () => {
    onNavigate('/');
  });
  // SignUp button -> LogIn
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => {
    onNavigate('/home');
  });
}

function showLogin() {
  // SignHere -> register
  const btnSign = document.getElementById('btnSign');
  btnSign.addEventListener('click', () => {
    onNavigate('/register');
    showRegister();
  });
  // Login button -> home
  const btnLogIn = document.getElementById('btnLogIn');
  btnLogIn.addEventListener('click', () => {
    onNavigate('/home');
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
