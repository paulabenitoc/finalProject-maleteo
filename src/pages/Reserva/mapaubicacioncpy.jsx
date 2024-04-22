import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';
import Forward from '../../components/Forward/Forward';
import Nav from '../../components/nav/nav';

export default function MapaUbicacioncpy() {
    const geocoderContainer = useRef(null);
    const mapContainer = useRef(null);
    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {

        axios
            .get("http://localhost:3002/guardian")
            .then((response) => setCharacters(response.data.data));
    };

    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvb3dlZW4iLCJhIjoiY2x2NGF3OXY0MDY3dzJxbW5tNG1jeDVwZiJ9.NDhhbLKm9mhhzRbaFVdSDA';
        const mapInstance = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-3.7038, 40.4168],
            zoom: 15,
        });

        const existingGeocoder = document.querySelector('.mapboxgl-ctrl-geocoder');
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            types: 'country,region,place,postcode,locality,neighborhood',
            marker: { color: 'orange' },
            mapboxgl: mapboxgl
        });
        if (!existingGeocoder) {
            geocoder.addTo(geocoderContainer.current);
        }

        getCharacters();
    }, []);

    return (
        <>
            <div className='bar' ref={geocoderContainer}></div>

            <div className='mapss' id='map' ref={mapContainer}></div>

            <div>

                <div className="chars-detalle">
                    <div className='iconito'><img className='imagen-iconito' src='public/lugarYusuarios/c.png' /></div>
                    <div className='chars-mapa'>
                        <Forward >  </Forward>
                        <section className='usuario-mapa'>
                            <div className='usuario_i'>
                                <h3 className='chars_usuario_h2'>Maria Gonzalez</h3>
                                <img className='imagen-mapa' src='public/lugarYusuarios/u1.png' />
                                <img className='imagenValoracion' src='public/lugarYusuarios/valoracion.png' />
                                <p className='chars_usuario_p'>Plaça de l'Ajuntament, 1, 46002 València</p>
                                <p className='chars_usuario_p'>5 minutos a pie</p>
                            </div>
                        </section>
                    </div>
                    <div className='chars-mapa1'>
                        <div className='Back'><img className='imagen-mapa1' src='public/lugarYusuarios/s4.png' /></div>
                        <section className='usuario-mapa'>
                            <div className='usuario_i'>
                                <h3 className='chars_usuario_h2'>Juan Perez</h3>
                                <img className='imagen-mapa' src='public/lugarYusuarios/u5.png' />
                                <img className='imagenValoracion' src='public/lugarYusuarios/valoracion.png' />
                                <p className='chars_usuario_p'>Av Professor López Piñero, 7, 46013 València</p>
                                <p className='chars_usuario_p'>15 minutos a pie</p>
                            </div>
                        </section>
                    </div>
                </div>

            </div>

            <Nav className='navi'></Nav>
        </>
    )
}
