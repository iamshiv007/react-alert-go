import React from 'react';
import { Default } from '../utils';
import '../style/Alert.css';
import { AlertProps } from '../@types/Type';
import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';
import SuccessIcon from '../icons/SuccessIcon';

export const Alert = ({
  message,
  type = 'success'
}: AlertProps) => {
  return (
    <div className={`${Default.CSS_NAMESPACE}__alert-box`}>
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      {type === 'warning' && <WarningIcon />}
      {message}
    </div>
  );
};
