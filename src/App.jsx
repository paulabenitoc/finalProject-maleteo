import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx';
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Usuario from './pages/Usuario/Usuario.jsx';
import HomeUbiRes from './components/homeUbiRes/HomeUbiRes';
import Ubicacion from './components/homeUbiRes/Ubicacion';
import Ubicaciones from './components/homeUbiRes/Ubicaciones';
import { HomeUbiResContext } from './components/homeUbiRes/HomeUbiResContext';
import { PrimeReactProvider } from 'primereact/api';
import Calendario from './pages/Reserva/Calendario.jsx';
import MapaUbicacion from './pages/Reserva/Mapaubicacion.jsx';
import Presentacion from './pages/Presentacion/Presentacion.jsx';
import Login from './pages/login/Login.jsx';
import Espacio from './pages/servicios/Espacio.jsx';
import Servicios from './pages/servicios/Servicios.jsx';




function App() {
  const [ciudad, setCiudad] = useState('');
  const [idMarker, setMarker] = useState('');
  const [markerUbi, setMarkerUbi] = useState(null);
  const [miUbi, setMiUbi] = useState(null);
  return (
    <>
      <PrimeReactProvider>
      <HomeUbiResContext.Provider value={{ ciudad, setCiudad, idMarker, setMarker, markerUbi, setMarkerUbi, miUbi, setMiUbi }}>

          <Router>
            <Routes>
              <Route path='/' element={<Presentacion/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home />} />
              <Route path='/confirmacion' element={<Confirmacion />} />
              <Route path='/usuario' element={<Usuario />} />
              <Route path='/reserva' element={<HomeUbiRes />} />
              <Route path='/reserva/ubicacion' element={<Ubicacion />} />
              <Route path='/reserva/ubicaciones' element={<Ubicaciones />} />
              <Route path='/calendario' element={<Calendario />} />
              <Route path='/mapaubicacion' element={<MapaUbicacion />} />
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
