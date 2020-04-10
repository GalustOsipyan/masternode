import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <div>Loading...</div> }>
        <Switch>
          <Route path='/' component={ Home } exact/>
          <Route path='/dashboard' component={ Dashboard }/>
        </Switch>
      </Suspense>
    </div>

  );
}

export default App;
