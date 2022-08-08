import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { v4 as uuid4v } from "uuid";
function SongOverview() {
  // songs useState
  const [songs, setsongs] = useState([
    {
      key: uuid4v(),
      song: "Sweat home",
      artist: "0.50",
      genre: "Pop",
      rating: [5],
    },
  ]);
  // songToAdd useState
  const [songToAdd, setSongToAdd] = useState({
    key: uuid4v(),
    song: "",
    artist: "",
    genre: "Not Categorized",
    rating: [0],
  });
  // addSong
  function addSong(event) {
    event.preventDefault();
    setsongs((prevState) => {
      return [...prevState, { ...songToAdd, key: uuid4v() }];
    });
  }
  // handleChange
  function handleChange(e) {
    const { name, value } = e.target;
    setSongToAdd((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  // handleChange
  function deleteSong(id) {
    const newSongs = songs.filter((song) => song.key !== id);
    newSongs.splice(id, 0);
    setsongs([...newSongs]);
  }
  // sortSongs
  function sortSongs(e) {
    e.preventDefault();
    const strDescending = [...songs].sort((a, b) =>
      a.song.toUpperCase() > b.song.toUpperCase() ? 1 : -1
    );
    setsongs([...strDescending]);
  }

  return (
    <div className="App">
      {/* Passing props to SongForm */}
      <div className="flex-container">
        <SongForm
          addSong={addSong}
          songToAdd={songToAdd}
          handleChange={handleChange}
          sortSongs={sortSongs}
        />
        <div style={{ width: "100%" }}>
          <div className="song-header">
            <div className="song-row__item">Song</div>
            <div className="song-row__item">Artist</div>
            <div className="song-row__item">Genre</div>
            <div className="song-row__item">Rating</div>
          </div>
        </div>
        {/* Passing props to SongList */}
        <SongList songs={songs} deleteSong={deleteSong} />
      </div>
    </div>
  );
}

export default SongOverview;
