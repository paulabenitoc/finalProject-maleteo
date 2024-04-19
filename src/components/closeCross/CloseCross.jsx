import React from 'react';
import './CloseCross.css'

const CloseCross = () => {
  const handleClose = () => {
    window.close(); 
  };

  return (
    <button onClick={handleClose} className='button'>
      X
    </button>
  );
};

export default CloseCross;
