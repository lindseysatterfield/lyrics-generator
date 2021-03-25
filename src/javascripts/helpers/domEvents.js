import showLyrics from '../components/showLyrics';
import getLyrics from './lyrics';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-song-btn')) {
      e.preventDefault();
      const artist = document.querySelector('#artist').value;
      const title = document.querySelector('#song-title').value;
      const songObject = {
        artist,
        title
      };
      getLyrics(songObject).then((lyrics) => showLyrics(songObject, lyrics));
      document.querySelector('form').reset();
    }
  });
};

export default domEvents;
