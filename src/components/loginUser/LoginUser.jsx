//import React from 'react'

// eslint-disable-next-line react/prop-types
const LoginUser = ({ handleInputs }) => {

  return (
    <div className="login-inputs">
        <label htmlFor="email">Dirección de correo electrónico</label>
        <input type="email" value='' id="email" onChange={handleInputs}></input>
        <label htmlFor="password">Contraseña</label>
        <input type="password" value='' id="password" onChange={handleInputs}></input>
    </div>
  );
};

export default LoginUser;
