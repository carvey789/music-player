import React, {useState, useEffect} from 'react';
import Card from "./components/Card";
import data from './utils/data';
import SongList from './components/SongList';

import './styles/App.css';

function App() {
  const [songList, setSongList] = useState(data);
  const [song, setSong] = useState(songList[0]);
  
  return (
    <div className="App">
      <SongList song={song} setSong={setSong} songList={songList}/>
      <Card song={song} setSong={setSong} songList={songList}/>
    </div>
  );
}

export default App;
