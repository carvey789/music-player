import React from "react";
import Song from "./Song";

const SongList = ({song, setSong, songList}) => {
    return (
        <div className="songListContainer">
            <Song song={song} />
        </div>
    )
}

export default SongList;