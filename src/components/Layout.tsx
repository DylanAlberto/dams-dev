import React, { useEffect, useState, useRef } from 'react';
import backgroundImage from '../assets/background.png';

function Layout({ children }: { children: React.ReactNode }) {
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentContainerRef.current) {
        setContentHeight(contentContainerRef.current.scrollHeight);
        setScrollY(contentContainerRef.current.scrollTop);
      }
    };

    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.addEventListener('scroll', handleScroll);
      setContentHeight(contentContainer.scrollHeight);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div 
      className="relative h-screen overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          id='background'
          className='h-full bg-fixed inset-0 absolute z-10 min-w-full'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            width: `${contentHeight}px`,
            transform: `translateX(-${scrollY * 0.2}px)`,
          }}
        ></div>
        <div className={`relative z-20 h-full flex items-center justify-center bg-opacity-10 bg-black backdrop-blur-sm`}>
          <div
            ref={contentContainerRef}
            id='contentContainer'
            className={`flex gap-12 flex-col items-center h-full w-full md:w-4/5 p-4 md:p-12 overflow-y-scroll overflow-x-hidden`}
          >
              {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
