import React, { useEffect, useState } from 'react';
import Volver from '../../components/Volver/Volver';
import
 './Confirmacion.css'
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';
import { Dialog } from 'primereact/dialog';
import ChatBot from '../../components/ChatBot/ChatBot.jsx'


// function Confirmacion() {
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = (data) => {
//     console.log("Datos enviados:", data);
//   };
// }


const Confirmacion = () => {

   const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const response = await fetch('http://localhost:3002/reserva');
        const data = await response.json();
        console.log(data);
        setReservas(data.data);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
      }
    };

    obtenerReservas();
  }, []);


  return (

    <div>
      <Volver/>
      <div className='reservation'>
        <h1>Petición de reserva</h1>
      </div>
      <div className="user-profile">
        {reservas.map((reserva, index) => (
          <div key={index}>
            <div className='box'>
            <img src={reserva.img} className="user-img2" />
            <div className="user-info">
            
              <h4>{ reserva.nombre }</h4>
              <p className='text_inf'>Deposito - {reserva.deposito}</p>
              <p className='text_inf'>Recogida -  {reserva.retirada}</p>
            </div>
            <div className="user-buttons">
              <button >Aceptar</button>
              <a href=''>Declinar</a>
            </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
        {/* <h4>Carlos</h4>
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
      </div> */}

      <GuardianNav></GuardianNav>
  </div>    
  );
};

export default Confirmacion;

