const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <h1 id="title-container" class="mb-4 text-center">Lyrics Generator</h1>
    <div id="form-container"></div>
    <div id="lyrics-container"></div>`;
};

export default domBuilder;
