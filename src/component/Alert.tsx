import React from 'react';
import { Default } from '../utils';
import '../style/Alert.css';
import { AlertProps } from '../@types/Type';
import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';
import SuccessIcon from '../icons/SuccessIcon';

const positions = [
  'top-right',
  'top-left',
  'top-center',
  'bottom-right',
  'bottom-left',
  'bottom-center'
];

export const Alert = ({
  message,
  position = 'top-right',
  type = 'success'
}: AlertProps) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__alert-box ${
        position === 'top-right' &&
        `${Default.CSS_NAMESPACE}__alert-box--top-right`
      } ${
        position === 'top-center' &&
        `${Default.CSS_NAMESPACE}__alert-box--top-center`
      } ${
        position === 'top-left' &&
        `${Default.CSS_NAMESPACE}__alert-box--top-left`
      } ${
        position === 'bottom-left' &&
        `${Default.CSS_NAMESPACE}__alert-box--bottom-left`
      } ${
        position === 'bottom-right' &&
        `${Default.CSS_NAMESPACE}__alert-box--bottom-right`
      } ${
        position === 'bottom-center' &&
        `${Default.CSS_NAMESPACE}__alert-box--bottom-center`
      }
      ${
        !positions.includes(position) &&
        `${Default.CSS_NAMESPACE}__alert-box--top-right`
      }`}
    >
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      {type === 'warning' && <WarningIcon />}
      {message}
    </div>
  );
};
