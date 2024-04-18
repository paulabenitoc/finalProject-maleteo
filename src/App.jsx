import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx';
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Usuario from './pages/Usuario/Usuario.jsx';



function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/confirmacion' element={<Confirmacion />} />
          <Route path='/usuario' element={<Usuario/>} />
          <Route path='/reserva' element={<HomeUbiRes/>} />
          <Route path='/reserva/ubicacion' element={<Ubicacion/>} />
          <Route path='/reserva/ubicacion/ubicaciones' element={<Ubicaciones/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
