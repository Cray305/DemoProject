import React from 'react';
import TodoItem from './TodoItem';
import { Card, CardContent } from '@/components/ui/card';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No todos yet! Add one above.</p>
          </CardContent>
        </Card>
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