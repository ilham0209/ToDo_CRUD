import { useState, useEffect, useCallback } from 'react';

// Custom hook for todos management with localStorage persistence
export default function useTodos() {
  // Initialize state from localStorage or empty array
  const [todos, setTodos] = useState([]);
  
  // Load todos from localStorage on initial render
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
    }
  }, []);
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  }, [todos]);
  
  // Add a new todo
  const addTodo = useCallback((todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  }, []);
  
  // Remove a todo by id
  const removeTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);
  
  return { todos, addTodo, removeTodo };
}
