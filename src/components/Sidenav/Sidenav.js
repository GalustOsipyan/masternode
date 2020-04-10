import React from 'react';
import './Sidenav.scss';
import { Img } from '../UI/Img';
import Logo from '../../assets/icons/masternode-logo.png';
import { NavLink } from 'react-router-dom';

export const Sidenav = () => {
  return (
    <div className='Sidenav'>
      <div className="Sidenav__logo-section d-flex align-items-center">
        <Img src={ Logo } alt='Masternode Logo'/>
        <h3>Mrnodemaster</h3>
      </div>
      <nav>
        <NavLink to='/masternode-rank'>
          masternode rank
        </NavLink>

        <NavLink to='/shared-masternode'>
          shared masternode
        </NavLink>

        <NavLink to='/masternode-hosting'>
          masternode hosting
        </NavLink>
        
        <NavLink to='/faq'>
          faq
        </NavLink>

      </nav>
    </div>
  );
};

