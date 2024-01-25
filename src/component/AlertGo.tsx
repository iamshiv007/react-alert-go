import React, { useContext, useEffect, useState } from 'react';
import { Default } from '../utils';
import '../style/Alert.css';
import { AlertProps } from '../@types/Type';
import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';
import SuccessIcon from '../icons/SuccessIcon';
import XIcon from '../icons/XIcon';
import { alertGoContext } from './AlertGoContext';

export const Alert = ({ message, type = 'success', id }: AlertProps) => {
  const alertGo = useContext(alertGoContext);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      let interval = setInterval(() => {
        setWidth(prev => prev - 1);
      }, 45);
    }, 500);
  }, []);
  return (
    <div className={`${Default.CSS_NAMESPACE}__alert-box`}>
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      {type === 'warning' && <WarningIcon />}
      {message}
      <button
        onClick={() => alertGo?.removeAlert(id)}
        className={`${Default.CSS_NAMESPACE}__alert-box-close-wrapper`}
      >
        <XIcon />
      </button>
      <div
        style={{ width: `${width}%` }}
        className={`${Default.CSS_NAMESPACE}__alert-box-range ${Default.CSS_NAMESPACE}__alert-box-range-${type}`}
      />
    </div>
  );
};
