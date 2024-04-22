import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver';
import './Espacio.css';
import { Link } from 'react-router-dom';

function Espacio() {
  const [mostrarOpciones1, setMostrarOpciones1] = useState(false);
  const [opcionSeleccionada1, setOpcionSeleccionada1] = useState(null);
  const [mostrarOpciones2, setMostrarOpciones2] = useState(false);
  const [opcionSeleccionada2, setOpcionSeleccionada2] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false); // Nuevo estado para controlar si algún menú está abierto

  const toggleOpciones1 = () => {
    setMostrarOpciones1(!mostrarOpciones1);
    setMostrarOpciones2(false); // Asegurarse de que solo un menú esté abierto a la vez
    setMenuAbierto(!menuAbierto); // Cambiar el estado del menú abierto
  };

  const toggleOpciones2 = () => {
    setMostrarOpciones2(!mostrarOpciones2);
    setMostrarOpciones1(false); // Asegurarse de que solo un menú esté abierto a la vez
    setMenuAbierto(!menuAbierto); // Cambiar el estado del menú abierto
  };

  const seleccionarOpcion1 = (opcion) => {
    setOpcionSeleccionada1(opcion);
    setMostrarOpciones1(false); // Ocultar las opciones después de seleccionar
    setMenuAbierto(false); // Cerrar el menú
  };

  const seleccionarOpcion2 = (opcion) => {
    setOpcionSeleccionada2(opcion);
    setMostrarOpciones2(false); // Ocultar las opciones después de seleccionar
    setMenuAbierto(false); // Cerrar el menú
  };

  return (
    <div className={menuAbierto ? 'with-background' : ''}>
      <Volver />
      <div className='title_box'>
        <h1 className='title_text'>Describenos tu espacio</h1>
      </div>
      <div>
        <button className={`espacio-propiedad ${menuAbierto ? 'menu-open' : ''}`} onClick={toggleOpciones1}>
          Especifica tu propiedad
        </button>
        {mostrarOpciones1 && (
          <div className='opciones'>
            <p onClick={() => seleccionarOpcion1('Casa')} className='espacio-option'>Casa</p>
            <p onClick={() => seleccionarOpcion1('Hotel')} className='espacio-option'>Hotel</p>
            <p onClick={() => seleccionarOpcion1('Establecimiento')} className='espacio-option'>
              Establecimiento
            </p>
          </div>
        )}
        <p className='espacio-option'>{!opcionSeleccionada1 ? 'Selecciona una opción' : opcionSeleccionada1}</p>
      </div>
      <hr className='espacio-barra'/>
      <div>
        <button className={`espacio-propiedad ${menuAbierto ? 'menu-open' : ''}`} onClick={toggleOpciones2}>
          ¿Qué tipo de espacio?
        </button>
        {mostrarOpciones2 && (
          <div className='opciones'>
            <p onClick={() => seleccionarOpcion2('Habitacion')} className='espacio-option'>Habitacion</p>
            <p onClick={() => seleccionarOpcion2('Hall')} className='espacio-option'>Hall</p>
            <p onClick={() => seleccionarOpcion2('Trastero')} className='espacio-option'>Trastero</p>
            <p onClick={() => seleccionarOpcion2('Buhardilla')} className='espacio-option'>Buhardilla</p>
            <p onClick={() => seleccionarOpcion2('Garaje')} className='espacio-option'>Garaje</p>
          </div>
        )}
        <p className='espacio-option'>{!opcionSeleccionada2 ? 'Selecciona una opción' : opcionSeleccionada2}</p>
      </div>
      <hr className='espacio-barra'/>
      <div className='next_btn '>
        <Link to='/servicios'>
          <a style={{ borderRadius: "100%", cursor: "pointer" }}><img className='flecha' src="public/images/img-btn.png" alt="next" /></a>
        </Link>
      </div>
    </div>
  );
}

export default Espacio;
