import React, { lazy } from 'react';
import './DashboardContent.scss';

export const DashboardContent = ({ children }) => {


  return (
    <div className='DashboardContent'>

      { children }
    </div>
  );
};

