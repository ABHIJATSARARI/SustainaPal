import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
// Import the Icon component from react-native-vector-icons
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityTrackingScreen = () => {
  // Define a state variable to store the user's choices
  const [choices, setChoices] = React.useState({
    biking: { distance: 12, carbon: 0 },
    solar: { usage: 15, carbon: 0 },
    tree: { carbon: -21 },
  });

  // Define a function to handle the edit button press
  const handleEdit = (type) => {
    // Do something to edit the user's choices for the given type
    // For example, you can use an alert or a modal to prompt the user for new values
    // Then update the state variable with the new values
    // For simplicity, we will just log the type to the console
    console.log('Editing', type);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Use a map function to render the tiles based on the choices object */}
      {Object.keys(choices).map((type) => (
        <View key={type} style={styles.tileContainer}>
          {/* Render the tile with the title and content based on the type */}
          <Tile
            title={type.charAt(0).toUpperCase() + type.slice(1)}
            content={
              type === 'tree'
                ? `Carbon Emission: ${choices[type].carbon}`
                : `Distance: ${choices[type].distance} miles, Carbon Emission: ${choices[type].carbon}`
            }
          />
          {/* Render an icon button with an edit icon and a handler function */}
          <Icon.Button
            name="create-outline"
            size={24}
            color="#fff"
            backgroundColor={colors.screenbackgroound}
            onPress={() => handleEdit(type)}
          />
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenbackgroound,
  },
  tileContainer: {
    // Use flex direction row to align the tile and the icon button horizontally
    flexDirection: 'row',
    // Use align items center to center them vertically
    alignItems: 'center',
    // Add some margin for spacing
    margin: 8,
  },
});

export default ActivityTrackingScreen;
