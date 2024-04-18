import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Presentacion from './components/pages/Presentacion/Presentacion.jsx';


function App() {

  return (
    <>
    
      <Router>
        

        <Routes>
          <Route path='/' element={<Presentacion/>}/>
          
          <Route>

          </Route>

        </Routes>


      </Router>
    </>
  )
}

export default App
