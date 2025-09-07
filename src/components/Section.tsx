import { backgrounds } from '../constans/background';
import { sectionProps } from '../types/common';
import React from 'react';

const Section: React.FC<sectionProps> = ({
  id,
  children,
  className = '',
  background = 'white',
}) => {
  return (
    <section
      id={id}
      className={`py-16 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">{children}</div>
    </section>
  );
};

export default Section;
