import { useMemo } from "react";

export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      if (sort.toLowerCase().includes('top')) {
        sort = sort.split('-')[0];
        return [...todos].sort((a, b) => `${a[sort]}`.localeCompare(`${b[sort]}`)).reverse();
      }
      return [...todos].sort((a, b) => `${a[sort]}`.localeCompare(`${b[sort]}`));
    }
    return todos;
  }, [sort, todos]);

  return sortedTodos;
}

export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedTodos]);

  return sortedAndSearchedTodos;
}