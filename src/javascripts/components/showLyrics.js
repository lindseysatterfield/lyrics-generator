const showLyrics = (songObject, lyrics) => {
  document.querySelector('#lyrics-container').innerHTML = `
  <h1>${songObject.title.toUpperCase()}</h1>
  <h3 class="mb-4">BY ${songObject.artist.toUpperCase()}</h3>`;
  document.querySelector('#lyrics-container').innerHTML += `<div id="song">${lyrics.lyrics}</div>`;
};

export default showLyrics;
