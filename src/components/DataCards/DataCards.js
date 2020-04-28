import React from 'react';
import './DataCards.scss';
import DataCard from './DataCard/DataCard';

const DataCards = () => {
  return (
    <div className='DataCards d-flex flex-wrap'>
      <DataCard/>
      <DataCard/>
      <DataCard/>
      <DataCard/>
      <DataCard/>
      <DataCard/>
      <DataCard/>
      <DataCard/>
    </div>
  );
};

export default DataCards;
