/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-cycle
import { login } from '../templates/login.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB1Voc6sDbKr4Py0D90sREgnsbOS8V9QWg',
  authDomain: 'social-media-befit.firebaseapp.com',
  projectId: 'social-media-befit',
  storageBucket: 'social-media-befit.appspot.com',
  messagingSenderId: '1024930608861',
  appId: '1:1024930608861:web:fc5e31e75040e33e788d34',
  measurementId: 'G-4FPZYCWMCE',
};
// Inicia Firebase
export const firebaseBefit = firebase.initializeApp(firebaseConfig);

// Registro de Firebase con Email
export const registerFirebase = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
// Registro y logueo con Google
const provider = new firebase.auth.GoogleAuthProvider();
export const registerAndLoginGoogle = () => firebase.auth().signInWithPopup(provider);
// Login de Firebase con Email
export const loginFirebase = (emailLogIn, passwordLogIn) => {
  const messageLogIn = document.querySelector('.messageLogIn');
  login();
  firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
    .then((userCredential) => {
      // registerToHome();
      // const palabra = 'Tu cuenta a sido creado con éxito, con el email: ';
      // const palabra2 = ' y la contraseña: ';
      // messageSignUp.innerHTML = palabra + email + palabra2 + password + user;
      // llamar a home
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode2 = error.code;
      console.log(errorCode2);
      const errorMessage2 = error.message;
      messageLogIn.innerHTML = errorMessage2;
      // alert(errorMessage);
    });
  // eslint-disable-next-line no-use-before-define
  getData();
};

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
      // debugger;
      // localStorage.setItem('user', JSON.stringify(user));
      const vr = 'logueado: ';
      document.getElementById('loginHome').innerHTML = vr + email;
      console.log(vr + user.email);
      console.log(user);
    } else {
      document.getElementById('login').innerHTML = 'No Logueado ';
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

export const cerrar = () => {
  firebase.auth().signOut()
    .then((result) => {
      console.log(result);
      console.log('cerrar');
    })
    .catch((error) => {
      console.log(error);
    });
};
