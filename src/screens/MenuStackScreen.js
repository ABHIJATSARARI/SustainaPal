import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/MenuScreen';
import OfflineResourcesScreen from '../screens/OfflineResourcesScreen';
import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
import GamificationScreen from '../screens/GamificationScreen';
import EducationalInsightsScreen from '../screens/EducationalInsightsScreen';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tile from '../theme/Tile'; // Assuming you have a Tile component
import { colors } from '../theme/colors';

import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const Stack = createNativeStackNavigator();

const MenuStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen
        name="OfflineResources"
        component={OfflineResourcesScreen}
        options={{
          title: 'Offline Resources',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.primary }, // Apply green color
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
        }}
      />
      <Stack.Screen
        name="ProgressTracking"
        component={ProgressTrackingScreen}
        options={{
          title: 'Progress Tracking',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.primary }, // Apply green color
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
        }}
      />
      <Stack.Screen
        name="Gamification"
        component={GamificationScreen}
        options={{
          title: 'Gamification',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.primary }, // Apply green color
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
        }}
      />
      <Stack.Screen
        name="EducationalInsights"
        component={EducationalInsightsScreen}
        options={{
          title: 'Educational Insights',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.primary }, // Apply green color
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStackScreen;