const showLyrics = (songObject, lyrics) => {
  document.querySelector('#lyrics-container').innerHTML = `
  <h2>${songObject.title.toUpperCase()}</h2>
  <h4 class="mb-4">BY ${songObject.artist.toUpperCase()}</h4>`;
  document.querySelector('#lyrics-container').innerHTML += `<div id="song">${lyrics.lyrics}</div>`;
};

export default showLyrics;
