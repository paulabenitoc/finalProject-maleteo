//import React from 'react';
import './wellcome.css';
import world from '../../../public/img/world@3x.png';

import {Link} from 'react-router-dom';

const Wellcome2 = ({ handleClick })  => {
  
  return (
    <article className="wellcome-card">
      <div className='img-container'>
        <img className='wellcome-img' src={world} alt='world'/>
      </div>
      <div className='text-wellcome-container'>
        <h2>El mismo precio en cualquier parte</h2>
        <p>Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso</p>
      </div>
      <button className="wellcome-button" onClick={handleClick} id='wellcome2'>Empezar ya</button>
      <Link to='#'><p className='prices-link'>Consulta los precios</p></Link>
    </article>
  );
};

export default Wellcome2;
