// src/screens/MenuScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    {
      title: 'Offline Resources',
      route: 'OfflineResources',
      iconName: 'download', // Change to the appropriate icon name
    },
    {
      title: 'Progress Tracking',
      route: 'ProgressTracking',
      iconName: 'bar-chart', // Change to the appropriate icon name
    },
    {
      title: 'Gamification',
      route: 'Gamification',
      iconName: 'trophy', // Change to the appropriate icon name
    },
    {
      title: 'Educational Insights',
      route: 'EducationalInsights',
      iconName: 'book', // Change to the appropriate icon name
    },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.route)}
        >
          <View style={styles.tile}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.iconName} size={24} color={colors.text} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  menuItem: {
    marginBottom: 8,
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.tilebg,
    borderRadius: 8,
    marginBottom: 8,
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  menuItemText: {
    fontSize: 18,
    color: colors.text,
  },
});

export default MenuScreen;
