import React, { useState } from 'react';
import ErrorForm from './components/ErrorForm';
import ErrorList from './components/ErrorList';

const App = () => {
  const [errors, setErrors] = useState([]);

  const addError = (message) => {
    const newError = {
      message,
      timestamp: new Date().toLocaleString(),  // Add the current date and time
    };
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