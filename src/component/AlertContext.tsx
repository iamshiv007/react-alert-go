import React from 'react';
import { AlertType, Position } from '../@types/Type';
import { ReactNode, createContext, useState } from 'react';

interface Alerts {
  message: string;
  type: AlertType;
  position: Position;
}

interface Properties {
  type: AlertType;
  position: Position;
}

export type AlertContextType = {
  alerts: Alerts[];
  addAlert: (message: string, properties: Properties) => void;
};

export const alertContext = createContext<AlertContextType | null>(null);

export const AlertContextProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alerts[]>([]);

  const addAlert = (message: string, properties: Properties) => {
    setAlerts(prev => [...prev, { message, ...properties }]);
  };

  return (
    <alertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </alertContext.Provider>
  );
};
