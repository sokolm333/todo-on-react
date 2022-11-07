import React from 'react';
import { useDispatch } from 'react-redux';

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const toggleTodo = (e) => {
    e.stopPropagation();
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id: props.todo.id,
        title: props.todo.title,
        done: props.todo.done,
      }
    })
  }

  const removeTodo = (e) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: props.todo.id,
        title: props.todo.title,
        done: props.todo.done,
      }
    })
  }

  return (
    <li className={props.todo.done ? "todo__item todo__item--done" : "todo__item"} onClick={toggleTodo}>
      <div className='todo__content'>
        <h3 className='todo__item-title'>
          {props.todo.title}
        </h3>
      </div>
      <div className='todo__btns-wrap'>
        <button onClick={toggleTodo} className='todo__btn-tick' aria-label='complete'>
          <svg className='todo__btn-tick-svg' width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.0791 1.0876C11.307 1.31541 11.307 1.68475 11.0791 1.91256L4.66248 8.32923C4.43467 8.55703 4.06533 8.55703 3.83752 8.32923L0.920854 5.41256C0.693049 5.18475 0.693049 4.81541 0.920854 4.5876C1.14866 4.3598 1.51801 4.3598 1.74581 4.5876L4.25 7.09179L10.2542 1.0876C10.482 0.859797 10.8513 0.859797 11.0791 1.0876Z" fill="currentColor" />
          </svg>
        </button>
        <button onClick={removeTodo} className='todo__btn' aria-label='delete'>
          <svg className='todo__btn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12ZM12 3.4344C9.72826 3.4344 7.54957 4.33684 5.9432 5.9432C4.33684 7.54957 3.4344 9.72826 3.4344 12C3.4344 14.2717 4.33684 16.4504 5.9432 18.0568C7.54957 19.6632 9.72826 20.5656 12 20.5656C14.2717 20.5656 16.4504 19.6632 18.0568 18.0568C19.6632 16.4504 20.5656 14.2717 20.5656 12C20.5656 9.72826 19.6632 7.54957 18.0568 5.9432C16.4504 4.33684 14.2717 3.4344 12 3.4344ZM15.5543 8.44723C15.6958 8.5888 15.7753 8.78079 15.7753 8.98098C15.7753 9.18116 15.6958 9.37315 15.5543 9.51472L13.0675 12L15.5543 14.4853C15.696 14.627 15.7757 14.8193 15.7757 15.0198C15.7757 15.2203 15.696 15.4125 15.5543 15.5543C15.4125 15.696 15.2203 15.7757 15.0198 15.7757C14.8193 15.7757 14.627 15.696 14.4853 15.5543L12 13.0675L9.51472 15.5543C9.44453 15.6245 9.3612 15.6802 9.26949 15.7181C9.17778 15.7561 9.07949 15.7757 8.98022 15.7757C8.88095 15.7757 8.78266 15.7561 8.69095 15.7181C8.59924 15.6802 8.51591 15.6245 8.44572 15.5543C8.37553 15.4841 8.31985 15.4008 8.28186 15.309C8.24387 15.2173 8.22432 15.119 8.22432 15.0198C8.22432 14.9205 8.24387 14.8222 8.28186 14.7305C8.31985 14.6388 8.37553 14.5555 8.44572 14.4853L10.9325 12L8.44572 9.51472C8.30396 9.37296 8.22432 9.1807 8.22432 8.98022C8.22432 8.77974 8.30396 8.58748 8.44572 8.44572C8.58748 8.30396 8.77974 8.22432 8.98022 8.22432C9.1807 8.22432 9.37296 8.30396 9.51472 8.44572L12 10.9325L14.4853 8.44572C14.5554 8.37541 14.6387 8.31963 14.7304 8.28158C14.8222 8.24352 14.9205 8.22393 15.0198 8.22393C15.1191 8.22393 15.2174 8.24352 15.3091 8.28158C15.4008 8.31963 15.4842 8.37541 15.5543 8.44572V8.44723Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </li >
  );
};

export default TodoItem;