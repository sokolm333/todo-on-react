import React, { useMemo, useState } from 'react';

const Counter = ({ children, todos, ...props }) => {
  const [countTodos, setCountTodos] = useState(0);
  const [countDoneTodos, setCountDoneTodos] = useState(0);

  useMemo(() => {
    let conutDone = 0;
    setCountTodos(0);
    setCountDoneTodos(0);

    todos.map((todo, index) => {
      if (todo.done == true) {
        conutDone++;
      }

      setCountTodos(index + 1);
      setCountDoneTodos(conutDone);
    });

    return todos;
  }, [todos]);

  return (
    <div {...props}>
      {children} {countTodos}/{countDoneTodos}
    </div>
  );
};

export default Counter;