import React, { useState } from 'react';

const ErrorForm = ({ addError }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addError(message);  // This function will be defined in App.js
    setMessage('');     // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter error message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '80%', padding: '10px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Add Error</button>
    </form>
  );
};

export default ErrorForm;