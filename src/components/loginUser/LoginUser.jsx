//import React from 'react'
import './loginUser.css';

// eslint-disable-next-line react/prop-types
const LoginUser = ({ handleInputs, usuario, errorTypes }) => {
  
  return (
    <div className="login-inputs">
      <form>
        <label className='login_txt1' htmlFor="email">Dirección de correo electrónico</label>
        
        <input
          className='log_inputs'
        type="email"
        value={usuario.email}
        id="email"
        onChange={handleInputs}
        required
        pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
        ></input>
        {
          errorTypes.errorLogin ?
        <p style={{color:'red', fontSize: '12px' }}>Usuario incorrecto</p>
        :
        <p></p>
        }
        
      
        
        <label className='login_txt' htmlFor="contraseña">Contraseña</label>
        <p></p>
        <input
        className='log_inputs'
        type="password"
        value={usuario.contraseña}
        id="contraseña"
        onChange={handleInputs}
        required
        ></input>
        {
          errorTypes.errorMessage ? 
        <p style={{color:'red', fontSize: '12px' }}>{errorTypes.errorMessage}</p>
        :
         <p></p>      }
      </form>
    </div>
  );
};

export default LoginUser;
