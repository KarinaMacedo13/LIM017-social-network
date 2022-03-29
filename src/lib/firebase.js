import { registerToHome } from '../main.js';
import { register } from '../templates/register.js';
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
// Initialize Firebase
export const firebaseBefit = firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     const displayName = user.displayName;
//     console.log(displayName);
//     const email = user.email;
//     console.log(email);
//     const emailVerified = user.emailVerified;
//     let textoVerificado = '';
//     if (emailVerified === false) {
//       textoVerificado = ' Email no verificado';
//     } else {
//       textoVerificado = ' Email verificado';
//     }
//     const photoURL = user.photoURL;
//     console.log(photoURL);
//     const isAnonymous = user.isAnonymous;
//     console.log(isAnonymous);
//     const uid = user.uid;
//     console.log(uid);
//     const providerData = user.providerData;
//     console.log(providerData);
//     const vr = 'logueado';
//     document.getElementById('login').innerHTML = vr + user.email + textoVerificado;
//     console.log(user);
//   } else {
//     document.getElementById('login').innerHTML = 'No Logueado ';
//   }
// });
const messageSignUp = document.querySelector('.messageSignUp');
const messageLogIn = document.querySelector('.messageLogIn');

export const registerFirebase = (email, password) => {
  register();
  const registerBefit = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // onNavigate('/');
      registerToHome();
      // const palabra = 'Tu cuenta a sido creado con éxito, con el email: ';
      // const palabra2 = ' y la contraseña: ';
      // messageSignUp.innerHTML = palabra + email + palabra2 + password + user;
      // llamar a home
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      messageSignUp.innerHTML = errorMessage;
    });
  console.log(registerBefit);
  return registerBefit;
};

export const registerGoogle = () => {
  register();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => { messageSignUp.innerHTML = result; })
    .catch((error) => { messageSignUp.innerHTML = error; });
};

export const loginFirebase = (emailLogIn, passwordLogIn) => {
  login();
  firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
    .then((userCredential) => {
      registerToHome();
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
