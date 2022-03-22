// Este es el punto de entrada de tu aplicacion
import { firebaseBefit, register } from './lib/firebase.js';

// const app = initializeApp(firebaseConfig);
// console.log(app.name);
// const analytics = getAnalytics(app);
// console.log(analytics);
const containerSignUp = document.querySelector('.container');
containerSignUp.innerHTML = '';
const signUpHtlm = `
<div class="signUp">
  <h1>Sign up</h1>
  <input class="email" type="email" placeholder="Enter your email"/>
  <input class="password" type="password" placeholder="Enter your password" />
  <button id="btnRegister">Sign Up</button>
  <p class="messageSignUp"></p>
</div>
<div class="login">
  <h1>Log In</h1>
  <input class="emailLogIn" type="email" placeholder="Enter your email"/>
  <input class="passwordLogIn" type="password" placeholder="Enter your password" />
  <button id="btnLogIn">Log In</button>
  <p class="messageLogIn"></p>
  <h1 id="login"></h1>
</div>`;
containerSignUp.innerHTML = signUpHtlm;
document.getElementById('btnRegister').addEventListener('click', () => {
  const messageSignUp = document.querySelector('.messageSignUp');
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  // const r1 = register(email, password);
  // messageSignUp.innerHTML = errorMessage;
  // firebase.auth().createUserWithEmailAndPassword(email, password)
  register(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const messageRegister = 'Tu cuenta a sido creado con éxito, con el email: ';
      // const palabra2 = ' y la contraseña: ';
      messageSignUp.innerHTML = messageRegister + email;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      messageSignUp.innerHTML = errorMessage;
      // alert(errorMessage);
    });
});
document.getElementById('btnLogIn').addEventListener('click', () => {
  const messageLogIn = document.querySelector('.messageLogIn');
  const emailLogIn = document.querySelector('.emailLogIn').value;
  const passwordLogIn = document.querySelector('.passwordLogIn').value;
  firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      messageLogIn.innerHTML = errorMessage;
      // alert(errorMessage);
    });
});
