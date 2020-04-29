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

        <h3 className='text-center'>You have no masternodes yet</h3>

      </DashboardContent>
    </div>
  );
};

export default MyMasternodes;
