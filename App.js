// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import the component
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider> 
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
