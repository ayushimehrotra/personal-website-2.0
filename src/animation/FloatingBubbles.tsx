// FloatingBubbles.tsx
import React, { useMemo } from 'react';
import './FloatingBubbles.css';

export const FloatingBubbles = () => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const topPercent = Math.random() * 100;
        const isInHeroSection = topPercent < 100; // First 100vh is hero section
        
        let positionClass = '';
        let leftPercent = '';
        
        if (isInHeroSection) {
          // Random positioning across the entire width for hero section
          leftPercent = `${Math.random() * 100}%`;
        } else {
          // Side positioning for sections below hero
          const side = Math.random() < 0.5 ? 'left' : 'right';
          positionClass = side;
          leftPercent = side === 'left' ? '1%' : '99%';
        }
        
        return (
          <div
            key={i}
            className={`floating-bubble floating-bubble-${i + 1} ${positionClass}`}
            style={
              {
                '--delay': `${i * 0.5}s`,
                '--size': `${30 + Math.random() * 64}px`,
                '--top': `${topPercent}%`,
                left: !positionClass ? leftPercent : undefined,
              } as React.CSSProperties
            }
          />
        );
      }),
    []
  );

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{bubbles}</div>;
};

export default FloatingBubbles;