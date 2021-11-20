import React from "react";

const Song = ({song, setSong, songList}) => {
    const clickHandler = (id) => {
        setSong(songList.filter(song => song.id == id)[0])
    }

    return (
        <div className="songListContainer__song" onClick={() => clickHandler(song.id)}>
            <img src={song.image} className="songListContainer__img" ></img>
            <div className="songListContainer__info">
                <h3 className="songListContainer__title">{song.title}</h3>
                <p className="songListContainer__artist">{song.artist}</p>
            </div>  
        </div>
    )
}

export default Song;