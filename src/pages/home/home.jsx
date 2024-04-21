import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver.jsx';
import './Home.css'
import Nav from '../../components/nav/nav.jsx';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='box1'>
      <Volver></Volver>
      <h1 className='item-select'>Selecciona</h1>
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
          <h1>Nuestras tarifas fijas</h1>
        </div>


        <div className='tarifa24'>
        <p style={{margin:"0%"}}>24 Horas</p>
        <p style={{fontSize:"50px", margin:"0%"}}>6€</p>
        <p style={{margin:"0%"}}>Por equipaje</p>
        </div>

        <div className='tarifaplus'>
        <p style={{margin:"0%"}}>Día adicional</p>
        <p style={{fontSize:"50px", margin:"0%"}}>4€</p>
        <p style={{margin:"0%"}}>Por equipaje</p>
        </div>

      </div>

      <Nav></Nav>

    </div>
  );
};

export default Home;
