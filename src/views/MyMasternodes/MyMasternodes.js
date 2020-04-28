import React from 'react';
import './MyMasternodes.scss';
import { DashboardContent } from '../../components/DashboardContent';
import MyMasternodeMyWalletsNavLinks
  from '../../components/MyMasternodeMyWalletsNavLinks/MyMasternodeMyWalletsNavLinks';

const MyMasternodes = () => {
  return (
    <div className='MyMasternodes'>
      <DashboardContent>
        <MyMasternodeMyWalletsNavLinks/>

        <h1>MyMasternodes</h1>

      </DashboardContent>
    </div>
  );
};

export default MyMasternodes;
