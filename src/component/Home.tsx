import React from 'react';
import Test from './Test';
import { AlertContextProvider } from './AlertContext';

const Home = () => {
  return (
    <div>
      <AlertContextProvider>
        <Test />
      </AlertContextProvider>
    </div>
  );
};

export default Home;
