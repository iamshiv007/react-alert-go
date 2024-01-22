import React from 'react';
import { AlertType } from '../@types/Type';
import { ReactNode, createContext, useState } from 'react';

interface Alerts {
  id: number;
  message: string;
  type: AlertType;
}

interface Properties {
  type: AlertType;
}

export type AlertContextType = {
  alerts: Alerts[];
  addAlert: (message: string, properties: Properties) => void;
};

export const alertGoContext = createContext<AlertContextType | null>(null);

export const AlertGoContextProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alerts[]>([]);

  const addAlert = (message: string, properties: Properties) => {
    const Id = Math.random();
    setAlerts(prev => [...prev, { id: Id, message, ...properties }]);
    setTimeout(() => {
      removeAlert(Id);
    }, 3000);
  };

  const removeAlert = (Id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== Id));
  };

  return (
    <alertGoContext.Provider value={{ alerts, addAlert }}>
      {children}
    </alertGoContext.Provider>
  );
};
