//import React from 'react'

const RegUser = ({ handleInputs }) => {

  return (
    <div className="register-inputs">
        <label htmlFor="email">Dirección de correo electrónico</label>
        <input type="email" value='' id="email" onChange={handleInputs}></input>

        <label htmlFor="name">Nombre</label>
        <input type="text" value='' id="name" onChange={handleInputs}></input>

        <label htmlFor="lastname">Apellido</label>
        <input type="text" value='' id="lastname" onChange={handleInputs}></input>

        <label htmlFor="password">Contraseña</label>
        <input type="password" value='' id="password" onChange={handleInputs}></input>

        <label htmlFor="date">Fecha de nacimiento</label>
        <input type="date" value='' id="date" onChange={handleInputs} placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños"></input>

        <input type="checkbox" id="checkbox"></input>
        <label htmlFor="checkbox">Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</label>
           
    </div>
  );
};

export default RegUser;
