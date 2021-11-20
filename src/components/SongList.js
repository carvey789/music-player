import React from "react";
import Song from "./Song";

const SongList = ({song, setSong, songList}) => {
    return (
        <div className="songListContainer">
            {songList.map(song => <Song key={song.id} song={song} setSong={setSong} songList={songList}/>)}
        </div>
    )
}

export default SongList;