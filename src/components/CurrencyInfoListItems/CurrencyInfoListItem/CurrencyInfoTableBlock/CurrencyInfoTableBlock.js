import React from 'react';

const CurrencyInfoTableBlock = ({ text, }) => {
  return (
    <div
      className="CurrencyInfoTable__block d-flex align-items-center">
      <p>{ text }</p>
    </div>
  );
};

export default CurrencyInfoTableBlock;
