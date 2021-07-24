import React, {useState} from 'react';
import './App.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="App">
        <input 
            type="text" 
            placeholder="Username"  
            value ={userName} 
            onChange={(e) => setUserName(e.target.value)}
        />
        <input 
            type="password" 
            placeholder="Password" 
            value ={password} 
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
            onClick={() => {alert(`${userName}:${password}`)}}
        >
            Login
        </button>
      </div>
    );
  }

  export default Login;