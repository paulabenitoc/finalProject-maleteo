import React from 'react';
import './Guardian.css';

export default function Guardian() {

  return (
    <div className='guardian'>
      <div>
        <div className="config">
          <h3>Configura tu espacio en muy pocos pasos</h3>
        </div>
        <div className='config-space'>
          <div className='description'>
            <h4>Describe tu espacio</h4>
            <button>Continuar</button>
          </div>
          
          <div className='item-space'>
            <p>Ubicación</p>
            <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} />
          </div>
          
          <div className='item-space'>
            <p>Fotos</p>
          </div>
          
          <div className='item-space'>
            <p>Título</p>
          </div>
          
          <div className='item-space'>
            <p>Disponibilidad y horarios</p>
          </div>
          
          <div className='item-space'>
            <p>Servicios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
