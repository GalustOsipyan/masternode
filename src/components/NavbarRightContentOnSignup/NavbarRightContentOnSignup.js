import React from 'react';
import './NavbarRigthContentOnSignup.scss';
import { Link } from 'react-router-dom';
import { Img } from '../UI/Img';
import SignoutIcon from '../../assets/icons/signout-icon.png';
import UserAvatarIcon from '../../assets/icons/user-avatar-icon.png';
import MyMasternodes from '../../assets/icons/my-masternodes-icon.png';
import MyBalance from '../../assets/icons/my-balance-icon.png';
import MyWallets from '../../assets/icons/my-wallets-icon.png';
import ChangePassword from '../../assets/icons/change-password-icon.png';
import Disable2FA from '../../assets/icons/disable2fa-icon.png';

export const NavbarRightContentOnSignup = () => {
  return (
    <div className='NavbarRightContentOnSignup d-flex align-items-center '>
      <Link to={ `${ process.env.PUBLIC_URL }/` } className="balance d-flex justify-content-center align-items-center">
        <h4>Balance: 0.00$</h4>
      </Link>

      <div className="dropdown">
        <button className="btn dropdown-toggle user-dropdown-btn d-flex align-items-center" id="dropdownMenuButton"
                data-toggle="dropdown">
          <Img src={ UserAvatarIcon } alt='user avatar icon'/>
        </button>
        <div className="dropdown-menu user-dropdown">
          <a className="dropdown-item" href="/">
            <span className='dropdown-icon-wrap'>
              <Img src={ MyMasternodes } alt='my masternodes icon'/>
            </span>
            My masternodes
          </a>
          <a className="dropdown-item" href="/">
            <span className='dropdown-icon-wrap'>
              <Img src={ MyBalance } alt='my balance icon'/>
            </span>
            My balance
          </a>
          <a className="dropdown-item" href="/">
            <span className='dropdown-icon-wrap'>
              <Img src={ MyWallets } alt='my wallets icon'/>
            </span>
            My wallets
          </a>
          <a className="dropdown-item" href="/">
            <span className='dropdown-icon-wrap'>
              <Img src={ ChangePassword } alt='change password icon'/>
            </span>
            Change Password
          </a>
          <a className="dropdown-item" href="/">
            <span className='dropdown-icon-wrap'>
              <Img src={ Disable2FA } alt='disable 2fa icon'/>
            </span>
            Disable 2FA
          </a>
        </div>
      </div>

      <Link to={ `${ process.env.PUBLIC_URL }/` } className='d-flex'>
        <Img src={ SignoutIcon } alt={ 'sign out button\'s icon' }/>
      </Link>

    </div>
  );
};

