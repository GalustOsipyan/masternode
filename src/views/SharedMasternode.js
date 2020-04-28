import React from 'react';
import { DashboardContent } from '../components/DashboardContent';
import { SearchInput } from '../components/SearchInput';
import DataCards from '../components/DataCards/DataCards';

const SharedMasternode = () => {
  return (
    <div className='d-flex'>
      <DashboardContent>
        <SearchInput/>
        <DataCards/>
      </DashboardContent>
    </div>
  );
};

export default SharedMasternode;
