const dataBase = firebase.firestore();
export const savePost = (description) => dataBase.collection('post').doc().set({
  description,
});
