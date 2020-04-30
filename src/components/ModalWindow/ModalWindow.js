import React from 'react';
import './ModalWindow.scss';

const ModalWindow = ({ modalId, children, submitButtonText }) => {
  return (
    <div className="ModalWindow modal fade" id={ modalId || '' }>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { children }
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn modal-submit-btn" data-dismiss="modal">
              { submitButtonText }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
