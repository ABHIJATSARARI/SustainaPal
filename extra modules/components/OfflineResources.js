// src/components/OfflineResources.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OfflineResources = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offline Resources</Text>
      <Text style={styles.description}>
        Access helpful sustainability tips and articles even when you're offline.
      </Text>
      {/* Add links to offline resources here */}
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
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default OfflineResources;
