import React, {useState} from 'react';
import './App.css';



function App() {
  const [userInput, setUserInput] = useState('');

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' value={userInput} onChange={handleChange}></input>
        <span>{userInput}</span>
      </header>
    </div>
  );
}

export default App;