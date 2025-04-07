import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="pt-1">
            <Checkbox 
              checked={todo.completed}
              onCheckedChange={() => toggleComplete(todo.id)}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "text-base font-medium text-card-foreground",
              todo.completed && "line-through text-muted-foreground"
            )}>
              {todo.title}
            </h3>
            {todo.description && (
              <p className={cn(
                "text-sm text-muted-foreground mt-1",
                todo.completed && "line-through"
              )}>
                {todo.description}
              </p>
            )}
          </div>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default TodoItem;