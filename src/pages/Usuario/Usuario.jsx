import React, { useState, useEffect } from 'react';
import './Usuario.css';
import './DialogStyles.css';
import { Dialog } from 'primereact/dialog';
import Guardian from './Guardian/Guardian';
import Nav from '../../components/nav/nav';

function Usuario() {
  const [guardianes, setGuardianes] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  useEffect(() => {
    const obtenerGuardianes = async () => {
      try {
        const response = await fetch('http://localhost:3002/guardian');
        const data = await response.json();
        console.log(data);
        if (data && data.data) {
          setGuardianes(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los datos de los guardianes:', error);
      }
    };

    obtenerGuardianes();
  }, []);

  return (
    <div>
      {guardianes.length > 0 && (
        <div className="user">
          <span>
            <h4>{guardianes[0].nombre}</h4>
            <p>Puedes ver y editar tu perfil</p>
          </span>
          <img src={guardianes[0].fotos} alt={guardianes[0].nombre} className="user-img" />
        </div>
      )}
      <div className='menu-options'>
        <div className='user-options'>
          <button className='register-button' label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>
            <h3>Conviértete en guardián</h3>
            <p>Puedes ganar 400€ de media al mes</p>
          </button>
          <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className='dialog'>
            <Guardian onSubmit={handleSubmit}></Guardian>
          </Dialog>
        </div>
        <div className='user-options'>
             <h3>Invita a tus amigos</h3>
             <p>Y podrás ganar descuentos para ti</p>
         </div>
        
         <div className='user-options'>
             <h3>Créditos y decuentos</h3>
         </div>
        
         <div className='user-options'>
             <h3>Publica tu anuncio o experiencia</h3>
         </div>
        
         <div className='user-options'>
             <h3>Configuración</h3>
         </div>
        
         <div className='user-options'>
             <h3>Ayuda</h3>
         </div>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default Usuario;

