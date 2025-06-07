import React from 'react';

function Button({ children, type = 'primary', onClick }) {
  const baseClasses = 'py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center';
  
  const buttonTypes = {
    primary: 'bg-blue-primary hover:bg-blue-dark text-white',
    secondary: 'bg-transparent border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-navy'
  };
  
  const classes = `${baseClasses} ${buttonTypes[type] || buttonTypes.primary}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default Button;