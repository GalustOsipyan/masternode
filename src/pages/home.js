import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      home
      <NavLink to='/dashboard/masternode-rank' className='d-block'>
        dashboard
      </NavLink>
    </div>
  );
};

export default Home;
