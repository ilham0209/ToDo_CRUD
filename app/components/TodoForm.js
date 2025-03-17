import { useState, useCallback } from 'react';

export default function TodoForm({ addTodo }) {
  // Form state
  const [activity, setActivity] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('education');
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);
  
  // Available activity types
  const activityTypes = [
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork'
  ];
  
  // Handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!activity.trim() || !price.trim()) {
      alert('Activity and Price are required!');
      return;
    }
    
    // Create new todo item
    const newTodo = {
      id: Date.now(), // Use timestamp as unique ID
      activity,
      price: parseFloat(price),
      type,
      bookingRequired,
      accessibility,
      createdAt: new Date().toISOString()
    };
    
    // Add todo to the list
    addTodo(newTodo);
    
    // Reset form
    setActivity('');
    setPrice('');
    setType('education');
    setBookingRequired(false);
    setAccessibility(0.5);
  }, [activity, price, type, bookingRequired, accessibility, addTodo]);
  
  return (
    <div style={{ 
      marginBottom: '2rem', 
      padding: '1.5rem', 
      backgroundColor: '#eae0d5', 
      borderRadius: '0.375rem',
      borderLeft: '4px solid #c6ac8f'
    }}>
      <h2 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        marginBottom: '1rem',
        color: '#22333b'
      }}>
        Add New Activity
      </h2>
      
      <form onSubmit={handleSubmit}>
        {/* Activity */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#0a0908' }}>
            Activity:
            <input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="form-control"
              style={{ marginTop: '0.25rem' }}
              placeholder="Enter activity name"
              required
            />
          </label>
        </div>
        
        {/* Price */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#0a0908' }}>
            Price:
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              style={{ marginTop: '0.25rem' }}
              placeholder="Enter price"
              required
            />
          </label>
        </div>
        
        {/* Type */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#0a0908' }}>
            Type:
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-control"
              style={{ marginTop: '0.25rem' }}
            >
              {activityTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </div>
        
        {/* Booking Required */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ 
            display: 'flex', 
            alignItems: 'center',
            fontWeight: '500', 
            color: '#0a0908'
          }}>
            <input
              type="checkbox"
              checked={bookingRequired}
              onChange={(e) => setBookingRequired(e.target.checked)}
              style={{ 
                marginRight: '0.5rem',
                width: '1.25rem',
                height: '1.25rem',
                accentColor: '#5e503f'
              }}
            />
            <span>Booking Required</span>
          </label>
        </div>
        
        {/* Accessibility */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#0a0908' }}>
            Accessibility: {accessibility.toFixed(1)}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={accessibility}
              onChange={(e) => setAccessibility(parseFloat(e.target.value))}
              style={{ 
                width: '100%', 
                marginTop: '0.5rem',
                accentColor: '#5e503f'
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#5e503f'
            }}>
              <span>0.0</span>
              <span>1.0</span>
            </div>
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.75rem' }}
        >
          Add to List
        </button>
      </form>
    </div>
  );
}