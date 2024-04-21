//import React from 'react';
import "./wellcome.css";
import { Link } from "react-router-dom";

import world from "../../../public/img/world@3x.png";


const Wellcome2 = () => {

  return (
    <article className="wellcome-card">
      <div className='img-wellcome-container'>
        <img className='wellcome-img' src={world} alt='world' />
      </div>
      <div className='text-wellcome-container'>
        <h2 className='text-wellcome-container_letra'>El mismo precio en cualquier parte</h2>
        <p className='text-wellcome-container_letra'>Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso</p>
      </div>
      <div className='welcome__container'>
        <Link to='/login' className="wellcome-button">
          <button id='wellcome2' className="wellcome-button_letra">Empezar ya</button>
        </Link>
        <Link to='/tarifas'><p className='prices-link'>Consulta los precios</p>
        </Link>
      </div>
    </article>
  );
};

export default Wellcome2;
