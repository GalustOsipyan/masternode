import React from 'react';
import './DashboardNavbar.scss';
import { SigninSignupButtons } from '../SigninSignupButtons';
import { NavbarRightContentOnSignup } from '../NavbarRightContentOnSignup';

export const DashboardNavbar = () => {
  return (
    <div className='DashboardNavbar d-flex align-items-center justify-content-between'>

      <div className='currency-info-wrap d-flex justify-content-between'>
        <div className="hosted-masternodes d-flex align-items-center">
          <h2 className="quantity">
            4787
          </h2>
          <div className="info">
            <h3>hosted masternodes</h3>
            <h5>2in last 24 hours</h5>
          </div>
        </div>

        <div className="total-price d-flex align-items-center">
          <h2 className="quantity">
            1.6M USD
          </h2>
          <div className="info">
            <h3>total price</h3>
            <h5>221.98BTC</h5>
          </div>
        </div>

        <div className="btc-price d-flex align-items-center">
          <h2 className="quantity">
            7.4K USD
          </h2>
          <div className="info">
            <h3>btc price</h3>
            <h5>1BTC</h5>
          </div>
        </div>
      </div>

      {/*<SigninSignupButtons/>*/ }

      <NavbarRightContentOnSignup/>

    </div>
  );
};


