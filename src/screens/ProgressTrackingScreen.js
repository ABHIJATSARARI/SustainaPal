import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5

const ActivityTrackingScreen = () => {
  const [newTransportationMode, setNewTransportationMode] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    username: "eco_fan",
    activities: [
      { type: "transportation", mode: "bike" },
      { type: "energy", source: "solar" },
      { type: "activity", name: "plant a tree" },
    ]
  };

  const handleTransportationChange = () => {
    userData.activities[0].mode = newTransportationMode;
    setIsEditing(false);
  };

  const renderEditMode = () => {
    return (
      <View style={styles.editModeContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Transportation Mode"
          value={newTransportationMode}
          onChangeText={(text) => setNewTransportationMode(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTransportationChange}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.avatarContainer}>
          <FontAwesome5 name="user" size={80} color={colors.primary} />
          <Text style={styles.username}>{userData.username}</Text>
        </View>

        <Tile title="Transportation" style={styles.tile}>
          <View style={styles.iconText}>
            <FontAwesome5 name="bicycle" size={18} color={colors.tilebg} /> {/* Use FontAwesome5 icons */}
          </View>
          {isEditing ? (
            renderEditMode()
          ) : (
            <>
              <Text style={styles.tileContent}>{userData.activities[0].mode}</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setIsEditing(true)}
              >
                <FontAwesome5 name="edit" size={20} color={colors.primary} /> {/* Use FontAwesome5 icons */}
              </TouchableOpacity>
            </>
          )}
        </Tile>

        <Tile title="Energy Source" style={styles.tile}>
          <View style={styles.iconText}>
            <FontAwesome5 name="sun" size={18} color={colors.tilebg} /> {/* Use FontAwesome5 icons */}
          </View>
          <Text style={styles.tileContent}>{userData.activities[1].source}</Text>
        </Tile>

        <Tile title="Activity" style={styles.tile}>
          <View style={styles.iconText}>
            <FontAwesome5 name="tree" size={18} color={colors.tilebg} /> {/* Use FontAwesome5 icons */}
          </View>
          <Text style={styles.tileContent}>{userData.activities[2].name}</Text>
        </Tile>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  editModeContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
    color: colors.intext,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
  },
  tileContent: {
    color: 'white',
    marginLeft: 40,
    fontSize: 18,
    marginBottom: 10,
    position: 'relative',
    top: -20,
    zIndex: -1,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 10,
    width: '100%',
    borderWidth: 2,
    borderColor: colors.tilebg,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.tilebg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Arial',
    letterSpacing: 1,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  iconText: {
    width: 30,
    marginLeft: 10,
  },
  editButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  tile: {
    width: '100%',
    marginBottom: 10,
    textAlign: 'left',
    backgroundColor: colors.tilebg,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
  },
});

export default ActivityTrackingScreen;
