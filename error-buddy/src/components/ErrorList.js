import React from 'react';
import ErrorCard from './ErrorCard';

const ErrorList = ({ errors }) => (
  <div>
    {errors.map((error, index) => (
      <ErrorCard key={index} error={error} />
    ))}
  </div>
);

export default ErrorList;