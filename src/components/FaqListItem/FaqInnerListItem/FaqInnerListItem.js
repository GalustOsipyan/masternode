import React, { useState } from 'react';

const FaqInnerListItem = ({ heading }) => {

  const [innerHeight, setInnerHeight] = useState(false);

  const innerCollapseHandler = () => {
    console.log('collapsed');

    setInnerHeight(!innerHeight);
  };

  return (
    <div className="inner-list-item-wrap">

      <div
        className="inner-list-item d-flex justify-content-center align-items-center"
        onClick={ innerCollapseHandler }
      >
        <h5>{ heading }</h5>
      </div>

      <div className={ `inner-list-item-collapsible-content ${ innerHeight ? 'show' : '' }` }>
        <p className='text-center'>
          When you don’t have required amount of coins to run your own FULL Masternode you still have a chance to earn
          rewards by participating in Shared Masternodes. In general this means that you are able to buy a part of a
          Masternode (Share) and receive rewards proportional to your share size.
        </p>
      </div>

    </div>
  );
};

export default FaqInnerListItem;
