import React, { useState } from 'react';
import './CurrencyInfoListItem.scss';
import { Img } from '../UI/Img';

import BitcoinLogo from '../../assets/images/bitcoin-logo.png';
import CurrencyInfoListItemCollapsibleContent
  from './CurrencyInfoListItemCollapsibleContent/CurrencyInfoListItemCollapsibleContent';

const CurrencyInfoListItem = ({ coinName, ROI, coinsRequired, progress, price, volume, MN_worth, netwotkNodes, alreadyRunning }) => {

  const [height, setHeight] = useState(false);

  const collapseHandler = () => {
    console.log('collapsed');

    setHeight(!height);

  };

  return (
    <div className='CurrencyInfoListItem-wrap'>
      <div
        className='CurrencyInfoListItem d-flex align-items-center justify-content-between'
        onClick={ collapseHandler }
      >

        <div className='currency-logo d-flex justify-content-center'>
          <Img src={ BitcoinLogo }/>
        </div>

        <div className='coin-name d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Coin name</h4>
          <p className='CurrencyInfoListItem__info'>Bitcoin Token BTCT</p>
        </div>

        <div className='ROI d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>ROI (year)</h4>
          <p className='CurrencyInfoListItem__info'>122 %</p>
        </div>

        <div className='coins-required d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Coins required</h4>
          <p className='CurrencyInfoListItem__info'>10,000</p>
        </div>

        <div className='progress-bar-wrap'>
          <h4 className='text-center'>Progress</h4>
          <div className='progress'>
            <div className='progress-bar' style={ { width: '50%' } }>
            </div>
          </div>
        </div>

        <div className='price d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Price (USD)</h4>
          <p className='CurrencyInfoListItem__info'>0.01</p>
        </div>

        <div className='volume d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Volume (USD)</h4>
          <p className='CurrencyInfoListItem__info'>566.34</p>
        </div>

        <div className='MN-worth d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>MN worth</h4>
          <p className='CurrencyInfoListItem__info'>110.65</p>
        </div>

        <div className='network-nodes d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Network nodes</h4>
          <p className='CurrencyInfoListItem__info'>345</p>
        </div>

        <div className='already-running d-flex flex-column align-items-center'>
          <h4 className='CurrencyInfoListItem__heading'>Already running</h4>
          <p className='CurrencyInfoListItem__info'>74</p>
        </div>
      </div>

      <div className={ `collapsible-area d-flex ${ height ? 'show' : '' }` }>
        <CurrencyInfoListItemCollapsibleContent/>
      </div>

    </div>
  );
};

export default CurrencyInfoListItem;
