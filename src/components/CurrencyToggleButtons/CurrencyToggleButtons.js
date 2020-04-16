import React, { useState } from 'react';
import { CurrencyToggleButton } from './CurrencyToggleButton';
import ArrowToggleIcon from '../../assets/icons/currency-arrow-toggle-icon.png';
import { connect } from 'react-redux';

const CurrencyToggleButtons = ({ counter }) => {

  const [rightSideButtons, setRightSideButtons] = useState([

    { id: 1, text: 'Coin name', icon: ArrowToggleIcon },
    { id: 2, text: 'ROI (year)', icon: ArrowToggleIcon },
    { id: 3, text: 'Coins required', icon: ArrowToggleIcon }
  ]);

  const [leftSideButtons, setLeftSideButtons] = useState([

    { id: 1, text: 'Price (USD)', icon: ArrowToggleIcon },
    {
      id: 2, text: 'Volume (USD)', icon: ArrowToggleIcon
    },
    { id: 3, text: 'MN worth', icon: ArrowToggleIcon },
    { id: 4, text: 'Network nodes', icon: ArrowToggleIcon },
    { id: 5, text: 'Already running', icon: ArrowToggleIcon }
  ]);

  return (


    <div className='currency-toggle-section d-flex justify-content-between align-items-center'>

      <div className="logo-header" style={ { width: 40 } }/>

      { rightSideButtons.map(({ id, ...props }) => (
        <CurrencyToggleButton
          key={ id }
          { ...props }
        />
      )) }

      <div className="progress-text text-center" style={ { width: '20%' } }>
        Progress
      </div>

      { leftSideButtons.map(({ id, ...props }) => (
        <CurrencyToggleButton
          key={ id }
          { ...props }
        />
      )) }

    </div>
  );
};


export default CurrencyToggleButtons;

