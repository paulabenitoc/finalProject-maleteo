//import React from 'react'
import "./login.css";

import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {HomeUbiResContext} from '../../components/homeUbiRes/HomeUbiResContext.jsx';
import LoginUser from "../../components/loginUser/LoginUser.jsx";
import RegUser from "../../components/regUser/RegUser.jsx";
import Volver from "../../components/Volver/Volver.jsx";

const Login = () => {
  const navigate = useNavigate();
  const {email} = useContext(HomeUbiResContext);
  const {setEmail} = useContext(HomeUbiResContext);

  const [typeLogin, setTypeLogin] = useState("login");
  const [buttonText, setButonText] = useState("Inicia sesión");
  const [usuario, setUsuario] = useState({
    email: "",
    nombre: "",
    apellidos: "",
    contraseña: "",
    fecha_nacimiento: "yyyy-mm-dd",
    notificacion: false,
  });
  const [token, setToken] = useState("");
  const [errorTypes, SetErrorTypes] = useState({
    errorLogin: false,
    errorMessage: "",
    //validMessage: ''
  });

  function localStorageData(key, value) {
    const dataToStorage = JSON.stringify(value);
    localStorage.setItem(key, dataToStorage);
  }

  const regUserApi = () => {
    return axios
      .post("http://localhost:3002/usuarios/register", usuario)
      .then((res1) => {
        console.log(res1);
        loginUserApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUserApi = () => {
    return axios
      .post("http://localhost:3002/usuarios/login", usuario)
      .then((res2) => {
        console.log(res2);
        if (res2.data.status === 400) {
          SetErrorTypes({ errorMessage: "Contraseña incorrecta" });
        } else if (res2.data.data.token) {
          setToken(res2.data.data.token);
          setEmail(usuario.email);
          localStorageData("Token", res2.data.data.token);
          res2.data.data.token && navigate("/reserva");
        }
      })
      .catch((error) => {
        console.log(error);
        SetErrorTypes({ ...errorTypes, errorLogin: true });
      });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    //if (regEx.test(usuario.contraseña)) {
    //setTypeLogin({...SetErrorTypes, validMessage:''})
    if (ev.target.id === "register") {
      setTypeLogin("register");
      setButonText("Registrarse");
    } else if (ev.target.id === "login") {
      setTypeLogin("login");
      setButonText("Inicia sesión");
    } else if (ev.target.id === "userregister") {
      regUserApi();
    } else if (ev.target.id === "userlogin") {
      //validEmail();
      loginUserApi();
      SetErrorTypes({
        errorLogin: false,
        errorMessage: "",
        //validMessage: ''
      });
    } // else if (!regEx.test(usuario.contraseña && usuario.contraseña === '')) {
    //SetErrorTypes({...errorTypes,
    //errorLogin: false,
    //validMessage: 'El formato de correo no es valido'
    //})
  };

  const handleInputs = (ev) => {
    setUsuario({
      ...usuario,
      [ev.target.id]: ev.target.value,
      notificacion: ev.target.checked,
    });
  };

  return (
    <>
      <Volver />
      {typeLogin === "login" ? (
        <div>
          <div className="login-button-container">
            <button
              style={{
                borderBottom: "4px solid",
                borderColor: "rgb(255, 130, 1)",
              }}
              className="loginUser-button"
              onClick={handleClick}
              id="login"
            >
              Iniciar sesión
            </button>
            <button
              className="loginUser-button"
              onClick={handleClick}
              id="register"
            >
              Registrarse
            </button>
          </div>
          <div className="inicio_text">
            <h2>Inicia sesión</h2>
            <h2>ahora</h2>
          </div>

          <div className="fotos_google_facebook">
            <a
              className="at_facebook"
              href="https://www.facebook.com/login.php/"
            >
              <button className="facebook">
                <img
                  className="facebook_logo"
                  src="https://goilawn.com/wp-content/uploads/sites/2/2014/10/facebook-icon.png"
                  alt=""
                />
                <p className="facebook_txt">Facebook</p>
              </button>
            </a>

            <a
              className="at_google"
              href="https://accounts.google.com/v3/signin/identifier?ifkv=ARZ0qKKa6HJTAvXLaQjaBmqegpIShLA09eO2bBuVhCvMKeSYe4n0bl15x1b6lgXo7wG-X1pdGfDE2w&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-603668686%3A1713719904393335&theme=mn&ddm=0"
            >
              <button className="google">
                <img
                  className="google_logo"
                  src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                  alt=""
                />
                <p className="google_txt">Google</p>
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="login-button-container">
            <button
              className="loginUser-button"
              onClick={handleClick}
              id="login"
            >
              Iniciar sesión
            </button>
            <button
              style={{
                borderBottom: "4px solid",
                borderColor: "rgb(255, 130, 1)",
              }}
              className="loginUser-button"
              onClick={handleClick}
              id="register"
            >
              Registrarse
            </button>
          </div>
          <div className="inicio_text">
            <h2>Únete a Maleteo y disfruta</h2>
            <h2>de sus ventajas</h2>
          </div>

          <div className="fotos_google_facebook">
            <a
              className="at_facebook"
              href="https://www.facebook.com/login.php/"
            >
              <button className="facebook">
                <img
                  className="facebook_logo"
                  src="https://goilawn.com/wp-content/uploads/sites/2/2014/10/facebook-icon.png"
                  alt=""
                />
                <p className="facebook_txt">Facebook</p>
              </button>
            </a>

            <a
              className="at_google"
              href="https://accounts.google.com/v3/signin/identifier?ifkv=ARZ0qKKa6HJTAvXLaQjaBmqegpIShLA09eO2bBuVhCvMKeSYe4n0bl15x1b6lgXo7wG-X1pdGfDE2w&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-603668686%3A1713719904393335&theme=mn&ddm=0"
            >
              <button className="google">
                <img
                  className="google_logo"
                  src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                  alt=""
                />
                <p className="google_txt">Google</p>
              </button>
            </a>
          </div>
        </div>
      )}
      <p className="ultimo_text">o utiliza tu correo electrónico</p>
      <div>
        {typeLogin === "login" ? (
          <LoginUser
            handleInputs={handleInputs}
            usuario={usuario}
            errorTypes={errorTypes}
          />
        ) : (
          <RegUser handleInputs={handleInputs} usuario={usuario} />
        )}
      </div>
      <div className="btn_contenedor">
        <button
          className="ultimo_boton"
          onClick={handleClick}
          id={`user${typeLogin}`}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Login;
