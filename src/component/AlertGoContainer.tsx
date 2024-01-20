import React, { useContext, useEffect } from 'react';
import { Alert } from './Alert';
import { alertContext } from './AlertContext';
import { AlertType, Position } from '../@types/Type';

interface Alert {
  message: string;
  type: AlertType;
  position: Position;
}

export const AlertGoContainer = () => {
  const context = useContext(alertContext);

  return (
    <div>
      {context?.alerts.map((alert: Alert, i: number) => {
        return (
          <Alert
            key={i}
            message={alert.message}
            type={alert.type}
            position={alert.position}
          />
        );
      })}
    </div>
  );
};
