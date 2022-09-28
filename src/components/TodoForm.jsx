import React, { useState } from 'react';
import OvalButton from './UI/button/OvalButton';

const TodoForm = ({ create, ...props }) => {
  const [todo, setTodo] = useState({ title: '', done: false });
  const addNewTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      done: false,
      ...todo
    };

    create(newTodo);
    setTodo({ title: '', done: false });
  }

  return (
    <form className='todo__form'>
      <input className='todo__form-input' value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} type='text' placeholder={props.inputPlaceholder} />
      <OvalButton fill='true' onClick={addNewTodo} >{props.buttonText}</OvalButton>
    </form>
  );
};

export default TodoForm;