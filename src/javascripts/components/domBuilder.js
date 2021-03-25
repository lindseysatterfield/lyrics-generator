import music from '../../assets/music.png';

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <h1 id="title-container" class="mb-4 text-center"><img src="${music}"> Lyrics Generator <img src="${music}"></h1>
    <div id="form-container"></div>
    <div id="lyrics-container" class="text-center"></div>`;
};

export default domBuilder;
