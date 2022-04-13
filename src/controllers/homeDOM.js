/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { singOut, getCurrentUser } from '../lib/userFirebase.js';
import {
  savePost,
  onGetPost,
  deletePost,
  getPostEdit,
  updatePost,
} from '../lib/postFirebase.js';
import { onNavigate } from '../main.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOut();
    onNavigate('/');
  });
  const nameLogIn = getCurrentUser().displayName;
  const uidLogIn = getCurrentUser().uid;
  console.log(uidLogIn);
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  // const emailHome = localStorage.getItem('user');
  const getName = localStorage.getItem('user');
  // loginHome.innerHTML = '';
  const string2 = 'logueado ';
  nameHomeTagH3.innerHTML = string2 + nameLogIn;
  console.log(getName);
  // eslint-disable-next-line no-use-before-define
  postForm(); // evento de click en el boton Guardar
  getPosts(); // listar
};

// export const [month, day, year] = [date.getMonth(), date.getDate(), ];
// export const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
let statusEdit = false;
let id = '';
// funcion que LISTA
const getPosts = async () => {
  const containerShowPost = document.querySelector('.containerShowPost');
  const userLogIn = getCurrentUser().uid;
  console.log(userLogIn);
  // const querySnapshot = await getPost();
  onGetPost((querySnapshot) => {
    containerShowPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const postWrite = doc.data();
      postWrite.id = doc.id;
      // postWrite.uid = doc.uid;
      // console.log(postWrite);
      // console.log(postWrite.uid);
      // MUESTRA BOTONES CUANDO EL ID ES EL MISMO DEL USUARIO
      // const DeleteEdit_div = document.querySelectorAll('.DeleteEdit_div');
      console.log(postWrite.uid);
      console.log(userLogIn);
      if (postWrite.uid === userLogIn) {
        console.log('somos iguales, muestro botones');
        containerShowPost.innerHTML += `
        <div class='containerPost-Each'>
        <div>
        ${postWrite.user}
        <p> Publication: ${postWrite.date.toDate().toUTCString()} </p>
        </div>
        <div>
        ${postWrite.description}
        </div>
        <div class="botonesalazar">
        <button class="btnShare" id="btn-Delete" data-id="${postWrite.id}"> Delete </button>
        <button class="btnShare" id="btn-Edit" data-id="${postWrite.id}"> Edit </button>
        </div>
        </div>
        </br>
      `;
      } else {
        console.log('somos diferentes, oculto botones');
        containerShowPost.innerHTML += `
        <div class='containerPost-Each'>
        <div>
        ${postWrite.user}
        <p> Publication: ${postWrite.date.toDate().toUTCString()} </p>
        </div>
        <div>
        ${postWrite.description}
        </div>
        </div>
        </br>
      `;
      }
      deletePostHome();
      editPostHome();
    });
  });
};

function deletePostHome() {
  // funcion que ELIMINA
  const btnDelete = document.querySelectorAll('#btn-Delete');
  console.log(btnDelete);
  btnDelete.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      await deletePost(e.target.dataset.id);
    });
  });
}

function editPostHome() {
  const formPost = document.getElementById('postForm');
  const descriptionForm = formPost.posWrite;
  const btnEdit = document.querySelectorAll('#btn-Edit');
  btnEdit.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      const doc = await getPostEdit(e.target.dataset.id);
      console.log(doc.data());
      const descriptionEdit = doc.data();
      statusEdit = true;
      id = doc.id;
      descriptionForm.value = descriptionEdit.description;
      formPost.btnShare.innerText = 'Update';
    });
  });
}

// FUNCION QUE  GUARDA la informacion que ingresa
function postForm() {
  const formPost = document.getElementById('postForm');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = formPost.posWrite;
    if (!statusEdit) {
      await savePost(description.value);
    } else {
      console.log('holi');
      await updatePost(id, {
        description: description.value,
      });
      statusEdit = false;
      id = '';
      formPost.btnShare.innerText = 'Share';
    }
    formPost.reset(); // limpia el área
    description.focus(); // para que el cursor se posicione ahí
    console.log(description);
  });
}
