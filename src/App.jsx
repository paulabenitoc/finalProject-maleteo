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
        </Routes>

      </Router>
    </>
  )
}

export default App
