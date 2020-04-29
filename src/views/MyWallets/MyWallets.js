import React, { useState } from 'react';
import './MyWallets.scss';
import { DashboardContent } from '../../components/DashboardContent';
import MyMasternodeMyWalletsNavLinks
  from '../../components/MyMasternodeMyWalletsNavLinks/MyMasternodeMyWalletsNavLinks';
import { Button } from '../../components/UI/Button';

const MyWallets = () => {


  return (
    <div className='MyWallets'>
      <DashboardContent>
        <MyMasternodeMyWalletsNavLinks/>


        <div className="wallet-activation-message d-flex justify-content-between align-items-center">
          <p>To add payment addresses you need to activate two-factor authentication</p>

          <Button text='Activate now' classes='btn'/>
        </div>


      </DashboardContent>
    </div>
  );
};

export default MyWallets;
