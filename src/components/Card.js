import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faFastForward, faFastBackward, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const Card = ({song, setSong}) => {
    const [duration, setDuration] = useState(0);
    const [isPlay, setIsPlay] = useState(false);

    const audio = new Audio();
    audio.src = song.audio;
    audio.onloadedmetadata = async function() {
        const duration = await audio.duration;
    }

    useEffect(() => {
        isPlay ? audio.play() : audio.pause();
    },[isPlay])

    useEffect(() => {
        audio.addEventListener('ended', () => setIsPlay(false));
        return () => {
          audio.removeEventListener('ended', () => setIsPlay(false));
        };
    }, []);

    const root = document.querySelector(':root');
    // @ts-ignore
    root.style.setProperty("--color-1", song.color[0])
    // @ts-ignore
    root.style.setProperty("--color-2", song.color[1])

    return (
        <div className="container">
            <div className="card">
                <div className="card__songImgContainer">
                    
                </div>
                <div className="songInfo">
                    <h1 className="songInfo__title">{song.title}</h1>
                    <h2 className="songInfo__artist">{song.artist}</h2>
                    <input type="range" className="songInfo__duration" min="0" max="100" style={{backgroundImage: `linear-gradient(to right, ${song.color[0]}, ${song.color[1]});`}}></input>
                    <div className="songInfo__container">
                        <span className="songInfo__played"></span>
                    </div>
                    <div className="trackLength">
                        <p className="trackLength__start">00:00</p>
                        <p className="trackLength__end">00:00</p>
                    </div>
                </div>
                <div className="songControl">
                    <div className="songControl__circle">
                        <FontAwesomeIcon icon={faFastBackward} />
                    </div>
                    <div className="songControl__circle">
                        <FontAwesomeIcon icon={faBackward} />
                    </div>
                    <div className="songControl__circle" onClick={() => setIsPlay(!isPlay)}>
                        <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
                    </div>
                    <div className="songControl__circle">
                        <FontAwesomeIcon icon={faForward} />
                    </div>
                    <div className="songControl__circle">
                        <FontAwesomeIcon icon={faFastForward} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;