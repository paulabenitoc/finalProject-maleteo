import { useState, useRef, createContext, useContext, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HomeUbiResContext } from './HomeUbiResContext';
//import useMiContexto  from './HomeUbiResContext';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import aspa from '../../../public/images/aspa.png';
import brujula from '../../../public/images/brujula.png';
import reloj from '../../../public/images/reloj.png';
import equis from '../../../public/images/equis.png';
import imgBtn from '../../../public/images/img-btn.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HomeUbiRes.css';

const Ubicacion = () => {
  //const [ciudad, setCiudad] = useState('');
  const {ciudad} = useContext(HomeUbiResContext);
  const {setCiudad} = useContext(HomeUbiResContext);
  const [mapa, setMapa] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const inputCiudad = useRef('');
  //const {ciudad} = useMiContexto();
  //const {setCiudad } = useMiContexto();

  const initialGradient = 'linear-gradient(to right, #0000, #0000)';  
  const finalGradient = 'linear-gradient(to right,#feb030,#ffce32)';  

  const ubicacionContexto = createContext();

  // Usa useSpring para animar el gradiente
  const { background } = useSpring({
    from: { background: initialGradient },
    to: { background: mapa ? finalGradient : initialGradient },
    config: { duration: 300 },
  });
  //const [amarillo, setAmarillo] = useState('container');

  const miUbicacion = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvb3dlZW4iLCJhIjoiY2x2NGF3OXY0MDY3dzJxbW5tNG1jeDVwZiJ9.NDhhbLKm9mhhzRbaFVdSDA';
    const obtenerCiudadDesdeCoordenadas = async (lng, lat) => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=place&access_token=${mapboxgl.accessToken}`
        );

        // Extrae la ciudad de la respuesta
        const features = response.data.features;
        if (features.length > 0) {
          const ciudadd = features[0].text;
          console.log(ciudadd, features);
          inputCiudad.current.value = ciudadd;
          
        } else {
          setError('No se encontró la ciudad.');
        }
      } catch (error) {
        setError('No se pudo obtener la información de ubicación.');
        console.error(error);
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        obtenerCiudadDesdeCoordenadas(longitude, latitude);
      },
      (error) => {
        setError('No se pudo obtener la ubicación del usuario.');
        console.error(error);
      }
    );
  }

  const borrar = () => {
    inputCiudad.current.value = '';
  }

  return (
    <>    
    <div className='ciudad'>
      <animated.div className='container' style={{ background }}>
        <div className='top'>
          <NavLink to="/reserva">
            <FontAwesomeIcon className={`fa-flecha ${mapa?'blanca':''}`} icon={faChevronLeft} />
          </NavLink>
          <h1 className='center-text-white'>¿En que zona?</h1>
        </div>
        <div className='buscadores mt-2 mb-2'>
          <div className='buscador sombra'>
            <img className='icono lupa' src={aspa} alt="lupa" />
            <input className='input-buscador' ref={inputCiudad} type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
            <img className='icono equis' src={equis} alt="equis para borrar texto" onClick={() => borrar()}/>
          </div>
        </div>
      </animated.div>
      <div className='respuestas'>
      <div className='buscame miUbi' onClick={() => miUbicacion()}>
          <img className='icono brujula' src={brujula} alt="brujula" />
          <p className='text'>Utilizar mi ubicacion actual</p>
      </div>     
      
      <div className='buscame miUbi'>
          <img className='icono reloj' src={reloj} alt="reloj" />
          <p className='text'>Pacifico, Madrid</p>
      </div> 
      <hr className='divisor' />
      <div className='buscame miUbi'>
          <img className='icono reloj' src={reloj} alt="reloj" />
          <p className='text'>Alicante, España</p>
      </div> 
      <hr className='divisor' />
      <div className='sugerencias miUbi'>
          <p className='text'>Madrid</p>
          <p className='text light'>España</p>
      </div> 
      <hr className='divisor' />
      <div className='sugerencias miUbi'>
          <p className='text'>Madrid -Atocha cercanías</p>
          <p className='text light'>Madrid, España</p>
      </div> 
      <hr className='divisor' />
    </div>      
    
    <NavLink to="/reserva/ubicaciones" onClick={() => {setCiudad(inputCiudad.current.value)}} className='next'>
      <img className='btn-next' src={imgBtn} alt="" />
    </NavLink>
    
    </div>
    </>
  )
}

export default Ubicacion;