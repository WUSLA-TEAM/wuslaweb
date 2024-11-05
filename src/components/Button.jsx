import React from 'react'


// Button Component
const Button = ({ children, primary, secondary, className = '', ...props }) => {
    const baseStyle = "flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition-all duration-300 transform hover:scale-105";
    const primaryStyle = "text-white bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-600 shadow-md hover:shadow-lg";
    const secondaryStyle = "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900 hover:bg-teal-100 dark:hover:bg-teal-700";
    
    return (
      <button
        className={`${baseStyle} ${primary ? primaryStyle : secondary ? secondaryStyle : ''} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

export default Button