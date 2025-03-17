"use client";

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';

export default function Home() {
  const { todos, addTodo, removeTodo } = useTodos();
  
  return (
    <main className="container">
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '2rem auto'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#22333b',
          textAlign: 'center',
          borderBottom: '2px solid #c6ac8f',
          paddingBottom: '0.75rem'
        }}>
          Activity To-Do List
        </h1>
        
        {/* Summary - count of total items */}
        <div style={{ 
          marginBottom: '1.5rem', 
          padding: '0.75rem', 
          backgroundColor: '#22333b', 
          borderRadius: '0.375rem',
          color: '#eae0d5',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          <p>Total Activities: {todos.length}</p>
        </div>
        
        {/* Form to add new items */}
        <TodoForm addTodo={addTodo} />
        
        {/* List of items */}
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </main>
  );
}