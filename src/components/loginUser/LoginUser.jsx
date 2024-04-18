//import React from 'react'

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
