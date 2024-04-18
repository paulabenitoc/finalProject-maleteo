//import React from 'react';
import { useEffect, useState } from 'react';

import './presentacion.css';

import Preloader from '../../preloader/Preloader.jsx';
import Wellcome1 from '../../wellcome/Wellcome1.jsx';
import Wellcome2 from '../../wellcome/Wellcome2.jsx';

const Presentacion = () => {

  const [showSplash, setShowSplash] = useState(true);

  const [wellcome, setWellcome] = useState('wellcome1');

  useEffect(() => {
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
        wellcome === 'wellcome1' ? <Wellcome1 handleClick={handleClick}/> : <Wellcome2 handleClick={handleClick}/>
      )}
      {/*<Preloader/>*/}
      {/*wellcome === 'wellcome1' ? <Wellcome1 handleClick={handleClick}/> : <Wellcome2 handleClick={handleClick}/>*/}
      
      
    </div>
  )
}

export default Presentacion
