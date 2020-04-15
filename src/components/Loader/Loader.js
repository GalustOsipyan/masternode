import React from 'react';

export const Loader = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'
         style={ { height: '100vh', background: '#E5E5E5' } }>
      <div className="spinner-grow spinner-border" role="status"
           style={ { color: '#1C2C30', width: '5rem', height: '5rem', } }>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};


