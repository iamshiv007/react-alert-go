import React, { useContext } from 'react';
import { Alert } from './AlertGo';
import { alertGoContext } from './AlertGoContext';
import { AlertType, Position } from '../@types/Type';
import { Default } from '../utils';
import '../style/AlertGoContainer.css';

interface Alert {
  id: number;
  message: string;
  type: AlertType;
}

const positions = [
  'top-right',
  'top-left',
  'top-center',
  'bottom-right',
  'bottom-left',
  'bottom-center'
];

interface AlertGoContainerProps {
  position: Position;
}

export const AlertGoContainer = ({ position }: AlertGoContainerProps) => {
  const context = useContext(alertGoContext);

  return (
    <div
      className={`${Default.CSS_NAMESPACE}__alert-go-container ${
        position === 'top-right' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--top-right`
      } ${
        position === 'top-center' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--top-center`
      } ${
        position === 'top-left' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--top-left`
      } ${
        position === 'bottom-left' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--bottom-left`
      } ${
        position === 'bottom-right' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--bottom-right`
      } ${
        position === 'bottom-center' &&
        `${Default.CSS_NAMESPACE}__alert-go-container--bottom-center`
      }
    ${
      !positions.includes(position) &&
      `${Default.CSS_NAMESPACE}__alert-box--top-right`
    }`}
    >
      {context?.alerts.map((alert: Alert, i: number) => {
        return <Alert key={i} message={alert.message} type={alert.type} />;
      })}
    </div>
  );
};
