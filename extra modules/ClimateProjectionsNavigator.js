// src/navigation/ClimateProjectionsNavigator.js page

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClimateProjectionsScreen from '../screens/ClimateProjectionsScreen';

const Stack = createStackNavigator();

const ClimateProjectionsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClimateProjections" component={ClimateProjectionsScreen} />
      {/* Add additional screens for ClimateProjections feature here */}
    </Stack.Navigator>
  );
};

export default ClimateProjectionsNavigator;
