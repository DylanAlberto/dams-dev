import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contentContainer = document.getElementById('contentContainer');
      if (contentContainer) {
        const contentScrollTop = contentContainer.scrollTop;
        setScrollY(contentScrollTop);
      }
    };

    const contentContainer = document.getElementById('contentContainer');
    if (contentContainer) {
      contentContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="absolute inset-0 h-full object-cover max-w-none"
          src="src/assets/background.png"
          alt="background"
          style={{
            transform: `translateX(-${scrollY * 0.2}px)`,
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div id='contentContainer' className="absolute inset-y-0 left-0 w-screen h-full overflow-scroll">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-screen h-screen opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
