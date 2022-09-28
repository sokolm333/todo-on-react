import React, { useState, useEffect } from 'react';
import './styles/Nullstyle.css';
import './styles/Variables.css';
import './styles/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import OvalButton from './components/UI/button/OvalButton';
import ModalWindow from './components/UI/modal/ModalWindow';
import Counter from './components/UI/counter/Counter';
import { useTodos } from './components/hooks/useTodos';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1664309976799, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976791, title: 'This is TodoItem Title 2This is TodoItem Title 2This is TodoItem Title 2This is TodoItem Title 2', done: false },
    // { id: 1664309976792, title: 'This is TodoItem Title 2', done: true },
    // { id: 1664309976793, title: 'This is TodoItem Title 2', done: false },
    // { id: 1664309976794, title: 'This is TodoItem Title 2', done: false },
    // { id: 1664309976795, title: 'This is TodoItem Title 2', done: true },
    // { id: 1664309976796, title: 'This is TodoItem Title 2', done: true },
    // { id: 1664309976781, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976782, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976783, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976784, title: 'This is TodoItem Title 3', done: true },
    // { id: 1664309976785, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976786, title: 'This is TodoItem Title 3', done: false },
    // { id: 1664309976797, title: 'This is TodoItem Title 2', done: true },
    // { id: 1664309976798, title: 'This is TodoItem Title 1', done: false }
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedTodossWithCustomHook = useTodos(todos, filter.sort, filter.query);

  // let todosStorage = localStorage.getItem('arrayOfTodos');
  // if (todosStorage) {
  //   console.log('todosStorage');
  // }

  // useEffect(() => {
  //   console.log('pullToLocalStorage');
  //   // console.log(JSON.stringify(todos));
  //   localStorage.setItem('arrayOfTodos', JSON.stringify(todos));
  //   // console.log(JSON.parse(localStorage.getItem('arrayOfTodos')));
  //   // array
  //   //     localStorage.removeItem('active_tab');
  //   // localStorage.setItem('active_tab', activePane.id);
  //   // let tabStorage = localStorage.getItem('active_tab');
  //   // if (tabStorage) {
  // }, [todos]);

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
    <div className='todo'>
      <div className='todo__inner-wrap'>
        <div className='todo__inner'>
          <h1 className='todo__title visually-hidden'>To-Do List</h1>
          <h2 className='todo__title'>What’s your plan for today?</h2>

          <ModalWindow visible={modal} setVisible={setModal}>
            <TodoForm visible={modal} create={createTodo} buttonText='Add' inputPlaceholder='My plan for today...' />
          </ModalWindow>

          <TodoFilter filter={filter} setFilter={setFilter} selectDefaultValue='Sort By' filterPlaceholder='Search...' />
          <TodoList remove={removeTodo} toggle={toggleTodo} todos={sortedAndSearchedTodossWithCustomHook} nothingFoundText='There are no tasks here :(' />

          <div className='todo__main-btn'>
            <OvalButton fill='true' onClick={() => setModal(true)}>Add new task</OvalButton>
          </div>

          <div className='todo__inner-bottom'>
            <Counter todos={todos}>Tasks done:</Counter>
            <div className='todo__inner-bottom-btns'>
              <OvalButton onClick={removeCompleted}>Remove completed</OvalButton>
              <OvalButton onClick={() => setTodos([])}>Clear all</OvalButton>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
