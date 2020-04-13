import React from 'react';
import { DashboardNavbar } from '../DashboardNavbar';
import './DashboardContent.scss';
import { SearchInput } from '../SearchInput';

export const DashboardContent = () => {
  return (
    <div className='DashboardContent'>
      <DashboardNavbar/>
      <SearchInput/>
    </div>
  );
};

