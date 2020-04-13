import React from 'react';
import './EmptyLayout.scss';

export const EmptyLayout = ({ children }) => {
  return (
    <div className='EmptyLayout'>
      { children }
    </div>
  );
};

