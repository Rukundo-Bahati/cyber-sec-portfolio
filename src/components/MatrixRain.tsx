
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    const createColumn = (index: number) => {
      const column = document.createElement('div');
      column.style.position = 'absolute';
      column.style.left = `${index * 20}px`;
      column.style.top = '0';
      column.style.width = '20px';
      column.style.height = '100vh';
      column.style.overflow = 'hidden';
      
      const animateColumn = () => {
        const char = document.createElement('div');
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.className = 'matrix-char';
        char.style.left = '0';
        char.style.animationDelay = `${Math.random() * 2}s`;
        char.style.animationDuration = `${3 + Math.random() * 2}s`;
        
        column.appendChild(char);
        
        setTimeout(() => {
          if (char.parentNode) {
            char.parentNode.removeChild(char);
          }
        }, 5000);
      };
      
      const interval = setInterval(animateColumn, 100 + Math.random() * 200);
      container.appendChild(column);
      
      return () => {
        clearInterval(interval);
        if (column.parentNode) {
          column.parentNode.removeChild(column);
        }
      };
    };

    const cleanupFunctions = [];
    for (let i = 0; i < columns; i++) {
      cleanupFunctions.push(createColumn(i));
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixRain;
