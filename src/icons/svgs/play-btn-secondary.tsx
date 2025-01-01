import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const playbtnsecondaryicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox='0 0 66 66' fill='none' className={className}>
      <circle
        id='Oval 40'
        cx='33.000000'
        cy='33.000000'
        r='33.000000'
        fill='#F1C804'
      />
      <path
        id='Polygon 1'
        d='M42.5 30.4L30.5 23.47C28.5 22.31 26 23.76 26 26.07L26 39.92C26 42.23 28.5 43.68 30.5 42.52L42.5 35.59C44.5 34.44 44.5 31.55 42.5 30.4Z'
        fill='#FFFFFF'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default playbtnsecondaryicon;
