import React from 'react';
import RootNavigation from './navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>);
}
