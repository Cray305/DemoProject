import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <div className="todo-checkbox">
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
        </div>
        <div className="todo-text">
          <h3 className={todo.completed ? "completed" : ""}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className={todo.completed ? "completed" : ""}>
              {todo.description}
            </p>
          )}
        </div>
        <button 
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;