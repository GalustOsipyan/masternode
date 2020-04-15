import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { DashboardLayout } from './layouts/DashboardLayout';
import { useLocation } from 'react-router-dom';
import { Sidenav } from './components/Sidenav';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const MasternodeRank = lazy(() => import('./views/MasternodeRank'));
const SharedMasternode = lazy(() => import('./views/SharedMasternode'));


function App() {
  const { pathname } = useLocation();

  const { loading, setLoading } = useState(true);


  return (
    <>
      <Sidenav/>
      <Suspense fallback={ <Loader/> }>
        <Switch>
          {/*<Route path='/' component={ Dashboard } exact/>*/ }
          <Route path='/' component={ MasternodeRank } exact/>
          <Route path='/masternode-rank' component={ MasternodeRank }/>
          <Route path='/shared-masternode' component={ SharedMasternode }/>
          <Route path='/registration' component={ RegistrationPage }/>
          <Route path='/login' component={ LoginPage }/>
        </Switch>
      </Suspense>
    </>

  );
}

export default App;
