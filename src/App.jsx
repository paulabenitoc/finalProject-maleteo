import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import home from './components/pages/home/home';



function App() {

  return (
    <>
      <Router>
        

        <Routes>
          
          <Route path='/home' Component={home}>

          </Route>

        </Routes>


      </Router>
    </>
  )
}

export default App
