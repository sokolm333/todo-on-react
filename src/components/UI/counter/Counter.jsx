import React, { useEffect, useState } from 'react';

const Counter = ({ children, todos, ...props }) => {
  const [countTodos, setCountTodos] = useState(0);
  const [countDoneTodos, setCountDoneTodos] = useState(0);

  useEffect(() => {
    let conutDone = 0;
    setCountTodos(0);
    setCountDoneTodos(0);

    todos.map((todo, index) => {
      if (todo.done) {
        conutDone++;
      }

      setCountTodos(index + 1);
      setCountDoneTodos(conutDone);

      return todo;
    });
  }, [todos]);

  return (
    <p className='todo__counter' {...props}>
      <span className='todo__counter-text'>{children}</span> {countDoneTodos}/{countTodos}
    </p>
  );
};

export default Counter;