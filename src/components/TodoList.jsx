import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, title, remove, toggle, nothingFoundText }) => {
  let listTitle = '';

  if (title !== undefined) {
    listTitle = <h2 className='todo__title'> {title} </h2>;
  }

  if (!todos.length) {
    return (
      <div className='todo__list todo__list--no-todos'>
        <div className='todo__list-no-todos'>
          <p className='todo__no-todos-text'>{nothingFoundText}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='todo__list-wrap'>
      {listTitle}
      <ul className='todo__list'>
        {
          todos.map((todoValue, index) =>
            <TodoItem remove={remove} toggle={toggle} todo={todoValue} key={todoValue.id} />
          )
        }
      </ul>
    </div>
  );
};

export default TodoList;