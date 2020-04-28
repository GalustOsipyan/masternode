import React from 'react';
import './CurrencyInfoTableBlock.scss';

const CurrencyInfoTableBlock = ({ text, }) => {
  return (
    <div
      className="CurrencyInfoTableBlock">
      <p>{ text }</p>
    </div>
  );
};

export default CurrencyInfoTableBlock;
