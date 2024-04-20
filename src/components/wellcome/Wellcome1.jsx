//import React from 'react';
import './wellcome.css';
import cadena from '../../../public/img/cadena@3x.png';

const wellcome1 = ({ handleClick }) => {
    
  return (
    <article className="wellcome-card">
      <div className='img-wellcome-container'>
        <img className='wellcome-img' src={cadena} alt='cadena'/>
      </div>
      <div className='text-wellcome-container'>
        <h2>Prepárate para liberarte de tu equipaje</h2>
        <p>Encuentra a tu guardian y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas</p>
      </div>
      <button className="wellcome-button" onClick={handleClick} id='wellcome1'>Continuar</button>
    </article>
  );
};

export default wellcome1;
