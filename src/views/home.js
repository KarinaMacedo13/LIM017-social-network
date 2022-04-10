export const home = () => {
  const postWrite = `
  <section class="home">
    <div class="navWall">
       <img class="logoWall" src="./img/logoH.png">
    </div>
      <div class="headWall">
        <h3 id="nameHomeTagH3"></h3>
        <button class="btnLogOut" id="btnLogOut"> Log Out </button>
      </div>
      <div class="containerWall">
        <form class="containerPost" id="postForm">
          <p class="tillePost" >Create Post</p>
          <textarea id="posWrite" class="postWrite" name="textarea" rows="10" cols="50" placeholder="Write something here" autofocus></textarea>
          <button class="btnShare" id="btnShare"> Share </button>
        </form>
        <div class="containerShowPost">
        </div>
      </div>
  </section>`;
  return postWrite;
};
