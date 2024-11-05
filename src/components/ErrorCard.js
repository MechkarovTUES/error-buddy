import React from 'react';

const ErrorCard = ({ error }) => (
  <div style={{
    backgroundColor: '#2c2c2e',
    color: '#f0f0f0',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  }}>
    <p>{error.message}</p>
    <p style={{ fontSize: '12px', color: '#a0a0a0' }}>{error.timestamp}</p>
  </div>
);

export default ErrorCard;