import React from 'react';
import './Volver.css'

const Volver = () => {
  const handleClick = () => {
    window.history.back(); 
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      <span className='volver-component'>&#8249;</span> 
    </div>
  );
};

export default Volver;