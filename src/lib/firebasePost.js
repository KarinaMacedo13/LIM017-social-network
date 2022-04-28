/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, Timestamp, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
  getDocs, orderBy, query, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { app } from './firebaseConfig.js';
import { getCurrentUser } from './firebaseUser.js';

const dataBase = getFirestore(app);

// FUNCION QUE POSTE: crea un documento con el contenido a publicar en la colección publicaciones
export const savePost = (description) => {
  addDoc(collection(dataBase, 'post'), {
    uid: getCurrentUser().uid,
    user: getCurrentUser().displayName,
    description,
    date: new Date(),
    dateTime: Timestamp.fromDate(new Date()),
    likesArray: [],
    likesCount: 0,
  });
};
// FUNCION QUE LISTA
const q = query(collection(dataBase, 'post'), orderBy('dateTime', 'desc'));
export const onGetPost = (querySnapshot) => onSnapshot(q, querySnapshot);

// FUNCION PARA ELIMINAR
export const deletePost = (id) => deleteDoc(doc(dataBase, 'post', id));

// FUNCION PARA EDITAR
export const getPostEdit = (id) => getDoc(doc(dataBase, 'post', id));
export const updatePost = (id, updatedPost) => updateDoc(doc(dataBase, 'post', id), updatedPost);
export const getPostEdits = () => getDocs(collection(dataBase, 'post'));

// PARA EL ARRAY
export const arrayU = (data) => { return arrayUnion(data); };
export const arrayR = (data) => { return arrayRemove(data); };
