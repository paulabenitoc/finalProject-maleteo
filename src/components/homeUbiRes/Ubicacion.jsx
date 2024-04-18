import { useState, useRef, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import mapboxgl from 'mapbox-gl';
import ScrollUpButton from "react-scroll-up";
import lupa from '../../public/images/lupa.png';
import atras from '../../public/images/atras.png';
import aspa from '../../public/images/aspa.png';
import brujula from '../../public/images/brujula.png';
import reloj from '../../public/images/reloj.png';
import equis from '../../public/images/equis.png';
import imgBtn from '../../public/images/img-btn.png';
import calendario from '../../public/images/calendario.png';
import maleta from '../../public/images/maleta.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HomeUbiRes.css';

const Ubicacion = () => {
  const [ciudad, setCiudad] = useState('');
  const [mapa, setMapa] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mapContainer = useRef(null);

  const initialGradient = 'linear-gradient(to right, #0000, #0000)';  
  const finalGradient = 'linear-gradient(to right,#feb030,#ffce32)';  

  // Usa useSpring para animar el gradiente
  const { background } = useSpring({
    from: { background: initialGradient },
    to: { background: mapa ? finalGradient : initialGradient },
    config: { duration: 300 },
  });
  //const [amarillo, setAmarillo] = useState('container');

  const cambiaColor = () => {
    setMapa(!mapa);
  }
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

    if (mapa) {
      document.documentElement.classList.add('hide-scrollbar');
    } else {
      document.documentElement.classList.remove('hide-scrollbar');
    }

    return () => map.remove();
  }, [mapa]);


  return (
    <>    
    <div className='ciudad'>
      <animated.div className='container' style={{ background }}>
        <div className='top'>
          <FontAwesomeIcon className={`fa-flecha ${mapa?'blanca':''}`} icon={faChevronLeft} />
          <h1 className='center-text-white'>¿En que zona?</h1>
        </div>
        <div className='buscadores mt-2 mb-2'>
          <div className='buscador sombra'>
            <img className='icono lupa' src={aspa} alt="lupa" />
            <input className='input-buscador' type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
            <img className='icono equis' src={equis} alt="equis para borrar texto" />
          </div>
        </div>
      </animated.div>
      {!mapa &&
      <div className='respuestas'>
      <div className='buscame'>
          <img className='icono brujula' src={brujula} alt="lupa" />
          <p className='text'>Utilizar mi ubicacion actual</p>
      </div>     
      
      <div className='buscame'>
          <img className='icono reloj' src={reloj} alt="lupa" />
          <p className='text'>Pacifico, Madrid</p>
      </div> 
      <hr className='divisor' />
      <div className='buscame'>
          <img className='icono reloj' src={reloj} alt="lupa" />
          <p className='text'>Alicante, España</p>
      </div> 
      <hr className='divisor' />
      <div className='sugerencias'>
          <p className='text'>Madrid</p>
          <p className='text light'>España</p>
      </div> 
      <hr className='divisor' />
      <div className='sugerencias'>
          <p className='text'>Madrid -Atocha cercanías</p>
          <p className='text light'>Madrid, España</p>
      </div> 
      <hr className='divisor' />
    </div>      
      }
    
    <div className='next' onClick={() => {cambiaColor()}}>
      <img className='btn-next' src={imgBtn} alt="" />
    </div>
    
    </div>
    <div>
      
    </div>
    <div id='map' className={`${mapa?'d-block':'d-none'}`}></div>    
    
    </>
  )
}

export default Ubicacion;