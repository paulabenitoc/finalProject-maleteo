import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx';
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Usuario from './pages/Usuario/Usuario.jsx';
import HomeUbiRes from './components/homeUbiRes/HomeUbiRes';
import Ubicacion from './components/homeUbiRes/Ubicacion';
import Ubicaciones from './components/homeUbiRes/Ubicaciones';
import {HomeUbiResContext} from './components/homeUbiRes/HomeUbiResContext';



function App() {
  const [ciudad, setCiudad] = useState('');
  return (
    <>
    <HomeUbiResContext.Provider value={{ ciudad, setCiudad }}>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/confirmacion' element={<Confirmacion />} />
          <Route path='/usuario' element={<Usuario/>} />
          <Route path='/reserva' element={<HomeUbiRes/>} />
          <Route path='/reserva/ubicacion' element={<Ubicacion/>} />
          <Route path='/reserva/ubicaciones' element={<Ubicaciones/>} />
        </Routes>
      </Router>
    </HomeUbiResContext.Provider>
    </>
  )
}

export default App
