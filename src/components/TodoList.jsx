import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, title, remove, toggle }) => {

  if (!todos.length) {
    return (
      <p className='app__no-todos'>There are no todos :(</p>
    )
  }

  return (
    <div className='todo__list-wrap'>
      <h2 className='todo__title'>
        {title}
      </h2>
      <ul className='todo__list'>
        {
          todos.map((todoValue, index) =>
            <TodoItem remove={remove} toggle={toggle} number={index + 1} todo={todoValue} key={todoValue.id} />
          )
        }
      </ul>
    </div>
  );
};

export default TodoList;