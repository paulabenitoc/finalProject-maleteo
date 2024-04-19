import React from 'react';
import Volver from '../../components/Volver/Volver';
import './Confirmacion.css'
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import ChatBot from '../../components/ChatBot/ChatBot.jsx'


function Confirmacion() {
const [visible, setVisible] = useState(false);

const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div>
      <Volver></Volver>
    
      <div className='reservation'>
        <h3>Petición de reserva</h3>
      </div>
      <div className="user-profile">
        <img src="public/img/blank-profile-picture-973460_1280.webp" alt="user profile" className="user-img" />
        <div className="user-info">
          
          <h4>Carlos</h4>
          <p>Depósito: 12/04</p>
          <p>Recogida: 14/04</p>
        </div>
        
        <div className="user-buttons">
          <button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>Aceptar</button>
          <Dialog visible={visible} onHide={() => setVisible(false)}>
            <ChatBot onSubmit={handleSubmit}></ChatBot>
          </Dialog>
          <a href=''>Declinar</a>
        </div>
      </div>

      <div className="user-profile">
        <img src="public/img/blank-profile-picture-973460_1280.webp" alt="user profile" className="user-img" />
        <div className="user-info">
          <h4>carlos</h4>
          <p>Depósito: 12/04</p>
          <p>Recogida: 14/04</p>
        </div>
        
        <div className="user-buttons">
          <button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>Aceptar</button>
          <Dialog visible={visible} onHide={() => setVisible(false)}>
            <ChatBot onSubmit={handleSubmit}></ChatBot>
          </Dialog>
          <a href=''>Declinar</a>
        </div>
      </div>

      <div className="user-profile">
        <img src="public/img/blank-profile-picture-973460_1280.webp" alt="user profile" className="user-img" />
        <div className="user-info">
          <h4>carlos</h4>
          <p>Depósito: 12/04</p>
          <p>Recogida: 14/04</p>
        </div>
        
        <div className="user-buttons">
          <button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>Aceptar</button>
          <Dialog visible={visible} onHide={() => setVisible(false)}>
            <ChatBot onSubmit={handleSubmit}></ChatBot>
          </Dialog>
          <a href=''>Declinar</a>
        </div>
      </div>

      <GuardianNav></GuardianNav>
    </div>
  );
};

export default Confirmacion;

