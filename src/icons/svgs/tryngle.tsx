import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Tryngleicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox='0 0 18 19.8655' fill='currentColor' className={className}>
      <path
        id='Polygon 1'
        d='M16.5 7.33L4.5 0.4C2.5 -0.75 0 0.69 0 3L0 16.86C0 19.17 2.5 20.61 4.5 19.45L16.5 12.53C18.5 11.37 18.5 8.48 16.5 7.33Z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default Tryngleicon;
