import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {


  const navigation = useNavigation();


  const handleDialpad = () => {
    navigation.navigate('DialPad');
  };

  const handleContacts = () => {
    navigation.navigate('Contacts')
  };


  return (


    <ImageBackground
      source={require('../assets/homescreen.jpg')}
      resizeMode="cover"
      style={styles.backgroundImage}

    >
      <SafeAreaView style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.callButton]}
              onPress={handleDialpad}
            >
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.contactsButton]}
              onPress={handleContacts}
            >
              <Text style={styles.buttonText}>Contacts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    marginBottom: 50,
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  callButton: {
    backgroundColor: '#4CAF50',
  },
  contactsButton: {
    backgroundColor: '#9C27B0',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default HomeScreen;
