import React from 'react';
import './MyMasternodeMyWalletsNavLinks.scss';
import { NavLink } from 'react-router-dom';

const MyMasternodeMyWalletsNavLinks = () => {
  return (
    <nav className='MyMasternodeMyWalletsNavLinks d-flex'>
      <NavLink to={ `${ process.env.PUBLIC_URL }/my-masternodes` }>
        My masternodes
      </NavLink>

      <NavLink to={ `${ process.env.PUBLIC_URL }/my-wallets` }>
        My wallets
      </NavLink>
    </nav>
  );
};

export default MyMasternodeMyWalletsNavLinks;
