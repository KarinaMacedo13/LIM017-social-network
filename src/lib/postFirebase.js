import { getCurrentUser } from './userFirebase.js';

const dataBase = firebase.firestore();
export const getPost = () => dataBase.collection('post').get();
export const savePost = (description) => dataBase.collection('post').doc().set({
  uid: getCurrentUser().uid,
  user: getCurrentUser().displayName,
  description,
  date: new Date(),
});
