// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';

export const register = () => {
  const htmlRegister = `<div class="containerSignUpLogIn">
      <div class="signUp">
        <div class="signUpContent">
          <h1>Sign up</h1>
          <label class="labels" for="fullName"> Full Name </label>
          <input class="input" id="fullName" type="text" placeholder=" "/>
          <label class="labels" for="lastName"> Last Name </label>
          <input class="input" id="lastName" type="text" placeholder=" "/>
          <label class="labels" for="emailSignUp"> Email </label>
          <input class="input" id="emailSignUp" type="email" placeholder=" "/>
          <label class="labels" for="passwordSignUp"> Password </label>
          <input class="input" id="passwordSignUp" type="password" placeholder=" " />
          <button class="btnSignupLogin" id="btnRegister">Sign Up</button><br>
          <button class="btnGoogle" id="btnSignUpGoogle"> <span class="fa-brands fa-google"> </span> Sign Up with Google</button>
          <p class="messageSignUp"></p>
          <p class="message">Already have an account?</p>
          <button class="btnSig" id="btnUp"> Log In </button>
        </div>
      </div>
    </div>`;
  return htmlRegister;
};
document.querySelector('#root');
