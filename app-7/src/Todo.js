import React from 'react';
import './App.css';

function Todo(props) {

    return (
        <div>
           {props.task}
        </div>    
    )
}

export default Todo;