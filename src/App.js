import React, {useState, useEffect} from 'react';
import Card from "./components/Card";
import data from './utils/data';

import './styles/App.css';

function App() {
  const [songList, setSongList] = useState(data);
  const [song, setSong] = useState(data[0]);
  
  return (
    <div className="App">
      <Card song={song} setSong={setSong}/>
    </div>
  );
}

export default App;
