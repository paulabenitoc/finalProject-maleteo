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



function App() {
  const [ciudad, setCiudad] = useState('');
  return (
    <>
      <PrimeReactProvider>
        <HomeUbiResContext.Provider value={{ ciudad, setCiudad }}>

          <Router>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/confirmacion' element={<Confirmacion />} />
              <Route path='/usuario' element={<Usuario />} />
              <Route path='/reserva' element={<HomeUbiRes />} />
              <Route path='/reserva/ubicacion' element={<Ubicacion />} />
              <Route path='/reserva/ubicaciones' element={<Ubicaciones />} />
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
