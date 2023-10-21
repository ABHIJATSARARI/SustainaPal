import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icons

const GamificationScreen = () => {
  const [achievementsExpanded, setAchievementsExpanded] = useState(false);

  // Sample gamification information
  const gamificationData = {
    level: 5,
    points: 3200,
    badges: 8,
    achievements: [
      "Eco Warrior",
      "Energy Saver",
      "Green Commuter",
      "Recycling Pro",
      "Sustainability Champion",
    ],
  };

  const toggleAchievements = () => {
    setAchievementsExpanded(!achievementsExpanded);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.marginTop} />

      <Tile
        title="Gamification Progress"
        content="Track your achievements and progress below."
        icon={<Icon name="trophy" size={36} color='silver' />}
      />

      <Tile
        title={`Level ${gamificationData.level}`}
        content="You're doing great! Keep it up."
        icon={<Icon name="star" size={24} color="blue" />}
      />

      <Tile
        title={`${gamificationData.points} Points`}
        content="Keep earning points for a greener world."
        icon={<Icon name="check" size={24} color="green" />}
      />

      <Tile
        title={`${gamificationData.badges} Badges`}
        content="Collect badges for your eco-friendly actions."
        icon={<Icon name="medal" size={24} color="gold" />}
      />

      <TouchableOpacity onPress={toggleAchievements} style={styles.achievementsTitle}>
        <Text style={styles.whiteText}>Achievements</Text>
        <Icon name={achievementsExpanded ? "chevron-up" : "chevron-down"} size={20} color="#FFF" />
      </TouchableOpacity>

      {achievementsExpanded && (
        <View style={styles.achievementsContainer}>
          {gamificationData.achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <Icon name="trophy" size={18} color="#FFD700" />
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  marginTop: {
    height: 10,
  },
  achievementsContainer: {
    margin: 16,
  },
  achievementsTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  whiteText: {
    color: '#FFF',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  achievementText: {
    fontSize: 16,
    marginLeft: 8,
    color : 'white',
  },
});

export default GamificationScreen;
