import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import aspa from '../../../public/images/aspa.png';
import brujula from '../../../public/images/brujula.png';
import reloj from '../../../public/images/reloj.png';
import equis from '../../../public/images/equis.png';
import imgBtn from '../../../public/images/img-btn.png';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HomeUbiRes.css';
import { HomeUbiResContext } from './HomeUbiResContext';

const Ubicaciones = () => {
  const navigate = useNavigate();
  const {ciudad} = useContext(HomeUbiResContext);
  const {setCiudad} = useContext(HomeUbiResContext); 
  const {idMarker} = useContext(HomeUbiResContext);
  const {setMarker} = useContext(HomeUbiResContext); 
  const {markerUbi} = useContext(HomeUbiResContext);
  const {setMarkerUbi} = useContext(HomeUbiResContext); 
  const geocoderContainer = useRef(null);
  const inputCiudad = useRef('');
  const mapContainer = useRef(null);
  const [mapa, setMapa] = useState(true);
  const [map, setMap] = useState(null); // Estado para mantener el objeto map
  const initialGradient = 'linear-gradient(to right, #0000, #0000)';  
  const finalGradient = 'linear-gradient(to right,#feb030,#ffce32)';  
  const { background } = useSpring({
    from: { background: initialGradient },
    to: { background: mapa ? finalGradient : initialGradient },
    config: { duration: 300 },
  });

  const mover = (a) => {
    if (mapInstance) {
      console.log('mapa existe', a);
      mapInstance.flyTo({
        center: a.result.center,
        essential:true,
        zoom: 12,
        duration: 2000
      });
    }else{
      console.log('el mapa no existe');
    }
  };
  let mapInstance = '';

  const iniciaMapa = async() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvb3dlZW4iLCJhIjoiY2x2NGF3OXY0MDY3dzJxbW5tNG1jeDVwZiJ9.NDhhbLKm9mhhzRbaFVdSDA';

    mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: markerUbi ? markerUbi : [-3.7038, 40.4168],
      zoom: 15,
    });

    const {data} = await axios('http://localhost:3002/ubicacion');

    data.data.forEach((info) => {
      let lat = info.latitud;
      let lon = info.longitud;
      let marker = '';
      if(info._id == idMarker){
        marker = new mapboxgl.Marker({
          color: "#419bf9"
        })
        .setLngLat([lon, lat])
        .addTo(mapInstance);        
      }else{
        marker = new mapboxgl.Marker({
          color: "#F68F24"
        })
        .setLngLat([lon, lat])
        .addTo(mapInstance);         
      }

      /*.setPopup(new mapboxgl.Popup().setHTML(`
        ${info.direccion}
      `));*/

      const markerData = {};
      markerData[marker._elementID] = {
        info: info
      };

      marker.getElement().addEventListener('click', () => {
        const markerInfo = markerData[marker._elementID];
        console.log(markerInfo.info.direccion);
        setCiudad(markerInfo.info.direccion);
        console.log(markerInfo.info._id);
        setMarker(markerInfo.info._id);
        setMarkerUbi([markerInfo.info.longitud, markerInfo.info.latitud]);
        navigate('/reserva');
      });
    });


 
    const existingGeocoder = document.querySelector('.mapboxgl-ctrl-geocoder');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country,region,place,postcode,locality,neighborhood',
      marker: { color: 'orange' },
      mapboxgl: mapboxgl
    });

    if(!existingGeocoder){
      geocoder.addTo(geocoderContainer.current);
    }

    geocoder.on('result', (e) => {
      //console.log('geocoder ejecutado',e);
      mover(e);   
    });

    geocoder.on('mapboxgl-geocoder input', function () {
      geocoder.setInput(ciudad);
    });

    //const marker = new mapboxgl.Marker({color: "#F68F24"}).setLngLat([-3.7038, 40.4168]).addTo(mapInstance); 
    document.documentElement.classList.add('hide-scrollbar');

    mapInstance.on('load', () => {
      //console.log('mapa cargado');
      //console.log(geocoder);
      setMap(mapInstance);
      sugiere();
      
  });
  }

  const sugiere = () => {
    const input = geocoderContainer.current.querySelector('input.mapboxgl-ctrl-geocoder--input');
    input.value = ciudad;
  }

  const goToReserva = async() => {
    navigate('/reserva');
  }

  useEffect(() => {
    iniciaMapa();
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
            <div className='buscadores mt-2 mb-2' ref={geocoderContainer}>
              
                {/*<div className='buscador sombra'>
                    <img className='icono lupa' src={aspa} alt="lupa" />
                    <input className='input-buscador' ref={inputCiudad} type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
                    <img className='icono equis' src={equis} alt="equis para borrar texto" />
                </div> */}
                
            </div>
       </animated.div>
        <div className='next' onClick={() => {goToReserva()}}>
            <img className='btn-next' src={imgBtn} alt="" />
        </div>
    </div>
    <div id='map'  ref={mapContainer}></div>    
    </>
  )
}

export default Ubicaciones;