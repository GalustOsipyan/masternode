import React from 'react';
import { Sidenav } from '../../components/Sidenav';
import { DashboardContent } from '../../components/DashboardContent';
import { DashboardNavbar } from '../../components/DashboardNavbar';

export const DashboardLayout = ({ children }) => {
  return (
    <div className='d-flex'>
      <DashboardNavbar/>
      {/*<Sidenav/>*/ }
      {/*<DashboardContent/>*/ }
      { children }
    </div>
  );
};

