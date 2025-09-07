import { baseClasses, sizes, variants } from '../constans/button';
import { buttonProps } from '../types/common';
import React from 'react';

const Button: React.FC<buttonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
