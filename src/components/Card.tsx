import { cardProps } from '../types/common';
import React from 'react';

const Card: React.FC<cardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
