/* eslint-disable import/no-cycle */
import {
  registerFirebase, registerAndLoginGoogle,
  verificar,
  updater,
} from '../lib/userFirebase.js';
import { onNavigate } from '../main.js';

export const showRegister = () => {
  // btn LogIn, from Register to Log in
  const logInHere = document.getElementById('logInHere');
  const name = document.querySelector('#name');
  const lastName = document.querySelector('#lastName');
  const messageSignUpError = document.querySelector('.messageSignUpError');
  name.addEventListener('keyup', (e) => {
    const valorName = e.target.value;
    name.value = valorName.replace(/\d/g, '');// no permite números y letras mayúsculas
  });
  lastName.addEventListener('keyup', (e) => {
    const valorLastName = e.target.value;
    lastName.value = valorLastName.replace(/\d/g, '');// no permite números y letras mayúsculas
  });
  logInHere.addEventListener('click', () => {
    onNavigate('/');
  });
  // SignUp button -> LogIn
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => {
    const email = document.querySelector('#emailSignUp').value;
    const password = document.querySelector('#passwordSignUp').value;
    const nameValue = name.value;
    // validar espacios
    if ((name.value === '') || (lastName.value === '') || (email === '') || (password === '')) {
      messageSignUpError.innerHTML = 'Fill in the missing field';
    } else {
      registerFirebase(email, password, nameValue)
        .then((userCredential) => {
          const user = userCredential.user;
          verificar();
          updater(nameValue);
          // user.updateProfile({
          //   // aqui guardas los componentes
          //   displayName: nameValue,
          // }).then(() => {
          //   alert('Registro exitoso');
          // }).catch((error) => {
          //   // An error occurred
          //   // ...
          // // getData();
          // });
          // localStorage.setItem('user', JSON.stringify(user.email));
          // localStorage.setItem('name', JSON.stringify(user.displayName));
          onNavigate('/');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
          messageSignUpError.innerHTML = errorMessage;
        });
    }
  });
  // Button Google
  const btnSignUpGoogle = document.getElementById('btnSignUpGoogle');
  btnSignUpGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then(() => {
        onNavigate('/home');
        // getData();
      });
  });
};
