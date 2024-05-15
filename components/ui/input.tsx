import React from 'react';

export const Input = ({ children, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props}>
      {children}
    </input>
  );
};