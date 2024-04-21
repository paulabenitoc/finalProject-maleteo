//import React from 'react'
import './login.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import LoginUser from "../../components/loginUser/LoginUser.jsx";
import RegUser from "../../components/regUser/RegUser.jsx";

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
    const [errorLogin, SetErrorLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    function localStorageData(key, value) {
        const dataToStorage = JSON.stringify(value);
        localStorage.setItem(key, dataToStorage);
    }

    const regUserApi = () => {
        return axios.post("http://localhost:3002/usuarios/register", usuario)
        .then((res1) => {
            console.log(res1);
            loginUserApi();
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const loginUserApi = () => {
        return axios.post("http://localhost:3002/usuarios/login", usuario)
        .then((res2) => {
            console.log(res2);
            if (res2.data.data.token) {
                setToken(res2.data.data.token);
                localStorageData('Token', res2.data.data.token);
                res2.data.data.token && navigate('/reserva');
            } else if (res2.data.data === null) {
                res2.data.data = null && setErrorMessage(res2.data.data.message);
                console.log(res2.data.data.status, res2.data.data.message)
            }
        })
        .catch((error) => {
            console.log(error);
            error && SetErrorLogin(true);
        })
    };

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
        <button>volver</button>
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
        {errorLogin === true && <p>{errorMessage}</p>}
    </article>
  );
};

export default Login;
