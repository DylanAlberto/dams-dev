import React from 'react';

interface Props {
  photo: string;
  title?: string;
  url?: string; // Added URL prop
}

const PhotoCarousel: React.FC<Props> = ({ photo, title, url }) => {
  return (
    <div className="w-24 h-24 md:w-40 md:h-40 relative flex flex-col items-center">
      <a
        href={url ? url : '#'}
        target={url ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className='w-20 h-20 md:w-40 md:h-40'
        style={{
          cursor: url ? 'pointer' : 'default',
        }}
      >
        <img
          src={photo}
          alt={photo}
          className={`w-full h-full rounded-3xl border-solid border-2 border-black ${url ? 'hover:scale-105' : ''}`}
        />
      </a>
      {title && <span className="text-base font-bold text-center flex gap-4 md:text-2xl">{title}</span>}
    </div>
  );
};

export default PhotoCarousel;
