import { useState, useRef, useEffect } from 'react';
import lupa from '../../public/images/lupa.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HomeUbiRes.css';

const HomeUbiRes = () => {
    const [ciudad, setCiudad] = useState('');
    return (
      <div className='pd'>
        <h1 className='titulo'>Encuentra tu guardián</h1>
        <div className='buscadores'>
          <div className='buscador'>
            <img className='icono' src={lupa} alt="lupa" />
            <input className='input-buscador' type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
          </div>
        </div>
      </div>
    )
} 

export default HomeUbiRes;