// Este es el punto de entrada de tu aplicacion
import { firebaseBefit } from './lib/firebase.js';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const displayName = user.displayName;
    console.log(displayName);
    const email = user.email;
    console.log(email);
    const emailVerified = user.emailVerified;
    console.log(emailVerified);
    const photoURL = user.photoURL;
    console.log(photoURL);
    const isAnonymous = user.isAnonymous;
    console.log(isAnonymous);
    const uid = user.uid;
    console.log(uid);
    const providerData = user.providerData;
    console.log(providerData);
    const vr = 'logueado';
    document.getElementById('login').innerHTML = vr + user.email;
    console.log(user);
  } else {
    document.getElementById('login').innerHTML = 'No Logueado ';
  }
});
// const app = initializeApp(firebaseConfig);
// console.log(app.name);
// const analytics = getAnalytics(app);
// console.log(analytics);
const containerSignUp = document.querySelector('.container');
containerSignUp.innerHTML = '';
const indexHtlm = `
<div>
  <h1>Sign up</h1>
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
    .then((userCredential) => {
      const user = userCredential.user;
      const palabra = 'Tu cuenta a sido creado con éxito, con el email: ';
      const palabra2 = ' y la contraseña: ';
      messageError.innerHTML = palabra + email + palabra2 + password + user;
      console.log(user);
    //   // if (validateEmail(email) === true || validatePassword(password) === true) {
    //   //   messageError.innerHTML = 'Successful registration';
    //   // }
    // // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      messageError.innerHTML = errorMessage;
      // alert(errorMessage);
    });
});
