import React from 'react';
import './FloatingBubbles.css';

export const FloatingBubbles  = () => {
  const bubbles = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`floating-bubble floating-bubble-${i + 1}`}
      style={{
        '--delay': `${i * 0.5}s`,
        '--size': `${Math.random() * 120 + 80}px`,
        '--left': `${Math.random() * 100}%`,
        '--top': `${Math.random() * 100}%`,
      } as React.CSSProperties}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles}
    </div>
  );
};

export default FloatingBubbles;