import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { todoReducer } from './todo-reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReducer)