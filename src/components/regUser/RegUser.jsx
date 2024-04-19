//import React from 'react'

// eslint-disable-next-line react/prop-types
const RegUser = ({ handleInputs, usuario }) => {

  return (
    <div className="register-inputs">
        <label htmlFor="email">Dirección de correo electrónico</label>
        <input type="email" value={usuario.email} id="email" onChange={handleInputs} pattern="/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/"></input>

        <label htmlFor="nombre">Nombre</label>
        <input type="text" value={usuario.nombre} id="nombre" onChange={handleInputs}></input>

        <label htmlFor="apellidos">Apellido</label>
        <input type="text" value={usuario.apellidos} id="apellidos" onChange={handleInputs}></input>

        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" value={usuario.contraseña} id="contraseña" onChange={handleInputs} pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/"></input>

        <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
        <input type="date" value={usuario.fecha_nacimiento} id="fecha_nacimiento" onChange={handleInputs} placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños"></input>

        <input type="checkbox" id="notificacion" onChange={handleInputs}></input>
        <label htmlFor="notificacion">Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</label>
    </div>
  );
};

export default RegUser;
