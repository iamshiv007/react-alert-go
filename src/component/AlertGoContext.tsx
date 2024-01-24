import React from 'react';
import { AlertType } from '../@types/Type';
import { ReactNode, createContext, useState } from 'react';

interface Alerts {
  id: number;
  message: string;
  type?: AlertType;
}

interface Properties {
  type?: AlertType;
}

export type AlertContextType = {
  alerts: Alerts[];
  addAlert: (message: string, properties?: Properties) => void;
  removeAlert: (id: number) => void;
};

export const alertGoContext = createContext<AlertContextType | null>(null);

export const AlertGoContextProvider = ({
  children,
  autoClose
}: {
  children: ReactNode;
  autoClose?: boolean | number;
}) => {
  const [alerts, setAlerts] = useState<Alerts[]>([]);

  const addAlert = (message: string, properties: Properties = {}) => {
    const Id = Math.random();
    setAlerts(prev => [...prev, { id: Id, message, ...properties }]);
    let delay = 5000;
    if (autoClose === false) return;
    if (typeof autoClose === 'number') {
      delay = autoClose;
    }
    setTimeout(() => {
      removeAlert(Id);
    }, delay);
  };

  const removeAlert = (Id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== Id));
  };

  return (
    <alertGoContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </alertGoContext.Provider>
  );
};
