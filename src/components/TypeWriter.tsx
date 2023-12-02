import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterEffectProps {
  text: string | string[];
  typingDelay?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, typingDelay = 80, className }) => {
  return (
    <div className={`${className} w-full md:w-2/3`}>
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: false,
          delay: typingDelay,
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
