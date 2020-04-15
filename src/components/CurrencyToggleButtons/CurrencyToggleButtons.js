import React from 'react';
import { CurrencyToggleButton } from './CurrencyToggleButton';
import ArrowToggleIcon from '../../assets/icons/currency-arrow-toggle-icon.png';

export const CurrencyToggleButtons = () => {
  return (
    <div className='currency-toggle-section d-flex justify-content-between align-items-center'>
      { new Array(3).fill(1).map((it, i) => (
        <CurrencyToggleButton
          key={ i }
          text='Coin name'
          src={ ArrowToggleIcon }
        />
      )) }

      <div className="progress-text">
        Progress
      </div>

      { new Array(5).fill(2).map((it, i) => (
        <CurrencyToggleButton
          key={ i }
          text='Coin name'
          src={ ArrowToggleIcon }
        />
      )) }

    </div>
  );
};


