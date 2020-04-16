import React from 'react';
import { CurrencyToggleButtons } from '../components/CurrencyToggleButtons';
import { SearchInput } from '../components/SearchInput';
import { DashboardContent } from '../components/DashboardContent';

const MasternodeRank = () => {
  return (
    <div className='d-flex'>
      <DashboardContent>
        <SearchInput/>
        <CurrencyToggleButtons/>
        <ul>
          { new Array(100).fill(3).map((it, i) => (
            <li key={ i }>item { i }</li>
          )) }
        </ul>
      </DashboardContent>
    </div>
  );
};

export default MasternodeRank;
