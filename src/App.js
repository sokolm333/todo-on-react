import React, { useState } from 'react';
import './styles/Nullstyle.css';
import './styles/App.css';
import TodoList from './components/TodoList';
import OvalButton from './components/UI/button/OvalButton';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import ModalWindow from './components/UI/modal/ModalWindow';
import { useTodos } from './components/hooks/useTodos';
import Counter from './components/UI/counter/Counter';

function App() {
  const [todos, setTodos] = useState([
    { id: 1664309976799, title: 'This is TodoItem Title 3', done: false },
    { id: 1664309976797, title: 'This is TodoItem Title 2', done: true },
    { id: 1664309976798, title: 'This is TodoItem Title 1', done: false }
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedTodossWithCustomHook = useTodos(todos, filter.sort, filter.query);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter(todo => todo.id !== todoToRemove.id));
  };

  const removeCompleted = () => {
    setTodos(todos.filter(todo => todo.done !== true));
  };

  const toggleTodo = (todoToToggle) => {
    setTodos(todos.map(todo => {
      if (todo.id !== todoToToggle.id) return todo;
      return { ...todo, done: !todo.done };
    }));
  };

  return (
    <div className='app'>
      <h1 className='app__title visually-hidden'>To-Do List</h1>
      <OvalButton onClick={() => setModal(true)}>Create Todo</OvalButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <TodoForm create={createTodo} />
      </ModalWindow>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList remove={removeTodo} toggle={toggleTodo} todos={sortedAndSearchedTodossWithCustomHook} title={'What’s your plan for today?'} />
      <Counter todos={todos}>Tasks done:</Counter>
      <OvalButton onClick={removeCompleted}>Remove completed</OvalButton>
      <OvalButton onClick={() => setTodos([])}>Clear all</OvalButton>
    </div >
  );
}

export default App;
