// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

// The <Provider> makes the store available globally in your app.



function ReduxApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxApp;
