import 'react-native-gesture-handler';
import React from 'react';
import  Routing from './src/Routing'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}
