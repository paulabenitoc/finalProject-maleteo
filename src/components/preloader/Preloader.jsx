//import React from 'react';
import './preloader.css';
import logo from "../../assets/logoMaleteo.svg";


const Preloader = () => {
  return (
    <div className="preloader">
      <img className='preloader-img' src={logo} alt="logo"/>
    </div>
  );
};

export default Preloader;
