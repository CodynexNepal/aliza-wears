import React, { useState, useCallback, useEffect } from 'react';
import { useEventBus } from '@/lib/event-bus';

interface AlizaCharacterProps {
  onAnimate?: (animationName: string) => void;
}

export const AlizaCharacter: React.FC<AlizaCharacterProps> = ({ onAnimate }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<string>('');
  const { subscribe, publish } = useEventBus();

  const triggerAnimation = useCallback((animationName: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentAnimation(animationName);
    onAnimate?.(animationName);

    // Reset animation state after duration
    const duration = animationName === 'wave' ? 1500 : 1000;
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentAnimation('');
    }, duration);
  }, [isAnimating, onAnimate]);

  // Listen for UI events
  useEffect(() => {
    const unsubscribe = subscribe('aliza:animate', (payload: { animation: string }) => {
      triggerAnimation(payload.animation);
    });
    return () => unsubscribe();
  }, [subscribe, triggerAnimation]);

  const handleClick = () => {
    triggerAnimation('wave');
  };

  const animationClass = isAnimating ? `animate-${currentAnimation}` : '';

  return (
    <div 
      className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#C3FF7D] rounded-full"
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      role="button"
      aria-label="Aliza Character - Click to wave"
      tabIndex={0}
    >
      {/* Character SVG */}
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${animationClass}`}
        aria-hidden="true"
      >
        {/* Body */}
        <circle cx="50" cy="50" r="45" fill="#F7F7F5" stroke="#0E0F0C" strokeWidth="2" />
        
        {/* Face */}
        <circle cx="35" cy="45" r="4" fill="#0E0F0C" />
        <circle cx="65" cy="45" r="4" fill="#0E0F0C" />
        <path d="M 40 60 Q 50 70 60 60" stroke="#0E0F0C" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Arm (for waving) */}
        <g className="aliza-arm origin-[70px_50px]">
          <path d="M 70 50 L 85 35" stroke="#0E0F0C" strokeWidth="4" strokeLinecap="round" />
          <circle cx="85" cy="35" r="5" fill="#C3FF7D" />
        </g>
      </svg>

      {/* Hover hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="text-xs font-medium text-[#0E0F0C] bg-white px-2 py-1 rounded shadow-sm">
          Click to Wave
        </span>
      </div>
    </div>
  );
};
