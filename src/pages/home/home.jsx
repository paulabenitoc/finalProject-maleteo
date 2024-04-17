import React, { useState } from 'react';
import Volver from '../../components/Volver/Volver';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Volver></Volver>
      <h2>Selecciona</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">...</option>
        <option value="ASIA">Asia</option>
        <option value="AMÉRICA">América</option>
        <option value="ÁFRICA">África</option>
        <option value="ANTÁRTIDA">Antártida</option>
        <option value="EUROPA">Europa</option>
        <option value="OCEANÍA">Oceanía</option>
      </select>
    </div>
  );
};

export default Home;