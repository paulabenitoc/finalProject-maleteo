import React, { useEffect, useState } from 'react';
import Volver from '../../components/Volver/Volver';
import './Confirmacion.css'
import GuardianNav from '../../components/GuardianNav/GuardianNav.jsx';



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
      <GuardianNav></GuardianNav>
  </div>    
  );
};

export default Confirmacion;

