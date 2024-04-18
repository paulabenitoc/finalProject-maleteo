import { useState, useRef, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import mapboxgl from 'mapbox-gl';
import ScrollUpButton from "react-scroll-up";
import lupa from '../public/images/lupa.png';
import atras from '../public/images/atras.png';
import aspa from '../public/images/aspa.png';
import brujula from '../public/images/brujula.png';
import reloj from '../public/images/reloj.png';
import equis from '../public/images/equis.png';
import imgBtn from '../public/images/img-btn.png';
import calendario from '../public/images/calendario.png';
import maleta from '../public/images/maleta.png';
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