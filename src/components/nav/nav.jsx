import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav-menu'>
      <ul className='nav-bar'>
        <li className='nav-item'>
          <Link to="/home">
            <img src="public/img/inicio@2x.png" alt="home icon" className='nav-img' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/search">
            <img src="public/img/buscar@2x.png" alt="search icon" className='nav-img'/>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/chat">
            <img src="public/img/mensaje@2x.png" alt="chat icon" className='nav-img'/>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/user">
            <img src="public/img/usuario@2x.png" alt="user icon" className='nav-img'/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
