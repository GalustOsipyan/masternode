import React from 'react';
import './Sidenav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Img } from '../UI/Img';
import Logo from '../../assets/icons/masternode-logo.png';
import Telegram from '../../assets/icons/telegram-icon.png';
import Facebook from '../../assets/icons/facebook-icon.png';
import Twitter from '../../assets/icons/twitter-icon.png';

export const Sidenav = () => {

  const { pathname } = useLocation();


  return (
    <div className='Sidenav'>
      <div className="Sidenav__logo-section d-flex align-items-center">
        <Img src={ Logo } alt='masternode logo'/>
        <h3>Mrnodemaster</h3>
      </div>
      <nav className='d-flex flex-column'>
        {/*  <NavLink to='/masternode-rank' className={ `d-flex ` } ref={ navigationLink }>
          masternode rank
        </NavLink>*/ }

        <NavLink to={ `${ process.env.PUBLIC_URL }/masternode-rank` }
                 className={ `d-flex ${ pathname === '/' ? 'active' : '' }` }>
          masternode rank
        </NavLink>

        <NavLink to={ `${ process.env.PUBLIC_URL }/shared-masternode` }>
          shared masternode
        </NavLink>

        <NavLink to={ `${ process.env.PUBLIC_URL }/masternode-hosting` }>
          masternode hosting
        </NavLink>

        <NavLink to={ `${ process.env.PUBLIC_URL }/faq` }>
          faq
        </NavLink>
      </nav>

      <div className="Sidenav__bottom-navigation mt-auto d-flex flex-column">
        <a href='/' className='btn our-prices d-flex justify-content-center align-items-center'>
          Our Prices
        </a>

        <div className="social-links d-flex">
          <a href="/">
            <Img src={ Telegram } alt='Telegram link'/>
          </a>

          <a href="/">
            <Img src={ Facebook } alt='Facebook link'/>
          </a>

          <a href="/">
            <Img src={ Twitter } alt='Twitter link'/>
          </a>
        </div>
      </div>

    </div>
  );
};

