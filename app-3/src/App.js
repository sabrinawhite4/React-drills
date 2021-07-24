import React, {useState} from 'react';
import './App.css';

function App() {
  const namesArray = ['Sabrina', 'Spencer','Niko','Stephanie','Melina'];
  const [userInput, setUserInput] = useState('');

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' value={userInput} onChange={handleChange}></input>
        {namesArray.filter(names => names.includes(userInput)).map(name => <p>{name}</p>)}
      </header>
    </div>
  );
}

export default App;
