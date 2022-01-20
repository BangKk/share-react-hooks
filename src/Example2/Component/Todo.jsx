export default function Todo({todo, index, completeTodo, removeTodo, isValid}) {
  return (
    <div
      className="todo"
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    >
      {todo.text}
      {isValid ? (
        <div>
          <button onClick={() => completeTodo(index)}>done</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      ) : null}
    </div>
  );
}
