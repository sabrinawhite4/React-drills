import React from 'react';
import './App.css';
import router from './router';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href='/'>Home</a>
          <a href='/#/signup'>Signup</a>
          <a href='/#/details'>Details</a>
        </nav>
        {router}
      </header>
    </div>
  );
}

export default App;
