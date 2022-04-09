/* eslint-disable import/no-cycle */
import { singOut } from '../lib/userFirebase.js';
import { savePost } from '../lib/postFirebase.js';
import { onNavigate } from '../main.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOut();
    onNavigate('/');
  });
  const loginHome = document.getElementById('loginHome');
  // const emailHome = localStorage.getItem('user');
  const nameHome = localStorage.getItem('user');
  // loginHome.innerHTML = '';
  const string2 = 'logueado ';
  loginHome.innerHTML = string2 + nameHome;
  console.log(nameHome);
  // eslint-disable-next-line no-use-before-define
  postForm();
};

export function postForm() {
  const formPost = document.getElementById('postForm');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = formPost.posWrite;
    await savePost(description.value);

    formPost.reset();
    description.focus();
    console.log(description);
  });
}
