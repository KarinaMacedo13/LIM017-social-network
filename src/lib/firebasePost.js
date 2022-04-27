/* eslint-disable import/no-unresolved */
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { app } from './firebaseConfig.js';
import { getCurrentUser } from './firebaseUser.js';

const dataBase = getFirestore(app);

export const savePost = (description) => {
  addDoc(collection(dataBase, 'post'), {
    description,
  });
};
