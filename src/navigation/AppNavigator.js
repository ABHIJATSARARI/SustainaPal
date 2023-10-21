import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import UserProfileScreen from '../screens/UserProfileScreen';
import ActivityTrackingScreen from '../screens/ActivityTrackingScreen';
import ClimateProjectionsScreen from '../screens/ClimateProjectionsScreen';
import OfflineResourcesScreen from '../screens/OfflineResourcesScreen';
import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
import GamificationScreen from '../screens/GamificationScreen';
import EducationalInsightsScreen from '../screens/EducationalInsightsScreen';
import HomeScreen from '../screens/HomeScreen';
import MenuStackScreen from '../screens/MenuStackScreen'; // Import MenuStackScreen
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'UserProfile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'ActivityTracking') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (route.name === 'ClimateProjections') {
              iconName = focused ? 'cloud' : 'cloud-outline';
            } else if (route.name === 'MainMenu') { // Updated route name for MenuStackScreen
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.tabBarActive,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.text,
          },
          headerShown: true,
          headerTintColor: colors.text,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true, title: 'Home' }} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown: true, title: 'User Profile' }} />
        <Tab.Screen name="ActivityTracking" component={ActivityTrackingScreen} options={{ headerShown: true, title: 'Activity Tracking' }} />
        <Tab.Screen name="ClimateProjections" component={ClimateProjectionsScreen} options={{ headerShown: true, title: 'Climate Projections' }} />
        <Tab.Screen name="MainMenu" component={MenuStackScreen} options={{ headerShown: true, title: 'Menu' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
