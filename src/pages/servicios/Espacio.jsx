import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver';
import './Espacio.css';
import { Link } from 'react-router-dom';

function Espacio() {
  const [mostrarOpciones1, setMostrarOpciones1] = useState(false);
  const [opcionSeleccionada1, setOpcionSeleccionada1] = useState(null);
  const [mostrarOpciones2, setMostrarOpciones2] = useState(false);
  const [opcionSeleccionada2, setOpcionSeleccionada2] = useState(null);

  const toggleOpciones1 = () => {
    setMostrarOpciones1(!mostrarOpciones1);
  };

  const toggleOpciones2 = () => {
    setMostrarOpciones2(!mostrarOpciones2);
  };

  const seleccionarOpcion1 = (opcion) => {
    setOpcionSeleccionada1(opcion);
    setMostrarOpciones1(false); // Ocultar las opciones después de seleccionar
  };

  const seleccionarOpcion2 = (opcion) => {
    setOpcionSeleccionada2(opcion);
    setMostrarOpciones2(false); // Ocultar las opciones después de seleccionar
  };

  return (
    <div>
      <Volver />
      <div className='title_box'>
        <h1 className='title_text'>Describenos tu espacio</h1>
      </div>
      <div>
        <button className='button' onClick={toggleOpciones1}>
          Especifica tu propiedad
        </button>
        {mostrarOpciones1 && (
          <div className='opciones'>
            <p onClick={() => seleccionarOpcion1('Casa')}>Casa</p>
            <p onClick={() => seleccionarOpcion1('Hotel')}>Hotel</p>
            <p onClick={() => seleccionarOpcion1('Establecimiento')}>
              Establecimiento
            </p>
          </div>
        )}
        <p>{!opcionSeleccionada1 ? 'Selecciona una opción' : opcionSeleccionada1}</p>
          </div>
          <hr />
        <div>
        <button className='button' onClick={toggleOpciones2}>
          ¿Qué tipo de espacio?
        </button>
        {mostrarOpciones2 && (
          <div className='opciones'>
            <p onClick={() => seleccionarOpcion2('Habitacion')}>Habitacion</p>
            <p onClick={() => seleccionarOpcion2('Hall')}>Hall</p>
            <p onClick={() => seleccionarOpcion2('Trastero')}>Trastero</p>
            <p onClick={() => seleccionarOpcion2('Buhardilla')}>Buhardilla</p>
            <p onClick={() => seleccionarOpcion2('Garaje')}>Garaje</p>
          </div>
        )}
        <p>{!opcionSeleccionada2 ? 'Selecciona una opción' : opcionSeleccionada2}</p>
          </div>
      <hr />
      <div className='next_btn '>
        <Link to='/servicios'>
          <a style={{ borderRadius: "100%", cursor: "pointer" }}><img src="public/images/img-btn.png" alt="next" /></a>
          </Link>
      </div>
    </div>
  );
}

export default Espacio;
