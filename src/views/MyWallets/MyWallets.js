import React from 'react';
import './MyWallets.scss';
import { DashboardContent } from '../../components/DashboardContent';
import MyMasternodeMyWalletsNavLinks
  from '../../components/MyMasternodeMyWalletsNavLinks/MyMasternodeMyWalletsNavLinks';

const MyWallets = () => {
  return (
    <div className='MyWallets'>
      <DashboardContent>
        <MyMasternodeMyWalletsNavLinks/>
        <h1>MyWallets</h1>
      </DashboardContent>
    </div>
  );
};

export default MyWallets;
