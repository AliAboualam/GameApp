import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const IndexPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Banner with "Life Game" */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Life Game</Text>
      </View>

      {/* "Get Started" Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Get Started Pressed!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A0DAD', // Purple background
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    position: 'absolute',
    top: 50, // Adjust as needed
    padding: 20,
    backgroundColor: '#4B0082', // Darker purple for the banner
    borderRadius: 10,
  },
  bannerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
  button: {
    backgroundColor: '#1E90FF', // Blue button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
});

export default IndexPage;