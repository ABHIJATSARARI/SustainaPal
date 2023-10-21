import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const insights = [
  {
    title: 'Sustainable Living',
    description: 'Learn how to reduce your carbon footprint and live sustainably.',
    link: 'https://www.greenpeace.org/international/story/21750/how-to-live-a-sustainable-lifestyle-tips-and-faqs/',
  },
  {
    title: 'Renewable Energy',
    description: 'Explore the benefits of renewable energy sources like solar and wind power.',
    link: 'https://www.nrdc.org/stories/renewable-energy-clean-facts',
  },
  {
    title: 'Eco-friendly Practices',
    description: 'Discover eco-friendly tips for your daily life, from recycling to reducing waste.',
    link: 'https://www.epa.gov/recycle/recycling-basics',
  },
];

const EducationalInsightsScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="ios-school" size={40} color={colors.primary} />
        <Text style={styles.title}>Educational Insights</Text>
      </View>

      <ScrollView style={styles.insightsContainer}>
        {insights.map((insight, index) => (
          <TouchableOpacity key={index} style={styles.insightCard} onPress={() => openLink(insight.link)}>
            <Text style={styles.insightTitle}>{insight.title}</Text>
            <Text style={styles.insightDescription}>{insight.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.exploreButton} onPress={() => openLink('https://www.nationalgeographic.com/environment/sustainability/conservation-tips/')}>
        <Text style={styles.exploreButtonText}>Explore More Insights</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.primary,
  },
  insightsContainer: {
    marginBottom: 20,
  },
  insightCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  insightDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  exploreButton: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EducationalInsightsScreen;
