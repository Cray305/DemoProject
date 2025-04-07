import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    addTodo({
      title,
      description,
      completed: false
    });
    
    // Reset form
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todoTitle">Title</label>
          <input
            type="text"
            id="todoTitle"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="todoDescription">Description (optional)</label>
          <textarea
            id="todoDescription"
            rows={3}
            placeholder="Add details about this task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;