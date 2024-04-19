import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calendario from './pages/Reserva/Calendario';
import Thanks from './pages/Reserva/Thanks';


function App() {

  return (
    <>
      <PrimeReactProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Calendario></Calendario>}>
            </Route>
            <Route path="/" element={<Thanks></Thanks>}></Route>
            <Route path="/" element={<></>}></Route>
          </Routes>
        </Router>

      </PrimeReactProvider>
    </>
  )
}

export default App
