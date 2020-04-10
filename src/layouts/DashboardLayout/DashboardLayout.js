import React from 'react';
import { Sidenav } from '../../components/Sidenav';
import { DashboardContent } from '../../components/DashboardContent';

export const DashboardLayout = () => {
  return (
    <div className='d-flex'>
      <Sidenav/>
      <DashboardContent/>
    </div>
  );
};

