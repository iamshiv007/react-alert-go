import React from 'react';
import Test from './Test';
import { AlertGoContextProvider } from './AlertGoContext';

const Home = () => {
  return (
    <div>
      <AlertGoContextProvider>
        <Test />
      </AlertGoContextProvider>
    </div>
  );
};

export default Home;
