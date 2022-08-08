import React from "react";
// SongList
export default function SongList(props) {
  // props destructuring
  const { songs, deleteSong } = props;
  // map songs
  const mappedSongs = songs.map((song) => (
    <div className="song-list-items" key={song.key}>
      <label className="labels">
        {song.song === "" ? "Unnamed" : song.song}
      </label>
      <label className="labels">
        {song.artist === "" ? "Unnamed" : song.artist}
      </label>
      <label className="labels">{song.genre}</label>
      <label className="labels">
        {song.rating < 1 ? "No Rating" : song.rating}
      </label>
      <button className="delete-song" onClick={() => deleteSong(song.key)}>
        Delete
      </button>
    </div>
  ));
  return <div className="song-list">{mappedSongs}</div>;
}
