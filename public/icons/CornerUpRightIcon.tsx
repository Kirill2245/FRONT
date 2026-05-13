import React from 'react';

interface CornerUpRightIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const CornerUpRightIcon: React.FC<CornerUpRightIconProps> = ({
  size = 16,
  color = "#101073",
  strokeWidth = 1.33333,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <g clipPath="url(#clip0_180_2562)">
        <path
          d="M14.6667 4.66663L9.00004 10.3333L5.66671 6.99996L1.33337 11.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6666 4.66663H14.6666V8.66663"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_180_2562">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CornerUpRightIcon;