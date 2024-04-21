import React, { useEffect, useState } from 'react';
import Volver from '../../components/Volver/Volver';
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';
import { Dialog } from 'primereact/dialog';
import ChatBot from '../../components/ChatBot/ChatBot.jsx'
import './Confirmacion.css'

const Confirmacion = () => {
  const [reservas, setReservas] = useState([]);

  const [visible, setVisible] = useState(false);

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const response = await fetch('http://localhost:3002/reserva');
        const data = await response.json();
        console.log(data);
        setReservas(data.data);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    obtenerReservas();
  }, []);

  return (

    <div className='confirmacion-page'>
      <Volver/>
      <div className='reservation'>
        <h1 className='peticion-reserva'>Petición de reserva</h1>
      </div>
      <div className="user-profileConfir">
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
                <button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>Aceptar</button>
                <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <ChatBot onSubmit={handleSubmit}></ChatBot>
                </Dialog>
              <a href='' className='delete-confirmacion'>Declinar</a>
            </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <GuardianNav></GuardianNav>
  </div>    
  );
};

export default Confirmacion;