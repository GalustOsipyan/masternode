import React, { useState } from 'react';
import './FaqListItem.scss';
import FaqInnerListItem from './FaqInnerListItem/FaqInnerListItem';

const FaqListItem = ({ heading }) => {

  const [height, setHeight] = useState(false);


  const collapseHandler = () => {
    console.log('collapsed');

    setHeight(!height);
  };


  return (
    <div className='FaqListItem-wrap'>
      <div
        className="FaqListItem d-flex justify-content-center align-items-center"
        onClick={ collapseHandler }
      >
        <h4 className='text-uppercase'>{ heading }</h4>
      </div>
      <div className={ `collapsible-content ${ height ? 'show' : '' }` }>

        <FaqInnerListItem heading={ 'What Shared MasterNode is?' }/>
        <FaqInnerListItem heading={ 'How to participate in shared MasterNodes?' }/>
        <FaqInnerListItem heading={ 'I have deposited some coins, will I start receiving rewards immediately?' }/>
        <FaqInnerListItem heading={ 'What “Instant MN” means?' }/>
        <FaqInnerListItem heading={ 'Deposit' }/>
        <FaqInnerListItem heading={ 'Rewards' }/>
        <FaqInnerListItem heading={ 'Withdraw' }/>
      </div>
    </div>
  );
};

export default FaqListItem;
