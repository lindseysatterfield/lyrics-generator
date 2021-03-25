import axios from 'axios';

// GET LYRICS
const getLyrics = (songObject) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${songObject.artist}/${songObject.title}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getLyrics;
