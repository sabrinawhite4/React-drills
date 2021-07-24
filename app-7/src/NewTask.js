import React, {useState} from 'react';
import './App.css';

function NewTask(props) {
    const [task, setTask] = useState('');

    function onSubmit(e) {
        props.handleClick(task);
        setTask('');
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter New Task!"  
                value ={task} 
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={onSubmit}>
                Submit
            </button> 
        </div>
    )
}

export default NewTask;