// src/components/Gamification.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gamification = () => {
  // Sample gamification data (replace with actual data)
  const rewards = {
    points: 350,
    badges: ['Eco Explorer', 'Green Guru'],
    // Add more gamification data as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamification</Text>
      <View style={styles.gamificationInfo}>
        <Text style={styles.label}>Points:</Text>
        <Text style={styles.value}>{rewards.points}</Text>
      </View>
      <View style={styles.gamificationInfo}>
        <Text style={styles.label}>Badges:</Text>
        <View>
          {rewards.badges.map((badge, index) => (
            <Text key={index} style={styles.badge}>
              {badge}
            </Text>
          ))}
        </View>
      </View>
      {/* Add more gamification data fields here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gamificationInfo: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 10,
  },
  badge: {
    marginLeft: 10,
  },
});

export default Gamification;
