import React from 'react';

interface AlizaCharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isInteractive?: boolean;
}

const AlizaCharacter: React.FC<AlizaCharacterProps> = ({
  className = '',
  size = 'md',
  isInteractive = true,
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className} flex items-center justify-center`}
      role="img"
      aria-label="Aliza Wears animated character"
    >
      {/* Background Circle - Alabaster */}
      <div className="absolute inset-0 rounded-full bg-[#F7F7F5] shadow-sm" />

      {/* Character SVG */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full z-10"
        aria-hidden="true"
      >
        {/* Body - Charcoal Ink */}
        <g className="animate-breathe origin-center">
          <path
            d="M60 140 Q100 120 140 140 L140 180 Q100 190 60 180 Z"
            fill="#0E0F0C"
          />
          
          {/* Head */}
          <circle cx="100" cy="90" r="40" fill="#0E0F0C" />
          
          {/* Hair */}
          <path
            d="M60 80 Q100 40 140 80 Q140 60 100 50 Q60 60 60 80"
            fill="#0E0F0C"
          />
          
          {/* Eyes - Blinking Animation */}
          <g className="animate-blink origin-center">
            <ellipse cx="85" cy="85" rx="6" ry="8" fill="#FFFFFF" />
            <ellipse cx="115" cy="85" rx="6" ry="8" fill="#FFFFFF" />
            <circle cx="85" cy="85" r="3" fill="#0E0F0C" />
            <circle cx="115" cy="85" r="3" fill="#0E0F0C" />
          </g>
          
          {/* Smile */}
          <path
            d="M90 105 Q100 115 110 105"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Cheeks */}
          <circle cx="75" cy="95" r="5" fill="#C3FF7D" opacity="0.3" />
          <circle cx="125" cy="95" r="5" fill="#C3FF7D" opacity="0.3" />
        </g>

        {/* CTA Pulse Ring - Lime Accent */}
        {isInteractive && (
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#C3FF7D"
            strokeWidth="2"
            className="animate-pulse-ring origin-center"
          />
        )}
      </svg>

      {/* Interactive Overlay */}
      {isInteractive && (
        <button
          className="absolute inset-0 z-20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C3FF7D] focus:ring-offset-2 focus:ring-offset-[#F7F7F5]"
          aria-label="Interact with Aliza"
          type="button"
        />
      )}
    </div>
  );
};

export default AlizaCharacter;
