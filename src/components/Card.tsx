import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: [0, 0.2],
        rootMargin: '-5%',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-3xl bg-white p-4 flex items-center justify-center gap-4 flex-col w-full h-full min-h-full max-h-full transition-transform duration-500 ease-in-out bg-opacity-90 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ animation: isVisible ? 'animation-border 2s linear forwards' : '' }}
    >
      {children}
    </div>
  );
};

export default Card;
