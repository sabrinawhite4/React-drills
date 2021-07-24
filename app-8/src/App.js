import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [starWarsChar, setStarWarsChar] = useState({});

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/2/')
      .then(response => {
        setStarWarsChar(response.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Name: {starWarsChar.name}</h3>
        <h3>Hair Color: {starWarsChar.hair_color}</h3>
        <h3>Eye Color: {starWarsChar.eye_color}</h3>
        <h3>Gender: {starWarsChar.gender}</h3>
      </header>
    </div>
  );
}

export default App;
