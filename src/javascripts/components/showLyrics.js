const showLyrics = (songObject, lyrics) => {
  document.querySelector('#lyrics-container').innerHTML = `
    <h1>${songObject.artist}</h1>
    <h2>${songObject.title}</h2>`;
  document.querySelector('#lyrics-container').innerHTML += `<div>${lyrics.lyrics}</div>`;
};

export default showLyrics;
