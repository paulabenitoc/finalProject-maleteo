import { useState, useRef, useEffect, useContext } from 'react';
import lupa from '../../../public/images/lupa.png';
import {NavLink} from 'react-router-dom';
import {HomeUbiResContext} from './HomeUbiResContext';
/*import 'mapbox-gl/dist/mapbox-gl.css';*/
import './HomeUbiRes.css';

const HomeUbiRes = () => {
    const inputBuscador = useRef('');
    const {ciudad} = useContext(HomeUbiResContext);
    const {setCiudad} = useContext(HomeUbiResContext);

    useEffect(() =>{
      inputBuscador.current.value = ciudad;
    });

    return (
      <div className='pd'>
        <h1 className='titulo'>Encuentra tu guardián</h1>
        <div className='buscadores'>
          <div className='buscador'>
            <img className='icono' src={lupa} alt="lupa" />
            <NavLink to="/reserva/ubicacion" className="input-a">
                <input className='input-buscador' ref={inputBuscador} type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
            </NavLink>
          </div>
        </div>
      </div>
    )
} 

export default HomeUbiRes;