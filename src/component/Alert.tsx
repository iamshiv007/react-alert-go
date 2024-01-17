import React from 'react';
import { Default } from '../utils';
import '../style/Alert.css';
import CheckMark from '../icons/CheckMark';

interface AlertProps {
  message: string;
}

export const Alert = ({ message }: AlertProps) => {
  return (
    <div className={`${Default.CSS_NAMESPACE}__alert-box`}>
      <CheckMark />
      {message}
    </div>
  );
};
