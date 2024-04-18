//import React from 'react'

import { useState } from "react";

import LoginUser from "../../loginUser/LoginUser";
import RegUser from "../../regUser/RegUser";

const Login = () => {

    const [typeLogin, setTypeLogin] = useState('login');
    const [buttonText, setButonText] = useState('Inicia sesión')

    const handleLogin = (ev) => {
        ev.preventDefault();
        ev.target.id === 'register' ? setTypeLogin('register') : setTypeLogin('login');
        ev.target.id === 'register' ? setButonText('Registrarse') : setButonText('Inicia sesión');
    };

    const handleInputs = () => {
        
    }

  return (
    <>
        <button>volver</button>
        <div className="login-button-container">
            <nav>
                <button className="loginUser-button" onClick={handleLogin} id='login'>Iniciar sesión</button>
                <button className="loginUser-button" onClick={handleLogin} id='register'>Registrarse</button>
            </nav>
        </div>
        {typeLogin === 'login' ? <h2>Inicia sesión ahora</h2> : <h2>Únete a Maleteo y disfruta de sus ventajas</h2>}
        <p>o utiliza tu correo electrónico</p>
        <div>
            {typeLogin === 'login' ? <LoginUser handleInputs={handleInputs}/> : <RegUser handleInputs={handleInputs}/>}
        </div>
        <button>{buttonText}</button>
    </>

  );
};

export default Login;
