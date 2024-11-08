import React from 'react';

const IconLogo = ({ width = '1000px', height = '1000px' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 1000 1000"
    width={width}
    height={height}
  >
    <title>Nicholas Ragland</title>

    <circle
      cx="500"
      cy="500"
      r="380"
      stroke="currentColor"
      strokeWidth="25"
      fill="none"
    />

    <text
      x="500"
      y="550"
      fontSize="550"
      fill="currentColor"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      N
    </text>
  </svg>
);

export default IconLogo;

/*
const IconLogo = ({ width = '1000px', height = '1000px' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 1000 1000"
    width={width}
    height={height}
  >
    <title>Nicholas Ragland</title>
    <circle
      cx="500"
      cy="500"
      r="400"
      stroke="currentColor"
      strokeWidth="36"
      fill="none"
    />
    <text
      x="300"
      y="540"
      fontSize="280"
      fill="currentColor"
      fontFamily="Courier, Monaco, monospace"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {'<'}
    </text>
    <text
      x="500"
      y="540"
      fontSize="500"
      fill="var(--green)"
      fontFamily="Courier, Monaco, monospace"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      N
    </text>
    <text
      x="700"
      y="540"
      fontSize="280"
      fill="currentColor"
      fontFamily="Courier, Monaco, monospace"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {'>'}
    </text>
    <circle cx="200" cy="200" r="80" fill="currentColor" />
    <circle cx="800" cy="200" r="80" fill="currentColor" />
    <circle cx="200" cy="800" r="80" fill="currentColor" />
    <circle cx="800" cy="800" r="80" fill="currentColor" />
  </svg>
);

export default IconLogo;
*/
