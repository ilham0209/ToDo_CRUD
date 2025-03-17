import { memo } from 'react';
import TodoItem from './TodoItem';

// Using memo to prevent unnecessary re-renders
const TodoList = memo(function TodoList({ todos, removeTodo }) {
  if (todos.length === 0) {
    return (
      <div style={{ 
        padding: '2rem',
        textAlign: 'center',
        color: '#5e503f',
        backgroundColor: '#eae0d5',
        borderRadius: '0.375rem',
        fontStyle: 'italic'
      }}>
        No activities added yet. Add your first activity above!
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
});

export default TodoList;