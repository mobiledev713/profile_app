import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import AppNavigator from './src';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
