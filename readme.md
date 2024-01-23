# react-alert-go

![React Accordion](https://res.cloudinary.com/dqfrtazgi/image/upload/v1705943632/www_screencapture_com_2024-1-22_19_12_lkdr4w.gif)

✨ react-alert-go is a beautiful way to show alerts on web applications.

## Installation

```
$ npm install --save react-alert-go
```

## Usage

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AlertGoContextProvider } from 'react-alert-go';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertGoContextProvider>
      <App />
    </AlertGoContextProvider>
  </React.StrictMode>
);
```

```js
// App.js
import React, { useContext, useEffect } from 'react';
import { AlertGoContainer, alertGoContext } from 'react-alert-go';

const App = () => {
  const AlertGo = useContext(alertGoContext);
  useEffect(() => {
    AlertGo?.addAlert('This is default alert box');
  }, []);
  return (
    <>
      <h1>Testing React Alert Go</h1>
      <AlertGoContainer />
    </>
  );
};

export default App;
```

## AlertGoContainer API

| props    | type   | default   | description                                                          |
| -------- | ------ | --------- | -------------------------------------------------------------------- |
| position | string | top-right | top-left/top-center/top-right/bottom-left/bottom-center/bottom-right |

## addAlert API

| argument no. | type   | default | required | description                            |
| ------------ | ------ | ------- | -------- | -------------------------------------- |
| first        | string | empty   | true     | Give a short and concise alert message |
| second       | object | {}      | false    | type(success/error/warning)            |

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!.
