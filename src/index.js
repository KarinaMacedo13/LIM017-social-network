// Este es el punto de entrada de tu aplicacion
// import { firebaseBefit, register, verificar } from './lib/firebase.js';

// console.log(firebaseBefit);
// console.log(register);
// console.log(verificar);

// const app = initializeApp(firebaseConfig);
// console.log(app.name);
// const analytics = getAnalytics(app);
// console.log(analytics);
// console.log(firebaseBefit);
// const auth = firebase.auth();
// const container = document.querySelector('.container');
// container.innerHTML = '';
// const containerHtlm = `
// <img class="logo" src="./img/logo.png">
// <div class="tabs">
//   <div class="info">
//     <img class="logoTab" src="./img/logo.png">
//     <p class="lema"> A place where you find people like you. </p>
//   </div>
//   <div class="tabsLogSign">
//       <p class="tabsMessage"> Log In </p>
//       <p class="tabsMessage"> Sign Up </p>
//   </div>
// </div>
// <div class="containerSignUpLogIn">
// <div class="signUp">
//   <div class="signUpContent">
//     <h1>Sign up</h1>
//     <label class="labels" for="fullName"> Full Name </label>
//     <input class="input" id="fullName" type="text" placeholder=" "/>
//     <label class="labels" for="lastName"> Last Name </label>
//     <input class="input" id="lastName" type="text" placeholder=" "/>
//     <label class="labels" for="emailSignUp"> Email </label>
//     <input class="input" id="emailSignUp" type="email" placeholder=" "/>
//     <label class="labels" for="passwordSignUp"> Password </label>
//     <input class="input" id="passwordSignUp" type="password" placeholder=" " />
//     <button class="btnSignupLogin" id="btnRegister">Sign Up</button><br>
//     <button class="btnGoogle" id="btnSignUpGoogle">
// <span class="fa-brands fa-google"> </span> Sign Up with Google</button >
//     <p class="messageSignUp"></p>
//     <p class="message">Already have an account?</p>
//     <button class="btnSig" id="btnUp"> Log In </button>
//     </div>
// </div>
// <div class="logIn">
//   <h1>Log In</h1>
//   <label class="labels" for="emailLogIn"> Email Address </label>
//   <input class="input" id="emailLogIn" type="email" placeholder=" "/>
//   <label class="labels" for="passwordLogIn"> Password </label>
//   <input class="input" id="passwordLogIn" type="password" placeholder=" " />
//   <button class="btnSignupLogin" id="btnLogIn">Log In</button> <br>
//   <button class="btnGoogle" id="btnSignUpGoogle2">
// <span class="fa-brands fa-google"> </span> Log In with Google</button >
//   <p class="messageLogIn"></p>
//   <p class="message"> Already have an account?</p>
//   <button class="btnSig" id="btnSig"> Sign Up here.</button>
//   <h3 id="login"></h3>
//   <button class="btnSignupLogin" id="btnLogOut">Cerrar sesión</button>
// </div>
// </div>`;
// const messageSignUp = document.querySelector('.messageSignUp');
// container.innerHTML = containerHtlm;
// document.getElementById('btnRegister').addEventListener('click', () => {
//   const messageSignUp = document.querySelector('.messageSignUp');
//   const email = document.querySelector('#emailSignUp').value;
//   const password = document.querySelector('#passwordSignUp').value;
//   messageSignUp.style.display = 'block';
//   // const r1 = register(email, password);
//   // messageSignUp.innerHTML = errorMessage;
//   // firebase.auth().createUserWithEmailAndPassword(email, password)
//   register(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const messageRegister = 'Your account has been successfully created, e-mail: ';
//       // const palabra2 = ' y la contraseña: ';
//       messageSignUp.innerHTML = messageRegister + email;
//       console.log(messageSignUp);
//       // verificar();
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       console.log(errorCode);
//       const errorMessage = error.message;
//       messageSignUp.innerHTML = errorMessage;
//       // alert(errorMessage);
//     });
// });
// document.getElementById('btnLogIn').addEventListener('click', () => {
//   const messageLogIn = document.querySelector('.messageLogIn');
//   const emailLogIn = document.querySelector('#emailLogIn').value;
//   const passwordLogIn = document.querySelector('#passwordLogIn').value;
//   messageLogIn.style.display = 'block';
//   firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
//     .catch((error) => {
//       const errorCode = error.code;
//       console.log(errorCode);
//       const errorMessage = error.message;
//       messageLogIn.innerHTML = errorMessage;
//       // alert(errorMessage);
//     });
// });
// // botones de signUp and logIn
// document.getElementById('btnSig').addEventListener('click', () => {
//   document.querySelector('.signUp').style.display = 'block';
//   document.querySelector('.logIn').style.display = 'none';
// });
// document.getElementById('btnUp').addEventListener('click', () => {
//   document.querySelector('.signUp').style.display = 'none';
//   document.querySelector('.logIn').style.display = 'block';
// });
// // btn google
// document.querySelector('#btnSignUpGoogle').addEventListener('click', () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       messageSignUp.innerHTML = result;
//     }).catch((error) => {
//       messageSignUp.innerHTML = error;
//     });
// });

// document.querySelector('#btnLogOut').addEventListener('click', () => {
//   firebase.auth().signOut()
//     .then((result) => {
//       console.log('Salir');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
