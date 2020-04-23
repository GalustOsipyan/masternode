import React from 'react';
import './DashboardNavbar.scss';
import { SigninSignupButtons } from '../SigninSignupButtons';
import { NavbarRightContentOnSignup } from '../NavbarRightContentOnSignup';
import { Img } from '../UI/Img';
import Logo from '../../assets/icons/masternode-logo.png';
import DashboardNavbarItems from './DashboardNavbarItems/DashboardNavbarItems';

export const DashboardNavbar = () => {
  return (
    <div className='DashboardNavbar d-flex align-items-center justify-content-between'>

      <div className='DashboardNavbar__left-content d-flex'>
        <div className="logo-section d-flex align-items-center">
          <Img src={ Logo } alt='masternode logo'/>
          <h3>Mrnodemaster</h3>
        </div>

        <div className='currency-info-wrap d-flex justify-content-between'>
          <DashboardNavbarItems/>
        </div>
      </div>
      <SigninSignupButtons/>

      {/*<NavbarRightContentOnSignup/>*/ }

    </div>
  );
};


