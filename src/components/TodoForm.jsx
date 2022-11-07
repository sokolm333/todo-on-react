import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import OvalButton from './UI/button/OvalButton';

const TodoForm = ({ visible, setVisible, ...props }) => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState({ title: '' });
  const formInput = useRef();
  const formAddBtn = useRef();

  const addNewTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        done: false,
        ...todoInput
      }
    })

    setTodoInput({ title: '' });
    setVisible(false);
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

  if (formInput.current !== undefined && formInput.current.value == '') {
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