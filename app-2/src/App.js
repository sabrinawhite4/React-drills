import React from 'react';
import './App.css';

function App() {
  const namesArray = ['Sabrina', 'Spencer','Niko','Stephanie','Melina'];

  return (
    <div className="App">
      <header className="App-header">
        {namesArray.map(name => <p>{name}</p>)}
      </header>
    </div>
  );
}

export default App;
