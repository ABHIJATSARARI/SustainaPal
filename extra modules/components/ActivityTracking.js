// src/components/ActivityTracking.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityTracking = ({ activities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Tracking</Text>
      <View>
        {activities.map((activity, index) => (
          <View style={styles.activityItem} key={index}>
            <Text style={styles.activityType}>{activity.type}:</Text>
            <Text style={styles.activityChoice}>{activity.choice}</Text>
          </View>
        ))}
      </View>
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
  activityItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  activityType: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  activityChoice: {
    flex: 1,
  },
});

export default ActivityTracking;
