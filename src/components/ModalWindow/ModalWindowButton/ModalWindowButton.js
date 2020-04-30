import React from 'react';
import './ModalWindowButton.scss';

const ModalWindowButton = ({ classes, dataTarget, text }) => {
  return (
    <button
      type="button"
      className={ `ModalWindowButton btn ${ classes || '' }` }
      data-toggle="modal" data-target={ dataTarget }>
      { text }
    </button>
  );
};

export default ModalWindowButton;
