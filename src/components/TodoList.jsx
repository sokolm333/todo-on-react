import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, title, remove, toggle }) => {

  if (!todos.length) {
    return (
      <p className='app__no-todos'>There are no todos :(</p>
    )
  }

  return (
    <div>
      <h2 className='app__title'>
        {title}
      </h2>
      {
        todos.map((todoValue, index) =>
          <TodoItem remove={remove} toggle={toggle} number={index + 1} todo={todoValue} key={todoValue.id} />
        )
      }
    </div>
  );
};

export default TodoList;