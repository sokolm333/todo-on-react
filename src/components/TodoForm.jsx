import React, { useState } from 'react';
import OvalButton from './UI/button/OvalButton';

const TodoForm = ({ create }) => {
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
    <form className='app__form'>
      <input value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} type='text' placeholder='todo Title' />
      <OvalButton fill='true' onClick={addNewTodo} >Add</OvalButton>
    </form>
  );
};

export default TodoForm;