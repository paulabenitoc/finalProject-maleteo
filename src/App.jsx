import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
<<<<<<< Updated upstream
=======
import Home from './pages/home/home.jsx';
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Usuario from './pages/Usuario/Usuario.jsx';
import HomeUbiRes from './components/homeUbiRes/HomeUbiRes';
import Ubicacion from './components/homeUbiRes/Ubicacion';
import Ubicaciones from './components/homeUbiRes/Ubicaciones';
import {HomeUbiResContext} from './components/homeUbiRes/HomeUbiResContext';
import Espacio from './pages/servicios/Espacio.jsx';
import Servicios from './pages/servicios/Servicios.jsx';

>>>>>>> Stashed changes


function App() {

  return (
    <>
      <Router>
        

        <Routes>
<<<<<<< Updated upstream
          
          <Route>

          </Route>

=======
          <Route path='/home' element={<Home />} />
          <Route path='/confirmacion' element={<Confirmacion />} />
          <Route path='/usuario' element={<Usuario/>} />
          <Route path='/reserva' element={<HomeUbiRes/>} />
          <Route path='/reserva/ubicacion' element={<Ubicacion/>} />
          <Route path='/reserva/ubicacion/ubicaciones' element={<Ubicaciones />} />
          <Route path='/espacio' element={<Espacio />} /> 
          <Route path='/servicios' element={<Servicios />} />  
>>>>>>> Stashed changes
        </Routes>


      </Router>
    </>
  )
}

export default App
