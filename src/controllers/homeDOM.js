/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { singOut } from '../lib/userFirebase.js';
import { savePost, getPost } from '../lib/postFirebase.js';
import { onNavigate } from '../main.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOut();
    onNavigate('/');
  });
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  // const emailHome = localStorage.getItem('user');
  const getName = localStorage.getItem('user');
  // loginHome.innerHTML = '';
  const string2 = 'logueado ';
  nameHomeTagH3.innerHTML = string2 + getName;
  console.log(getName);
  // eslint-disable-next-line no-use-before-define
  postForm();
  getPosts();
};

const getPosts = async () => {
  const containerShowPost = document.querySelector('.containerShowPost');
  const querySnapshot = await getPost();
  querySnapshot.forEach(doc => {
    const postWrite = doc.data();
    containerShowPost.innerHTML += `
      <div class='containerPost-Each'>
      <div>
      ${postWrite.user}
      ${postWrite.date.toDate().toLocaleDateString('en-US')}
      ${postWrite.description}
      </div>
      <div>
      <button class="btnShare" id="btn-Delete" data-id="${postWrite.id}"> Delete </button>
      <button class="btnShare" id="btn-Edit" data-id="${postWrite.id}"> Edit </button>
      </div>
      </div>
      </br>
      `;
  });
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
