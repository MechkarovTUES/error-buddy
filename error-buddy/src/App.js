import React, { useState, useEffect } from 'react';
import ErrorForm from './components/ErrorForm';
import ErrorCard from './components/ErrorCard';
import config from './config';

const App = () => {
  const [errors, setErrors] = useState([]);

  // Fetch errors from backend
  useEffect(() => {
    fetch(`${config.backendUrl}/errors`)
      .then(res => res.json())
      .then(data => setErrors(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  // Add new error
  const addError = (message) => {
    console.log('Adding error:', message);
    fetch(`${config.backendUrl}/errors`, {
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#040404',
      color: '#f0f0f0',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>Error Tracker</h1>
      <ErrorForm addError={addError} />
      <div>
        {errors.map(error => <ErrorCard key={error._id} error={error} />)}
      </div>
    </div>
  );
};

export default App;