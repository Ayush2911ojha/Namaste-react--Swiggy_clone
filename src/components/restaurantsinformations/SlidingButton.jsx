import React, { useState } from 'react';

import './btn.css'; // Import your CSS file for styling

const SlidingButton = ({ onChange}) => {
  const [toggle, setToggle] = useState(false);



  const toggleButton = () => {
    setToggle(prevState => !prevState);
    onChange(prevState => !prevState);
  };

  return (
    <div className="sliding-button" onClick={toggleButton}>
          <div className={`slider ${toggle ? 'active' : ''}`} />
         
    </div>
  );
};

export default SlidingButton;