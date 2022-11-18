const defaultState = {
  todosArr: JSON.parse(localStorage.getItem('arrayOfTodos')) || [
    { id: 1664309976797, done: false, title: 'Redux' },
    { id: 1664309976791, done: false, title: 'React Hooks' },
    { id: 1664309976792, done: false, title: 'Custom React Hooks' },
    { id: 1664309976793, done: false, title: 'Local Storage' },
    { id: 1664309976796, done: true, title: 'Sorting' },
    { id: 1664309976795, done: false, title: 'Filtration' }
  ]
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const addTodo = action.payload;
      return {
        todosArr: [
          ...state.todosArr, addTodo
        ]
      };
    case "TOGGLE_TODO":
      const currTodo = action.payload;
      return {
        todosArr: [
          ...state.todosArr.map(todo => {
            if (todo.id !== currTodo.id) return todo;
            return { ...todo, done: !todo.done };
          })
        ]
      }
    case "REMOVE_TODO":
      const removeTodo = action.payload;
      return {
        todosArr: [
          ...state.todosArr.filter(todo => todo.id !== removeTodo.id)
        ]
      }
    case "REMOVE_COMPLETED_TODO":
      return {
        todosArr: [
          ...state.todosArr.filter(todo => !todo.done)
        ]
      }
    case "REMOVE_ALL_TODO":
      return {
        todosArr: []
      }
    default:
      return state
  }
}
