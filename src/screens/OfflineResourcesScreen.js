import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the import to your chosen icon library

const OfflineResourcesScreen = () => {
  // Sample offline resource data
  const offlineResources = [
    {
      title: "Comprehensive Guide",
      description: "Reduce your carbon footprint and live sustainably.",
      icon: "book",
      backgroundColor: "#FFD700",
    },
    {
      title: "Sustainable Shopping",
      description: "Discover ethical brands and eco-friendly products.",
      icon: "shopping-bag",
      backgroundColor: "#00CED1",
    },
    {
      title: "Home & Garden Tips",
      description: "Save energy and water with these home and garden tips.",
      icon: "home",
      backgroundColor: "#FFA07A",
    },
    // Add more resource entries as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {offlineResources.map((resource, index) => (
        <View key={index} style={styles.resourceCard}>
          <View style={[styles.cardHeader, { backgroundColor: resource.backgroundColor }]}>
            <Icon name={resource.icon} size={24} color="white" />
          </View>
          <View style={styles.resourceContent}>
            <Text style={styles.title}>{resource.title}</Text>
            <Text style={styles.description}>{resource.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  resourceCard: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row', // Align icon and text side by side
  },
  cardHeader: {
    padding: 10,
    alignItems: 'center',
  },
  resourceContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default OfflineResourcesScreen;
