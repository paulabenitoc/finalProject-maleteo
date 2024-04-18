import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver';
import './Confirmacion.css'
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';


const UserProfile = ({ userData, onAccept, onDecline }) => {
  const { image, name, depositDate, pickupDate } = userData;

  return (
    <div className="user-profile">
      <div className="user-info">
        <img src={image} alt="User Avatar" className="user-avatar" />
        <h3>{name}</h3>
        <p>Depósito: {depositDate}</p>
        <p>Recogida: {pickupDate}</p>
      </div>
      <div className="action-buttons">
        <button onClick={onAccept}>Aceptar</button>
        <button onClick={onDecline}>Declinar</button>
      </div>
    </div>
  );
};

const Confirmacion = () => {
  return (
    <div>
      <Volver></Volver>
      
      <div>
        <h3>Petición de reserva</h3>
      </div>

      <div>
        
      </div>
      <GuardianNav></GuardianNav>
          
    </div>
  );
};

export default Confirmacion;


