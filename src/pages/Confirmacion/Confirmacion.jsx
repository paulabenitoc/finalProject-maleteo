import React from 'react';
import Volver from '../../components/Volver/Volver';
import './Confirmacion.css'
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';

const Confirmacion = () => {
  return (
    <div>
      <Volver></Volver>
    
      <div className='reservation'>
        <h3>Petición de reserva</h3>
      </div>
      <div className="user-profile">
        <img src="public/img/blank-profile-picture-973460_1280.webp" alt="user profile" className="user-img" />
        <div className="user-info">
          
          <h4>carlos</h4>
          <p>Depósito: 12/04</p>
          <p>Recogida: 14/04</p>
        </div>
        
        <div className="user-buttons">
          <button>Aceptar</button>
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
          <button >Aceptar</button>
          <a href=''>Declinar</a>
        </div>
        {/* <div className='user-options'>
          <button className='register-button' label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} >
            <h3>Conviértete en guardián</h3>
            <p>Puedes ganar 400€ de media al mes</p>
          </button>
          <Dialog visible={visible} onHide={() => setVisible(false)} className='dialog'>
          <Guardian onSubmit={handleSubmit}></Guardian>
          </Dialog>
        </div> */}
      </div>

      <div className="user-profile">
        <img src="public/img/blank-profile-picture-973460_1280.webp" alt="user profile" className="user-img" />
        <div className="user-info">
          <h4>carlos</h4>
          <p>Depósito: 12/04</p>
          <p>Recogida: 14/04</p>
        </div>
        
        <div className="user-buttons">
          <button >Aceptar</button>
          <a href=''>Declinar</a>
        </div>
      </div>

      <GuardianNav></GuardianNav>
    </div>
  );
};

export default Confirmacion;

