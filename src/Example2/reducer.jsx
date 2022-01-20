import React, {useState, useCallback, useReducer, createContext} from 'react';
import Todo from './Component/Todo';
import TodoForm from './Component/TodoForm';

import './style.css';

const initialTodos = [
  {
    text: 'Learn about React',
    isCompleted: false,
  },
  {
    text: 'Meet friend for lunch',
    isCompleted: false,
  },
  {
    text: 'Build really cool todo app',
    isCompleted: false,
  },
];

const initialState = {
  value: '',
  todos: initialTodos,
  invalidTodos: [],
};

const reducers = (state, action) => {
  const {type, payload} = action;
  const {todos, invalidTodos} = state;

  switch (type) {
    case 'CHANGE_VALUE': {
      return {
        ...state,
        value: payload,
      };
    }
    case 'ADD_TODO': {
      const newTodos = [...todos, {text: payload, isCompleted: false}];
      return {
        ...state,
        todos: newTodos,
        value: '',
      };
    }
    case 'COMPLETE_TODO': {
      const todo = todos[payload];
      const newTodos = [...todos];
      const newTodo = {...todo, isCompleted: true};
      newTodos.splice(payload, 1, newTodo);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case 'REMOVE_TODO': {
      const newTodos = [...todos];
      const [todo] = newTodos.splice(payload, 1);
      return {
        ...state,
        todos: newTodos,
        invalidTodos: invalidTodos.concat(todo),
      };
    }
    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);
  const {value, todos, invalidTodos} = state;

  const addTodo = useCallback((text) => {
    dispatch({type: 'ADD_TODO', payload: text});
  }, []);

  const onFormChange = useCallback((val) => {
    dispatch({type: 'CHANGE_VALUE', payload: val});
  }, []);

  const completeTodo = useCallback((index) => {
    dispatch({type: 'COMPLETE_TODO', payload: index});
  }, []);

  const removeTodo = useCallback((index) => {
    dispatch({type: 'REMOVE_TODO', payload: index});
  }, []);

  return (
    <div className="todo-list-container">
      <TodoForm value={value} onChange={onFormChange} onSubmit={addTodo} />
      <div className="list todos">
        {todos.map((todo, index) => (
          <Todo
            isValid
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      {invalidTodos.length > 0 ? (
        <div className="list invalid-todos">
          invalid todos
          {invalidTodos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
