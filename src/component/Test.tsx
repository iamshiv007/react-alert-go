import React, { useContext, useEffect, useState } from 'react';
import { AlertGoContainer } from './AlertGoContainer';
import { alertGoContext } from './AlertGoContext';

const Test = () => {
  const [loggedIn, setloggedIn] = useState<boolean>(false);
  const alertGo = useContext(alertGoContext);

  useEffect(() => {
    if (loggedIn) {
      alertGo?.addAlert('Logged in Successfully');
    } else {
      alertGo?.addAlert('Logged out Successfully', { type: 'error' });
    }
  }, [loggedIn]);
  return (
    <div>
      <AlertGoContainer />
      <AlertGoContainer position="top-center" />
      <AlertGoContainer position="top-left" />
      {loggedIn ? (
        <button
          style={{
            fontSize: '24px',
            margin: '10px',
            position: 'absolute',
            bottom: '10px'
          }}
          onClick={() => setloggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          style={{
            fontSize: '24px',
            margin: '10px',
            position: 'absolute',
            bottom: '10px'
          }}
          onClick={() => setloggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Test;
