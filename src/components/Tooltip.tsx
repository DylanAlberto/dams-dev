import { useState } from 'react';
type props = {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

const Tooltip = ({ children, content, className }: props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={async () => {
          await new Promise(() => setTimeout(() => setShowTooltip(false), 3000));
        }}
      >
        {children}
      </div>
      {showTooltip && <div className="absolute top-full left-full">{content}</div>}
    </div>
  );
};

export default Tooltip;
