import React from "react";
export default function SongForm(props) {
  const { addSong, songToAdd, handleChange, sortSongs } = props;
  return (
    <>
      {/* form */}
      <form className="inputs--container" onSubmit={addSong}>
        {/* Song input 1th input from the left */}
        <input
          type="text"
          placeholder="Song"
          onChange={handleChange}
          name="song"
          value={songToAdd.song}
          className="first-input"
          required
        />
        {/* Artist input 2th input from the left */}
        <input
          type="text"
          placeholder="Artist"
          onChange={handleChange}
          name="artist"
          value={songToAdd.artist}
        />

        {/* genre dropdown */}
        <select
          id="dropDown"
          placeholder="genre"
          onChange={handleChange}
          name="genre"
        >
          <option value={songToAdd.genre && "Not Categorized"}>
            Not Categorized
          </option>
          <option value={songToAdd.genre && "Rok"}>Rok</option>
          <option value={songToAdd.genre && "Jazz"}>Jazz</option>
          <option value={songToAdd.genre && "Pop"}>Pop</option>
        </select>

        {/* Rating dropdown */}
        <select
          id="dropDown-1"
          placeholder="Rating"
          onChange={handleChange}
          name="rating"
        >
          <option value={songToAdd.rating[0] && "No Rating"}> No Rating</option>
          <option value={songToAdd.rating[1]}>1</option>
          <option value={songToAdd.rating[2]}>2</option>
          <option value={songToAdd.rating[3]}>3</option>
          <option value={songToAdd.rating[4]}>4</option>
          <option value={songToAdd.rating[5]}>5</option>
        </select>
        {/* submite-button: a button in form defult to submite */}
        <button className="submite-button">Submite</button>
        {/* sortSongs with sort-button */}
        <button onClick={sortSongs} className="sort-button">
          Sort by Name
        </button>
      </form>
      {/* playlist */}
      <div className="playlist">
        <h1>Playlsit</h1>
      </div>
    </>
  );
}
