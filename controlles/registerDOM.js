/* eslint-disable import/no-cycle */
import { register } from '../templates/register.js';
import { onNavigate, registerToHome, showLogin } from '../main.js';
import { registerFirebase, registerAndLoginGoogle, getData } from '../lib/firebase.js';

export function showRegister() {
  register();
  // btn LogIn, from Register to Log in
  const logInHere = document.getElementById('logInHere');
  const name = document.querySelector('#name');
  const lastName = document.querySelector('#lastName');
  name.addEventListener('keyup', (e) => {
    const valorName = e.target.value;
    console.log(valorName);
    name.value = valorName.replace(/\d/g, '');// no permite números y letras mayúsculas
  });
  lastName.addEventListener('keyup', (e) => {
    const valorLastName = e.target.value;
    console.log(valorLastName);
    lastName.value = valorLastName.replace(/\d/g, '');// no permite números y letras mayúsculas
  });
  logInHere.addEventListener('click', () => {
    onNavigate('/');
    // eslint-disable-next-line no-use-before-define
    showLogin();
  });
  // SignUp button -> LogIn
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => {
    const email = document.querySelector('#emailSignUp').value;
    console.log(email);
    const password = document.querySelector('#passwordSignUp').value;
    // validar espacios
    if ((name.value === '') || (lastName.value === '') || (email === '') || (password === '')) {
      console.log('Campos vacios');
      // e.preventDefault();
      const messageSignUpError = document.querySelector('.messageSignUpError');
      messageSignUpError.innerHTML = 'Fill in the missing field';
    } else {
      const messageSignUpError = document.querySelector('.messageSignUpError');
      registerFirebase(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // eslint-disable-next-line no-use-before-define
          getData();
          registerToHome();
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
          messageSignUpError.innerHTML = errorMessage;
        });
      console.log(registerFirebase(email, password));
    }
  });
  // Button Google
  const btnSignUpGoogle = document.getElementById('btnSignUpGoogle');
  btnSignUpGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then((result) => {
        registerToHome();
        getData();
      });
  });
}
