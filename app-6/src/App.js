import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  
  let list = taskList.map((element, index) => {
    return <Todo key={index} task={element} />;
  });

function handleClick() {
  setTaskList(oldTaskList => [...oldTaskList, taskInput])
  setTaskInput('')
}
  return (
    <div className="App">
      <header className="App-header">
      <input 
            type="text" 
            placeholder="Enter New Task!"  
            value ={taskInput} 
            onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleClick}>
          Submit
        </button>
        {list}
      </header>
    </div>
  );
}

export default App;
