import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <div>Loading...</div> }>
        <Switch>
          <Route path='/' component={ Dashboard } exact/>
        </Switch>
      </Suspense>
    </div>

  );
}

export default App;
