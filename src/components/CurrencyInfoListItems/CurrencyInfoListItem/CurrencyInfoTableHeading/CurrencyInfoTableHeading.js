import React from 'react';

const CurrencyInfoTableHeading = ({ heading }) => {
  return (
    <div className="CurrencyInfoTable__heading-block d-flex justify-content-center align-items-center">
      <h4>{ heading }</h4>
    </div>
  );
};

export default CurrencyInfoTableHeading;
