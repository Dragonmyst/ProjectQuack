import React from 'react';
import { Toast } from 'react-bootstrap';
import classnames from 'classnames';

export const PopUpMessage = ({ show, toggle, type, headerMsg, bodyMsg }) => {
  return (
    <Toast show={show} onClose={toggle}>
      <div
        className={classnames('toast-header', { 'toast-header-danger': type === 'error' }, { 'toast-header-success': type === 'success' })}
      >
        <strong className="me-auto">{headerMsg}</strong>
        <button
          type="button"
          className={classnames("ml-2 mb-1 close", { 'toast-btn-error': type === 'error' }, { 'toast-btn-sucess': type === 'success' })}
          onClick={toggle} aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div
        className={classnames('toast-body', { 'toast-body-danger ': type === 'error' }, { 'toast-body-success ': type === 'success' })}
      >
        {bodyMsg}
      </div>
    </Toast>
  );
};