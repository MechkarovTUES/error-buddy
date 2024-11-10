import React, { useState, useEffect } from 'react';
import ErrorForm from './components/ErrorForm';
import ErrorCard from './components/ErrorCard';

const App = () => {
  const [errors, setErrors] = useState([]);

  // Fetch errors from backend
  useEffect(() => {
    fetch('http://localhost:3000/errors')
      .then(res => res.json())
      .then(data => setErrors(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  // Add new error
  const addError = (message) => {
    console.log('Adding error:', message);
    fetch('http://localhost:3000/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
    .then(res => res.json())
    .then(newError => setErrors([newError, ...errors]))
    .catch(err => console.error('Error adding message:', err));
  };

  return (
    <div>
      <h1>Error Tracker</h1>
      <ErrorForm addError={addError} />
      <div>
        {errors.map(error => <ErrorCard key={error._id} error={error} />)}
      </div>
    </div>
  );
};

export default App;