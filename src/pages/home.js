import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='ml-5'>Home</h1>
      <NavLink to='/dashboard/masternode-rank' className='d-block m-5'>
        dashboard
      </NavLink>
    </div>
  );
};

export default Home;
