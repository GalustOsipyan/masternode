import React from 'react';
import './Button.scss';

export const Button = ({ classes, text, children, onClick, type }) => {
  return (
    <button
      onClick={ onClick }
      className={ classes || '' }
      type={ type || 'button' }
    >
      { text }
      { children }
    </button>
  );
};

