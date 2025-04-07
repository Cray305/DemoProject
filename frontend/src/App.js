import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post('/api/todos/', todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todo = todos.find(todo => todo.id === id);
      const updatedTodo = {...todo, completed: !todo.completed};
      await axios.put(`/api/todos/${id}/`, updatedTodo);
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}/`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Todo App</h1>
          <p className="text-muted-foreground mt-2">Keep track of your tasks easily</p>
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default App;