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
import Tarifas from './pages/home/home.jsx';



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
  return (
    <>
      <PrimeReactProvider>
      <HomeUbiResContext.Provider value={{ciudad, setCiudad, idMarker, setMarker, markerUbi, setMarkerUbi, miUbi, setMiUbi,dias, setDias,
horas, setHoras, tarifa, setTarifa, total, setTotal, numPiezas, setNumPiezas, dDeposito, setdDeposito, dRetirada, setdRetirada}}>

          <Router>
            <Routes>
              <Route path='/' element={<Presentacion/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/tarifas' element={<Tarifas />} />
              <Route path='/confirmacion' element={<Confirmacion />} />
              <Route path='/usuario' element={<Usuario />} />
              <Route path='/reserva' element={<HomeUbiRes />} />
              <Route path='/reserva/ubicacion' element={<Ubicacion />} />
              <Route path='/reserva/ubicaciones' element={<Ubicaciones />} />
              <Route path='/reserva/check' element={<Check/>} />
              <Route path='/reserva/horas' element={<Horas/>} />
              <Route path='/calendario' element={<Calendario />} />
              <Route path='/mapaubicacion' element={<MapaUbicacion />} />
            </Routes>
          </Router>
        </HomeUbiResContext.Provider>
      </PrimeReactProvider>
    </>
  )
}

export default App
