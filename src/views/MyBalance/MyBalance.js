import React, { useState } from 'react';
import './MyBalance.scss';
import { DashboardContent } from '../../components/DashboardContent';
import WalletIconSmall from '../../assets/icons/wallet-icon-small.png';
import { Img } from '../../components/UI/Img';

const MyBalance = () => {


  const [data] = useState([
    { id: 1, heading: 'Date', text: '4/8/2020 3:56:10 PM' },
    { id: 2, heading: 'Status', text: 'EXPIRED' },
    { id: 3, heading: 'Type', text: 'Deposit' },
    { id: 4, heading: 'Amount', text: '+ 10.00 USD' },
    { id: 5, heading: 'Currency', text: 'QIWI' },
    { id: 6, heading: 'Replenishment ID', text: '5e8dbbda139a3909813b0533' }
  ]);

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

        <div className="transactions-history-wrap">
          <div className="transactions-history-heading d-flex justify-content-center align-items-center">
            <h3>Transactions history</h3>
          </div>

          <div className="transactions-history d-flex justify-content-around align-items-center">

            { data.map(({ id, heading, text }) => (
              <div
                key={ id }
                className="transactions-history-data d-flex flex-column align-items-center">
                <h4>{ heading }</h4>
                <p>{ text }</p>
              </div>
            )) }


          </div>

        </div>


      </DashboardContent>
    </div>
  );
};

export default MyBalance;
