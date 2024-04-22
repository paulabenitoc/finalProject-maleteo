import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Usuario from './pages/Usuario/Usuario.jsx';
import HomeUbiRes from './components/homeUbiRes/HomeUbiRes';
import Ubicacion from './components/homeUbiRes/Ubicacion';
import Ubicaciones from './components/homeUbiRes/Ubicaciones';
import Check from './components/homeUbiRes/Check';
import Horas from './components/homeUbiRes/Horas';
import { HomeUbiResContext } from './components/homeUbiRes/HomeUbiResContext';
import { PrimeReactProvider } from 'primereact/api';
import Calendario from './pages/Reserva/Calendario.jsx';
import MapaUbicacion from './pages/Reserva/Mapaubicacion.jsx';
import Presentacion from './pages/Presentacion/Presentacion.jsx';
import Login from './pages/login/Login.jsx';
import Thanks from './pages/Reserva/thanks.jsx';
import MapaUbicacioncpy from './pages/Reserva/mapaubicacioncpy.jsx';
import Ficha from './pages/Reserva/ficha.jsx';
import Tarifas from './pages/home/home.jsx';
import PasarelaReserva from './pages/Reserva/pasarelaReserva.jsx';
import Espacio from './pages/servicios/Espacio.jsx';
import Servicios from './pages/servicios/Servicios.jsx'

// cambio a nueva rama

function App() {
  const [ciudad, setCiudad] = useState('');
  const [idMarker, setMarker] = useState('');
  const [markerUbi, setMarkerUbi] = useState(null);
  const [miUbi, setMiUbi] = useState(null);
  const [dias, setDias] = useState(null);
  const [dDeposito, setdDeposito] = useState(null);
  const [dRetirada, setdRetirada] = useState(null);
  const [horas, setHoras] = useState(null);
  const [numPiezas, setNumPiezas] = useState(null);
  const [tarifa, setTarifa] = useState(null);
  const [total, setTotal] = useState(null);
  const [email, setEmail] = useState(null);
  //en el provider pongo el email y set email
  //const {email} = useContext(HomeUbiResContext);
  /*
  
  /*const getUsuario = async() => {
    const {data} = await axios('http://localhost:3002/usuarios');
    let usuario = data.data.filter((x) => {
      return x.email == "juan.perez@example.com";
    });
    console.log(usuario);
  }*/

  //const {setEmail} = useContext(HomeUbiResContext);setEmail() esto en el archivo de gustavo



  return (
    <>
      <PrimeReactProvider>
        <HomeUbiResContext.Provider value={{
          ciudad, setCiudad, idMarker, setMarker, markerUbi, setMarkerUbi, miUbi, setMiUbi, dias, setDias,
          horas, setHoras, tarifa, setTarifa, total, setTotal, numPiezas, setNumPiezas, dDeposito, setdDeposito, dRetirada, setdRetirada, email, setEmail
        }}>

          <Router>
            <Routes>
              <Route path='/' element={<Presentacion />} />
              <Route path='/login' element={<Login />} />
              <Route path='/tarifas' element={<Tarifas />} />
              <Route path='/confirmacion' element={<Confirmacion />} />
              <Route path='/usuario' element={<Usuario />} />
              <Route path='/reserva' element={<HomeUbiRes />} />
              <Route path='/reserva/ubicacion' element={<Ubicacion />} />
              <Route path='/reserva/ubicaciones' element={<Ubicaciones />} />
              <Route path='/reserva/check' element={<Check />} />
              <Route path='/reserva/horas' element={<Horas />} />
              <Route path='/calendario' element={<Calendario />} />
              <Route path='/mapaubicacion' element={<MapaUbicacion />} />
              <Route path='/mapaubicacioncpy' element={<MapaUbicacioncpy />} />
              <Route path='/ficha' element={<Ficha />} />
              <Route path='/pasarelareserva' element={<PasarelaReserva />} />
              <Route path='/thanks' element={<Thanks />} />
              <Route path='/espacio' element={<Espacio />} />
              <Route path='/servicios' element={<Servicios />} />
            </Routes>
          </Router>
        </HomeUbiResContext.Provider>
      </PrimeReactProvider>
    </>
  )
}

export default App
