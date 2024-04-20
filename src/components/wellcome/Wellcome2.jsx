//import React from 'react';
import './wellcome.css';
import {Link} from 'react-router-dom';

import world from '../../../public/img/world@3x.png';


const Wellcome2 = ()  => {
  
  return (
    <article className="wellcome-card">
      <div className='img-wellcome-container'>
        <img className='wellcome-img' src={world} alt='world'/>
      </div>
      <div className='text-wellcome-container'>
        <h2>El mismo precio en cualquier parte</h2>
        <p>Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso</p>
      </div>
      
      <button id='wellcome2' className="wellcome-button"><Link to='/login'>Empezar ya</Link></button>

      <Link to='#'><p className='prices-link'>Consulta los precios</p></Link>
    </article>
  );
};

export default Wellcome2;
