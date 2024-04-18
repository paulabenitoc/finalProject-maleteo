import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver.jsx';
import './Home.css'
import Nav from '../../components/Nav/Nav.jsx';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Volver></Volver>
      <h2 className='item-select'>Selecciona</h2>
      <select value={selectedOption} onChange={handleSelectChange} className='options'>
        <option value="ASIA" className='item'>Asia</option>
        <option value="AMÉRICA" className='item'>América</option>
        <option value="ÁFRICA" className='item'>África</option>
        <option value="ANTÁRTIDA" className='item'>Antártida</option>
        <option value="EUROPA" className='item'>Europa</option>
        <option value="OCEANÍA" className='item'>Oceanía</option>
      </select>
      
        <div className='ofertas'>
        <div>
              <p>Nuestras tarifas fijas</p>
        </div>
          
          
      <div className='tarifa24'>
        <p>24 Horas</p>
        <p>6€</p>
        <p>Por equipaje</p>
      </div>

      <div className='tarifaplus'>
        <p>Día adicional</p>
        <p>4€</p>
        <p>Por equipaje</p>
      </div>
      
      </div>
      
          <Nav></Nav>
          
    </div>
  );
};

export default Home;