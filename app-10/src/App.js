import React from 'react';
import './App.css';
import router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {router}
      </header>
    </div>
  );
}

export default App;
