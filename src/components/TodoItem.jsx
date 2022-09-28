import React from 'react';
import '../styles/components/TodoItem.css'

const TodoItem = (props) => {

  return (
    <div className={props.todo.done ? "todo done" : "todo"} onClick={() => props.toggle(props.todo)}>
      <div className='todo__content'>
        <h3 className='todo__title'>
          {props.todo.title}
        </h3>
      </div>
      <div className='todo__btns-wrap'><button onClick={(e) => { e.stopPropagation(); props.remove(props.todo); }} className='todo__btn'>DELETE</button></div>
    </div >
  );
};

export default TodoItem;