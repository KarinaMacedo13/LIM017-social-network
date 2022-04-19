import { getCurrentUser } from './userFirebase.js';

const dataBase = firebase.firestore();
// export const getPost = () => dataBase.collection('post').get();

// FUNCION QUE POSTEA

export const savePost = (description) => dataBase.collection('post').doc().set({
  uid: getCurrentUser().uid,
  user: getCurrentUser().displayName,
  description,
  date: new Date(),
  dateTime: firebase.firestore.Timestamp.fromDate(new Date()),
  likesArray: [],
  likesCount: 0,
});

export const onGetPost = (callback) => dataBase.collection('post').orderBy('dateTime', 'desc').onSnapshot(callback);
export const deletePost = (id) => dataBase.collection('post').doc(id).delete();
export const getPostEdit = (id) => dataBase.collection('post').doc(id).get();
export const updatePost = (id, updatedPost) => dataBase.collection('post').doc(id).update(updatedPost);
// Leer el contenido de cada documento de la colección publicaciones
// const q = query(collection(db, 'publicaciones'), orderBy('dateTime', 'desc'));

// dataBase.collection('post').orderBy('dateTime', 'desc');
// eslint-disable-next-line arrow-body-style
export const arrayU = (data) => { return firebase.firestore.FieldValue.arrayUnion(data); };
// eslint-disable-next-line arrow-body-style
export const arrayR = (data) => { return firebase.firestore.FieldValue.arrayRemove(data); };
