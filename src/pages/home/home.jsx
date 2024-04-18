import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver';
import './Home.css'
import Nav from '../../components/nav/nav';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Volver></Volver>
      <h2 className='item-select'>Selecciona</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="ASIA">Asia</option>
        <option value="AMÉRICA">América</option>
        <option value="ÁFRICA">África</option>
        <option value="ANTÁRTIDA">Antártida</option>
        <option value="EUROPA">Europa</option>
        <option value="OCEANÍA">Oceanía</option>
      </select>
      
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
      
    
          <Nav></Nav>
          
    </div>
  );
};

export default Home;