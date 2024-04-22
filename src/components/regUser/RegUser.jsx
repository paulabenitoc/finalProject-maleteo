//import React from 'react'
import './regUser.css';

// eslint-disable-next-line react/prop-types
const RegUser = ({ handleInputs, usuario }) => {

  return (
    <div className="register-inputs">
        <label className='reg_txt1' htmlFor="email">Dirección de correo electrónico</label>
        <input className='reg_inputs' type="email" value={usuario.email} id="email" onChange={handleInputs} pattern="/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/"></input>

        <label className='reg_txt' htmlFor="nombre">Nombre</label>
        <input className='reg_inputs' type="text" value={usuario.nombre} id="nombre" onChange={handleInputs}></input>

        <label className='reg_txt' htmlFor="apellidos">Apellido</label>
        <input className='reg_inputs' type="text" value={usuario.apellidos} id="apellidos" onChange={handleInputs}></input>

        <label className='reg_txt' htmlFor="contraseña">Contraseña</label>
        <input className='reg_inputs' type="password" value={usuario.contraseña} id="contraseña" onChange={handleInputs} pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/"></input>

        <label className='reg_txt' htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
        <input className='reg_inputs' type="date" value={usuario.fecha_nacimiento} id="fecha_nacimiento" onChange={handleInputs} placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños"></input>
        <div className='check_area'>
          <input className='check' type="checkbox" id="notificacion" onChange={handleInputs}></input>
          <label className='check_text' htmlFor="notificacion">Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</label>
        </div>
    </div>
  );
};

export default RegUser;

