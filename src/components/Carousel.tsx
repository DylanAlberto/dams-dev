import React, { useState, useEffect } from 'react';

interface PhotoCarouselProps {
  photos: string[];
  interval?: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, interval = 3000 }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [photos.length, interval]);

  const previousPhotoIndex = currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1;
  const nextPhotoIndex = (currentPhotoIndex + 1) % photos.length;

  return (
    <div className="w-36 h-36 md:w-80 md:h-80 overflow-hidden relative flex justify-center items-center">
      {photos.map((photo, index) => (
        <div 
          key={photo}
          className={`rounded-3xl absolute transition-all ease-in-out duration-1000 transform bg-white w-2/3 h-2/3 ${
            index === currentPhotoIndex
              ? 'opacity-100 scale-100 z-10'
              : index === previousPhotoIndex
              ? 'opacity-50 scale-75 -translate-x-40'
              : index === nextPhotoIndex
              ? 'opacity-50 scale-75 translate-x-40'
              : 'opacity-0 scale-75'
          }`}
        >
          <img
            src={photo}
            alt={`Photo ${index}`}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoCarousel;
