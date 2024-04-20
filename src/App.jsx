import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Presentacion from './pages/Presentacion/Presentacion.jsx';
import Login from './pages/login/Login.jsx';


function App() {

  return (
    <>
    
      <Router>
        

        <Routes>
          <Route path='/' element={<Presentacion/>}/>
          <Route path='/login' element={<Login/>}/>

   

        </Routes>


      </Router>
    </>
  )
}

export default App
