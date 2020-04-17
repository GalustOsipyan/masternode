import React from 'react';
import { useHistory } from 'react-router-dom';

export const PageCloseButton = () => {

  const { push } = useHistory();

  return (
    <button
      className='page-close-button'
      onClick={ () => push(process.env.PUBLIC_URL) }
    >&times;</button>

  );
};

