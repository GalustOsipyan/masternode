import React from 'react';
import './MyMasternodeMyWalletsNavLinks.scss';
import { NavLink } from 'react-router-dom';

const MyMasternodeMyWalletsNavLinks = () => {
  return (
    <nav className='MyMasternodeMyWalletsNavLinks d-flex justify-content-between'>
      <NavLink to={ `${ process.env.PUBLIC_URL }/my-masternodes` }>
        <span className='link-text'>My masternodes</span>
        <span className='under-line'/>
      </NavLink>

      <NavLink to={ `${ process.env.PUBLIC_URL }/my-wallets` }>
        <span className='link-text'>My wallets</span>
        <span className='under-line'/>
      </NavLink>
    </nav>
  );
};

export default MyMasternodeMyWalletsNavLinks;
