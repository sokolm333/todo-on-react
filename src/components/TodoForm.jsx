import React, { useRef, useState } from 'react';
import OvalButton from './UI/button/OvalButton';

const TodoForm = ({ visible, create, ...props }) => {
  const inputRef = useRef();
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

  if (visible !== undefined && visible) {
    inputRef.current.focus();
  }

  return (
    <form className='todo__form'>
      <input ref={inputRef} className='todo__form-input' value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} type='text' placeholder={props.inputPlaceholder} />
      <OvalButton fill='true' onClick={addNewTodo} >{props.buttonText}</OvalButton>
    </form>
  );
};

export default TodoForm;