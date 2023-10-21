// src/components/EducationalInsights.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EducationalInsights = () => {
  // Sample educational insights (replace with actual content)
  const insights = [
    'Did you know that biking to work reduces your carbon footprint?',
    'Turning off lights when not in use can save energy and money.',
    // Add more educational insights as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educational Insights</Text>
      {insights.map((insight, index) => (
        <View key={index} style={styles.insightItem}>
          <Text style={styles.insightText}>{insight}</Text>
        </View>
      ))}
      {/* Add more educational insights here */}
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
  insightItem: {
    marginBottom: 10,
  },
  insightText: {
    fontSize: 16,
  },
});

export default EducationalInsights;
