import React from 'react';
import { Toast } from 'react-bootstrap';
import classnames from 'classnames';

export const PopUpMessage = ({ show, type, headerMsg, bodyMsg }) => {
  return (
    <Toast show={show}>
      <div
        className={classnames('toast-header', { 'toast-header-error': type === 'error' }, { 'toast-header-success': type === 'success' })}
      >
        <strong className="me-auto">{headerMsg}</strong>
      </div>
      <div
        className={classnames('toast-body', { 'toast-body-error ': type === 'error' }, { 'toast-body-success ': type === 'success' })}
      >
        {bodyMsg}
      </div>
    </Toast>
  );
};