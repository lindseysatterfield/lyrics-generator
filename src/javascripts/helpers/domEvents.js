const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-song-btn')) {
      e.preventDefault();
      const songObject = {
        artist: document.querySelector('#artist').value,
        song: document.querySelector('#song-title').value
      };
      console.warn(songObject);
    }
  });
};

export default domEvents;
