import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Text style={styles.taskCount}>14 tasks today</Text>
      <Image source={require('../assets/profile.png')} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 18,
    color: 'gray',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Header;