import React from 'react';
import './EmptyLayout.scss';
import { PageCloseButton } from '../../components/PageCloseButton';

export const EmptyLayout = ({ children }) => {
  return (
    <div className='EmptyLayout'>
      <PageCloseButton/>
      { children }
    </div>
  );
};

