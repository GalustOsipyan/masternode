import React from 'react';
import './MyBalance.scss';
import { DashboardContent } from '../../components/DashboardContent';
import WalletIconSmall from '../../assets/icons/wallet-icon-small.png';
import { Img } from '../../components/UI/Img';

const MyBalance = () => {
  return (
    <div className='MyBalance'>
      <DashboardContent>
        <h3>MyBalance</h3>

        <div className="account-balance-card">

          <div className="personal-discount d-flex justify-content-center align-items-center">
            0% off
          </div>

          <div className="account-balance-wrap d-flex">
            <div className="account-balance">
              <h4>Account balance</h4>
              <span className='d-flex align-items-center'>
                <Img src={ WalletIconSmall }/>
                <p>
                  <span>0.00 </span>
                  USD
                </p>
              </span>
            </div>

            <div className="expanses-wrap">
              <h4>Daily expenses</h4>
              <p>0 USD</p>

              <h4>Monthly expenses</h4>
              <p>0 USD</p>
            </div>

          </div>
          <button className='btn d-flex justify-content-center align-items-center'>
            Add Funds
          </button>
        </div>
      </DashboardContent>
    </div>
  );
};

export default MyBalance;
