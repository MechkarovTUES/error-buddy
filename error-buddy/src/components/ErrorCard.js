import React from 'react';

const ErrorCard = ({ error }) => (
  <div style={{
    font: '1.4em monospace',
    backgroundColor: '#040404',
    maxWidth: '1000px',
    color: '#b32230',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    outline: '2px solid #f0f0f0',
    wordWrap: 'break-word',
  }}>
    <p style={{
      whiteSpace: 'pre-wrap', // Preserve spaces and line breaks
      marginBottom: '8px',
    }}>{error.message}</p>
    <p style={{ fontSize: '12px', color: '#a0a0a0' }}>{error.timestamp}</p>
  </div>
);

export default ErrorCard;