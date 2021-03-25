const lyricsForm = () => {
  document.querySelector('#form-container').innerHTML = `
  <form>
    <div class="form-group">
      <label for="artist" id="label" >Artist:</label>
      <input type="text" class="form-control" id="artist" aria-describedby="artist" placeholder="Queen">
    </div>
    <div class="form-group">
      <label for="song-title" id="label">Song title:</label>
      <input type="text" class="form-control" id="song-title" placeholder="Under Pressure">
    </div>
    <div class="col text-center">
      <button type="submit" class="btn btn-secondary" id="submit-song-btn">SEARCH FOR LYRICS</button>
    </div> 
  </form>`;
};

export default lyricsForm;
