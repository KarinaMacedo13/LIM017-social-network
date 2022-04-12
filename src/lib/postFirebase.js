import { getCurrentUser } from './userFirebase.js';

const dataBase = firebase.firestore();
// export const getPost = () => dataBase.collection('post').get();

// FUNCION QUE POSTEA
export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
export const deletePost = id => dataBase.collection('post').doc(id).delete();
export const savePost = (description) => dataBase.collection('post').doc().set({
  uid: getCurrentUser().uid,
  user: getCurrentUser().displayName,
  description,
  date: new Date(),
});
