import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';

const ClimateProjectionsScreen = () => {
  // Sample climate projection data
  const climateProjections = [
    {
      year: 2023,
      carbonEmission: 36.4,
      temperatureChange: 1.2,
    },
    {
      year: 2024,
      carbonEmission: 37.2,
      temperatureChange: 1.3,
    },
    {
      year: 2025,
      carbonEmission: 38.1,
      temperatureChange: 1.4,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Tile title="Climate Projections" content="Explore climate projections and data below:" />
        {climateProjections.map((projection, index) => (
          <Tile
            key={index}
            title={`Year ${projection.year}`}
            content={
              <View>
                <Text>Carbon Emission: {projection.carbonEmission} GtCO2</Text>
                <Text>Temperature Change: {projection.temperatureChange} °C</Text>
              </View>
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
});

export default ClimateProjectionsScreen;
