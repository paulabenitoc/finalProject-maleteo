import { useState, useRef, useEffect, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import mapboxgl from 'mapbox-gl';
import aspa from '../../../public/images/aspa.png';
import brujula from '../../../public/images/brujula.png';
import reloj from '../../../public/images/reloj.png';
import equis from '../../../public/images/equis.png';
import imgBtn from '../../../public/images/img-btn.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HomeUbiRes.css';
import { HomeUbiResContext } from './HomeUbiResContext';

const Ubicaciones = () => {
  const {ciudad} = useContext(HomeUbiResContext);
  const {setCiudad} = useContext(HomeUbiResContext); 
  //const [ciudad, setCiudad] = useState('');
  const [mapa, setMapa] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const inputCiudad = useRef(null);

  const initialGradient = 'linear-gradient(to right, #0000, #0000)';  
  const finalGradient = 'linear-gradient(to right,#feb030,#ffce32)';  

  // Usa useSpring para animar el gradiente
  const { background } = useSpring({
    from: { background: initialGradient },
    to: { background: mapa ? finalGradient : initialGradient },
    config: { duration: 300 },
  });
  //const [amarillo, setAmarillo] = useState('container');

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvb3dlZW4iLCJhIjoiY2x2NGF3OXY0MDY3dzJxbW5tNG1jeDVwZiJ9.NDhhbLKm9mhhzRbaFVdSDA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-3.7038, 40.4168],
      zoom: 15,
    }).on('load', () => {
      map.resize();
      console.log(map);
    });

    const marker = new mapboxgl.Marker({
      color: "#F68F24"
    })
    .setLngLat([-3.7038, 40.4168])
    .addTo(map);

    
    document.documentElement.classList.add('hide-scrollbar');

    inputCiudad.current.value = ciudad;
    setMapa(!mapa);
    return () => map.remove();

  }, []);

  return (
    <>    
    <div className='ciudad'>
        <animated.div className='container' style={{ background }}>
            <div className='top'>
                <NavLink to="/reserva/ubicacion">
                    <FontAwesomeIcon className={`fa-flecha ${mapa?'blanca':''}`} icon={faChevronLeft} />
                </NavLink>
                <h1 className='center-text-white'>¿En que zona?</h1>
            </div>
            <div className='buscadores mt-2 mb-2'>
                <div className='buscador sombra'>
                    <img className='icono lupa' src={aspa} alt="lupa" />
                    <input className='input-buscador' ref={inputCiudad} type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
                    <img className='icono equis' src={equis} alt="equis para borrar texto" />
                </div>
            </div>
       </animated.div>
        <div className='next'>
            <img className='btn-next' src={imgBtn} alt="" />
        </div>
    </div>
    <div id='map'></div>    
    </>
  )
}

export default Ubicaciones;