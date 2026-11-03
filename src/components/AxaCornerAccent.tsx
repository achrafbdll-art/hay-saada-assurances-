import React from 'react';

interface AxaCornerAccentProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AxaCornerAccent: React.FC<AxaCornerAccentProps> = ({
  size = 'md',
  className = ''
}) => {
  if (size === 'sm') {
    return (
      <div className={`pointer-events-none select-none z-0 ${className}`}>
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 overflow-visible"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 88 L 68 88 A 20 20 0 0 0 88 68 L 88 10"
            stroke="#E01A22"
            strokeWidth="5"
            strokeLinecap="square"
          />
          <text
            x="10"
            y="105"
            fill="#CBD5E1"
            fontSize="14"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.45em"
          >
            A X A
          </text>
        </svg>
      </div>
    );
  }

  // default 'md' or 'lg'
  return (
    <div className={`pointer-events-none select-none z-0 ${className}`}>
      <svg
        className="w-32 h-32 sm:w-44 sm:h-44 overflow-visible"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 16 142 L 108 142 A 34 34 0 0 0 142 108 L 142 16"
          stroke="#E01A22"
          strokeWidth="6"
          strokeLinecap="square"
        />
        <text
          x="14"
          y="166"
          fill="#CBD5E1"
          fontSize="22"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.45em"
        >
          A X A
        </text>
      </svg>
    </div>
  );
};
