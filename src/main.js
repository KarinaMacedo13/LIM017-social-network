/* eslint-disable import/no-cycle */
import { home } from './templates/home.js';
import { register } from './templates/register.js';
import { login } from './templates/login.js';
import { homeDOM } from './controlersDOM/homeDOM.js';
import { registerDOM } from './controlersDOM/registerDOM.js';
import { loginDOM } from './controlersDOM/loginDOM.js';

console.log(homeDOM);
console.log(registerDOM);
console.log(loginDOM);
const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const rootDiv = document.getElementById('root');

const component = routes[window.location.pathname];
console.log(component);

rootDiv.innerHTML = component;
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
};
