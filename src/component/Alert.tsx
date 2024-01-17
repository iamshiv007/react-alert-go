import React from 'react';
import { Default, Position } from '../utils';
import '../style/Alert.css';
import CheckMark from '../icons/CheckMark';

interface AlertProps {
  message: string;
  position: Position;
}

const positions = [
  'top-right',
  'top-left',
  'top-center',
  'bottom-right',
  'bottom-left',
  'bottom-center'
];

export const Alert = ({ message, position }: AlertProps) => {
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
      <CheckMark />
      {message}
    </div>
  );
};
