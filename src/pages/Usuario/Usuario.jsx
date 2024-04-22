import React, { useState, useEffect, useContext } from 'react';
import { Dialog } from 'primereact/dialog';
import Guardian from './Guardian/Guardian';
import Nav from '../../components/nav/nav';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';
import { HomeUbiResContext } from '../../components/homeUbiRes/HomeUbiResContext';
import './Usuario.css';
import './DialogStyles.css';

function Usuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);
  const [guardianes, setGuardianes] = useState([]);
  const [visible, setVisible] = useState(false);
  const {email} = useContext(HomeUbiResContext); 
  const logOutSubmit = () => {
    localStorage.removeItem('Token');
    navigate('/login');
  }
  
  const getUsuario = async() => {
    const {data} = await axios('http://localhost:3002/usuarios');
      data.data.filter((x) => {
      if (x.email == email) {
        setUsuario(x);
        console.log(x);
        return x;
      }
    });
    
  }

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  useEffect(() => {
    const obtenerGuardianes = async () => {
      try {
        getUsuario();
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
    <div >
      <span className="user-profile">
        <h4 className='user-profileName'>{usuario.nombre}</h4>
        <p className='user-profileEdit'>Puedes ver y editar tu perfil</p>
      </span>

    {/* {usuario.map((item, index)=> {
        return (
          <div key={index} className="user-profile">
            <span>
              <h4 className='user-profileName'>{item.nombre}</h4>
              
            </span>
            <img src={item.fotos} alt={item.nombre} className="user-img" />
          </div>
        )
      })} */}

      <div className='menu-userOptions'>
        <div className='user-userOptions'>
          <button className='userRegister-button' label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}>
            <h3 className='userRegister-guardian'>Conviértete en guardián</h3>
            <p className='userRegister-anounce'>Puedes ganar 400€ de media al mes</p>
          </button>
          <Dialog visible={visible} style={{ width: '100vw' }} onHide={() => setVisible(false)} className='dialog'>
            <Guardian onSubmit={handleSubmit} style="100wv"></Guardian>
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
        
        <button onClick={()=> logOutSubmit()} className='logOut-button-usuario'>Log Out</button>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default Usuario;

