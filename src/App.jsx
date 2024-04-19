import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calendario from './pages/Reserva/Calendario';
import Thanks from './pages/Reserva/Thanks';
import MapaUbicacion from './pages/Reserva/Mapaubicacion';


function App() {

  return (
    <>
      <PrimeReactProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Calendario></Calendario>}></Route>
            <Route path="/thanks" element={<Thanks></Thanks>}></Route>
            <Route path="/mapaubicacion" element={<MapaUbicacion></MapaUbicacion>}></Route>

          </Routes>
        </Router>

      </PrimeReactProvider>
    </>
  )
}

export default App
