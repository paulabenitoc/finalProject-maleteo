//import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Preloader from '../../components/preloader/Preloader.jsx';
import Wellcome1 from '../../components/wellcome/Wellcome1.jsx';
import Wellcome2 from '../../components/wellcome/Wellcome2.jsx';

import './presentacion.css';

const Presentacion = () => {

  const [showSplash, setShowSplash] = useState(true);
  const [wellcome, setWellcome] = useState('wellcome1');
  const [listPrices, setLitsPrices] = useState([]);

  const pricesApi = () => {
    return axios.get("http://localhost:3002/tarifa")
    .then((res) => {
        console.log('primer log', res);
        setLitsPrices(res.data.data)
    })
    .catch((error) => {
        console.log(error);
    })
};

  useEffect(() => {

    pricesApi();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  },[])



  const handleClick = (ev) => {
    ev.preventDefault();
    ev.target.id === 'wellcome1' && setWellcome('wellcome2')
  }

  return (
    <div className="presentation">
      {showSplash ? <Preloader/> : (
        wellcome === 'wellcome1' ? <Wellcome1 handleClick={handleClick}/> : <Wellcome2 listPrices={listPrices}/>
      )}
    </div>
  )
}

export default Presentacion
