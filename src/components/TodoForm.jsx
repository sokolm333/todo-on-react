import React, { useRef, useState } from 'react';
import OvalButton from './UI/button/OvalButton';

const TodoForm = ({ visible, create, ...props }) => {
  const [todoInput, setTodoInput] = useState({ done: false, title: '' });
  const formInput = useRef();
  const formAddBtn = useRef();

  const addNewTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      done: false,
      ...todoInput
    };

    create(newTodo);
    setTodoInput({ done: false, title: '' });
  }

  const inputOnChange = (e) => {
    setTodoInput({ ...todoInput, title: e.target.value });

    if (e.target.value != '') {
      formAddBtn.current.disabled = false;
    } else {
      formAddBtn.current.disabled = true;
    }
  }

  if (visible !== undefined && visible) {
    formInput.current.focus();
  }

  if (formInput.current.value == '') {
    formAddBtn.current.disabled = true;
  }

  return (
    <form className='todo__form'>
      <input ref={formInput} className='todo__form-input' value={todoInput.title} onChange={inputOnChange} type='text' placeholder={props.inputPlaceholder} />
      <OvalButton ref={formAddBtn} fill='true' onClick={addNewTodo} >{props.buttonText}</OvalButton>
    </form>
  );
};

export default TodoForm;