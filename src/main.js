// Este es el punto de entrada de tu aplicacion

import { validateEmail, validatePassword } from './lib/index.js';
// import { getAnalytics } from 'firebase/analytics/dist';
// import { myFunction } from './lib/index.js';
// window.onload = () => {
//   configBD();
// };
// myFunction();
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1Voc6sDbKr4Py0D90sREgnsbOS8V9QWg',
  authDomain: 'social-media-befit.firebaseapp.com',
  projectId: 'social-media-befit',
  storageBucket: 'social-media-befit.appspot.com',
  messagingSenderId: '1024930608861',
  appId: '1:1024930608861:web:fc5e31e75040e33e788d34',
  measurementId: 'G-4FPZYCWMCE',
};
//   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const database = firebase.database();
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     const displayName = user.displayName;
//     console.log(displayName);
//     const email = user.email;
//     console.log(email);
//     const emailVerified = user.emailVerified;
//     console.log(emailVerified);
//     const photoURL = user.photoURL;
//     console.log(photoURL);
//     const isAnonymous = user.isAnonymous;
//     console.log(isAnonymous);
//     const uid = user.uid;
//     console.log(uid);
//     const providerData = user.providerData;
//     console.log(providerData);
//     const vr = 'logueado';
//     document.getElementById('login').innerHTML = vr + user.email;
//     console.log(user);
//   } else {
//     document.getElementById('login').innerHTML = 'No Logueado ';
//   }
// });
// const app = initializeApp(firebaseConfig);
// console.log(app.name);
// const analytics = getAnalytics(app);
// console.log(analytics);
const containerSignUp = document.querySelector('.container');
containerSignUp.innerHTML = '';
const indexHtlm = `
<div>
  <h1>Area de registro</h1>
  <input class="email" type="email" placeholder="Enter your email"/>
  <input class="password" type="password" placeholder="Enter your password" />
  <button id="btnRegister">SignUp</button>
  <p class="messageError"></p>
  <h1 id="login"></h1>
</div>`;
containerSignUp.innerHTML = indexHtlm;
document.getElementById('btnRegister').addEventListener('click', () => {
  const messageError = document.querySelector('.messageError');
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    // // Signed in
    //   const user = userCredential.user;
    //   console.log(user);
    //   // if (validateEmail(email) === true || validatePassword(password) === true) {
    //   //   messageError.innerHTML = 'Successful registration';
    //   // }
    // // ...
    // })
    .catch(() => (error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      alert(errorMessage);
    });
  if (validateEmail(email) === false) {
    messageError.innerHTML = 'error en email';
  } else if (validatePassword(password) === false) {
    messageError.innerHTML = 'error en password';
    console.log('Error en password');
  }
  // messageError.innerHTML = 'error en password and email';
});
// function validateEmail(email) {
//   const expression = /^[^@]+@\w+(\.\w+)+\w$/;
//   if (expression.test(email) === true) {
//     return true;
//   }
//   return false;
// }
// function validatePassword(password) {
//   if (password < 6) {
//     return false;
//   }
//   return true;
// }
// function validateField(field) {
//   if (field == null) {
//     return false;
//   }
//   if (field.lenght === 0) {
//     return false;
//   }
//   return true;
// }
