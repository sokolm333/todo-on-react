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
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todosArr);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedTodossWithCustomHook = useTodos(todos, filter.sort, filter.query);

  const removeCompleted = () => {
    dispatch({
      type: "REMOVE_COMPLETED_TODO"
    })
  }

  const removeAll = () => {
    dispatch({
      type: "REMOVE_ALL_TODO"
    })
  }

  useEffect(() => {
    localStorage.setItem('arrayOfTodos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='todo'>
      <h1 className='todo__title visually-hidden'>To-Do List</h1>

      <div className='todo__inner-wrap'>
        <div className='todo__inner'>
          <h2 className='todo__title'>What’s your plan for today?</h2>

          <ModalWindow visible={modal} setVisible={setModal}>
            <TodoForm visible={modal} setVisible={setModal} buttonText='Add' inputPlaceholder='My plan for today...' />
          </ModalWindow>

          <TodoFilter filter={filter} setFilter={setFilter} selectDefaultValue='Sort By' filterPlaceholder='Search...' />
          <TodoList todos={sortedAndSearchedTodossWithCustomHook} nothingFoundText='There are no tasks here :(' />

          <div className='todo__main-btn'>
            <OvalButton fill='true' onClick={() => setModal(true)}>Add new task</OvalButton>
          </div>

          <div className='todo__inner-bottom'>
            <Counter todos={todos}>Tasks done:</Counter>
            <div className='todo__inner-bottom-btns'>
              <OvalButton onClick={removeCompleted}>Remove completed</OvalButton>
              <OvalButton onClick={removeAll}>Clear all</OvalButton>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
