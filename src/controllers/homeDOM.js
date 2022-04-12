/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { singOut, getCurrentUser } from '../lib/userFirebase.js';
import { savePost, onGetPost, deletePost } from '../lib/postFirebase.js';
import { onNavigate } from '../main.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOut();
    onNavigate('/');
  });
  const nameLogIn = getCurrentUser().displayName;
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  // const emailHome = localStorage.getItem('user');
  const getName = localStorage.getItem('user');
  // loginHome.innerHTML = '';
  const string2 = 'logueado ';
  nameHomeTagH3.innerHTML = string2 + nameLogIn;
  console.log(getName);
  // eslint-disable-next-line no-use-before-define
  postForm();
  getPosts();
};

// export const [month, day, year] = [date.getMonth(), date.getDate(), ];
// export const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

const getPosts = async () => {
  const containerShowPost = document.querySelector('.containerShowPost');
  const userLogIn = getCurrentUser().uid;
  console.log(userLogIn);
  // const querySnapshot = await getPost();
  onGetPost((querySnapshot) => {
    containerShowPost.innerHTML = '';
    querySnapshot.forEach(doc => {
      const postWrite = doc.data();
      postWrite.id = doc.id;
      // postWrite.uid = doc.uid;
      // console.log(postWrite);
      // console.log(postWrite.uid);
      containerShowPost.innerHTML += `
        <div class='containerPost-Each'>
        <div>
        ${postWrite.user}
        <p> Publication: ${postWrite.date.toDate().toUTCString()} </p>
        </div>
        <div>
        ${postWrite.description}
        </div>
        <div>
        <button class="btnShare" id="btn-Delete" data-id="${postWrite.id}"> Delete </button>
        <button class="btnShare" id="btn-Edit" data-id="${postWrite.id}"> Edit </button>
        </div>
        </div>
        </br>
        `;
      const btnDelete = document.querySelectorAll('#btn-Delete');
      btnDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          console.log(e.target.dataset.uid);
          console.log(userLogIn);
          // console.log(e.target.postWrite.uid);
          console.log(postWrite.uid);
          if (userLogIn === postWrite.uid) {
            console.log(e.target.dataset.id);
            console.log(postWrite.uid);
            console.log('hola me dieron click');
            await deletePost(e.target.dataset.id);
          } else {
            console.log('no puedes borrarme');
            // btnDelete.disabled = true;
          }
        });
      });
    });
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
