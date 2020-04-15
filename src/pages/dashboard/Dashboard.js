import React, { lazy, Suspense } from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Route, Switch } from 'react-router-dom';
import { Loader } from '../../components/Loader';

const MasternodeRank = lazy(() => import('../../views/MasternodeRank'));
const SharedMasternode = lazy(() => import('../../views/SharedMasternode'));

const Dashboard = () => {
  return (
    <DashboardLayout>
    
    </DashboardLayout>
  );
};

export default Dashboard;
