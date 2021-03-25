import lyricsForm from '../components/lyricsForm';
import domBuilder from '../components/domBuilder';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  lyricsForm();
  domEvents();
};

export default startApp;
