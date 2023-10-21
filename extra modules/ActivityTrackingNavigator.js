// src/navigation/ActivityTrackingNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityTrackingScreen from '../screens/ActivityTrackingScreen';

const Stack = createStackNavigator();

const ActivityTrackingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ActivityTracking" component={ActivityTrackingScreen} />
      {/* Add additional screens for ActivityTracking feature here */}
    </Stack.Navigator>
  );
};

export default ActivityTrackingNavigator;
