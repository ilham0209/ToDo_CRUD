import { memo } from 'react';

// Helper function to get the tag color based on activity type
function getTypeColor(type) {
  const colorMap = {
    education: { bg: '#22333b', text: '#eae0d5' },
    recreational: { bg: '#c6ac8f', text: '#0a0908' },
    social: { bg: '#5e503f', text: '#eae0d5' },
    diy: { bg: '#eae0d5', text: '#0a0908' },
    charity: { bg: '#22333b', text: '#eae0d5' },
    cooking: { bg: '#c6ac8f', text: '#0a0908' },
    relaxation: { bg: '#5e503f', text: '#eae0d5' },
    music: { bg: '#eae0d5', text: '#0a0908' },
    busywork: { bg: '#22333b', text: '#eae0d5' }
  };
  
  return colorMap[type] || { bg: '#eae0d5', text: '#0a0908' };
}

// Using memo to prevent unnecessary re-renders
const TodoItem = memo(function TodoItem({ todo, removeTodo }) {
  const typeColor = getTypeColor(todo.type);
  
  return (
    <div style={{ 
      padding: '1.25rem', 
      backgroundColor: '#fff', 
      borderRadius: '0.375rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderLeft: '4px solid #c6ac8f',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }}>
      <div>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginTop: '0', 
          marginBottom: '0.75rem',
          color: '#22333b'
        }}>
          {todo.activity}
        </h3>
        
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{ 
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            backgroundColor: typeColor.bg,
            color: typeColor.text,
            borderRadius: '1rem',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            {todo.type}
          </span>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem',
            backgroundColor: '#eae0d5',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem'
          }}>
            <span style={{ fontWeight: '600' }}>Price:</span> MYR {todo.price.toFixed(2)}
          </p>
          
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem',
            backgroundColor: '#eae0d5',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem'
          }}>
            <span style={{ fontWeight: '600' }}>Booking:</span> {todo.bookingRequired ? 'Required' : 'Not Required'}
          </p>
          
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem',
            backgroundColor: '#eae0d5',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem'
          }}>
            <span style={{ fontWeight: '600' }}>Accessibility:</span> {todo.accessibility.toFixed(1)}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => removeTodo(todo.id)}
        className="btn btn-danger"
        style={{ minWidth: '5rem' }}
        aria-label="Delete item"
      >
        Delete
      </button>
    </div>
  );
});

export default TodoItem;