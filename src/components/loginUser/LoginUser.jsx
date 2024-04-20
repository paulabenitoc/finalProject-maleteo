//import React from 'react'

// eslint-disable-next-line react/prop-types
const LoginUser = ({ handleInputs, usuario }) => {

  return (
    <div className="login-inputs">
        <label htmlFor="email">Dirección de correo electrónico</label>
        <input type="email" value={usuario.email} id="email" onChange={handleInputs}></input>
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" value={usuario.contraseña} id="contraseña" onChange={handleInputs}></input>
    </div>
  );
};

export default LoginUser;
