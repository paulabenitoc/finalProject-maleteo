import React from 'react';
import { Link } from 'react-router-dom';
import './GuardianNav.css'


const GuardianNav = () => {
  return (
    <nav className='guardian-menu'>
      <ul className='guardian-bar'>
        <li className='guardian-item'>
          <Link to="/chat">
            <img src="public/img/mensaje@2x.png" alt="chat icon" className='guardian-img' />
          </Link>
        </li>
        <li className='guardian-item'>
          <Link to="/alert">
            <img src="public/img/altavoz.png" alt="alert icon" className='guardian-img'/>
          </Link>
        </li>
        <li className='guardian-item'>
          <Link to="/calendar">
            <img src="public/img/calendario.png" alt="calendar icon" className='guardian-img'/>
          </Link>
        </li>
        <li className='guardian-item'>
          <Link to="/user">
            <img src="public/img/usuario@2x.png" alt="user icon" className='guardian-img'/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default GuardianNav;
