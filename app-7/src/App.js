import React, {useState} from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  function handleClick(childData) {
    setTaskList(oldTaskList => [...oldTaskList, childData]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewTask handleClick={handleClick} />
        <List taskList={taskList} />
      </header>
    </div>
  );
}

export default App;
