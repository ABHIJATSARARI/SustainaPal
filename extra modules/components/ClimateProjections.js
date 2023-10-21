// src/components/ClimateProjections.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClimateProjections = () => {
  // Sample climate projection data (replace with actual data)
  const climateData = {
    carbonEmissions: '500 kg',
    temperatureChange: '1.2°C',
    // Add more climate data as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Climate Projections</Text>
      <View style={styles.projectionInfo}>
        <Text style={styles.label}>Carbon Emissions:</Text>
        <Text style={styles.value}>{climateData.carbonEmissions}</Text>
      </View>
      <View style={styles.projectionInfo}>
        <Text style={styles.label}>Temperature Change:</Text>
        <Text style={styles.value}>{climateData.temperatureChange}</Text>
      </View>
      {/* Add more climate data fields here */}
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
  projectionInfo: {
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

export default ClimateProjections;
