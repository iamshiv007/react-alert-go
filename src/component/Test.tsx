import React, { useContext, useEffect, useState } from 'react';
import { AlertGoContainer } from './AlertGoContainer';
import { alertGoContext } from './AlertGoContext';

const Test = () => {
  const [loggedIn, setloggedIn] = useState<boolean>(false);
  const alertGo = useContext(alertGoContext);

  useEffect(() => {
    if (loggedIn) {
      alertGo?.addAlert('Logged in Successfully', { type: 'success' });
    } else {
      alertGo?.addAlert('Logged out Successfully', { type: 'error' });
    }
  }, [loggedIn]);
  return (
    <div>
      <AlertGoContainer position="top-center" />
      {loggedIn ? (
        <button onClick={() => setloggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setloggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Test;
