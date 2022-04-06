export const home = () => {
  const postWrite = `
  <section class="home">
  <div class="navWall">
  <img class="logoWall" src="./img/logoH.png">
  </div>
  <div class="containerWall">
  <div class="containerPost">
  <p class="tillePost" >Create Post</p>
  <textarea class="postWrite" name="textarea" rows="10" cols="50" placeholder="Write something here"></textarea>
  <button class="btnShare" id="btnShare"> Share </button>
  <h3 id="loginHome"></h3>
  <button class="btnSignupLogin" id="btnLogOut">Cerrar sesión</button>
  </div>
  </div>
  </section>`;
  return postWrite;
};
