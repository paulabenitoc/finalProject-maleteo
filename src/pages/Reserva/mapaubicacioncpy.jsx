import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';
import Forward from '../../components/Forward/Forward';


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


            <div className="chars">
                <Forward />
                {characters.map((character, index) => (<div key={index}>
                    <h2>{character.nombre}</h2>
                    <img className='imagenguard' src={character.fotos} />
                    <p>{character.ubicacion}</p>
                </div>))}

            </div>

        </>
    )
}
