import React, {useState, useCallback} from 'react';
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

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [invalidTodos, setInvalidTodos] = useState([]);

  const addTodo = useCallback(
    (text) => {
      const newTodos = [...todos, {text, isCompleted: false}];
      setTodos(newTodos);
      setValue('');
    },
    [todos]
  );

  const completeTodo = useCallback(
    (index) => {
      const todo = todos[index];
      const newTodos = [...todos];
      const newTodo = {...todo, isCompleted: true};
      newTodos.splice(index, 1, newTodo);
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (index) => {
      const newTodos = [...todos];
      const [todo] = newTodos.splice(index, 1);
      setTodos(newTodos);
      setInvalidTodos(invalidTodos.concat(todo));
    },
    [todos]
  );

  const onFormChange = useCallback((val) => {
    setValue(val);
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
