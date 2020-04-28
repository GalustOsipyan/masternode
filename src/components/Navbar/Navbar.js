import React from 'react';
import './Navbar.scss';
import { SigninSignupButtons } from '../SigninSignupButtons';
import { NavbarRightContentOnSignup } from '../NavbarRightContentOnSignup';
import { Img } from '../UI/Img';
import Logo from '../../assets/icons/masternode-logo.png';
import NavbarItems from './NavbarItems/NavbarItems';

export const Navbar = () => {
  return (
    <div className='Navbar d-flex align-items-center justify-content-between'>

      <div className='Navbar__left-content d-flex'>
        <div className="logo-section d-flex align-items-center">
          <Img src={ Logo } alt='masternode logo'/>
          <h3>Mrnodemaster</h3>
        </div>

        <div className='currency-info-wrap d-flex justify-content-between'>
          <NavbarItems/>
        </div>
      </div>
      <SigninSignupButtons/>

      {/*<NavbarRightContentOnSignup/>*/ }

    </div>
  );
};


