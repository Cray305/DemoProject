import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-list">
          <p>No todos yet! Add one above.</p>
        </div>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;