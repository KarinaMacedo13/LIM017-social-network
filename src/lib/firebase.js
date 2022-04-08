const firebaseConfig = {
  apiKey: 'AIzaSyB1Voc6sDbKr4Py0D90sREgnsbOS8V9QWg',
  authDomain: 'social-media-befit.firebaseapp.com',
  projectId: 'social-media-befit',
  storageBucket: 'social-media-befit.appspot.com',
  messagingSenderId: '1024930608861',
  appId: '1:1024930608861:web:fc5e31e75040e33e788d34',
  measurementId: 'G-4FPZYCWMCE',
};
// Initialize Firebase
export const firebaseBefit = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Registro con correo
export const registerFirebase = (email, password, name, lastName) => {
  const registerBefit = firebase.auth()
    .createUserWithEmailAndPassword(email, password);
  return registerBefit;
};

// Registro y logueo con Google
const provider = new firebase.auth.GoogleAuthProvider();
export const registerAndLoginGoogle = () => {
  const registerandLoginGoogleBefit = firebase.auth().signInWithPopup(provider);
  return registerandLoginGoogleBefit;
};

// Logueo con correo
export const loginFirebase = (emailLogIn, passwordLogIn) => {
  const loginBefit = firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);
  return loginBefit;
};

// export const getData = () => {
//   const user = firebase.auth().currentUser;
//   console.log(user);
//   if (user) {
//     const displayName = user.displayName;
//     console.log(displayName);
//     const email = user.email;
//     const emailVerified = user.emailVerified;
//     console.log(emailVerified);
//     const photoURL = user.photoURL;
//     console.log(photoURL);
//     const isAnonymous = user.isAnonymous;
//     console.log(isAnonymous);
//     console.log(email);
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // ...
//   } else {
//     // No user is signed in.
//   }
// };

export const getData = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const displayName = user.displayName;
      console.log(displayName);
      const email = user.email;
      const emailVerified = user.emailVerified;
      console.log(emailVerified);
      // let textoVerificado = '';
      // if (emailVerified === false) {
      //   textoVerificado = ' Email no verificado';
      // } else {
      //   textoVerificado = ' Email verificado';
      // }
      const photoURL = user.photoURL;
      console.log(photoURL);
      const isAnonymous = user.isAnonymous;
      console.log(isAnonymous);
      const uid = user.uid;
      console.log(uid);
      const providerData = user.providerData;
      console.log(providerData);
      //   const vr = 'logueado: ';
      //   document.getElementById('loginHome').innerHTML = vr + email;
      //   console.log(vr + user.email);
      //   console.log(user);
      // } else {
      //   document.getElementById('login').innerHTML = 'No Logueado ';
    }
  });
};

// export const verificar = () => {
//   const user = firebase.auth().currentUser;
//   user.sendEmailVerification()
//     .then((result) => {
//       console.log(result);
//     // Email sent.
//     }).catch((error) => {
//       console.log(error);
//     // An error happened.
//     });
// };

// SIGN OUT - CERRAR SESIÓN
export const singOut = () => {
  firebase.auth().signOut()
    .then((result) => {
      console.log(result);
      console.log('cerrar');
    })
    .catch((error) => {
      console.log(error);
    });
};

// const getPost = () => dataBase.collection('post').get();

// window.addEventListener('DOMContentLoaded', async (e) => {
//   const postBefit = await getPost();
//   console.log(postBefit);
//   console.log(e);
// });
