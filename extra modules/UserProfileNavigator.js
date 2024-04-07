// src/navigation/UserProfileNavigator.js page

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

const UserProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      {/* Add additional screens for UserProfile feature here */}
    </Stack.Navigator>
  );
};

export default UserProfileNavigator;
