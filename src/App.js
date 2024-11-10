import React, { useState, useEffect } from 'react';
import ErrorForm from './components/ErrorForm';
import axios from 'axios';
import ErrorList from './components/ErrorList';

const App = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/errors')
      .then(response => setErrors(response.data))
      .catch(error => console.error(error));
  }, []);

  const addError = (message) => {
    const newError = {
      message,
      timestamp: new Date().toLocaleString(),  // Add the current date and time
    };
    axios.post('http://localhost:5000/api/errors', newError)
      .then(response => setErrors([response.data, ...errors]))
      .catch(error => console.error(error));
    setErrors([newError, ...errors]);  // Add new errors at the top of the list
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
      <h1>Error Buddy</h1>
      <ErrorForm addError={addError} />
      <ErrorList errors={errors} />
    </div>
  );
};

export default App;