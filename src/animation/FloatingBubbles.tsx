// FloatingBubbles.tsx
import React, { useMemo } from 'react';
import './FloatingBubbles.css';

export const FloatingBubbles = () => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const side = Math.random() < 0.5 ? 'left' : 'right'; // pick an edge
        return (
          <div
            key={i}
            className={`floating-bubble floating-bubble-${i + 1} ${side}`}
            style={
              {
                '--delay': `${i * 0.5}s`,
                '--size': `${30 + Math.random() * 64}px`,
                '--top': `${Math.random() * 100}%`,
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
