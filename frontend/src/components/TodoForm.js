import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Todo</CardTitle>
        <CardDescription>Create a new task to keep track of your work</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="todoTitle">Title</Label>
            <Input
              id="todoTitle"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="todoDescription">Description (optional)</Label>
            <textarea
              id="todoDescription"
              className="flex w-full min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Add details about this task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="pt-2 pb-4">
          <Button type="submit">Add Todo</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default TodoForm;