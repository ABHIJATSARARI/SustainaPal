// src/components/ProgressTracking.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressTracking = () => {
  // Sample progress data (replace with actual data)
  const progressData = {
    carbonSaved: '200 kg',
    waterSaved: '5000 liters',
    wasteReduced: '20 kg',
    // Add more progress data as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <View style={styles.progressInfo}>
        <Text style={styles.label}>Carbon Saved:</Text>
        <Text style={styles.value}>{progressData.carbonSaved}</Text>
      </View>
      <View style={styles.progressInfo}>
        <Text style={styles.label}>Water Saved:</Text>
        <Text style={styles.value}>{progressData.waterSaved}</Text>
      </View>
      <View style={styles.progressInfo}>
        <Text style={styles.label}>Waste Reduced:</Text>
        <Text style={styles.value}>{progressData.wasteReduced}</Text>
      </View>
      {/* Add more progress data fields here */}
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
  progressInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
});

export default ProgressTracking;
