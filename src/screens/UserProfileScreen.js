import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';

const UserProfileScreen = () => {
  // Sample user information
  const user = {
    username: "JohnDoe",
    email: "johndoe@email.com",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "New York, USA",
    bio: "Loving life and exploring the world! 🌍",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/logo.png')} // Provide the path to the user's avatar image
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editAvatarButton}>
          <Text style={styles.editAvatarButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Tile title="User Profile Info" content={user.bio} />

      <Tile title="Username" content={user.username} />
      <Tile title="Email" content={user.email} />
      <Tile title="First Name" content={user.firstName} />
      <Tile title="Last Name" content={user.lastName} />
      <Tile title="Age" content={user.age} />
      <Tile title="Location" content={user.location} />

      {/* You can add more tiles for additional user information if needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editAvatarButton: {
    marginTop: 10,
    backgroundColor: colors.primary, // Customize the button color
    padding: 8,
    borderRadius: 5,
    marginBottom  : 10,
  },
  editAvatarButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UserProfileScreen;
