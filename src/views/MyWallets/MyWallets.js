import React, { useState } from 'react';
import './MyWallets.scss';
import { DashboardContent } from '../../components/DashboardContent';
import MyMasternodeMyWalletsNavLinks
  from '../../components/MyMasternodeMyWalletsNavLinks/MyMasternodeMyWalletsNavLinks';
import { Button } from '../../components/UI/Button';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import ModalWindowButton from '../../components/ModalWindow/ModalWindowButton/ModalWindowButton';
import { Img } from '../../components/UI/Img';
import QrCodeImage from '../../assets/images/qr-code-image.png';

const MyWallets = () => {


  return (
    <div className='MyWallets'>
      <DashboardContent>
        <MyMasternodeMyWalletsNavLinks/>


        <div className="wallet-activation-message d-flex justify-content-between align-items-center">
          <p>To add payment addresses you need to activate two-factor authentication</p>

          {/*<Button text='Activate now' classes='btn'/>*/ }
          <ModalWindowButton text='Activate now' dataTarget={ '#walletModal' }/>
        </div>

        <ModalWindow modalId={ 'walletModal' } submitButtonText={ 'I Understood' }>
          <div className='wallets-modal-wrap d-flex flex-column align-items-center'>
            <h2>IMPORTANT NOTICE</h2>

            <p className='text-center my-4'>
              Save your backup keys. You will need it in case of losing access to your 2FA Application. If you will lose
              these keys restoring access to your account may take up to 7 days.
            </p>

            <Img src={ QrCodeImage }/>
          </div>

        </ModalWindow>

      </DashboardContent>
    </div>
  );
};

export default MyWallets;
