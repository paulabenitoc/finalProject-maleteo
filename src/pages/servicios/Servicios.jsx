import React, { useState, useEffect } from 'react';
import Volver from '../../components/Volver/Volver';
import './Servicios.css'
import Nav from '../../components/nav/nav';

function Servicios() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    const obtenerAnuncios = async () => {
      try {
        const response = await fetch('http://localhost:3002/anuncio');
        const data = await response.json();
        console.log(data);
        setAnuncios(data.data);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
      }
    };

    obtenerAnuncios();
  }, []);

  return (
    <div>
      <Volver />
      <h1>Tus anuncios</h1>
      <div className='box_anuncios'>
        {anuncios.map((anuncio, index) => (
          <div key={index}>
            <h2>{anuncio.nombre}</h2> 
            <p>Anuncio completado al 100%</p>
            <div className='caja_1'>
              <img className='img' src={anuncio.fotos} alt="fotos" />
               <a href='#'><button>&#62;</button></a>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <h1>Añade otro espacio</h1>
      <div className='agregar'>
        <a href='#'><button>&#43;</button></a>
      </div>
      <hr />
      <Nav/>
    </div>
  );
}

export default Servicios;
