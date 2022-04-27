/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { singOutFirebase, getCurrentUser } from '../lib/firebaseUser.js';
import {
  savePost,
  onGetPost,
  deletePost,
  getPostEdit,
  updatePost,
//   arrayR,
//   arrayU,
} from '../lib/firebasePost.js';
import { onNavigate } from '../main.js';
import { showModal } from './modalDOM.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOutFirebase();
    onNavigate('/');
  });
  const nameLogIn = getCurrentUser().displayName;
  const uidLogIn = getCurrentUser().uid;
  console.log(uidLogIn);
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  const string2 = 'logueado ';
  nameHomeTagH3.innerHTML = string2 + nameLogIn;
  postForm();
  getPosts();
};

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
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
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
      console.log('somos iguales, muestro botones');
      containerShowPost.innerHTML += `
        <div class='containerPost-Each'>
        <div>
        ${postWrite.user}
        <p> Publication: ${postWrite.date.toDate().toLocaleDateString('en-US', options)} </p>
        </div>
        <div>
        ${postWrite.description}
        </div>
        ${postWrite.uid === userLogIn
    ? `<div class="botonesalazar">
        <!-- <i class="fa-regular fa-trash"></i>
        <i class="fa-regular fa-pencil"></i> -->
        <button class="btnShare btnDelete" data-id="${postWrite.id}"> Delete </button>
        <button class="btnShare btnEdit" data-id="${postWrite.id}"> Edit </button>
        </div>` : ''}
        <button class="likes" data-id='${doc.id}'><i class="fa-solid fa-heart"></i>${postWrite.likesCount} Like</button>
        </div>
        </br>
      `;
      const btnOpenPost = document.getElementById('btnPost');
      btnOpenPost.addEventListener('click', () => {
        openModelPost();
      });
      // aca
      deletePostHome();
      editPostHome();
      // likesPost();
      // postLike();
    });
  });
};

function deletePostHome() {
  // funcion que ELIMINA
  const btnYes = document.querySelector('#btnYes');
  const btnCancel = document.querySelector('#btnCancel');
  const btnDelete = document.querySelectorAll('.btnDelete');
  const modal = document.getElementById('myModal');
  // const modal2 = document.querySelector('.modal-content2');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const postDeleteYes = e.target.dataset.id;
      modal.style.display = 'block';
      showModal();
      console.log(e.target);
      btnYes.addEventListener('click', async () => {
        await deletePost(postDeleteYes);
        // modal.style.display = 'none';
        // modal2.style.display = 'block';
        // alert('Eliminado exitosamente');
        modal.style.display = 'none';
      });
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });
}

function editPostHome() {
  const formPost = document.getElementById('postForm');
  const descriptionForm = formPost.posWrite;
  const btnEdit = document.querySelectorAll('.btnEdit');
  // const modalPost = document.getElementById('myModalPost');
  btnEdit.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      openModelPost();
      const doc = await getPostEdit(e.target.dataset.id);
      console.log(doc.data());
      const descriptionEdit = doc.data();
      statusEdit = true;
      id = doc.id;
      descriptionForm.value = descriptionEdit.description;
      formPost.btnShare.innerText = 'Update';
      // modalPost.style.display = 'none';
    });
  });
}

function postForm() {
  const formPost = document.getElementById('postForm');
  const modalPost = document.getElementById('myModalPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = formPost.posWrite;
    if (!statusEdit) {
      await savePost(description.value);
      modalPost.style.display = 'none';
    } else {
      console.log('holi');
      await updatePost(id, {
        description: description.value,
      });
      statusEdit = false;
      id = '';
      modalPost.style.display = 'none';
      formPost.btnShare.innerText = 'Share';
    }
    formPost.reset(); // limpia el área
    description.focus(); // para que el cursor se posicione ahí
    console.log(description);
  });
}

function openModelPost() {
  const modalPost = document.getElementById('myModalPost');
  modalPost.style.display = 'block';
  showModal();
}
