//import React from 'react'
import './login.css'

import { useState } from "react";
import axios from 'axios';

import LoginUser from "../../components/loginUser/LoginUser.jsx";
import RegUser from "../../components/regUser/RegUser.jsx";
import Volver from '../../components/Volver/Volver.jsx';

const Login = () => {

    const [typeLogin, setTypeLogin] = useState('login');
    const [buttonText, setButonText] = useState('Inicia sesión');
    const [usuario, setUsuario] = useState({
        email: "",
        nombre: "",
        apellidos: "",
        contraseña: "",
        fecha_nacimiento: "2024-04-17",
        notificacion: false
    });
    const [token, setToken] = useState('');

    const regUserApi = () => {
        return axios.post("http://localhost:3002/usuarios/register", usuario)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const loginUserApi = () => {
        return axios.post("http://localhost:3002/usuarios/login", usuario)
        .then((res) => {
            console.log(res);
            setToken(res.data.data.token);
            //console.log('Token :' ,res.data.data.token)
        })
        .catch((error) => {
            console.log(error);
        })
    };
    console.log('variable de estado token :', token);
    const handleClick = (ev) => {
        ev.preventDefault();
        if (ev.target.id === 'register') {
            setTypeLogin('register');
            setButonText('Registrarse');
        } else if (ev.target.id === 'login'){
            setTypeLogin('login');
            setButonText('Inicia sesión')
        } else if (ev.target.id === 'userregister') {
            regUserApi();
        } else if (ev.target.id === 'userlogin') {
            loginUserApi();
        }
        console.log(ev.target.id);
        /*ev.target.id === 'register' ? setTypeLogin('register') : setTypeLogin('login') && regUserApi();
        ev.target.id === 'register' ? setButonText('Registrarse') : setButonText('Inicia sesión');*/
    };

    const handleInputs = (ev) => {
        setUsuario({
            ...usuario,
            [ev.target.id]: ev.target.value,
            notificacion: ev.target.checked
        });
    };

  return (
    <article className="login-card">
        <Volver/>
        <div className="login-button-container">
            <nav>
                <button className="loginUser-button" onClick={handleClick} id='login'>Iniciar sesión</button>
                <button className="loginUser-button" onClick={handleClick} id='register'>Registrarse</button>
            </nav>
        </div>
        {typeLogin === 'login' ? <h2>Inicia sesión ahora</h2> : <h2>Únete a Maleteo y disfruta de sus ventajas</h2>}
        <p>o utiliza tu correo electrónico</p>
        <div>
            {typeLogin === 'login' ? <LoginUser handleInputs={handleInputs} usuario={usuario}/> : <RegUser handleInputs={handleInputs} usuario={usuario}/>}
        </div>
        <button onClick={handleClick} id={`user${typeLogin}`}>{buttonText}</button>
    </article>

  );
};

export default Login;
