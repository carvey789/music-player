import React, {useEffect, useState, useRef} from "react";
import secondToMinute from "../utils/time";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faFastForward, faFastBackward, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const Card = ({song, setSong, songList}) => {
    const [duration, setDuration] = useState(0);
    const [isPlay, setIsPlay] = useState(true);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [time, setTime] = useState(0);
    let [index, setIndex] = useState(0);

    const refContainer = useRef(null);
    const playHandler = () => {
        setIsPlay(!isPlay);
        if(isPlay) {
            refContainer.current.play();
        } else refContainer.current.pause();
        
        console.log(refContainer);
    }

    const backwardHandler = () => {
        setTime(time - 15);
        refContainer.current.currentTime -= 15;
    }
    const forwardHandler = () => {
        setTime(time + 15);
        refContainer.current.currentTime += 15;
    }

    const prevSong = () => {
        setIndex(prevIndex => {
            return prevIndex-1 === -1 ? songList.length - 1 : prevIndex-1; 
        });
        console.log(index);
    }

    const nextSong = () => {
        setIndex(prevIndex => {
            return prevIndex+1 === songList.length ? 0 : prevIndex+1; 
        });
        console.log(index);
    }

    const onTimeUpdate = () => {
        setCurrentTime(secondToMinute(refContainer.current.currentTime));
        setTime(Math.floor(refContainer.current.currentTime));
        console.log(time);
        console.log(Math.floor(100-(time/Math.floor(duration) * 100)));
    }
    const onLoadedMetaData = () => {
        refContainer.current && setDuration(refContainer.current.duration);
    }

    useEffect(() => {
        setSong(songList[index]);
        setIsPlay(true);
    }, [index]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--color-1", song.color[0]);
        root.style.setProperty("--color-2", song.color[1]);
    }, [song]);

    return (
            <div className="container">
                <div className="card">
                    <div className="card__songImgContainer">
                        <img src={song.image} alt="song images" className="card__img"/>
                    </div>
                    <div className="songInfo">
                        <h1 className="songInfo__title">{song.title}</h1>
                        <h2 className="songInfo__artist">{song.artist}</h2>
                        <input type="range" className="songInfo__duration" min="0" max="100"></input>
                        <div className="songInfo__container">
                            <span className="songInfo__played" style={{transform: `translateX(-${Math.floor(100-(time/Math.floor(duration) * 100))}%)`}}></span>
                        </div>
                        <div className="trackLength">
                            <p className="trackLength__start">{currentTime}</p>
                            <p className="trackLength__end">{secondToMinute(duration)}</p>
                        </div>
                    </div>
                    <div className="songControl">
                        <div className="songControl__circle">
                            <FontAwesomeIcon icon={faFastBackward} onClick={() => prevSong()}/>
                        </div>
                        <div className="songControl__circle">
                            <FontAwesomeIcon icon={faBackward} onClick={() => backwardHandler()}/>
                        </div>
                        <div className="songControl__circle" onClick={() => playHandler()}>
                            <FontAwesomeIcon icon={isPlay ? faPlay : faPause} />
                        </div>
                        <div className="songControl__circle">
                            <FontAwesomeIcon icon={faForward} onClick={() => forwardHandler()}/>
                        </div>
                        <div className="songControl__circle">
                            <FontAwesomeIcon icon={faFastForward} onClick={() => nextSong()}/>
                        </div>
                    </div>
                </div>
                <audio ref={refContainer} onLoadedMetadata={onLoadedMetaData} onTimeUpdate={onTimeUpdate} src={song.audio}></audio>
            </div>
    )
}

export default Card;