import { useState, useRef, useEffect } from 'react';
import './popover.css';

const Popover = ({ content, children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = event => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="popover-container" ref={popoverRef}>
      <button className="popover-button" onClick={togglePopover}>
        {children}
      </button>
      {isPopoverOpen && <div className="popover-content">{content}</div>}
    </div>
  );
};

export default Popover;
