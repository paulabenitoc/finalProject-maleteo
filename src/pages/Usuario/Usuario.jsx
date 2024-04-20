import React from 'react'
import './Usuario.css'
import './DialogStyles.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import Guardian from './Guardian/Guardian';
import Nav from '../../components/nav/nav';

function Usuario() {
  const [visible, setVisible] = useState(false);

const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div>
      <div>
       <div className="user">
        <span>
          <h4>Marta</h4>
          <p>Puedes ver y editar tu perfil</p>
        </span>
          <img src='public/img/blank-profile-picture-973460_1280.webp' className="user-img"/>
        </div>
        <div className='menu-options'>
        <div className='user-options'>
          <button className='register-button' label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} >
            <h3>Conviértete en guardián</h3>
            <p>Puedes ganar 400€ de media al mes</p>
          </button>
          <Dialog visible={visible} onHide={() => setVisible(false)} className='dialog'>
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
        
      </div>
      <Nav></Nav>
    </div>
  )
}

export default Usuario;