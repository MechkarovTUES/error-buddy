import React, { useState, useRef } from 'react';

const ErrorForm = ({ addError }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null); // Reference to the textarea

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addError(message);
      setMessage(''); // Clear the input

      // Reset the height of the textarea
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#040404',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <textarea
          ref={textareaRef} // Attach the ref to the textarea
          placeholder="Enter error message"
          value={message}
          onChange={handleInputChange}
          style={{
            font: '1.4em monospace',
            width: '100%',
            padding: '10px',
            backgroundColor: 'transparent',
            color: '#f0f0f0',
            border: '1px solid #f0f0f0',
            borderRadius: '10px',
            outline: 'none',
            resize: 'vertical', // Allow vertical resize
            height: 'auto',
            minHeight: '10px',
            overflow: 'hidden',
            paddingRight: '40px', // Space for arrow button
          }}
          rows={1} // Initial row count
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
        <button type="submit" style={{
          position: 'absolute',
          right: '0',
          height: '100%',
          width: '40px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#4ac76b',
          fontSize: '1.5em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          →
        </button>
      </div>
    </form>
  );
};

export default ErrorForm;