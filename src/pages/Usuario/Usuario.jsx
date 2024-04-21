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
        <div className="user-profile">
          <span>
            <h4 className='user-profileName'>{guardianes[0].nombre}</h4>
            <p className='user-profileEdit'>Puedes ver y editar tu perfil</p>
          </span>
          <img src={guardianes[0].fotos} alt={guardianes[0].nombre} className="user-img" />
        </div>
      )}
      <div className='menu-userOptions'>
        <div className='user-userOptions'>
          <button className='userRegister-button' label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>
            <h3 className='userRegister-guardian'>Conviértete en guardián</h3>
            <p className='userRegister-anounce'>Puedes ganar 400€ de media al mes</p>
          </button>
          <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className='dialog'>
            <Guardian onSubmit={handleSubmit}></Guardian>
          </Dialog>
        </div>
        <div className='user-userOptions'>
             <h3>Invita a tus amigos</h3>
             <p className='userRegister-anounce'>Y podrás ganar descuentos para ti</p>
         </div>
        
         <div className='user-userOptions'>
             <h3>Créditos y decuentos</h3>
         </div>
        
         <div className='user-userOptions'>
             <h3>Publica tu anuncio o experiencia</h3>
         </div>
        
         <div className='user-userOptions'>
             <h3>Configuración</h3>
         </div>
        
         <div className='user-userOptions'>
             <h3>Ayuda</h3>
         </div>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default Usuario;

