import React, { useContext, useEffect } from 'react';
import { AlertGoContainer } from './AlertGoContainer';
import { alertContext } from './AlertContext';

const Test = () => {
  const alertGo = useContext(alertContext);

  useEffect(() => {
    setTimeout(() => {
      alertGo?.addAlert('Error', { type: 'error', position: 'bottom-right' });
    }, 3000);
  }, []);
  return (
    <div>
      <AlertGoContainer />
    </div>
  );
};
export default Test;
