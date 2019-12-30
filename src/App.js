import React, {useState} from 'react';
import './App.css';
import Gavin from './Components/Gavin'
import Braden from "./Components/Braden";


const App =() => {
    const [name, setName] = useState('');

    const gavinPressed = () => setName('gavin');
    const bradenPressed = () => setName('braden');

  return(
      <div className="App">
          <button className="btn btn-outline-danger" onClick={gavinPressed}><h3>Gavin</h3></button><br />
          <button className="btn btn-outline-primary" onClick={bradenPressed}><h3>Braden</h3></button>
          {name === 'gavin' && <Gavin />}
          {name === 'braden' && <Braden />}

      </div>
  )
};

export default App;