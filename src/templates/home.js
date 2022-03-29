export const home = () => {
  const postWrite = `
  <div class="containerPost">
  <p>Create Post</p>
  <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
  <button class="btnShare" id="btnShare"> Share </button>
  </div>
  `;
  return postWrite;
};
