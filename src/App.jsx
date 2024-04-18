import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Confirmacion from './pages/Confirmacion/Confirmacion';



function App() {

  return (
    <>
      <Router>
        

        <Routes>
          
          <Route path='/home' element={<Home />} />
          <Route path='/confirmacion' element={<Confirmacion/>} />

        </Routes>


      </Router>
    </>
  )
}

export default App
