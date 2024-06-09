import React from 'react';

const ArrowIcon = ({ direction = 'right', size = 24, color = 'black' }) => {
  const rotate = {
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
    up: 'rotate(-90deg)',
    down: 'rotate(90deg)',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      style={{ transform: rotate[direction] }}
    >
      <path d="M15.293 17.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L10.414 12l6.293 6.293a1 1 0 01-1.414 1.414z" />
    </svg>
  );
};

export default ArrowIcon;
