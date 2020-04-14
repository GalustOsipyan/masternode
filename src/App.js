import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Home = lazy(() => import('./pages/home'));
const RegistrationPage = lazy(() => import('./pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <div>Loading...</div> }>
        <Switch>
          <Route path='/' component={ Home } exact/>
          <Route path='/dashboard/masternode-rank' component={ Dashboard }/>
          <Route path='/registration' component={ RegistrationPage }/>
          <Route path='/login' component={ LoginPage }/>
        </Switch>
      </Suspense>
    </div>

  );
}

export default App;
