import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'


const Nav = () => {
  return (
    <nav className='nav-menu'>
      <ul className='nav-bar'>
        <li className='nav-item'>
          <Link to="/reserva">
            <img src="public/img/inicio@2x.png" alt="home icon" className='nav-icon' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/reserva/ubicacion">
            <img src="public/img/buscar@2x.png" alt="search icon" className='nav-icon'/>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/confirmacion">
            <img src="public/img/mensaje@2x.png" alt="chat icon" className='nav-icon'/>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/usuario">
            <img src="public/img/usuario@2x.png" alt="user icon" className='nav-icon'/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
