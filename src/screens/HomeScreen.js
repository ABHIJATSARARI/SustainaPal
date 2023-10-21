import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated, Easing, Linking } from 'react-native';
import Tile from '../theme/Tile';
import { colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

// Define the HomeScreen component
const HomeScreen = () => {
  // Define the state variables for rotation, icon opacity and icons
  const [rotation] = useState(new Animated.Value(0));
  const [iconOpacity] = useState(new Animated.Value(0));
  const [icons, setIcons] = useState([]);

  // Define a function to open a webpage when the button is clicked
  const openWebpage = () => {
    const url = 'https://proud-grass-0948c1500.3.azurestaticapps.net/'; // Replace with the actual URL you want to open
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          console.error('Linking to URL is not supported');
        }
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
  };

  // Define an array of icon names to use
  const iconNames = [
    'tree', 'globe', 'leaf', 'recycle', 'sun-o', 'star', 'heart', 'smile-o', 'rocket', 'car', 'bicycle'
  ];

  // Use the useEffect hook to start the animation when the component mounts
  useEffect(() => {
    // Create an animation loop that rotates the logo continuously
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 60000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    startIconAnimation();
  }, [rotation]);

  // Define a function that interpolates the rotation value to degrees
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Define a function that starts the icon animation
  const startIconAnimation = () => {
    // Create an array of icon objects with random positions and delays
    const newIcons = iconNames.map((name, index) => ({
      name,
      left: Math.random() * 200,
      top: Math.random() * 100,
      right : Math.random() * 200,
      bottom : Math.random() * 200,
      opacity: new Animated.Value(0),
      scale: new Animated.Value(1),
      delay: Math.random() * 15000, // Adjust the delay as needed
    }));
    // Set the state with the new icons
    setIcons(newIcons);
    // Animate the icons with a sequence of effects
    animateIcons(newIcons);
  };

  // Define a function that animates the icons in parallel
  const animateIcons = (iconsToAnimate) => {
    Animated.parallel(
      iconsToAnimate.map((icon) => {
        return Animated.sequence([
          Animated.delay(icon.delay),
          Animated.parallel([
            Animated.timing(icon.opacity, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: false,
            }),
            Animated.timing(icon.scale, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: false,
            }),
          ]),
          Animated.timing(icon.opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]);
      })
    ).start(() => startIconAnimation());
  };

  // Return the JSX elements to render the home screen
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ rotate: spin }] }]}>
        <View style={styles.logoOuterCircle}>
          <View style={styles.logoInnerCircle}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </Animated.View>
      <Tile
        title="Welcome to SustainaPal"
        content="Your eco-friendly companion for a sustainable lifestyle."
      />
      {icons.map((icon, index) => (
        <Animated.View
          key={index}
          style={[
            styles.randomIconContainer,
            {
              left: icon.left,
              right : icon.right,
              top: icon.top,
              bottom : icon.bottom,
              opacity: icon.opacity,
              transform: [{ scale: icon.scale }],
            },
          ]}
        >
          <Icon name={icon.name} size={50} color={colors.primary} style={styles.randomIcon} />
        </Animated.View>
      ))}
      <TouchableOpacity style={styles.exploreButton} onPress={openWebpage}>
          <Text style={styles.exploreButtonText}>Creator</Text>
        </TouchableOpacity>
    </View>
  );
};

// Define the styles for the home screen components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background, // Add a background color to match the theme
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    backgroundColor : colors.background,
  },
  logoOuterCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary, // Add a shadow effect to the outer circle
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  logoInnerCircle: {
    width: 200,
    height: 200,
    borderRadius: 90,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.7)', 
    
  },
  logo: {
    width: 200, 
    height: 180,
    borderRadius: 80,
  },
  randomIconContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  randomIcon: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft : 20,
    marginRight : 20,
    margin : 10,
  },
  exploreButton: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    borderBottomColor : 'rgba(255, 255, 255, 0.7)',
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// Export the HomeScreen component
export default HomeScreen;
