import React from 'react';
import './App.css';
import Todo from './Todo';

function List(props) {
    let list = props.taskList.map((element, index) => {
        return <Todo key={index} task={element} />;
      });

    return <div>{list}</div>;
}


export default List;